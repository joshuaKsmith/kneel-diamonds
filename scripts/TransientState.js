const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0,
    "varietyId": 0,
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setVarietyChoice = (chosenVariety) => {
    transientState.varietyId = chosenVariety
    console.log(transientState)
}

export const saveOrderSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}