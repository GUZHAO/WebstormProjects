var height_1 = 170;
var height_2 = 185;
var height_3 = 180;

var age_1 = 16;
var age_2 = 25;
var age_3 = 21;

var score_1 = (height_1 + 5) * age_1;
var score_2 = (height_2 + 5) * age_2;
var score_3 = (height_3 + 5) * age_3;

if (score_1 > score_2 && score_1 > score_3) {
    console.log("person 1 won and scored " + score_1)
} else if (score_2 > score_1 && score_2 > score_3) {
    console.log("person 2 won and scored " + score_2)
} else if (score_3 > score_1 && score_3 > score_2) {
    console.log("person 3 won and scored " + score_3)
} else {
    console.log("tie")
}


