#import "FileMusicPicker.h"
#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import "SdkManager.h"
static AVAudioPlayer *gPlayer = nil;
static BOOL gIsStopping = NO;

// Documents 下的固定文件路径
static NSString* getUserMusicPath(NSString *ext) {
    NSString *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).firstObject;
    return [docPath stringByAppendingPathComponent:[NSString stringWithFormat:@"user_music.%@", ext]];
}

@implementation FileMusicPicker

#pragma mark - 获取顶层控制器
+ (UIViewController *)topViewController {
    UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
    while (rootVC.presentedViewController) {
        rootVC = rootVC.presentedViewController;
    }
    return rootVC;
}

#pragma mark - 打开文件选择器
+ (void)openFilePicker {
    NSArray *types = @[@"public.audio"]; // 只允许选音频
    UIDocumentPickerViewController *picker =
        [[UIDocumentPickerViewController alloc] initWithDocumentTypes:types
                                                               inMode:UIDocumentPickerModeImport];
    picker.allowsMultipleSelection = NO;
    picker.delegate = (id<UIDocumentPickerDelegate>)self;
    [[self topViewController] presentViewController:picker animated:YES completion:nil];
}

#pragma mark - 文件选择回调
+ (void)documentPicker:(UIDocumentPickerViewController *)controller didPickDocumentsAtURLs:(NSArray<NSURL *> *)urls {
    NSURL *url = urls.firstObject;
    if (!url) return;
    
    // 获取扩展名
    NSString *ext = url.pathExtension.lowercaseString;
    if (ext.length == 0) {
        ext = @"mp3"; // 默认给个 mp3
    }
    NSString *dst = getUserMusicPath(ext);
    
    // 删除旧文件（不管后缀是什么）
    NSArray *oldFiles = @[@"user_music.mp3", @"user_music.m4a", @"user_music.aac", @"user_music.wav"];
    NSString *docPath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject];
    for (NSString *f in oldFiles) {
        NSString *full = [docPath stringByAppendingPathComponent:f];
        if ([[NSFileManager defaultManager] fileExistsAtPath:full]) {
            [[NSFileManager defaultManager] removeItemAtPath:full error:nil];
        }
    }
    
    // 拷贝新文件到 Documents
    NSError *err = nil;
    [[NSFileManager defaultManager] copyItemAtURL:url toURL:[NSURL fileURLWithPath:dst] error:&err];
    if (err) {
        NSLog(@"拷贝失败: %@", err);
        return;
    }
    
    // ✅ 回调路径给 Cocos
    [SdkManager callJsFunc:@"CallAndroidCallPlayAudio" tempData:dst];
}

+ (void)documentPickerWasCancelled:(UIDocumentPickerViewController *)controller {
    NSLog(@"用户取消选择音乐");
}

#pragma mark - 播放控制
+ (void)playAudio:(NSString *)path {
    if (!path || path.length == 0) {
        // 默认尝试 mp3/m4a/aac/wav
        NSArray *tryFiles = @[@"user_music.mp3", @"user_music.m4a", @"user_music.aac", @"user_music.wav"];
        NSString *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).firstObject;
        for (NSString *f in tryFiles) {
            NSString *full = [docPath stringByAppendingPathComponent:f];
            if ([[NSFileManager defaultManager] fileExistsAtPath:full]) {
                path = full;
                break;
            }
        }
    }
    
    if (!path || ![[NSFileManager defaultManager] fileExistsAtPath:path]) {
        NSLog(@"音乐文件不存在: %@", path);
        return;
    }
    
    // 如果已经有播放器，并且是同一个文件
    if (gPlayer && [gPlayer.url.path isEqualToString:path]) {
        if (gPlayer.isPlaying) {
            NSLog(@"同一首音乐，正在播放，无需重播");
            return;
        } else {
            NSLog(@"同一首音乐，恢复播放");
            [gPlayer play];
            gIsStopping = NO;
            return;
        }
    }
    
    // 新文件：重建播放器
    if (gPlayer) {
        [gPlayer stop];
        gPlayer = nil;
    }
    NSURL *url = [NSURL fileURLWithPath:path];
    gPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:url error:nil];
    gPlayer.numberOfLoops = -1; // 循环播放
    [gPlayer prepareToPlay];
    [gPlayer play];
    gIsStopping = NO;
    
    NSLog(@"开始播放新音乐: %@", path);
}

+ (void)pauseAudio {
    if (gPlayer.isPlaying) [gPlayer pause];
}

+ (void)resumeAudio {
    if (!gIsStopping && gPlayer) [gPlayer play];
}

+ (void)stopAudio {
    if (gPlayer.isPlaying) {
        [gPlayer pause];
        gIsStopping = YES;
    }
}

@end
