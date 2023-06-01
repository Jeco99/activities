// TODO: research how to shorten code in data handling.

const warning = document.getElementById('warning');
const warningIng = document.getElementById('warningIng');
const warningIns = document.getElementById('warningIns');
const ingre = document.getElementById('ingredients');
const ingreBtn = document.getElementById('addIngredientsBtn');
const instruction = document.getElementById('instruction');
const instructionBtn = document.getElementById('instructionBtn');
const saveBtn = document.getElementById('saveBtn');
const recipeDetails = document.getElementById('recipeDetails');
const recipeContent = document.getElementById('recipeContent');
const recipeName = document.getElementById('recipeId');
const instructionList = document.getElementById('instructionsContent');
const ingredientList = document.getElementById('ingredientsContent');
const recipeTitle = document.getElementById('recipeTitle');
const recipeNew = document.getElementById('newBtn');
const recipeList = document.getElementById('recipeList');
const unList = document.getElementById('unList');
const orList = document.getElementById('orList');

let ingredientsData= [];
let instructionsData = [];
let recipetitleData = [];
let mainIngre_data = [];
let mainInstruction_data = [];

recipeList.style.display = 'none';
recipeNew.style.display = 'none';

function addIngredients(){
    if(ingre.value == ""){
        warningIng.innerHTML = 'Ingredient Input can\'t be empty!';
    } else{
        let ingreLi = document.createElement('li');
        ingreLi.innerHTML = ingre.value;
        ingreLi.style.fontSize = "20px";
        ingredientsData.push(ingre.value);
        unList.append(ingreLi);
        ingre.value = "";
        warningIng.innerHTML = '';
        
    }
}

function addInstructions(){
    if(instruction.value == ""){
        warningIns.innerHTML = 'Instruction Input can\'t be empty!';
    } else{
        let intructLi = document.createElement('li');
        intructLi.innerHTML = instruction.value;
        intructLi.style.fontSize = "20px";
        instructionsData.push(instruction.value);
        orList.append(intructLi);
        instruction.value = "";
        warningIns.innerHTML = '';
    }
}

function display(disp_arr, tagName){
    if(tagName == "ul"){
        let ul = document.createElement("ul");
        disp_arr.forEach(function(el) {
            let li = document.createElement("li");
            li.innerHTML = el;
            li.style.fontSize = "25px";
            ul.append(li);
            recipeContent.appendChild(ul);
        });
    } else{
        let ol = document.createElement("ol");
        disp_arr.forEach(function(el) {
            let li = document.createElement("li");
            li.innerHTML = el;
            li.style.fontSize = "25px";
            ol.append(li);
            recipeContent.appendChild(ol);
        });
    } 
}


function displayContent(url){
    const urlClean = url.substring(1, url.length);
    const indexClick = recipetitleData.indexOf(urlClean);  
    const ingredientSelected = mainIngre_data[indexClick];
    const instructionSelected = mainInstruction_data[indexClick];
    const ingredients = document.createElement('h3');
    const instruction = document.createElement('h3');
    const recipeNameId = document.createElement('h2');
    const recipeD = document.createElement('h1');

    recipeD.innerHTML = 'Recipe Details';
    recipeContent.append(recipeD);

    recipeNameId.innerHTML = recipetitleData[indexClick];
    recipeNameId.style.paddingTop = "15px";
    recipeNameId.style.paddingBottom = "15px";
    recipeContent.append(recipeNameId);


    ingredients.innerHTML = 'Ingredients';
    recipeContent.append(ingredients);
    display(ingredientSelected, "ul");

    instruction.innerHTML = 'Instructions';
    recipeContent.append(instruction);
    display(instructionSelected, "ol");
}

function clearList(){
    recipeName.value = "";
    unList.innerHTML = "";
    orList.innerHTML = "";
    ingredientsData = [];
    instructionsData = [];
}

function clearContent(){
    recipeContent.innerHTML = "";
}

function saveDetails(){

    if(instruction.value == "" && 
            recipeName.value == "" && 
            ingre.value == ""){
            warning.innerHTML = 'Recipe Name can\'t be empty!';
            warningIns.innerHTML = 'Instruction Input can\'t be empty!';
            warningIng.innerHTML = 'Ingredient Input can\'t be empty!';
    } else if(recipeName.value == ""){
        warning.innerHTML = 'Recipe Name can\'t be empty!';
    } else if(ingredientsData.length == 0 && instructionsData.length == 0){
        warningIng.innerHTML = 'Ingredient Input can\'t be empty!';
        warningIns.innerHTML = 'Instruction Input can\'t be empty!';
    } else if(ingredientsData.length == 0){
        warningIng.innerHTML = 'Ingredient Input can\'t be empty!';
    } else if(instructionsData.length == 0 ){
        warningIns.innerHTML = 'Instruction Input can\'t be empty!';
    }  else{
        warning.innerHTML = '';
        warningIng.innerHTML = '';
        warningIns.innerHTML = '';
        
        recipeList.style.display = 'inline';
        instructionList.style.display = 'none';
        ingredientList.style.display = 'none';
        recipeTitle.style.display = 'none';
        saveBtn.style.display = 'none';
        recipeNew.style.display = 'inline';
       
        
    if(!recipetitleData.includes(recipeName.value)){
        let recipeLi = document.createElement("a");
        recipeLi.id = recipeName.value;
        recipeLi.href = `#${recipeName.value}`;
        recipeLi.target = "_parent";
        recipeLi.style.textDecoration = "none";
        recipeLi.style.color = "black";
        recipeLi.style.fontSize = "30px"
        recipeLi.innerHTML = `${recipeName.value} <br>`;
        recipeDetails.appendChild(recipeLi);
        recipetitleData.push(recipeName.value);
       
        mainIngre_data.push(ingredientsData);
        mainInstruction_data.push(instructionsData);
    
       document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
              const targetUrl = e.target.href;
              const clickUrl = targetUrl.match(/#[A-Za-z0-9 ]+/g);      
    
              let previousClick =  clickUrl;
    
              if (previousClick == clickUrl){
                clearContent();
                displayContent(clickUrl[0]);
              } 
            });
          });
          clearList();   
       
        } else{
            alert('Recipe name already on the list!');
        }
    }     
}

function addNewRecipe(){
    recipeList.style.display = 'none';
    instructionList.style.display = 'inline';
    ingredientList.style.display = 'inline';
    recipeTitle.style.display = 'inline';
    saveBtn.style.display = 'inline';
    recipeNew.style.display = 'none';
    clearList();
}

ingreBtn.addEventListener('click', addIngredients);
instructionBtn.addEventListener('click', addInstructions);
saveBtn.addEventListener('click', saveDetails);
recipeNew.addEventListener('click', addNewRecipe);

