var year = [1956, 2008, 1992];
var result = [];

for (var i = 0; i < year.length; i++) {
    result[i] = year[i];
}


/*
for (var i = 0; i < result.length; i++) {
    if (2018 - result[i] >= 18) {
        console.log(result[i] + 'is full age')
    } else {
        console.log(result[i] + 'is not full age')
    }
}

*/

function full_age(full_1, full_2) {
    for (var i = 0; i < full_1.length; i++) {
        if (2018 - result[i] >= 18) {
            full_2[i] = true;
        } else {
            full_2[i] = false;
        }
    }
    console.log(full_1);
    console.log(full_2);
}


full_age([1956, 2008, 1992], []);