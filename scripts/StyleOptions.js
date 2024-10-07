import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)

    return styles.map((style) => {
        return `<div><input type='radio' name='style' value='${style.id}' /> ${style.style}</div>`}).join("")
}