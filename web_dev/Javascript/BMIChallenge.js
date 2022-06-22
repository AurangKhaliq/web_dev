// function bmiCalc(weight, height){
bmiCalc = (weight, height) => {
    var bmi = weight / Math.pow(height, 2);

    return Math.round(bmi);
}

// function bmiCalc1(weight, height) {
    
    bmiCalc1 = (weight, height) => {
    
    var bmi = Math.round(weight / Math.pow(height, 2));

    if (bmi < 18.5) {
        console.log(`Yor BMI is ${bmi}, you are underweight`);
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log(`Yor BMI is ${bmi}, you are normal weight`);
    }

    else if (bmi >= 24.9) {
        console.log(`Yor BMI is ${bmi}, you are overweight`);
    }

}


console.log(bmiCalc(65, 1.8));

bmiCalc1(65, 1.8);