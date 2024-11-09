function areaPentagon() {

    let pent_p = getInput('input-pentagon-p')


    let pent_b = getInput('input-pentagon-b')


    let area = .5 * pent_b * pent_p;
    displayArea('display-area-pentagon', area)
}


function getInput(elementId) {
    let inputedValue = document.getElementById(elementId).value;
    let input = parseFloat(inputedValue)
    return input;
}

function displayArea(elementId, area) {
    document.getElementById(elementId).innerText = 'Area of pentagon is = ' + area + ' cm²';
}