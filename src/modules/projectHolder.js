

const ProjectHolder = () => {

    let projectHolderList = []

    const returnProjectHolder = () => projectHolderList.map(
        projectItem => console.log(projectItem.returnPTitle())
    )
    const addProjectItemToList = (projectItem) => {
        projectHolderList.push(projectItem)
    }
    return {
        returnProjectHolder,
        addProjectItemToList
    }
}


export default ProjectHolder