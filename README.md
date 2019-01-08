# Image Recognitor

## A simple number recognitor in images

### Features:
- Get number images from local storage and train the Neural Network with those images.
- Get any image and return the its represented number if there was anyone.

#### Steps to train the Neural Network

- Get the training data (the number images from Internet/local storage) for each number;
- Take the pixels arrays of those images;
- Normalize it by dividing the RGB of the pixels values by 255;
- Configure the training data by passing the normalized pixels array of each image as an input and the output as the expected number;
- Train the Neural Network.

#### Steps to recognize a image

- Take the pixels array of the image;
- Normalize it by dividing the RGB values by 255;
- Run the test to check the hit rate and return the number with the greatest one.
