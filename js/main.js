let index = 0;
const time = 1000;


const imgArray = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
];


function rotateImg() {
    const img = document.querySelector("#slide");
    img.src = imgArray[index];

    if (index < imgArray.length -1) {
        index++;
    } else {
        index = 0;
    }

    setTimeout("rotateImg()", 7000);
}


rotateImg();




const scriptURL = 'https://sheetdb.io/api/v1/35x25yd0arf5w'
const form = document.forms['sheetdb-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})





const $topBtn = document.querySelector(".moveTopBtn");

$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}


const $bottomBtn = document.querySelector(".moveBottomBtn");

$bottomBtn.onclick = () => {
  window.scrollTo({ top: 20000, behavior: "smooth" });  
}



const $feedbackBtn = document.querySelector(".button");

$feedbackBtn.onclick = () => {
  window.scrollTo({ top: 850, behavior: "smooth" });  
}

