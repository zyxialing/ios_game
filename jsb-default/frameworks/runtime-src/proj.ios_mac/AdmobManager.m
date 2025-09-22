#import "AdmobManager.h"
#import <GoogleMobileAds/GoogleMobileAds.h>
#import "SdkManager.h"
@interface AdmobManager () <GADBannerViewDelegate, GADFullScreenContentDelegate>
@property(nonatomic, weak) UIViewController *rootViewController;
@property(nonatomic, strong) GADBannerView *bannerView;
@property(nonatomic, strong) GADInterstitialAd *interstitial;
@property(nonatomic, strong) GADRewardedAd *rewarded;

// 计数器
@property(nonatomic, assign) NSInteger interstitialCount;
@property(nonatomic, assign) NSInteger rewardedCount;
@end

@implementation AdmobManager

// ⚡️ 替换成你的广告单元 ID
static NSString * const kBannerAdUnitID    = @"ca-app-pub-3940256099942544/2435281174";
static NSString * const kInterstitialAdID  = @"ca-app-pub-3940256099942544/4411468910";
static NSString * const kRewardedAdUnitID  = @"ca-app-pub-3940256099942544/1712485313";

+ (instancetype)sharedInstance {
    static AdmobManager *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[AdmobManager alloc] init];
    });
    return instance;
}

#pragma mark - 初始化
- (void)initializeWithRootViewController:(UIViewController *)rootVC {
    self.rootViewController = rootVC;
    [[GADMobileAds sharedInstance] startWithCompletionHandler:nil];
    [GADMobileAds.sharedInstance requestConfiguration].testDeviceIdentifiers = @[@"4B07AE60-5B69-4DE1-814F-E3B5F43B7FA4"];
    [self loadBanner];
    [self loadInterstitial];
    [self loadRewarded];
    [self showBanner];
}

#pragma mark - Banner
- (void)loadBanner {
    self.bannerView = [[GADBannerView alloc] initWithAdSize:GADAdSizeBanner];
    self.bannerView.adUnitID = kBannerAdUnitID;
    self.bannerView.rootViewController = self.rootViewController;
    self.bannerView.delegate = self;
    [self.bannerView loadRequest:[GADRequest request]];
    
}

- (void)showBanner {
    if (self.bannerView && self.bannerView.superview == nil) {
        self.bannerView.center = CGPointMake(self.rootViewController.view.center.x,
                                             self.rootViewController.view.bounds.size.height - self.bannerView.bounds.size.height/2);
        [self.rootViewController.view addSubview:self.bannerView];
    }
}

- (void)hideBanner {
    [self.bannerView removeFromSuperview];
}

#pragma mark - 插屏广告
- (void)loadInterstitial {
    [GADInterstitialAd loadWithAdUnitID:kInterstitialAdID
                                request:[GADRequest request]
                      completionHandler:^(GADInterstitialAd *ad, NSError *error) {
        if (error) {
            NSLog(@"插屏加载失败: %@", error.localizedDescription);
            return;
        }
        self.interstitial = ad;
        self.interstitial.fullScreenContentDelegate = self;
        self.interstitialCount = 0; // 重置计数
    }];
}

- (void)showInterstitial {
    self.interstitialCount++;
    
    if (self.interstitial) {
        [self.interstitial presentFromRootViewController:self.rootViewController];
        self.interstitial = nil;
        [self loadInterstitial]; // 用过一次立刻重新加载
    } else {
        NSLog(@"插屏未准备好 (%ld 次)", (long)self.interstitialCount);
        [self showNotReadyMessage:@"插屏广告还在加载中，请稍后再试"];
        
        if (self.interstitialCount >= 3) {
            [self loadInterstitial];
            self.interstitialCount = 0;
        }
    }
}

#pragma mark - 激励视频
- (void)loadRewarded {
    [GADRewardedAd loadWithAdUnitID:kRewardedAdUnitID
                             request:[GADRequest request]
                   completionHandler:^(GADRewardedAd *ad, NSError *error) {
        if (error) {
            NSLog(@"激励视频加载失败: %@", error.localizedDescription);
            return;
        }
        self.rewarded = ad;
        self.rewarded.fullScreenContentDelegate = self;
        self.rewardedCount = 0;
    }];
}

- (void)showRewarded {
    self.rewardedCount++;
    
    if (self.rewarded) {
        [self.rewarded presentFromRootViewController:self.rootViewController
                          userDidEarnRewardHandler:^{
            GADAdReward *reward = self.rewarded.adReward;
            NSLog(@"用户获得奖励: %@ %@", reward.amount, reward.type);
            // TODO: 回调给 Cocos，发放奖励
            // ✅ 传给 Cocos
            [SdkManager callJsFunc:@"AdmobFinishVideoCallBack" tempData:@"1"];
        }];
        self.rewarded = nil;
        [self loadRewarded]; // 用过一次立刻重新加载
    } else {
        NSLog(@"激励视频未准备好 (%ld 次)", (long)self.rewardedCount);
        [self showNotReadyMessage:@"视频广告还在加载中，请稍后再试"];
        
        if (self.rewardedCount >= 3) {
            [self loadRewarded];
            self.rewardedCount = 0;
        }
    }
}

#pragma mark - 通用提示
- (void)showNotReadyMessage:(NSString *)msg {
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示"
                                                                   message:msg
                                                            preferredStyle:UIAlertControllerStyleAlert];
    [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:nil]];
    [self.rootViewController presentViewController:alert animated:YES completion:nil];
}

- (BOOL)isReadyRewardedAd {
    return self.rewarded != nil;   // ✅ 新增
}

@end
