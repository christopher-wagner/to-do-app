
const Project = (pTitle, pDescription) => {
    pTitle = pTitle
    pDescription = pDescription
    let toDoPList = []
    const returnPTitle = () => pTitle
    const returnPDesc = () => pDescription
    const returnPToDoList = () => toDoPList.map(
        todoitem => console.log(todoitem.returnTitle())
    )

    const addToDoItemToList = (todoitem) => {
        toDoPList.push(todoitem)
    }



    return {
        returnPTitle,
        returnPDesc,
        addToDoItemToList,
        returnPToDoList,
    }
}


export default Project