import Project from './project.js'
import ProjectDOM from './dom/projectDOM.js'

const ProjectHolder = () => {

    let projectHolderList = []

    const createProject = () => {
        const projectItem = Project(prompt(), prompt())
        projectHolderList.push(projectItem)
        addProjectItemToDOM()
        //projectItem.createToDoItem()
        //projectItem.addTODOItemToDOM()

    }

    const returnProjectHolderItem = () => projectHolderList.map(
        projectItem => console.log(projectItem.returnPTitle())
    )
    const addProjectItemToList = (projectItem) => {
        projectHolderList.push(projectItem)
    }


    const addProjectItemToDOM = () => {
        const projectDOM = ProjectDOM()
        //projectDOM.projectContainer()
        projectDOM.projectElements(projectHolderList[0].returnPTitle(),projectHolderList[0].returnPDesc())
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
    }
}


export default ProjectHolder