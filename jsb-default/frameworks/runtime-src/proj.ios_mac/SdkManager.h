//
//  SdkManager.h
//  hotfiregame-mobile
//
//  Created by zyxialing on 2024/9/4.
//
#import "AppController.h"
#import "AppsFlyerLib/AppsFlyerLib.h"
#ifndef SdkManager_h
#define SdkManager_h
@interface SdkManager : NSObject<AppsFlyerDeepLinkDelegate>
// 静态函数声明
+ (instancetype)getInatance;
+ (void)initBaseSdk:(AppController*)control;
+ (void)activateAppsFlyer;
+ (void)callJsFunc:(NSString*)funName tempData:(NSString*)data;
+ (NSString*)getGameConfig:(NSString *)code;
+ (NSString*)GetUrlData:(NSString *)code;
+ (NSString*)getIDFA:(NSString *)code;
+ (NSString *)checkVPN:(NSString *)code;
+ (NSString *)copy:(NSString *)code;
+ (NSString *)GetAppsFlyerId:(NSString *)code;
+ (NSString*)setOrientation_l:(NSString *)code;
+ (NSString*)setOrientation_p:(NSString *)code;
+ (NSString*)openPhotoAlbum:(NSString *)code;
+ (int)getStatusBarHeight:(NSString *)code;
+ (void)chooseAudioPath:(NSString *)code;
+ (void)playLocalAudio:(NSString *)path;  // 播放指定路径
+ (void)pauseLocalAudio:(NSString *)code;                 // 暂停
+ (void)resumeLocalAudio:(NSString *)code;               // 恢复
+ (void)stopLocalAudio:(NSString *)code;                   // 停止
//admob
+ (void)initAdmob:(NSString *)param;
+ (void)showInterstitial:(NSString *)param;
+ (void)showRewardedAd:(NSString *)param;
+ (BOOL)isReadyRewardedAd:(NSString *)param;
+ (void)showBanner:(NSString *)param;
+ (void)hideBanner:(NSString *)param;

@end
#endif /* SdkManager_h */
