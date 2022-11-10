window.addEventListener("DOMContentLoaded", domLoaded);

function showImage(tempInF) {
    if (tempInF < 32) {
        weatherImage.src = "cold.png";
    } else if (tempInF >= 32 && tempInF <= 50) {
        weatherImage.src = "cool.png";
    } else {
        weatherImage.src = "warm.png";
    }
}

function domLoaded() {
    fInput.addEventListener("input", () => {
        cInput.value = "";
    })

    cInput.addEventListener("input", () => {
        fInput.value = "";
    })

    convertButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (fInput.value !== '') {
            const tempInF = parseFloat(fInput.value);
            if (isNaN(tempInF)) {
                errorMessage.innerText = `${fInput.value} is not a number`;
                errorMessage.style.color = "red";
                return;
            }
            const tempInC = convertFtoC(tempInF);
            cInput.value = tempInC;

            showImage(tempInF);
        } else if (cInput.value !== '') {
            const tempInC = parseFloat(cInput.value);
            if (isNaN(tempInC)) {
                errorMessage.innerText = `${cInput.value} is not a number`;
                errorMessage.style.color = "red";
                return;
            }
            const tempInF = convertCtoF(tempInC);
            fInput.value = tempInF;

            showImage(tempInF);
        }
    })
}


function convertCtoF(degreesCelsius) {
    return (degreesCelsius * 9 / 5 + 32);
}


function convertFtoC(degreesFahrenheit) {
    return ((degreesFahrenheit - 32) * 5 / 9);
}