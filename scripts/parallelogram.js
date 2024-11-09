function areaParallelogram() {

    let para_b = getInput('input-para-b')


    let para_h = getInput('input-para-h')


    let area = .5 * para_b * para_h;
    displayArea('display-area-parallelogram', area)
}

function getInput(elementId) {
    let inputedValue = document.getElementById(elementId).value;
    let input = parseFloat(inputedValue)
    return input;
}

function displayArea(elementId, area) {
    document.getElementById(elementId).innerText = 'Area of parallelogram is = ' + area + ' cm²';
}