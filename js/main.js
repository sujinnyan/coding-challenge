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


var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body : new FormData(document.getElementById("sheetdb-form")),
    }).then(
        reponse => Response.json()
    ).then((html) => {
        window.open('d.html', '_blank');
    });
});

     

const $topBtn = document.querySelector(".moveTopBtn");

$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}


const $bottomBtn = document.querySelector(".moveBottomBtn");

$bottomBtn.onclick = () => {
  window.scrollTo({ top: 1370, behavior: "smooth" });  
}