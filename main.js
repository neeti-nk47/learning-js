class Student{
    static counter=0;
    constructor(name ,age , boardmarks){
        this.name=name, 
        this.age=age, 
        this.boardmarks=boardmarks,
        Student.counter++
    }
    
    eligibleForPlacement= function(minMarks){
        return (minAge) =>{
            if(this.age>minAge && this.boardmarks>minMarks){
                console.log(this.name + " is eligible for placements");
            }
            else console.log(this.name + " is not eligible for placements");
        }
    }
}

var ram=new Student("ram",21,83);
var shyam=new Student("shyam",52,32);
var yam=new Student("yam",13,42);
var tom=new Student("tom",72,92);
var bill=new Student("bill",22,25);

console.log(Student.counter)

tom.eligibleForPlacement(40)(21)
