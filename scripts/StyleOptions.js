export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = "<h2>Styles</h2>"
    for (const style of styles) {
        stylesHTML += `
            <input type='radio' name='style' value='${style.id}' /> ${style.style}
        `
    }

    return stylesHTML
}