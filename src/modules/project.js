import ToDo from './todo.js'
import TodoDOM from './dom/todoDOM.js'

const Project = (pTitle, pDescription) => {
    pTitle = pTitle
    pDescription = pDescription
    let toDoPList = []
    let pID = 0
    let tdID = 0
    var uniqueId = (() => {
        //var tdID = 0

        return function() {
            return tdID++
        }
    })()


    const createToDoItem = () => {
        const todoitem = ToDo(prompt(),prompt() , prompt(), prompt(),tdID)
        toDoPList.push(todoitem)
        uniqueId()
        console.log(todoitem.returnTDID())


    }
    const incrementTDID = () => {tdID = tdID + 1}

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

    const addTODOItemToDOM = () => {
        const todoD = TodoDOM()
        todoD.addTODOToProjectContainer(toDoPList[0].returnTitle(),
            toDoPList[0].returnDesc(),
            toDoPList[0].returnDueDate(),
            toDoPList[0].returnPriority()
        )
    }

    const incrementPID = () => {pID++}


    return {
        createToDoItem,
        returnPTitle,
        returnPDesc,
        returnPToDoList,
        returnPtodoTitle,
        returnPID,
        addToDoItemToList,
        addTODOItemToDOM,
        incrementPID
    }
}


export default Project