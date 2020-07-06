import Project from './project.js'
import ProjectDOM from './dom/projectDOM.js'

const ProjectHolder = () => {

    let projectHolderList = []

    const createProject = (title,desc) => {
        //const newProjectForm = document.forms["create-project"]
        const projectItem = Project(title,desc)
        //const projectItem = Project(newProjectForm.elements["title"].value,
            //newProjectForm.elements["desc"].value)
        projectHolderList.push(projectItem)
        console.log(projectHolderList)
        //addProjectItemToDOM()
        //console.log(projectHolderList)
        //projectItem.createToDoItem()
        //projectItem.addTODOItemToDOM()
        //newProjectForm.reset()
        //return false
    }

    const returnProjectHolderItem = () => projectHolderList.map(
        projectItem => console.log(projectItem.returnPTitle())
    )
    const returnPList = () => projectHolderList
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

    const addProjectItemToDOM = () => {
        const projectDOM = ProjectDOM()
        projectDOM.projectContainer()
        renderProjectListOnDOM()
        //projectHolderList.map(
            //projectItem => projectDOM.projectElements(projectItem[0].returnPTitle(), projectItem[0].returnPDesc()))
        //projectDOM.projectElements(projectHolderList[0].returnPTitle(), projectHolderList[0].returnPDesc())
        //projectHolderList.forEach( 
            //projectItem => projectDOM.projectElements(projectItem[0].returnPTitle(), projectItem[0].returnPDesc())
        //)
        //projectHolderList.forEach(function(projectItem) {
            //projectDOM.projectElements(projectItem[0].returnPTitle(), projectItem[0].returnPDesc())
        //}
        //)
    }

    const callProjectToDoTitles = (projectItem) => {
        projectItem.returnPToDoList(projectHolderList[0])
    }

    return {
        createProject,
        returnProjectHolderItem,
        addProjectItemToList,
        addProjectItemToDOM,
        callProjectToDoTitles,
        returnPList
    }
}


export default ProjectHolder