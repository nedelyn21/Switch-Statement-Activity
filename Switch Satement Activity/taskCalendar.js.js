let day = prompt("Enter a day of the week:").toLowerCase();

switch(day) {
    case "monday":
        console.log("Your task for Monday is:  Finish your assignments.");
        break;
    case "tuesday":   
        console.log("Your task for Tuesday is: Attend meetings.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Study for exams.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Complete project tasks.");
        break;
    case "friday":
        console.log("Your task for Friday is: Review weekly.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Relax and enjoy.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Prepare for the next week.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}



