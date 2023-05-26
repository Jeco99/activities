class notepad{

  constructor(){
    this.cursor = 0
    this.newText = "";
  }
   addText(text){
      this.newText += String.fromCharCode(text);
      this.cursor += 1;
    }
  
    delete(){
      if(this.cursor > 0){
          this.newText = this.newText.slice(0, this.cursor - 1) + this.newText.slice(this.cursor + 1);
          return "Deleted";
      } else{
        return "Delete error";
      }
    }

    moveLeft(){
      if (this.cursor > 0){
        this.cursor -= 1;
      }
    }

    moveRight(){
      if (this.cursor < this.newText.length){
        this.cursor += 1;
      }
    }
  
    enter(){
      return this.newText
    }
}

// const res = new notepad()
// console.log(res.addText(72));
// console.log(res.addText(101));
// console.log(res.addText(108));
// console.log(res.addText(112));
// console.log(res.addText(115));
// console.log(res.moveLeft());
// console.log(res.delete());
// console.log(res.addText(108));
// console.log(res.addText(111));
// console.log(res.moveRight());
// console.log(res.delete());



const res = new notepad()
res.addText(83)//S
res.addText(107)//k
res.addText(100)//d
res.moveLeft()
//Sk|d
res.addText(105)//i
//Skid



console.log(res.enter());