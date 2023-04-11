const getColor = () => {
    const randomNumber = Math.floor(Math.random()*1677215);
    //multiplying by this number to get an exact hexadecimal code value

    const randomCode = "#"+randomNumber.toString(16);
    //console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //to copy the color code  on clicking button without copying
    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener("click",getColor);

//initial call
getColor();