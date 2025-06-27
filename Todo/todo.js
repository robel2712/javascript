
    class Todo{
       constructor(title,description,dueto,priority,notes,checklist){
        this.title=title;
        this.description=description;
        this.dueto=dueto;
        this.priority=priority;
        this.notes=notes;
        this.checklist=checklist;
       }
    //    ti(){
    //     return `the title is ${this.title}`
    //    }
    }

    const t= new Todo('hello')
    const div = document.getElementById('div')
    const TodoArr=[]
    const addpro = document.getElementById('addpro') 
    addpro.addEventListener("click",function(){
       
       div.style.display='block'
    })
    
    

    document.querySelector('form').addEventListener("submit",function(e){
      e.preventDefault();
      const title= document.getElementById('title').value
      const description=document.getElementById('description').value
      const dueto=document.getElementById('dueto').value
      const priority=document.getElementById('priority').value
      const notes=document.getElementById('notes').value
      const checklist=document.getElementById('checklist').value
      

      
      TodoArr.push(new Todo(title,description,dueto,priority,notes,checklist))
      display()
      
    })
    

    function display(){
      
      const backbtn= document.createElement('button')
      backbtn.innerText='Back'
      
    
       let table =`<table>
                  <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Dueto</th>
                  <th>Priority</th>
                  <th>Notes</th>
                  <th>Checklist</th>
                  <th>Delete</th>
                  </tr>`
     TodoArr.forEach((element,index) => {
      
   table+=
              `
              <tr>
              <td>${element.title}</td>
              <td>${element.description}</td>
              <td>${element.dueto}</td>
              <td>${element.priority}</td>
              <td>${element.notes}</td>
              <td>${element.checklist}</td>
              <td><button class="delete" data-index="${index}">Delete</button></td>
              </tr>`
            
              
       
     
     }

   )
      table+=`</table>`
   document.body.innerHTML=table
   backbtn.addEventListener('click',function(){
      window.location.href='./Todolist.html'
    })
   document.body.appendChild(backbtn)
   }
document.addEventListener('click',function(e){
   if(e.target.classList.contains('delete')){
      const index = e.target.getAttribute('data-index')
      TodoArr.splice(index,1)
      display()
   }
}
)
   

   