import "./styles.css"
import ToDo from './modules/todo.js'
import Project from './modules/project.js'
import ProjectHolder from './modules/projectHolder.js'
import ProjectDOM from './modules/dom/projectDOM.js'
import ToDoDOM from './modules/dom/todoDOM.js'

const pDOM = ProjectDOM()
const todoBTN = ToDoDOM()
const pHolder = ProjectHolder()

const submitProject = (e) => {
  console.log("dfsdsf")
  const newProjectForm = document.forms["create-project"]
  const pTitle = newProjectForm.elements["title"].value
  const pDesc = newProjectForm.elements["desc"].value
  pHolder.createProject(pTitle,pDesc)
  pHolder.addProjectItemToDOM()
  //pDOM.hideProjectForm()
  //pHolder.addProjectItemToDOM()
  //console.log(pHolder.returnPList())
  newProjectForm.reset()
  e.preventDefault()
  return false
}

const showProjectForm = () => {

    pDOM.showProjectForm()
    todoBTN.showtodoBTN()
}

const hideProjectForm = () => {
  pDOM.hideProjectForm()
}

const addNewTODO = () => {
  const todoitem = Project()
  todoitem.createToDoItem()
  todoitem.addTODOItemToDOM()
}
  
const setUp = () => {
  //const projectBTNs = ProjectDOM()
  pDOM.projectBTN()
  pDOM.hideProjectForm()
  todoBTN.todoBTN()
  todoBTN.hidetodoBTN()
}

document.addEventListener('DOMContentLoaded', () => {
  setUp()

  const projectBTNListener = document.getElementById("project-btn")
  const watchSubmitProject = document.getElementById("submit-project-form")
  const todoBTNListener = document.getElementById("todo-btn")

  projectBTNListener.addEventListener("click",showProjectForm)
  watchSubmitProject.addEventListener("click",submitProject)
  todoBTNListener.addEventListener("click",addNewTODO)
})
