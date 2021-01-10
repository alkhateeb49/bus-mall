'use strict';
var arrayOfpro = [];

var fImg = document.getElementById('img1');
var sImg = document.getElementById('img2');
var tImg = document.getElementById('img3');

var fLa = document.getElementById('li1');
var sLa = document.getElementById('li2');
var tLa = document.getElementById('li3');

var bts = document.getElementById('butSe');
var listS = document.getElementById('list');

var trial= 25;

function Product(name,image){
    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.click= 0;
    this.view= 0;

    arrayOfpro.push(this);
}


function pickAPro(){
    var IMg1 = Math.round(Math.random() * (arrayOfpro.length - 1))

    do {
      var IMg2 = Math.round(Math.random() * (arrayOfpro.length - 1))
    } while (IMg1 === IMg2);

    do {
      var IMg3 = Math.round(Math.random() * (arrayOfpro.length - 1))
    } while (IMg3 === IMg2 || IMg3 === IMg1);
    render(IMg1,IMg2,IMg3);
}

function render(fimg,simg,timg){
    fImg.setAttribute('src', arrayOfpro[fimg].url);
    arrayOfpro[fimg].view++;
    sImg.setAttribute('src', arrayOfpro[simg].url);
    arrayOfpro[simg].view++;
    tImg.setAttribute('src', arrayOfpro[timg].url);
    arrayOfpro[timg].view++;

    fLa.textContent = arrayOfpro[fimg].name;
    sLa.textContent = arrayOfpro[simg].name;
    tLa.textContent = arrayOfpro[timg].name;
}

function count(event) {
    var targetId = event.target.id;
    // console.log(targetId);

    if (trial !== 0) {
      if (targetId === 'img1' || targetId === 'img2' || targetId === 'img3' ) {
        var objectIndicator = event.target.getAttribute('src');
        checkPro(objectIndicator);
        pickAPro();
      }
  
    } else {
    image_container.removeEventListener('click',count);
    console.log(arrayOfpro);
    var btn = document.createElement("BUTTON"); 
    btn.textContent="Show Result";
    btn.id ='button';
    bts.appendChild(btn);
    btn.addEventListener('click',print);
    
    }
}

function checkPro(objectIndicator) {
    for (var index = 0; index < arrayOfpro.length; index++) {
      if (arrayOfpro[index].url === objectIndicator) {
        arrayOfpro[index].click++;
        trial--;
      }
    }
  }

function print(event){
    

    var ul = document.createElement("ul"); 
    for(var i=0;i<arrayOfpro.length;i++){
    var li = document.createElement("li"); 
    li.textContent=arrayOfpro[i].name+" had "+arrayOfpro[i].click+" votes, and was seen "+arrayOfpro[i].view+" times.";
    // btn.id ='button';
    ul.appendChild(li);
    }
    listS.appendChild(ul);

}



new Product('Bag', 'bag.jpg');
new Product('Banana', 'banana.jpg');
new Product('Bathroom', 'bathroom.jpg');
new Product('Boots', 'boots.jpg');
new Product('Breakfast', 'breakfast.jpg');
new Product('Bubblegum', 'bubblegum.jpg');
new Product('Chair', 'chair.jpg');
new Product('Cthulhu', 'cthulhu.jpg');
new Product('Dog-duck', 'dog-duck.jpg');
new Product('Dragon', 'dragon.jpg');
new Product('Pen', 'pen.jpg');
new Product('Pet Sweep', 'pet-sweep.jpg');
new Product('Scissors', 'scissors.jpg');
new Product('Shark', 'shark.jpg');
new Product('Sweep', 'sweep.png');
new Product('Tauntaun', 'tauntaun.jpg');
new Product('Unicorn', 'unicorn.jpg');
new Product('Usb', 'usb.gif');
new Product('Water Can', 'water-can.jpg');
new Product('Wine Glass', 'wine-glass.jpg');

pickAPro();
image_container.addEventListener('click',count);