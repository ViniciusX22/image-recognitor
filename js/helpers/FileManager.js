/**
 * FileManager API
 * 
 * Dependencies: Load Image API
 * 
 * @author Vinicius Xavier
 */

class FileManager {

    constructor(){
        throw new Error("This class cannot be instantiated");
    }

    static downloadFile (blob, name="untitled") {
        let a = document.createElement("a"), url = URL.createObjectURL(blob);
        a.href = url;
        a.download = name;
        document.body.appendChild(a).click();
        document.body.removeChild(a);
    }

    static downloadFiles (blobs, name="untitled", ...names) {
        console.log(name, names);
        for (let i = 0; i < blobs.length; i++)
            FileManager.downloadFile(blobs[i], !names.length || (names.length && i == 0) ? name : names[i-1]);
    }

    static loadImage (image, maxWidth, maxHeight){
        return new Promise((resolve, reject) => {
            let opts = {canvas: true};
            if(maxWidth) opts.maxWidth = maxWidth;
            if(maxHeight) opts.maxHeight = maxHeight;
            loadImage.parseMetaData(image, data => {
                opts.orientarion = data.exif ? data.exif.get("Orientation") : 0;
                loadImage(
                    image,
                    img => {
                        if(img.type == 'error') reject("Error loading image");
                        else resolve(img);
                    },
                    opts
                );
            });
        })
    }

    static loadImages (images, preferredWidth) {
        let loadingImages = [];
        for (let i = 0; i < images.length; i++)
            loadingImages.push(FileManager.loadImage(images[i], preferredWidth));
        return Promise.all(loadingImages);
    }
}