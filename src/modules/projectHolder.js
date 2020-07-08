import Project from './project.js'
import ProjectDOM from './dom/projectDOM.js'

const ProjectHolder = () => {

    let projectHolderList = []

    const createProject = (title,desc) => {
        const projectItem = Project(title,desc)
        addProjectItemToList(projectItem)
    }

    const createTODO = (title,desc,dueDate,priority,projectID) => {
        projectHolderList[projectID].createToDoItem(title,desc,dueDate,priority,projectID)
    }
    const returnProjectIndex = (project) => console.log(projectHolderList.indexOf(project))
    //const returnProjectHolderItem = () => projectHolderList.map(
        //projectItem => console.log(projectItem.returnPTitle())
    //)
    //const returnPList = () => projectHolderList
    const addProjectItemToList = (projectItem) => {
        projectHolderList.push(projectItem)
    }

    const renderProjectListOnDOM = () => {
        const projectDOM = ProjectDOM()
        let checkDOMforProjectList = document.getElementById("project-section")
        let child = checkDOMforProjectList.lastElementChild
        while(child) {
            checkDOMforProjectList.removeChild(child)
            child = checkDOMforProjectList.lastElementChild
        }
        projectHolderList.map(projectItem => projectDOM.projectElements(projectItem.returnPTitle(), projectItem.returnPDesc()))
    }

    const renderTODOonDOM = () => {
        projectHolderList[0].renderTODOListOnDOM()
    }

    //const addProjectItemToDOM = () => {
        //const projectDOM = ProjectDOM()
        //projectDOM.projectContainer()
        //renderProjectListOnDOM()
    //}

    const callProjectToDoTitles = (projectItem) => {
        projectItem.returnPToDoList(projectHolderList[0])
    }



    return {
        createProject,
        //returnProjectHolderItem,
        addProjectItemToList,
        //addProjectItemToDOM,
        callProjectToDoTitles,
        //returnPList,
        renderProjectListOnDOM,
        createTODO,
        renderTODOonDOM,
        returnProjectIndex
    }
}


export default ProjectHolder