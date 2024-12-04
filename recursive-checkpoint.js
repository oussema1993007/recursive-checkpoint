//Checkpoint Recursive : Leap Year exercice :
function leapYear(y) {
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        console.log("This is a Leap Year!!!!!!!!");
    } else {
        console.log("This is not a Leap Year!!!!!!!!");
    }
}
leapYear(2021);


//Ticket Pricing :
function ticketPricing(age) {

    if (age <= 12) {
        console.log("10$");
    } else if ((age >= 13) && (age <= 17)) {
        console.log("15$");
    } else {
        console.log("20$");
    }

}
ticketPricing(100);


//weather advice:
function weatherClothing(temp) {
    switch(true) {
        case (temp < 0):
            alert("sibiria, elbes 3 kbabet");
            break;
        case (temp >= 0 && temp < 10):
            alert("elbes kabbout w des gants");
            break;
        case (temp >= 10 && temp < 20):
            alert("elbes 7ouija khfifa chouaya");
            break;
        case (temp >= 20 && temp < 30):
            alert("eddenia nar ");
            break;
        default:
            alert("blis we9ef ala dhilou");
    }
}
weatherClothing(prompt());


//fibonacci :
function fibonacci(n) {
    let fibArray = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    let result = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        result[i] = fibArray[i];
    }

    console.log(result);
}

fibonacci(10);


//palindrome method :
function isPalindrome(string) {
    let rev = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    if (rev == string) {
        return true
    } else {
        return false;
    }
}
console.log(isPalindrome(prompt()));

