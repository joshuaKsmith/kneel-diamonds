import { setMetalChoice } from './TransientState.js'

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    return metals.map((metal) => {
        return `<div><input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}</div>`}).join("")
}