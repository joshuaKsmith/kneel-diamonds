export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizesHTML = "<h2>Sizes</h2>"
    for (const size of sizes) {
        sizesHTML += `
            <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        `
    }

    return sizesHTML
}