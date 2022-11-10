window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // TODO: Complete the function
    let convertButton = document.getElementById("convertButton");
    let cInput = document.getElementById("cInput");
    let fInput = document.getElementById("fInput");
    let weatherImage = document.getElementById("weatherImage");
    hideImage();
    convertButton.addEventListener("click", convertTemperature);
    cInput.addEventListener("input", () => {
        if (fInput.value.length > 0) {
            fInput.value = "";
        }
    })

    fInput.addEventListener("input", () => {
        if (cInput.value.length > 0) {
            cInput.value = "";
        }
    })

    function hideImage() {
        weatherImage.style.display = "none";
    }

}

function convertCtoF(degreesCelcius) {
    // TODO: Complete the function
    return degreesCelcius * (9 / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
    // TODO: Complete the function
    return (degreesFahrenheit - 32) * 5 / 9;
}

function convertTemperature() {
    let cInput = document.getElementById("cInput");
    let fInput = document.getElementById("fInput");
    let weatherImage = document.getElementById("weatherImage");
    let errorMessage = document.getElementById("errorMessage");
    if (cInput.value.length > 0) {
        if (checkErrorInput(cInput.value)) {
            fInput.value = convertCtoF(parseFloat(cInput.value));
            showImage(parseFloat(fInput.value));
        }
    } else if (fInput.value.length > 0) {
        if (checkErrorInput(fInput.value)) {
            cInput.value = convertFtoC(parseFloat(fInput.value));
            showImage(parseFloat(fInput.value));
        }
    } else {
        errorMessage.innerText = "please enter temperature";
    }

    function checkErrorInput(input) {
        if (isNaN(parseFloat(input))) {
            errorMessage.innerHTML = input + " is not a number";
            return false;
        } else {
            errorMessage.innerHTML = "";
            return true;
        }
    }

    function showImage(degree) {
        if (degree < 32) {
            weatherImage.src = "cold.png";

        } else if (degree >= 32 && degree <= 50) {
            weatherImage.src = "cool.png";

        } else {
            weatherImage.src = "warm.png";
        }
        weatherImage.style.display = "block";

    }
}