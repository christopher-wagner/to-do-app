import Project from './project.js'

const ProjectHolder = () => {

    let projectHolderList = []

    const createProject = () => {
        const projectItem = Project(prompt(), prompt())
        projectHolderList.push(projectItem)
        projectItem.createToDoItem()
        projectItem.addTODOItemToDOM()
    }

    const returnProjectHolderItem = () => projectHolderList.map(
        projectItem => console.log(projectItem.returnPTitle())
    )
    const addProjectItemToList = (projectItem) => {
        projectHolderList.push(projectItem)
    }

    const addProjectItemToDOM = () => {
        const container = document.getElementById("container")
        const DOMCONSOLE = document.createElement('h1')
        const projectContainer = document.createElement("div")
        const title = document.createElement('div')
        const description = document.createElement('div')

        DOMCONSOLE.innerHTML = "Project"
        title.innerHTML = projectHolderList[0].returnPTitle()
        description.innerHTML = projectHolderList[0].returnPDesc()

        projectContainer.appendChild(DOMCONSOLE)
        projectContainer.appendChild(title)
        projectContainer.appendChild(description)

        container.appendChild(projectContainer)
    }

    const callProjectToDoTitles = (projectItem) => {
        projectItem.returnPToDoList(projectHolderList[0])
    }
    
    return {
        createProject,
        returnProjectHolderItem,
        addProjectItemToList,
        addProjectItemToDOM,
        callProjectToDoTitles
    }
}


export default ProjectHolder