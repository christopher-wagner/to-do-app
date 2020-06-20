const ToDo = (title, description, dueDate, priority) => {
    title = title
    description = description
    dueDate = dueDate
    priority = priority


    const returnTitle = () => title
    const returnDesc = () => description
    const returnDueDate = () => dueDate
    const returnPriority = () => priority
    // const returnEachValue = (todoitem) => todoitem.(element => {
    //     element.returnTitle()
    // });


    const setTitle = (changeTitle) => title = changeTitle 
    const setDesc = (changeDesc) => description = changeDesc 
    const setDueDate = (changeDueDate) => dueDate = changeDueDate 
    const setPriority = (changePriority) => priority = changePriority 



    return {
        returnTitle,
        returnDesc,
        returnDueDate,
        returnPriority,
        //returnEachValue,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,

    }

}


export default ToDo