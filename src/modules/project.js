import ToDo from './todo.js'


const Project = (pTitle, pDescription) => {
    pTitle = pTitle
    pDescription = pDescription
    let toDoPList = []

    const createToDoItem = () => {
        const todoitem = ToDo(prompt(),prompt() , prompt(), prompt())
        toDoPList.push(todoitem)
    }

    const returnPTitle = () => pTitle
    const returnPDesc = () => pDescription
    const returnPToDoList = () => toDoPList.map(
        todoitem => console.log(todoitem.returnTitle())
    )

    const returnPtodoTitle = (todoitem) => {
        todoitem.returnTitle()
    }

    const addToDoItemToList = (todoitem) => {
        toDoPList.push(todoitem)
    }

    const addTODOItemToDOM = () => {
        const container = document.getElementById("container")
        const DOMCONSOLE = document.createElement('h1')
        const TODOContainer = document.createElement("div")
        const title = document.createElement('div')
        const description = document.createElement('div')
        const dueDate = document.createElement('div')
        const priority = document.createElement('div')

        DOMCONSOLE.innerHTML = "TODO Item"
        title.innerHTML = toDoPList[0].returnTitle()
        description.innerHTML = toDoPList[0].returnDesc()
        dueDate.innerHTML = toDoPList[0].returnDueDate()
        priority.innerHTML = toDoPList[0].returnPriority()

        TODOContainer.appendChild(DOMCONSOLE)
        TODOContainer.appendChild(title)
        TODOContainer.appendChild(description)
        TODOContainer.appendChild(dueDate)
        TODOContainer.appendChild(priority)

        container.appendChild(TODOContainer)
    }

    return {
        createToDoItem,
        returnPTitle,
        returnPDesc,
        returnPToDoList,
        returnPtodoTitle,
        addToDoItemToList,
        addTODOItemToDOM
    }
}


export default Project