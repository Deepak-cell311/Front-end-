# This project is based on the Calculation of BMI(Body mass Index).

1. It takes two inputs from the user.
2. First input for the height in centimeters(cms).
3. Second input for the weight in Kilograms(kg).
4. After entering the two inputs need to click the button i.e "calculate" to know the  BMI(Body mass Index).

#
# - Thank you and keep coding -


# Here, I provide the JavaScript code separately to enhance clarity and understanding.


```javascript code

 function change() { document.getElementById('btn').style.backgroundColor = 'yellow' }
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;} 
else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give the valid weight ${wight}`;} 
else {const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `Your Bmi is ${bmi}`;}
        });
```