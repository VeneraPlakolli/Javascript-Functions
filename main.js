
// 1.Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 
// 1 if it is vice versa, and 0 if they are equal.
/**/
function compare(a, b) {
    if(a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compare(3, 3));



// 2. Write a function that counts the factorial of a given number.
/**/
function factorial(number) {
    let res = 1;
    if(number == 0 || number == 1){
        return res;
    }
    for(let i=number; i>=1; i--){
        res *= i;
    }
    return res;
}

console.log(factorial(4));



// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
/**/
function numbers() {
    let a = prompt('Enter first number: ');
    let b = prompt('Enter second number: ');
    let c = prompt('Enter third number: ');

    return a+b+c;
}

console.log(numbers());


// 4.Write a function that accepts the width and length of a rectangle and calculates its area. 
// If there is only one parameter given, it counts as a square. 
/**/
function calcarea(width, length) {
    let area;
    if(length == undefined) {
        area = width*width;
    } else {
        area = width*length;
    }
    console.log(area);
}

calcarea(2);



// 5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of 
// all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
/**/
function perfectnumber(number) {
    let sum = 0;
    for(let i=0; i<number; i++) {
        if(number % i == 0){
            sum += i;
        }
    }
    if(sum == number) {
        console.log('Perfect number!');
    } else{
        console.log('Its not perfect number!');
    }
}

perfectnumber(6);


// 6. Write a function that accepts the min and max values of a range, and only puts out the perfect numbers 
// within that range. Use the previous function to check, if numbers are perfect. 
/**/
function perfectRangeNumbers(min, max) {
    let sum;
    for(let i=min; i<max; i++) {
        sum = 0;
        for(let j=0; j<i; j++) {
            
            if(i % j == 0){
                sum += j;
            }
        }
        if(sum == i) {
            console.log('Perfect number: ' + i);
        }
    }
}

perfectRangeNumbers(2, 99);




// 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
// If the seconds are not given, they should be displayed as 00.
/**/
function time(hour, minute, second) {
    if(second == undefined) {
        second = '00';
    }
    return hour + ':' + minute + ':' + second;
}

console.log(time(1, 23));



// 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
// For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
/**/
function secondTime(hour, minute, second) {
    let hourToSecond = hour * 3600;
    let minuteToSecond = minute * 60;

    console.log(hourToSecond + minuteToSecond + second);
}

secondTime(1, 25, 43);



// 9. Write a function that accepts the number of seconds, 
// translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
/**/
function hourMinuteSecond(second) {
    let hours   = Math.floor(second / 3600);
    let minutes = Math.floor((second - (hours * 3600)) / 60);
    let seconds = second - (hours * 3600) - (minutes * 60);

    console.log(hours + ':' + minutes + ':' + seconds);
}

hourMinuteSecond(5143);



// 10. Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 
// 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: 
// at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

function twoDates(hour1, minute1, second1, hour2, minute2, second2) {
    let hourToSecond1 = hour1 * 3600;
    let minuteToSecond1 = minute1 * 60;
    let firstdate = hourToSecond1 + minuteToSecond1 + second1;
    console.log('First date: ' + (hourToSecond1 + minuteToSecond1 + second1));

    let hourToSecond2 = hour2 * 3600;
    let minuteToSecond2 = minute2 * 60;
    let seconddate = hourToSecond2 + minuteToSecond2 + second2;
    console.log('Second date: ' + (hourToSecond2 + minuteToSecond2 + second2));

    let difference = firstdate - seconddate;
    console.log('Difference: ' + difference);

    let h = Math.floor(difference / 3600);
    let m = Math.floor((difference - (h*3600)) / 60);
    let s = difference - (h * 3600) - (m * 60);

    console.log('Difference in hh:mm:ss fomrat: ' + h + ':' + m + ':' + s);


}

twoDates(1, 25, 43, 1, 10, 50);




