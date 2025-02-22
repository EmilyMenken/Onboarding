// FizzBuzz in TS

class FizzBuzz {
private static getValue(num: number): string {
let result = num.toString();
        
if (num % 3 === 0 && num % 5 === 0) {
    result += " fizzbuzz";
    } else if (num % 3 === 0) {
    result += " fizz";
    } else if (num % 5 === 0) {
    result += " buzz";
    }
        
    return result;
    }//end getValue

    public static run(): void {
    for (let i = 1; i <= 100; i++) {
    console.log(FizzBuzz.getValue(i));
    }
}//end run
}//end FizzBuzz

FizzBuzz.run();
