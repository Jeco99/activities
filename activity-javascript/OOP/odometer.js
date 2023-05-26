class odometer{

  constructor(diameter,rotation){
    this.data = diameter
    this.rot = rotation
  }

  circumference(){
   const PI = 3.14159
   let r = this.data / 2;
   let circumResult = (2 * r * PI).toFixed(2);
   return Number(circumResult);
  }

  answerText(arr){
    let newText = "";

    for(let i = 0; i < arr.length; i++){
        newText += `[${arr[i]}]`;
    }

    return newText;
  }

  calculate(){
    const inch_to_kilo = 39370.0787
    let result = Math.round((this.circumference() * this.rot) / inch_to_kilo);
    let arr =  result.toString().split("");
    
    let new_Arr = new Array();
   
    for (let i = new_Arr.length; i < 6; i++){
      if(arr.length > 0){
        let remove  = arr.pop()
        new_Arr.unshift(remove);
      } else{
        new_Arr.unshift('0');
      }
    }

    let f_result = this.answerText(new_Arr);
  
    return f_result;
  }

}
  const diameter =19
  const rotation = 457752

  let res = new odometer(diameter,rotation);
  console.log(res.circumference());
  console.log(res.calculate());

  let res1 = new odometer(12,1000000);
  console.log(res1.circumference());
  console.log(res1.calculate());
