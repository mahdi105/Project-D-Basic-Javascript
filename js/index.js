// Area's Input Field Value
function areaInputValue(fieldId) {
    const areaXInput = document.getElementById(fieldId);
    const areaXInputValueString = areaXInput.value;
    const areaValue = parseFloat(areaXInputValueString);
    const areaValueFixedTo = areaValue.toFixed(2);
    const areaInputX = parseFloat(areaValueFixedTo);
    // areaXInput.value = '';
    return areaInputX;

}
// Get The Element Value as input value such as Ellipse, Pentagon, Rhombus, Parallelogram
function getElementNumberValue(elementId){
        // Get the Input Value from an Element
        const inputOneElement = document.getElementById(elementId);
        const inputOneString = inputOneElement.innerText;
        const inputOneValue = parseFloat(inputOneString);
        const inputOneValueString = inputOneValue.toFixed(2);
        const inputOne = parseFloat(inputOneValueString);
        return inputOne
}
// Adding Event Listener to Calculate button of Triangle Card for calculating Triangle Area
document.getElementById('tri-btn').addEventListener('click', function () {
    // Get the Triangle Breath Value from Input ('tri-b')
    const triangleB = areaInputValue('tri-b');
    // Get the Triangle Height Value from Input ('tri-h')
    const triangleH = areaInputValue('tri-h');
    if (triangleB > 0 && triangleH > 0 && !isNaN(triangleB) && !isNaN(triangleH)) {
        // Get the Ordered List for displaying calculated area
        const ol = document.getElementById('calculate-result');
        // Total Calculated Area
        const areaValue = 0.5 * triangleB * triangleH;
        const areaValueFixedTo = areaValue.toFixed(2);
        const area = parseFloat(areaValueFixedTo);
        const areaUnit = 'cm<sup>2</sup>';
        //Result Item that will be displayed after occuring this event
        const resultItem = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const button = document.createElement('button');
        //Area Shape Name
        const areaNameElement = document.getElementById('triangle');
        const areaName = areaNameElement.innerText;
        //Area Display Value
        const displayAreaValue = area + areaUnit;

        button.innerHTML = 'Conver To m<sup>2</sup>';
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('text-white');
        
        span1.innerHTML = areaName;
        span2.innerHTML = displayAreaValue;
        span2.classList.add('mx-3');
        button.style.fontSize = '10px';
        resultItem.style.fontSize = '11px';
        resultItem.style.marginBottom = '5px';
        // Append Child into the List Item
        resultItem.appendChild(span1);
        resultItem.appendChild(span2);
        resultItem.appendChild(button);
        // resultItem.classList.add('d-flex align-items-center justify-content-between');
        ol.appendChild(resultItem);
    } else {
        alert("Please Enter the Breadth and Height of the Triangle")
    }
})
// Adding Event Listener to Calculate button of Rectangle Card for calculating Rectangle Area
document.getElementById('rect-btn').addEventListener('click', function () {
    // Get the Rectangle Width Value from Input ('tri-b')
    const rectangleW = areaInputValue('rect-w');
    // Get the Rectangle Height Value from Input ('tri-h')
    const rectangleL = areaInputValue('rect-l');
    if (rectangleW > 0 && rectangleL > 0 && !isNaN(rectangleW) && !isNaN(rectangleL)) {
        // Get the Ordered List for displaying calculated area
        const ol = document.getElementById('calculate-result');
        // Total Calculated Area
        const areaValue = rectangleW * rectangleL;
        const areaValueFixedTo = areaValue.toFixed(2);
        const area = parseFloat(areaValueFixedTo);
        const areaUnit = 'cm<sup>2</sup>';
        //Result Item that will be displayed after occuring this event
        const resultItem = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const button = document.createElement('button');
        //Area Shape Name
        // const areaNameElement = document.getElementById('triangle');
        const areaNameElement = document.getElementById('rectangle');
        const areaName = areaNameElement.innerText;
        //Area Display Value
        const displayAreaValue = area + areaUnit;
        button.innerHTML = 'Convert To m<sup>2</sup>';
        button.classList.add('btn');

        button.classList.add('btn-primary');
        button.classList.add('text-white');
        
        span1.innerHTML = areaName;
        span2.innerHTML = displayAreaValue;
        span2.classList.add('mx-3');
        button.style.fontSize = '10px';
        resultItem.style.fontSize = '11px';
        resultItem.style.marginBottom = '5px';
        // Append Child into the List Item
        resultItem.appendChild(span1);
        resultItem.appendChild(span2);
        resultItem.appendChild(button);
        // resultItem.classList.add('d-flex align-items-center justify-content-between');
        ol.appendChild(resultItem);
    } else {
        alert("Please Enter the width and length of the Rectangle")
    }
})

