import "./styles.css"
import ToDo from './modules/todo.js'
import Project from './modules/project.js'
import ProjectHolder from './modules/projectHolder.js'

function component() {
    const container = document.getElementById("container")
    const element = document.createElement('div');

    //element.appendChild(ToDo())
    //element.className = "text-blue-500"
    //container.appendChild(element)
    const pHolder = ProjectHolder()

    const project1 = Project("Project1 Do Homework", "Do all the homeworks")
    const project2 = Project("Project2 Do Homework", "project 2 hw")

    const todo = ToDo("ToDo Item 1HomeWork", "Do all the works", "Due tomorrow", "Naw")
    const todo2 = ToDo("ToDo Item 2", "Do ", "Due ", "yes")
    const todo3 = ToDo("Project 2 todo item 1HomeWork", "Do all the works", "Due tomorrow", "Naw")
    const todo4 = ToDo("Project 2 todo item 2", "Do ", "Due ", "yes")

    project1.addToDoItemToList(todo)
    project1.addToDoItemToList(todo2)
    project2.addToDoItemToList(todo3)
    project2.addToDoItemToList(todo4)

    pHolder.addProjectItemToList(project1)
    pHolder.addProjectItemToList(project2)
    console.log("Return Project titles")
    pHolder.returnProjectHolder()
    console.log(project2)
    console.log("Return todo titles")
    project1.returnPToDoList()
    console.log("\n")
    console.log(project2)

  }
  
  component()