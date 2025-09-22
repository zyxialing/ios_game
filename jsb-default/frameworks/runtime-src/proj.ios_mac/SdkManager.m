//
//  SdkManager.m
//  hotfiregame-mobile
//
//  Created by zyxialing on 2024/9/4.
//

#import "SdkManager.h"
#import <Foundation/Foundation.h>
#import "FirebaseCore/FIRApp.h"
#import "FirebaseAnalytics/FIRAnalytics.h"
#import "FirebaseInstallations/FIRInstallations.h"
#import "AdSupport/AdSupport.h"
#import "AdSupport/ASIdentifierManager.h"
#import "AppTrackingTransparency/AppTrackingTransparency.h"
#import "AppController.h"
#import "UIKit/UIPasteboard.h"
#import "AdSupport/AdSupport.h"
#import "FBSDKCoreKit/FBSDKCoreKit.h"
#import <AppsFlyerLib/AppsFlyerLib.h>
#import "FileMusicPicker.h"
#import "PhotoAgent.h"
#import "AdmobManager.h"
@interface SdkManager () <AppsFlyerLibDelegate>

@end

@implementation SdkManager

static const NSString* offline = @"false";
static NSString* channel = @"3928884";//3928880
static SdkManager* instance = nil;

static AppController* control = nil;
+(instancetype)getInatance{
    if(!instance){
        instance = [[SdkManager alloc]init];
    }
    return instance;
}

- (void)instanceInit:(AppController*)control_{
    control = control_;
    //firebase init
    [FIRApp configure];
    [FIRAnalytics setAnalyticsCollectionEnabled:YES];
    NSLog(@"----------firebase init finish!");
    FIRApp *defaultApp = [FIRApp defaultApp];
        
    if (defaultApp) {
        FIRInstallations *installations = [FIRInstallations installations];
        [installations installationIDWithCompletion:^(NSString * _Nullable identifier, NSError * _Nullable error) {
            if (identifier) {
                NSLog(@"----------Installation ID: %@", identifier);
            } else {
                NSLog(@"----------Failed to get Installation ID: %@", error);
            }
        }];
    } else {
        NSLog(@"----------Firebase defaultApp is not available");
    }
    ///appsflyer init
    [AppsFlyerLib shared].appsFlyerDevKey = @"3MnGD3YzC7E7uF2CxnX2wa";
    [AppsFlyerLib shared].appleAppID = @"6739615844";
    [AppsFlyerLib shared].deepLinkDelegate = self;
    [AppsFlyerLib shared].isDebug = YES;
    if(@available(iOS 14,*)){
        [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status){
            [[AppsFlyerLib shared] waitForATTUserAuthorizationWithTimeoutInterval:60];
            [[AppsFlyerLib shared] start];
        }];
    }else{
        [[AppsFlyerLib shared] start];
    }
    

    [FBSDKSettings enableLoggingBehavior:FBSDKLoggingBehaviorAppEvents];
    [FBSDKSettings enableLoggingBehavior:FBSDKLoggingBehaviorNetworkRequests];

}

+ (void)initBaseSdk:(AppController*)control {
   
    [[SdkManager getInatance] instanceInit:control];

}
//官方推荐操作，在app激活的时候再次触发start
+ (void)activateAppsFlyer{
    [[AppsFlyerLib shared] start];
}
+ (NSString *)GetAppsFlyerId:(NSString *)code{
    NSString *afID = [[AppsFlyerLib shared] getAppsFlyerUID];
    NSLog(@"-----------AppsFlyer ID:%@",afID);
    return afID;
}
//调用cocos的方法
+ (void)callJsFunc:(NSString*)funName tempData:(NSString*)data{
    NSString* jsCallStr = @"window.SdkCallBack.#1('#2')";
    jsCallStr = [jsCallStr stringByReplacingOccurrencesOfString:@"#1" withString:funName];
    jsCallStr = [jsCallStr stringByReplacingOccurrencesOfString:@"#2" withString:data];
    NSLog(@"----------oc ca js : @%",jsCallStr);
    [control ocToJs:jsCallStr];
}

+ (NSString *)copy:(NSString *)code{
    NSLog(@"--------------js call copy!");
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    [pasteboard setString:code];
    return code;
}


