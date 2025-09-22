#import <UIKit/UIKit.h>
#import "SdkManager.h"

@interface PhotoAgent : NSObject <UIImagePickerControllerDelegate, UINavigationControllerDelegate>
@property (nonatomic, weak) UIViewController *presentingVC;
- (void)choosePhotoFromGallery;
@end

@implementation PhotoAgent

- (void)choosePhotoFromGallery {
    UIImagePickerController *picker = [[UIImagePickerController alloc] init];
    picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    picker.delegate = self;
    picker.allowsEditing = YES; // 用户可以手动裁剪
    [self.presentingVC presentViewController:picker animated:YES completion:nil];
}

// 选择完成
- (void)imagePickerController:(UIImagePickerController *)picker
didFinishPickingMediaWithInfo:(NSDictionary<UIImagePickerControllerInfoKey,id> *)info {
    
    UIImage *finalImage = nil;
    if (info[UIImagePickerControllerEditedImage]) {
        finalImage = info[UIImagePickerControllerEditedImage];
    } else {
        finalImage = info[UIImagePickerControllerOriginalImage];
    }
    
    [picker dismissViewControllerAnimated:YES completion:nil];
    
    if (!finalImage) {
        NSLog(@"图片获取失败");
        return;
    }
    
    // ✅ 压缩尺寸
    UIImage *scaledImage = [self scaleImage:finalImage maxSize:1024];
    
    // ✅ 转 Base64（JPEG 品质 0.8）
    NSData *imageData = UIImageJPEGRepresentation(scaledImage, 0.8);
    NSString *imageBase64 = [imageData base64EncodedStringWithOptions:0];
    
    NSLog(@"Base64 长度 = %lu", (unsigned long)imageBase64.length);
    
    // ✅ 传给 Cocos
    [SdkManager callJsFunc:@"ChoosePhoto_Callback" tempData:imageBase64];
}

- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker {
    [picker dismissViewControllerAnimated:YES completion:nil];
    NSLog(@"用户取消选择图片");
}

#pragma mark - 等比缩放
- (UIImage *)scaleImage:(UIImage *)image maxSize:(CGFloat)maxSize {
    CGSize size = image.size;
    CGFloat maxDimension = MAX(size.width, size.height);
    
    if (maxDimension <= maxSize) {
        return image; // 不需要缩放
    }
    
    CGFloat scale = maxSize / maxDimension;
    CGSize newSize = CGSizeMake(size.width * scale, size.height * scale);
    
    UIGraphicsBeginImageContextWithOptions(newSize, NO, 1.0);
    [image drawInRect:CGRectMake(0, 0, newSize.width, newSize.height)];
    UIImage *scaled = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return scaled;
}

@end
