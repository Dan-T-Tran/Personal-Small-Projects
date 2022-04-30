function inputCaloriesByDay(day) {
    day = day.toLowerCase();
    if (day == 'sunday' || day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday' || day == 'saturday') {
        if (day == 'sunday') {
            return 3000;
        }
        else if (day == 'monday') {
            return 2500;
        }
        else if (day == 'tuesday') {
            return 2700;
        }
        else if (day == 'wednesday') {
            return 2850;
        }
        else if (day == 'thursday') {
            return 2200;
        }
        else if (day == 'friday') {
            return 2900;
        }
        else if (day == 'saturday') {
            return 3500;
        }
    }
    else {
        console.log('Input a real day dawg.')
    }
}

function getTotalCalories() {
    return (inputCaloriesByDay('sunday') + inputCaloriesByDay('monday') + inputCaloriesByDay('tuesday') + inputCaloriesByDay('wednesday') + inputCaloriesByDay('thursday') + inputCaloriesByDay('friday') + inputCaloriesByDay('saturday'));
}
// 19650 calories totaled

// Getting ideal calorie total I think?
function getIdealCalories() {
    var idealDailyCalories = 2000
    return idealDailyCalories * 7
}

function calculateHealthPlan() {
    var actualCalories = getTotalCalories()
    var idealCalories = getIdealCalories()
    if (actualCalories == idealCalories) {
        return 'You are neither a gluttonous pig or a starved shell of a man.'
    }
    else if (actualCalories > idealCalories) {
        return 'It\'s time to sweat off that excess fat.'
    }
    else {
        return 'Time for seconds!'
    }
}

console.log(calculateHealthPlan());
