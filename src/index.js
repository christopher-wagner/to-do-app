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
  const newProjectForm = document.forms["create-project"]
  const pTitle = newProjectForm.elements["title"].value
  const pDesc = newProjectForm.elements["desc"].value
  pHolder.createProject(pTitle,pDesc)
  pHolder.renderProjectListOnDOM()
  //pDOM.hideProjectForm()
  //pHolder.addProjectItemToDOM()
  //console.log(pHolder.returnPList())
  pHolder.returnProjectIndex(pHolder[0])
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

const submitTODO = (e) => {
  //const todoitem = Project()

  const newTODOForm = document.forms["create-todoitem"]
  const tdTitle = newTODOForm.elements["td-title"].value
  const tdDesc = newTODOForm.elements["td-desc"].value
  const tdDueDate = newTODOForm.elements["td-due-date"].value
  const tdPriority = newTODOForm.elements["td-priority"].value
  
  //todoitem.createToDoItem(tdTitle,tdDesc,tdDueDate,tdPriority)
  pHolder.createTODO(tdTitle,tdDesc,tdDueDate,tdPriority)
  //todoitem.renderTODOListOnDOM()
  pHolder.renderTODOonDOM()
  newTODOForm.reset()
  e.preventDefault()
  return false
}
  
const setUp = () => {
  pDOM.projectBTN()
  pDOM.hideProjectForm()
  todoBTN.todoBTN()
  todoBTN.hidetodoBTN()
  pDOM.projectContainer()
}

document.addEventListener('DOMContentLoaded', () => {
  setUp()

  const projectBTNListener = document.getElementById("project-btn")
  const watchSubmitProject = document.getElementById("submit-project-form")
  const watchSubmitTODO = document.getElementById("submit-todo-form")

  projectBTNListener.addEventListener("click",showProjectForm)
  watchSubmitProject.addEventListener("click",submitProject)
  watchSubmitTODO.addEventListener("click",submitTODO)
})
