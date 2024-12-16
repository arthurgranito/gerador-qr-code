const url = document.getElementById('url');
const tamanho = document.getElementById('tamanho');
const form = document.getElementById('form');
const downloadBtn = document.getElementById('download');
const divImagem = document.getElementById('imagem');
const divDownload = document.getElementById('download');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (url.value == '') {
        alert('Preencha com seu texto ou url')
    } else {
        divDownload.style.display = 'flex';
        divImagem.innerHTML = "";
        new QRCode(divImagem, {
            text: url.value,
            height: tamanho.value,
            width: tamanho.value,
            colorLight: "#fff",
            colorDark: "#000"
        })
        url.value = "";
    }
})

downloadBtn.addEventListener('click', () => {
    const img = document.querySelector('#imagem img');
    const imgSrc = img.src;

    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = "QR_Code.jpg"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})