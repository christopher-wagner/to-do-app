import ToDo from './todo.js'
import TodoDOM from './dom/todoDOM.js'

const Project = (pTitle, pDescription) => {
    pTitle = pTitle
    pDescription = pDescription
    let toDoPList = []
    let pID = 0
    //let tdID = 0



    const createToDoItem = (title,desc,dueDate,priority,projectID) => {
        const todoitem = ToDo(title,desc,dueDate,priority,projectID)
        addToDoItemToList(todoitem)
    }
    //const incrementTDID = () => {tdID = tdID + 1}

    const returnPTitle = () => pTitle
    const returnPDesc = () => pDescription
    const returnPToDoList = () => toDoPList.map(
        todoitem => console.log(todoitem.returnTitle())
    )

    const returnPtodoTitle = (todoitem) => {
        todoitem.returnTitle()
    }

    const returnPID = () => pID

    const addToDoItemToList = (todoitem) => {
        toDoPList.push(todoitem)
    }

    const renderTODOListOnDOM = () => {
        const todoDOM = TodoDOM()
        let checkDOMfortodoList = document.getElementById("td-section")
        let child = checkDOMfortodoList.lastElementChild
        while(child) {
            checkDOMfortodoList.removeChild(child)
            child = checkDOMfortodoList.lastElementChild
        }
        toDoPList.map(todoItem => todoDOM.addTODOToProjectContainer(todoItem.returnTitle(), 
        todoItem.returnDesc(),
        todoItem.returnDueDate(),
        todoItem.returnPriority())
        )
    }

    // const addTODOItemToDOM = () => {
    //     const todoD = TodoDOM()
    //     todoD.addTODOToProjectContainer(toDoPList[0].returnTitle(),
    //         toDoPList[0].returnDesc(),
    //         toDoPList[0].returnDueDate(),
    //         toDoPList[0].returnPriority()
    //     )
    //}

    const incrementPID = () => {pID++}


    return {
        createToDoItem,
        returnPTitle,
        returnPDesc,
        returnPToDoList,
        returnPtodoTitle,
        returnPID,
        addToDoItemToList,
        //addTODOItemToDOM,
        renderTODOListOnDOM,
        incrementPID
    }
}


export default Project