document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine the BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
});
