var ul = document.querySelector('ul');
var ol = document.querySelector('ol');




//ingredients
var ingre = document.getElementById('ingredients');
var ingreBtn = document.getElementById('addIngredientsBtn');
var ingreDetails = document.getElementById('ingredientDetails');

//instructions
var instruction = document.getElementById('instruction');
var instructionBtn = document.getElementById('instructionBtn');
var instructionsDetails = document.getElementById('instructionDetails');

//save recipe
var saveBtn = document.getElementById('saveBtn');

// recipe details display
var recipeDetails = document.getElementById('recipeDetails');




// ingredients
function addIngredients(){
    let li = document.createElement('li');
    li.className = 'ingreList';
    li.innerHTML = ingre.value;
    ul.append(li);
    ingre.value = "";
}

// instructions
function addInstructions(){
    let li = document.createElement('li');
    li.className = "instrucList";
    li.innerHTML = instruction.value;
    ol.append(li);
    instruction.value = "";
}

function extractVal(li_Val){
    let valArr = [];
    for(let i = 0; i < li_Val.length; i++){
        valArr.push(li_Val[i].innerHTML);
    }
    return valArr;
}

function display(disp_arr, tagName){

    if(tagName == "ul"){
        let ul = document.createElement("ul");
        disp_arr.forEach(function(el) {
            let li = document.createElement("li");
            li.innerHTML = el;
            ul.append(li);
            recipeDetails.appendChild(ul);
        });
    } else{
        let ol = document.createElement("ol");
        disp_arr.forEach(function(el) {
            let li = document.createElement("li");
            li.innerHTML = el;
            ol.append(li);
            recipeDetails.appendChild(ol);
        });
    }
    
}



function saveDetails(){
    let ingredients = document.createElement('h2');
    let instruction = document.createElement('h2');
    let recipeD = document.createElement('h1');

    recipeD.innerHTML = 'Recipe Details';
    recipeDetails.append(recipeD);
    
   
    let ingList = document.getElementsByClassName('ingreList');
    let ingVal = extractVal(ingList);

    ingredients.innerHTML = 'Ingredients';
    recipeDetails.append(ingredients);
 
    display(ingVal, "ul");


    let insTrucList = document.getElementsByClassName('instrucList');
    let instrucVal = extractVal(insTrucList);

    instruction.innerHTML = 'Instructions';
    recipeDetails.append(instruction);
 
    display(instrucVal, ol);
   


  


    
}


ingreBtn.addEventListener('click', addIngredients);
instructionBtn.addEventListener('click', addInstructions);
saveBtn.addEventListener('click', saveDetails);

