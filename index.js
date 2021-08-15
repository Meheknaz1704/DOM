console.log(document);
document.title="DOM";
console.log(document.title)


let heading=document.getElementById("hello")
console.log(heading) 


let greeting =document.querySelectorAll("#hello")
console.log(greeting)

let greet =document.getElementsByClassName("do")
console.log(greet)

let  head = document.getElementsByTagName("h1")
for(i=0;i<head .length;i++){
    console.log(head[i])

}