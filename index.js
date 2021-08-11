//define the data array
arr = 
[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
"HeightCm": 167, "WeightKg": 82}];

//empty array
arr1= [];

arr.forEach(element => {
    
    var gender = element.Gender;
    var height =  Number(element.HeightCm);
    height = height/100;
    var weight =  Number(element.WeightKg);

    var bmi = weight/Math.pow(height, 2);

    var bmicategory;
    var healthrisk;

    if(bmi <= 18.4){
        bmicategory = 'Underweight';
        healthrisk = 'Malnutrition risk';
    }
    else if(bmi > 18.5 && bmi < 24.9){
        bmicategory = 'Normal weight';
        healthrisk = 'Low risk';
    }
    else if(bmi > 25 && bmi <29.9){
        bmicategory = 'Overweight';
        healthrisk = 'Enhanced risk';
    }
    else if(bmi > 30 && bmi < 34.9){
        bmicategory = 'Moderately obese';
        healthrisk = 'Medium risk';
    }
    else if(bmi > 35 && bmi <39.9){
        bmicategory = 'Severely obese';
        healthrisk = 'High risk';
    }
    else{
        bmicategory = 'Very Severely obese';
        healthrisk = 'Very high risk';
    }

    // console.log(bmi);
    // console.log(bmicategory);
    // console.log(healthrisk);
    
//push values to empty array
    arr1.push({
        gender: gender,
        bmi: bmi, 
        bmicategory:  bmicategory,
        healthrisk: healthrisk
    });

});


console.log(arr1);
