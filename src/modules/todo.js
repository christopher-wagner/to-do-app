const ToDo = (title, description, dueDate, priority,projectID) => {
    title = title
    description = description
    dueDate = dueDate
    priority = priority
    projectID = projectID


    const returnTitle = () => title
    const returnDesc = () => description
    const returnDueDate = () => dueDate
    const returnPriority = () => priority
    const returnProjectID = () => returnProjectID

    const setTitle = (changeTitle) => title = changeTitle 
    const setDesc = (changeDesc) => description = changeDesc 
    const setDueDate = (changeDueDate) => dueDate = changeDueDate 
    const setPriority = (changePriority) => priority = changePriority 
    const setProjectID = (changeProjectID) => projectID = changeProjectID


    return {
        returnTitle,
        returnDesc,
        returnDueDate,
        returnPriority,
        returnProjectID,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        setProjectID

    }

}


export default ToDo