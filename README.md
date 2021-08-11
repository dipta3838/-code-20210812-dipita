# -code-20210812-dipita

step1: npm init
step2: npm install
step3: node index.js

response : you will get the array output as required format. 

[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
"HeightCm": 167, "WeightKg": 82}];

So you need to first define the array in this format . You can add as mus as data over here. 

 var bmi = weight/Math.pow(height, 2);

using this above formula you can get the bmi of individual person. Then set other values on the basis of bmi of each person.
