function areaRectangle() {
    let inputed_w = document.getElementById('input-w').value;
    let w = parseFloat(inputed_w)

    let inputed_l = document.getElementById('input_l').value;
    let l = parseFloat(inputed_l)

    let area = w * l;



    document.getElementById('display-area-rectangle').innerText = 'Area of rectangle is = ' + Math.abs(area) + ' ' + 'cm²'

    console.log(area)
}