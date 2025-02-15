const student={
    name:"Ashvani",
    marks:95,
    prop:this,
    getName:function(){
        console.log(this)
        return this.name;
    }
}

console.log(student.marks)