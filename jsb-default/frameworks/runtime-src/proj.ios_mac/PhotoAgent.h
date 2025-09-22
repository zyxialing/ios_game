#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface PhotoAgent : NSObject <UIImagePickerControllerDelegate, UINavigationControllerDelegate>

/// 当前用来 present UIImagePicker 的控制器
@property (nonatomic, weak) UIViewController *presentingVC;

/// 打开相册选择照片（支持裁剪，返回 base64 给 Cocos）
- (void)choosePhotoFromGallery;

@end
