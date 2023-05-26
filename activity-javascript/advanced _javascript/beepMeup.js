// check the name is valid the filter
// validNames  = filteredNames
// shift the name then count arr length
// if one valid name then result {name} ---
// if two valid name then result {name1} and {name2} ---
// if three valid name then result {name1}, {name2} and {name3} ---
// if more than result result {name1}, name2 and name.length  ----

var specialNum = "0123456789!@#$%^&*()_-+={[}]|;<,>.?/ ".split("");


function validNames(testNames, specialNum){

	let bool = [];
	
	for(let x in testNames){
		bool.push(!specialNum.includes(testNames[x]));
	} 

	// console.log(bool);

	for(let j in bool){
		if(bool.includes(false)){
			return false;
		} else {
			return true;
		}
	}
}

// console.log(validNames("Clarke", specialNum));
// console.log(validNames("*random penguin*", specialNum));
// console.log(validNames("random mousepad", specialNum));
// console.log(validNames('The wild hunt' , specialNum));


function Messages(con) {
	
	//   check the name is valid
	  const specialNum = '0123456789!@#$%^&*()_-+={[}]|:"<,>.?/  '.split("");
	  let validResult = con.filter(checkNames => validNames(checkNames, specialNum) == true);

	  let newArr = [];



// if one valid name then result {name} ---
// if two valid name then result {name1} and {name2} ---
// if three valid name then result {name1}, {name2} and {name3} ---
// if more than result result {name1}, name2 and name.length  ----

	//   console.log(newArr);
	//   console.log(validResult);
  
	  if (validResult.length > 3){
			for(let i of validResult){
				firstRemove = validResult.shift(i);
				newArr.push(firstRemove);
			}
		return newArr.join(", ") + " and " + validResult.length + " others sent you a message!";
	  } else if (validResult.length > 2){
			for(let i of validResult){
				firstRemove = validResult.shift(i);
				newArr.push(firstRemove);
			}
		return newArr.join(", ") + " and " + validResult + " sent you a message!";
	  }  else if (validResult.length > 1){
		return validResult.join(" and ") + " sent you a message!";
	  } else if (validResult.length > 0){
		return validResult +  " sent you a message!";
	  } else {
		return  "No one sent you a message!";
	  }
  
}


// console.log(Messages(["Stanley","Keanu","Roger","Clarke","8080","Geralt","Triss"]));
// console.log(Messages(["Stanley","Geralt","Triss"]));
// console.log(Messages(["Stanley","Geralt"]));
// console.log(Messages(["*random penguin*"]));
// console.log(Messages(["Triss","The wild hunt"]));
// console.log(Messages(["Coffee machine", "random mousepad"]));