+ (NSString *)getGameConfig:(NSString *)code{
    NSLog(@"--------------js call getGameConfig!");
    
    NSString* idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    
    if([idfa containsString:@"0000"]){
        idfa = @"";
    }
    
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    [dict setObject:offline forKey:@"offline"];
    [dict setObject:channel forKey:@"channel"];
    [dict setObject:@"5.0.0" forKey:@"gameVersion"];
    [dict setObject:idfa forKey:@"googleId"];
    NSString *jsonStr = @"";
    NSError *error;
    NSLog(@"--------------js call getGameConfig!2");
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dict options:0 error:&error];
    if (jsonData) {
        NSString *jsonString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
        if (jsonString) {
            NSLog(@"--------------jJSON字符串: %@", jsonString);
            jsonStr = jsonString;
        } else {
            NSLog(@"--------------jJSON数据转字符串失败");
        }
    } else {
        NSLog(@"--------------jjsonData为空");
    }
    NSLog(@"--------------j%@", jsonStr);
    return jsonStr;
}

+ (NSString*)GetUrlData:(NSString *)code{

    if (@available(iOS 14, *)) {
             // iOS14及以上版本需要先请求权限
             [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
                 // 获取到权限后，依然使用老方法获取idfa
                 if (status == ATTrackingManagerAuthorizationStatusAuthorized) {
                     NSString* idfa = @"";
                     idfa = [[ASIdentifierManager sharedManager].advertisingIdentifier UUIDString];
                     [FBSDKSettings.sharedSettings setAdvertiserTrackingEnabled:YES];
                     NSLog(@"%@",idfa);
                 } else {
                     NSLog(@"请在设置-隐私-跟踪中允许App请求跟踪");
                 }
             }];
         } else {
             // iOS14以下版本依然使用老方法
             // 判断在设置-隐私里用户是否打开了广告跟踪
             if ([[ASIdentifierManager sharedManager] isAdvertisingTrackingEnabled]) {
                 NSString* idfa = @"";
                 idfa = [[ASIdentifierManager sharedManager].advertisingIdentifier UUIDString];
                 NSLog(@"%@",idfa);
                 [FBSDKSettings.sharedSettings setAdvertiserTrackingEnabled:YES];
             } else {
                 NSLog(@"请在设置-隐私-广告中打开广告跟踪功能");
             }
    }
    
    NSLog(@"--------------js call GetUrlData!");
    NSString *path = [[NSBundle mainBundle] pathForResource:@"url" ofType:@"txt"];
    NSString *content = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:NULL];
    if (content) {
        return content;
    } else {
        return @"";
    }
}

+ (NSString*)getIDFA:(NSString *)code{
    NSLog(@"--------------js call getIDFA!");
    NSString* idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    
    if([idfa containsString:@"0000"]){
        idfa = @"";
    }
    return idfa;
    
}

+ (NSString*)setOrientation_l:(NSString *)code{
    NSLog(@"--------------js call setOrientation_l!");
    control.orientations = UIInterfaceOrientationMaskLandscapeRight; // Mask 用来告诉控制器支持方向
    if (@available(iOS 16.0, *)) {
        // iOS16+ 新 API
        [control.viewController setNeedsUpdateOfSupportedInterfaceOrientations];
    } else {
        // iOS16 以下要用具体的方向值
        NSNumber *orientationLandscape = @(UIInterfaceOrientationLandscapeRight);
        [[UIDevice currentDevice] setValue:orientationLandscape forKey:@"orientation"];
    }
    return  @"";
}

+ (NSString*)setOrientation_p:(NSString *)code{
    NSLog(@"--------------js call setOrientation_p!");
    control.orientations = UIInterfaceOrientationMaskPortrait; // Mask 用来告诉控制器支持方向
    if (@available(iOS 16.0, *)) {
        [control.viewController setNeedsUpdateOfSupportedInterfaceOrientations];
    } else {
        NSNumber *orientationPortrait = @(UIInterfaceOrientationPortrait);
        [[UIDevice currentDevice] setValue:orientationPortrait forKey:@"orientation"];
    }
    return  @"";
}

+ (NSString*)openPhotoAlbum:(NSString *)code{
    NSLog(@"--------------js call openPhotoAlbum!");
    dispatch_async(dispatch_get_main_queue(), ^{
            UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
            while (rootVC.presentedViewController) {
                rootVC = rootVC.presentedViewController;
            }
            
            PhotoAgent *agent = [PhotoAgent new];
            agent.presentingVC = rootVC;
            [agent choosePhotoFromGallery];
        });
    return  @"";
}

