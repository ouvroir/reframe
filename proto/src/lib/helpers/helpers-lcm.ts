// Function to find the greatest common divisor (GCD)
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

// Function to find the least common multiple (LCM)
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

// Function to find the LCM of an array of numbers
function lcmArray(arr: number[]): number {
    if (arr.length < 2) {
        return arr[0] || 1; // If there's only one number, return it; if none, return 1.
    }

    let result = lcm(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }

    return result;
}