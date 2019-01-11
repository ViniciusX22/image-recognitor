var $;

window.onload = () => $ = document.querySelector.bind(document);

function handleFile(e) {
    FileManager
        .loadImage(e.target.files[0])
        .then(img => {
            
        })
        .catch(error => console.log(error));
}