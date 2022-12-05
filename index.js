
var input=document.getElementsByClassName("in")[0];
var add=document.getElementsByClassName("add")[0];
var tasks=document.getElementsByClassName("tasks")[0];

function addtolist(){
    var item=document.createElement("DIV");
    item.innerHTML='<i class="fa-solid fa-circle-check"></i>'+input.value;
    item.classList.add('list');
    tasks.appendChild(item);
    input.value="";

  item.addEventListener("click",function(){
    this.remove();
  })
}

add.addEventListener("click",addtolist);