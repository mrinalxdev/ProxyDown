const getColor = () => {
    const getNumber =  Math.floor(Math.random() * 1677215)
    const getHex = "#" + getNumber.toString(16)

    document.body.style.backgroundColor = getHex
    document.getElementById("color-id").innerText = getHex
}

document.getElementById("change-id").addEventListener (
    "click",
    getColor
)

getColor()