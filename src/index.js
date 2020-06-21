import "./styles.css"
import ToDo from './modules/todo.js'
import Project from './modules/project.js'
import ProjectHolder from './modules/projectHolder.js'

function component() {
    //element.appendChild(ToDo())
    //element.className = "text-blue-500"
    //container.appendChild(element)
    const pHolder = ProjectHolder()
    pHolder.createProject()

    pHolder.addProjectItemToDOM()


  }
  
  component()