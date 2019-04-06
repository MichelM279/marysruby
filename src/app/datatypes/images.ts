export class ImageObject {
    image: string;
    thumbImage: string;
    title?: string;
    constructor(image: string, thumbImage: string) {
        this.image = image;
        this.thumbImage = thumbImage;
    }
}