+ (NSString *)checkVPN:(NSString *)code {
    NSDictionary *proxySettings =  (__bridge NSDictionary *)(CFNetworkCopySystemProxySettings());
    NSArray *proxies = (__bridge NSArray *)(CFNetworkCopyProxiesForURL((__bridge CFURLRef _Nonnull)([NSURL URLWithString:@"http://www.baidu.com"]), (__bridge CFDictionaryRef _Nonnull)(proxySettings)));
    NSDictionary *settings = [proxies objectAtIndex:0];
    
    NSLog(@"host=%@", [settings objectForKey:(NSString *)kCFProxyHostNameKey]);
    NSLog(@"port=%@", [settings objectForKey:(NSString *)kCFProxyPortNumberKey]);
    NSLog(@"type=%@", [settings objectForKey:(NSString *)kCFProxyTypeKey]);
    
    if ([[settings objectForKey:(NSString *)kCFProxyTypeKey] isEqualToString:@"kCFProxyTypeNone"]){
        //没有设置代理
        return @"0";
    }else{
        //设置代理了
        return @"1";
    }
}

+ (int)getStatusBarHeight:(NSString *)code {
    CGFloat statusBarHeight = 0;
    UIWindow *window = nil;

    if (@available(iOS 13.0, *)) {
        // iOS 13+，通过 UIScene 拿 keyWindow
        for (UIWindowScene *scene in [UIApplication sharedApplication].connectedScenes) {
            if (scene.activationState == UISceneActivationStateForegroundActive) {
                for (UIWindow *w in scene.windows) {
                    if (w.isKeyWindow) {
                        window = w;
                        break;
                    }
                }
                if (window) break;
            }
        }
    } else if (@available(iOS 11.0, *)) {
        // iOS 11～12，直接拿 keyWindow
        window = [UIApplication sharedApplication].keyWindow;
    } else {
        // iOS 11 以下，直接用老 API
        statusBarHeight = [UIApplication sharedApplication].statusBarFrame.size.height;
        return (int)statusBarHeight;
    }

    if (window) {
        statusBarHeight = window.safeAreaInsets.top;
    }

    return (int)statusBarHeight;
}

+ (void)chooseAudioPath:(NSString *)code{
    NSLog(@"[FileMusicPicker] chooseAudioPath");
    [FileMusicPicker openFilePicker];

}
+ (void)playLocalAudio:(NSString *)code{
    NSLog(@"[FileMusicPicker] playLocalAudio:%@",code);
    [FileMusicPicker playAudio:code];

}
+ (void)pauseLocalAudio:(NSString *)code{
    NSLog(@"[FileMusicPicker] pauseAudio");
    [FileMusicPicker pauseAudio];

}
+ (void)resumeLocalAudio:(NSString *)code{
    NSLog(@"[FileMusicPicker] resumeAudio");
    [FileMusicPicker resumeAudio];

}
+ (void)stopLocalAudio:(NSString *)code{
    NSLog(@"[FileMusicPicker] stopAudio");
    [FileMusicPicker stopAudio];

}

//admob
+ (void)initAdmob:(NSString *)param {
    UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
    while (rootVC.presentedViewController) {
        rootVC = rootVC.presentedViewController;
    }
    [[AdmobManager sharedInstance] initializeWithRootViewController:rootVC];
}

+ (void)showInterstitial:(NSString *)param {
    [[AdmobManager sharedInstance] showInterstitial];
}

+ (void)showRewardedAd:(NSString *)param {
    [[AdmobManager sharedInstance] showRewarded];
}

+ (BOOL)isReadyRewardedAd:(NSString *)param {
    return [[AdmobManager sharedInstance] isReadyRewardedAd];
}

+ (void)showBanner:(NSString *)param {
    [[AdmobManager sharedInstance] showBanner];
}

+ (void)hideBanner:(NSString *)param {
   // [[AdmobManager sharedInstance] hideBanner];
}

//admob

#pragma mark - AppsFlyerLibDelegate


- (void)onConversionDataFail:(nonnull NSError *)error { 
    
}

- (void)onConversionDataSuccess:(nonnull NSDictionary *)conversionInfo { 
    
}

- (void)didResolveDeepLink:(AppsFlyerDeepLinkResult *)result{
    switch (result.status) {
            case AFSDKDeepLinkResultStatusFound: {
                AppsFlyerDeepLink *deepLinkObj = result.deepLink;
                NSLog(@"✅ deeplinkValue = %@", deepLinkObj.deeplinkValue);
                NSLog(@"👉 deep_link_sub1 = %@", deepLinkObj.clickEvent[@"deep_link_sub1"]);
                [SdkManager callJsFunc:@"SaveOnLinkInviteCode" tempData:deepLinkObj.deeplinkValue];
                break;
            }
            case AFSDKDeepLinkResultStatusNotFound:
                NSLog(@"❌ 没有找到 deeplink");
                break;
            case AFSDKDeepLinkResultStatusFailure:
                NSLog(@"⚠️ Deeplink 解析失败: %@", result.error);
                break;
        }
}

@end

