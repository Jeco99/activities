var ul = document.querySelector('ul');
var ol = document.querySelector('ol');

//warning
var warning = document.getElementById('warning');
var warningIng = document.getElementById('warningIng');
var warningIns = document.getElementById('warningIns');

//ingredients
var ingre = document.getElementById('ingredients');
var ingreBtn = document.getElementById('addIngredientsBtn');

//instructions
var instruction = document.getElementById('instruction');
var instructionBtn = document.getElementById('instructionBtn');

//save recipe
var saveBtn = document.getElementById('saveBtn');

// recipe details display
var recipeDetails = document.getElementById('recipeDetails');
var recipeContent = document.getElementById('recipeContent');

//recipe
var recipeName = document.getElementById('recipeId');

//store the data
var ingredientsData = [];
var instructionsData = [];
var recipetitleData = [];

// main
let mainIngre_data = [];
let mainInstruction_data = [];

// ingredients
function addIngredients(){
    if(ingre.value == ""){
        // alert('Recipe Name can\'t be empty!');
        warningIng.innerHTML = 'Ingredient Input can\'t be empty!';
    } else{
        let ingreLi = document.createElement('li');
        ingreLi.className = 'ingreList';
        ingreLi.innerHTML = ingre.value;
        ingreLi.style.fontSize = "20px";
        ingredientsData.push(ingre.value);
        ul.append(ingreLi);
        ingre.value = "";
        warningIng.innerHTML = '';
    }
}

// instructions
function addInstructions(){
    if(instruction.value == ""){
        // alert('Recipe Name can\'t be empty!');
        warningIns.innerHTML = 'Instruction Input can\'t be empty!';
    } else{
        let intructLi = document.createElement('li');
        intructLi.className = "instrucList";
        intructLi.innerHTML = instruction.value;
        intructLi.style.fontSize = "20px";
        instructionsData.push(instruction.value);
        ol.append(intructLi);
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
    let urlClean = url.substring(1, url.length);
    let indexClick = recipetitleData.indexOf(urlClean);
  
    let ingredientSelected = mainIngre_data[indexClick];
    let instructionSelected = mainInstruction_data[indexClick];

    let ingredients = document.createElement('h3');
    let instruction = document.createElement('h3');
    let recipeNameId = document.createElement('h2');
    let recipeD = document.createElement('h1');

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
    var unList = document.getElementById('unList');
    var orList = document.getElementById('orList');
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
        // check for existing array value
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
                  // Retrieve href and store in targetUrl variable
                  let targetUrl = e.target.href;
                  // Output value of targetUrl to console
                  var clickUrl = targetUrl.match(/#[A-Za-z]+/g);      
        
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


ingreBtn.addEventListener('click', addIngredients);
instructionBtn.addEventListener('click', addInstructions);
saveBtn.addEventListener('click', saveDetails);

