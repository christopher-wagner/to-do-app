
const TodoDOM = () => {


    const todoBTN = () => {
        const container = document.getElementById("todo-container")
        const todoBTN = document.createElement("button")
        todoBTN.innerHTML = "Add New ToDo"
        todoBTN.id = "todo-btn"
        todoBTN.classList.add("bg-white", "hover:bg-gray-100", "text-gray-800",
        "font-semibold", "py-2", "px-4", "border", 
        "border-gray-400", "rounded", "shadow")
        container.appendChild(todoBTN)
        todoContainer()
    }

    const todoContainer = () => {
        const container = document.getElementById("todo-container")
        const tdContainer = document.createElement("div")
        tdContainer.id = "td-section"
        tdContainer.classList.add("divide-y-2","divide-gray-400")
        container.appendChild(tdContainer)
    }

    const hidetodoBTN = () => {
        const btn = document.getElementById("todo-btn")
        btn.style.visibility = "hidden"
    }

    const showtodoBTN = () => {
        const btn = document.getElementById("todo-btn")
        btn.style.visibility = "visible"
    }

    const addTODOToProjectContainer = (tdTitle,tdDescription,tdDueDate,tdPriority) => {
        const container = document.getElementById("td-section")
        const DOMCONSOLE = document.createElement('h1')
        const TODOContainer = document.createElement("div")
        const title = document.createElement('div')
        const description = document.createElement('div')
        const dueDate = document.createElement('div')
        const priority = document.createElement('div')

        TODOContainer.id = "todo"
        TODOContainer.classList.add("text-center","py-2")

        DOMCONSOLE.innerHTML = "TODO Item"
        title.innerHTML = tdTitle
        description.innerHTML = tdDescription
        dueDate.innerHTML = tdDueDate
        priority.innerHTML = tdPriority

        TODOContainer.appendChild(DOMCONSOLE)
        TODOContainer.appendChild(title)
        TODOContainer.appendChild(description)
        TODOContainer.appendChild(dueDate)
        TODOContainer.appendChild(priority)

        container.appendChild(TODOContainer)

    }

    return {
        todoBTN,
        hidetodoBTN,
        showtodoBTN,
        addTODOToProjectContainer,

    }
}

export default TodoDOM