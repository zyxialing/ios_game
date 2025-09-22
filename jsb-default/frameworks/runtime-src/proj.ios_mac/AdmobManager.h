#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface AdmobManager : NSObject

+ (instancetype)sharedInstance;

// 初始化（传入 rootVC，一般在 App 启动时调用一次）
- (void)initializeWithRootViewController:(UIViewController *)rootVC;

// Banner
- (void)showBanner;
- (void)hideBanner;

// 插屏广告
- (void)showInterstitial;
- (BOOL)isReadyRewardedAd;   // ✅ 新增
// 激励视频广告
- (void)showRewarded;

@end
