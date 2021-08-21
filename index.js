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

let parel=document.getElementById("parent")
console.log(parel)


let par=document.getElementById("parent")
console.log(par.lastChild);

let pa=document.getElementsById("parent")
console.log(pa.firstChlid);

let parent=document.getElementById("parent")
console.log(parent.children)

let midpara=document.getElementsById("midpara")
console.log(midpara.nextElementSibling);

let mid=document.getElementsById("midpara")
console.log(mid.previousElementSiblings)

let mid1=document.getElementsById("midpara")
console.log(mid1.nextSibling)

let mid2=document.getElementsById("midpara")
console.log(mid2.previousSibling)



