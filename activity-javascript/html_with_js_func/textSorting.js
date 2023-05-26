var addBtn = document.getElementById('addBtn');
var addData = document.getElementById('addData');
var getData = document.getElementsByTagName('input')[0];
var sortBtn = document.getElementById('sortBtn');
var unsortBtn = document.getElementById('unsortBtn');
var unsort = [];


function add(){
    var newP = document.createElement('p');
    unsort.push(getData.value);
    newP.innerHTML = getData.value;
    newP.style.fontSize = '35px';
    getData.value = "";
    addData.appendChild(newP);
 
}

function sortEl(){
    var p = document.querySelectorAll('p');
    let sorted = []
    
    for(let i = 0; i < p.length; i++){
            sorted.push(p[i].innerHTML);
    }
     
    sorted = sorted.sort()
    
    for(let i = 0; i < sorted.length; i++){
        p[i].innerHTML = sorted[i];
    }
}

function unsortEl(){
  var p = document.querySelectorAll('p');
  
  for(let i = 0; i < unsort.length; i++){
      p[i].innerHTML = unsort[i];
  }
}

addBtn.addEventListener('click', add);
sortBtn.addEventListener('click', sortEl);
unsortBtn.addEventListener('click', unsortEl);