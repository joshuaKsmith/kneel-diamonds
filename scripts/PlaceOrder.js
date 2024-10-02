import { saveOrderSubmission } from "./TransientState.js"
//import { render } from "./main.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        saveOrderSubmission()
        //render()
    }
}
export const saveOrder = () => {
    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button id='saveOrder'>Create Custom Order</button></div>"
}