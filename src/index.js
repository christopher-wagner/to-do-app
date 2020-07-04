import "./styles.css"
import ToDo from './modules/todo.js'
import Project from './modules/project.js'
import ProjectHolder from './modules/projectHolder.js'
import ProjectDOM from './modules/dom/projectDOM.js'
import ToDoDOM from './modules/dom/todoDOM.js'

const createProject = () => {

    const pHolder = ProjectHolder()
    pHolder.createProject()

    const addTODOItem = ToDoDOM()
    addTODOItem.showtodoBTN()
    const todoBTNListener = document.getElementById("todo-btn")
    todoBTNListener.addEventListener("click",addNewTODO)

}

const addNewTODO = () => {
  const project = Project()
  project.createToDoItem()
  project.addTODOItemToDOM()
}
  
const projectButton = () => {
  const projectBTNs = ProjectDOM()
  projectBTNs.projectBTN()
}

  
document.addEventListener('DOMContentLoaded', () => {
  projectButton()
  const todoBTN = ToDoDOM()
  todoBTN.todoBTN()
  todoBTN.hidetodoBTN()
  const projectBTNListener = document.getElementById("project-btn")


  projectBTNListener.addEventListener("click",createProject)



})
