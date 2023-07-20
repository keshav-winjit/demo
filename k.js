// let a=prompt("what is your name?", "None")
// console.log(a)
// console.log(document)
// console.dir(document)
//let car={type:"suv",color:"white"}
//let car1=["keshav","sharma","hello","hi"]
// let str=car1.join('?')

// console.log(str)
// let a=Number(prompt("How old are you?"))
// console.log(a>18?"Good to go":"Sorry! below 18 not allowed")
// array=[]
// array[2]=3
// array[1]=2
// array[0]=1
// let car=new Map();
// car.set("type","suv");
// car.set("color","white")
// for(let v of car)
// console.log(v)
// let mySet=new Set()
// mySet.add('a')
// mySet.add('b')
// mySet.add(5)
// console.log(mySet)
// console.log(mySet.has('a'))
const output = document.getElementById('output');
const clickme = document.getElementById('clickme');
clickme.addEventListener('click', myJSON)
function myJSON(){
    console.log('click');   
    const url = 'https://randomuser.me/api/?results=50';
    fetch(url).then(function(response){
        return response.json();  
    }).then(function(data){
        console.log(data)
        }).catch(function(e){
    //     //console.log(e);
     })
}