// Calculate The Ellipse Area
document.getElementById('ellipse-btn').addEventListener('click',function(){
    // Get the First Input Value
    const firstInputValue =  getElementNumberValue('a');
    // Get the Second Input Value
    const secondInputValue =  getElementNumberValue('b');
    // Get the pi
    const piValue = 3.1416;
    const piString = piValue.toFixed(2);
    const pi = parseFloat(piString);
    // Ellipse Area = 3.1416 * a * b
    const ellipseAreaValue = pi * firstInputValue * secondInputValue;
    const ellipseAreaValueString = ellipseAreaValue.toFixed(2);
    const ellipseArea = parseFloat(ellipseAreaValueString)
    // Show the result
    const displayAreaElement = document.getElementById('ellipseArea');
    displayAreaElement.innerHTML = ellipseArea + 'cm<sup>2</sup>';
})
// Calculate The Rhombus Area
document.getElementById('rhombus-btn').addEventListener('click',function(){
    // Get the First Input Value
    const firstInputValue =  getElementNumberValue('rhomInputOne');
    // Get the Second Input Value
    const secondInputValue =  getElementNumberValue('rhomInputTwo');
    // Rhombus Area = 0.5 * a * b
    const rhombusAreaValue = 0.5 * firstInputValue * secondInputValue;
    const rhombusAreaValueString = rhombusAreaValue.toFixed(2);
    const rhombusArea = parseFloat(rhombusAreaValueString);
    // Show the result
    const displayAreaElement = document.getElementById('rhombusArea');
    displayAreaElement.innerHTML = rhombusArea + 'cm<sup>2</sup>';
})
// Calculate The Pentagon Area
document.getElementById('penta-btn').addEventListener('click',function(){
    // Get the First Input Value
    const firstInputValue =  getElementNumberValue('pentaInputOne');
    // Get the Second Input Value
    const secondInputValue =  getElementNumberValue('pentaInputTwo');
    // Pentagon Area = 0.5 * a * b
    const pentagonAreaValue = 0.5 * firstInputValue * secondInputValue;
    const pentagonAreaValueString = pentagonAreaValue.toFixed(2);
    const pentagonArea = parseFloat(pentagonAreaValueString)
    // Show the result
    const displayAreaElement = document.getElementById('pentagonArea');
    displayAreaElement.innerHTML = pentagonArea + 'cm<sup>2</sup>';
})
// Calculate The Parallelogram Area
document.getElementById('para-btn').addEventListener('click',function(){
    // Get the First Input Value
    const firstInputValue =  getElementNumberValue('paraInputOne');
    // Get the Second Input Value
    const secondInputValue =  getElementNumberValue('paraInputTwo');
    // Pentagon Area = a * b
    const parallelogramAreaValue = firstInputValue * secondInputValue;
    const parallelogramAreaValueString = parallelogramAreaValue.toFixed(2);
    const parallelogramArea = parseFloat(parallelogramAreaValueString)
    // Show the result
    const displayAreaElement = document.getElementById('parallelogramArea');
    displayAreaElement.innerHTML = parallelogramArea + 'cm<sup>2</sup>';
})