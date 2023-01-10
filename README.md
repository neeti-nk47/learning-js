# learning-js

THIS uses
1.inside Global scope
------------------------------
this.table="windows table";

this.garage={
    table:"garage table"
};

console.log(this.table);

2.inside Object 
------------------------------
this.table="windows table";

this.garage={
    table:"garage table"
};

let myRoom={
    table:"neeti table"
};

console.log(myRoom.table);

3.inside Method 
------------------------------
this.garage={
    table:"garage table",
    cleanTable(){
        console.log("cleaning "+ this.table)
    }
}
let myRoom={
    table:"neeti table",
    cleanTable(){
        console.log("cleaning "+ this.table)
    }
}
console.log(myRoom.cleanTable());
console.log(garage.cleanTable());

4.inside Function using call
------------------------------
this.table="windows table";
let cleanTable= function(){
    console.log("cleaning "+this.table);
}
this.garage={
    table:"garage table",
};
let myRoom={
    table:"neeti table",
}; 
cleanTable.call(this)
cleanTable.call(myRoom)

5.inside Prototype
------------------------------
let createRoom= function(name){
    this.table= name+"s table";
}
createRoom.prototype.cleanTable= function(){
    console.log("cleaning "+this.table)
};

const jillsRoom= new createRoom("jill")
const johnRoom= new createRoom("john")
jillsRoom.cleanTable()
johnRoom.cleanTable()

6.inside Class
------------------------------
class createRoom{
    constructor(name){
        this.table= name+"s table"
    }
    cleanTable= function(){
        console.log("cleaning "+this.table)
    }
}
const jillsRoom= new createRoom("jill")
const johnRoom= new createRoom("john")

jillsRoom.cleanTable()
johnRoom.cleanTable()

