const ToDo = (title, description, dueDate, priority, tdID) => {
    title = title
    description = description
    dueDate = dueDate
    priority = priority
    tdID = tdID


    const returnTitle = () => title
    const returnDesc = () => description
    const returnDueDate = () => dueDate
    const returnPriority = () => priority
    const returnTDID = () => tdID

    const setTitle = (changeTitle) => title = changeTitle 
    const setDesc = (changeDesc) => description = changeDesc 
    const setDueDate = (changeDueDate) => dueDate = changeDueDate 
    const setPriority = (changePriority) => priority = changePriority 

    const incrementTDID = () => {tdID++}


    return {
        returnTitle,
        returnDesc,
        returnDueDate,
        returnPriority,
        returnTDID,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        incrementTDID

    }

}


export default ToDo