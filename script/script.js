const formNode =document.querySelector("#addForm");


const tasks=[];
formNode.addEventListener("submit",(event)=>{
    event.preventDefault();

const title=event.target.title.value;
const titlesm=event.target.titles.value;
const titlem=event.target.titlem.value;
const task={
    name:title,
    lastName:titlesm,
    age:titlem
}
tasks.push(task);
console.log(tasks)
rerender();
event.target.reset();
})

function getName(name, lastName,age){
    const container=document.createElement("div");
    const dataNode=document.createElement("p");
    const ageNode=document.createElement("p");


    dataNode.innerText=name+" "+ lastName;
    ageNode.innerText="Возраст: "+ age;
    container.classList.add("item")
    if(age<=18){
        container.style.background="#1abc9c";
     }
    if(age<=35 & age>=19){
    container.style.background="#f39c12";
     }
    if(age>=35){
    container.style.background="#d35400";
     }
    

    container.append(dataNode , ageNode);   
    return container;
}

function rerender(){
    const container=document.querySelector("#listName")
    container.innerText="";

    tasks.forEach(({name, lastName,age})=>container.append(getName(name,lastName,age)))
}




