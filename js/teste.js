var $;
const net = new brain.NeuralNetwork();
var training;
var trainingData = {};

window.onload = () => $ = document.querySelector.bind(document);

function handleFile(e) {
    FileManager
        .loadImage(e.target.files[0], 50, 50)
        .then(img => {
            let imageData = img.getContext('2d').getImageData(0, 0, img.width, img.height);
            $("#c").width = img.width;
            $("#c").height = img.height;
            $("#c").getContext('2d').putImageData(imageData, 0, 0);
            trainingData.input = DataNormalizer.scaleDown(imageData.data);
            training = () => {
                switch($("#expected-number").value){
                    case '0':
                        trainingData.output = {'0':1};
                        break;
                    case '1':
                        trainingData.output = {'1':1};
                        break;
                    case '2':
                        trainingData.output = {'2':1};
                        break;
                    case '3':
                        trainingData.output = {'3':1};
                        break;
                    case '4':
                        trainingData.output = {'4':1};
                        break;
                    case '5':
                        trainingData.output = {'5':1};
                        break;
                    case '6':
                        trainingData.output = {'6':1};
                        break;
                    case '7':
                        trainingData.output = {'7':1};
                        break;
                    case '8':
                        trainingData.output = {'8':1};
                        break;
                    case '9':
                        trainingData.output = {'9':1};
                }
                console.log(trainingData.output);
                net.train([trainingData]);
            }
            $("#btn-train").disabled = false;
        })
        .catch(error => console.log(error));
}