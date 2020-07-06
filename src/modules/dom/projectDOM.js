
const ProjectDOM = () => {
    let id = 0


    const hideProjectForm = () => {
        const pform = document.getElementById("create-project")
        pform.style.visibility = "hidden"
    }

    const showProjectForm = () => {
        const pform = document.getElementById("create-project")
        pform.style.visibility = "visible"
    }


    const projectBTN = () => {
        const container = document.getElementById("project-container")
        const projectBTN = document.createElement("button")
        projectBTN.innerHTML = "Add Project"
        projectBTN.id = "project-btn"
        projectBTN.classList.add("bg-white", "hover:bg-gray-100", "text-gray-800",
            "font-semibold", "py-2", "px-4", "border",
            "border-gray-400", "rounded", "shadow", "xl:max-w-1x4")
        container.appendChild(projectBTN)
        projectContainer()
    }

    const projectContainer = () => {
        const container = document.getElementById("project-container")
        const pContainer = document.createElement("div")
        pContainer.id = "project-section"
        pContainer.classList.add("divide-y-2", "divide-gray-400")
        container.appendChild(pContainer)
    }

    const projectElements = (pTitle, pDescription) => {
        const pContainer = document.getElementById("project-section")
        const project = document.createElement('h1')
        const container = document.createElement("div")
        const title = document.createElement('div')
        const description = document.createElement('div')

        container.classList.add("project", "text-center", "py-2")

        project.innerHTML = "Project"
        title.innerHTML = pTitle
        description.innerHTML = pDescription

        container.appendChild(project)
        container.appendChild(title)
        container.appendChild(description)

        pContainer.appendChild(container)
    }

    const incrementID = () => {
        id++
    }

    return {
        projectBTN,
        projectContainer,
        projectElements,
        hideProjectForm,
        showProjectForm
    }
}

export default ProjectDOM