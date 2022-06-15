function solve(first, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i ++) {
        sum += first[i];
    }
    return sum;
}
console.log(solve([10, 20, 30, 40, 50, 60], 2, 4));
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));