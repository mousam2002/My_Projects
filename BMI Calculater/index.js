function calculate() {
    
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let bmi = (weight / ((height*height) / 10000)).toFixed(2);

    if (height == '' || height < 0 || isNaN(height)) {
        document.getElementById('height-alert').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b style="color: red;">*</b>Please give a valid height ${height}</p>`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        document.getElementById('weight-alert').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b style="color: red;">*</b>Please give a valid weight ${weight}</p>`;
    } else {
        document.getElementById('result').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b>${bmi}</b> BMI</p></div>`;

        if (bmi < 18.6) {
            document.getElementById('type').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b>Under Weight</b></p></div>`;

        } else if (bmi == 18.6 || bmi < 24.9) {
            document.getElementById('type').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b>Normal Weight</b></p></div>`;

        } else {
            document.getElementById('type').innerHTML = `<p style="margin: 0; padding: 5px 10px;"><b>Overweight</b></p></div>`;
        } 
    }
};