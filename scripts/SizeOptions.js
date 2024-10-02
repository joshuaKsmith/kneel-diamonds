import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    let sizesHTML = "<h2>Sizes</h2>"
    const sizeStringArray = sizes.map(
        (size) => {
            return `<div>
                <input type='radio' name='size' value='${size.id}' /> ${size.carets}
            </div>`
        }
    )
    sizesHTML += sizeStringArray.join("")

    return sizesHTML
}