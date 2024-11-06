function areaTriangle() {

    let input_base = document.getElementById('input-b').value;
    let base = parseFloat(input_base)



    let input_height = document.getElementById('input-h').value;
    let height = parseFloat(input_height)



    let area = .5 * base * height;
    console.log(area)

    // display
    document.getElementById('display-area-triangle').innerText = 'Area of triangle is = ' + area + ' cm²';
}


