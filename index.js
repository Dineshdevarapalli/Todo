let todoele = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")
https://github.com/Dineshdevarapalli/Todo/blob/main/todo.js
document.getElementById("add").onclick =function(){
    if(todoele.value.length==0){
        alert("Enter a task details")
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+`    
        <div class="task"> 
            <span id="work">${todoele.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`  
        let alltasks = document.querySelectorAll('.del')
        for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick = function(){
                    console.log(this)
                    console.log(this.parentNode)
                this.parentNode.remove()
            }
        }
        todoele.value=""
    }
}
