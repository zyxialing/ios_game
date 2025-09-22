#import <Foundation/Foundation.h>

@interface FileMusicPicker : NSObject

+ (void)openFilePicker;              // 打开文件选择器
+ (void)playAudio:(NSString *)path;  // 播放指定路径
+ (void)pauseAudio;                  // 暂停
+ (void)resumeAudio;                 // 恢复
+ (void)stopAudio;                   // 停止

@end
