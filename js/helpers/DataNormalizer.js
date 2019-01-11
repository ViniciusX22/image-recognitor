class DataNormalizer {

    constructor() {

        throw new Error("This class cannot be instantiated");
    }

    static scaleDown(imageData) {
        let normalizedData = [];
        imageData.forEach(val => normalizedData.push(val / 255));
        return normalizedData;
    }
    
    static scaleUp(imageData) {
        return Uint8ClampedArray.from(imageData.map(data => data * 255));
    }
}