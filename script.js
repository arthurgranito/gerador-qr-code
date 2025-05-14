const urlInput = document.getElementById('url');
const sizeSelect = document.getElementById('size');
const formElement = document.getElementById('form');
const downloadButton = document.getElementById('download-button');
const imageDiv = document.getElementById('image-area');
const downloadDiv = document.getElementById('download-area');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (urlInput.value == '') {
        alert('Please enter your text or URL')
    } else {
        downloadDiv.style.display = 'flex';
        imageDiv.innerHTML = "";
        new QRCode(imageDiv, {
            text: urlInput.value,
            height: sizeSelect.value,
            width: sizeSelect.value,
            colorLight: "#fff",
            colorDark: "#000"
        })
        urlInput.value = "";
    }
})

downloadButton.addEventListener('click', () => {
    const img = document.querySelector('#image-area img');
    const imgSrc = img.src;

    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = "QR_Code.jpg"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})