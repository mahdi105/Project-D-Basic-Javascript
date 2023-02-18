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
// Adding Event Listener to Calculate button of Triangle Card for calculating Triangle Area
document.getElementById('tri-btn').addEventListener('click', function () {
    // Get the Triangle Breath Value from Input ('tri-b')
    const triangleB = areaInputValue('tri-b');
    // Get the Triangle Height Value from Input ('tri-h')
    const triangleH = areaInputValue('tri-h');
    if (triangleB > 0 && triangleH > 0) {
        // Get the Ordered List for displaying calculated area
        const ol = document.getElementById('calculate-result');
        // Total Calculated Area
        const area = 0.5 * triangleB * triangleH;
        const areaUnit = 'cm<sup>2</sup>';
        //Result Item that will be displayed after occuring this event
        const resultItem = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const areaNameElement = document.getElementById('triangle');
        //Area Shape Name
        const areaName = areaNameElement.innerText;
        //    Area Display Value
        const displayAreaValue = area + areaUnit;
        span1.innerHTML = areaName;
        span2.innerHTML = displayAreaValue;
        span2.classList.add('mx-3');
        resultItem.appendChild(span1);
        resultItem.appendChild(span2);
        // resultItem.classList.add('d-flex align-items-center justify-content-between');
        ol.appendChild(resultItem);
    } else {
        alert("Please Enter the Breadth and Height of the Triangle")
    }
})