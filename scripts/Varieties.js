import { setVarietyChoice } from './TransientState.js'

const handleVarietyChoice = (event) => {
    if (event.target.name === "variety") {
        setVarietyChoice(parseInt(event.target.value))
    }
}

export const VarietyOptions = async () => {
    const response = await fetch("http://localhost:8088/varieties")
    const varieties = await response.json()

    document.addEventListener("change", handleVarietyChoice)

    return `
        <div><input type='radio' checked='checked' name='variety' value='${varieties[0].id}' />${varieties[0].variety}</div>
        <div><input type='radio' name='variety' value='${varieties[1].id}' />${varieties[1].variety}</div>
        <div><input type='radio' name='variety' value='${varieties[2].id}' />${varieties[2].variety}</div>
    `

    // return varieties.map((variety) => {
    //     return `<div><input type='radio' name='variety' value='${variety.id}' />${variety.variety}</div>`
    // }).join("")

}