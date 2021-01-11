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

var proChart = document.getElementById('proChart').getContext('2d');

var shownImages = [];


function Product(name,image){
    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.click= 0;
    this.view= 0;

    arrayOfpro.push(this);
}

function checkAvailability (selectedProName) {

  for (var index = 0; index < shownImages.length; index++) {
    if (shownImages[index].name === selectedProName) {
      return true;
    }
  }
  return false;  
}



function pickAPro(){
  do {
    var IMg1 = Math.round(Math.random() * (arrayOfpro.length - 1))
    var IMg1name = arrayOfpro[IMg1].name;    
  } while (checkAvailability(IMg1name));
  
  do {
    var IMg2 = Math.round(Math.random() * (arrayOfpro.length - 1))
    var IMg2name = arrayOfpro[IMg2].name; 
  } while (IMg1 === IMg2|| checkAvailability(IMg2name));

  do {
    var IMg3 = Math.round(Math.random() * (arrayOfpro.length - 1))
    var IMg3name = arrayOfpro[IMg3].name; 
  } while (IMg3 === IMg2|| IMg3 === IMg1 || checkAvailability(IMg3name));


    shownImages = [];
    shownImages.push(
      arrayOfpro[IMg1],
      arrayOfpro[IMg2],
      arrayOfpro[IMg3]
    )

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
    ul.appendChild(li);
    }
    listS.appendChild(ul);
    renderChart();


}




function renderChart() {

  var arrayOfProNames = [];
  var arrayOfProCount = [];
  var arrayOfProsShown = [];


  for (var index = 0; index < arrayOfpro.length; index++) {
    arrayOfProNames.push(arrayOfpro[index].name);
    arrayOfProCount.push(arrayOfpro[index].click);
    arrayOfProsShown.push(arrayOfpro[index].view);
    
  }
 
  var myChart = new Chart(proChart, {
    type: 'bar',
    data: {
      labels: arrayOfProNames, // array of labels (names of the goats)
      datasets: [
        {
        label: '# of Product Clicks',
        data: arrayOfProCount, // array of values (count for each goat when it was clicked)
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Time shown for the Products',
        data: arrayOfProsShown, // array of values (count for each goat when it was clicked)
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
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