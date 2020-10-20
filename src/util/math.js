// finds the summation of a bounded geometric series
function geometricSummation(lower, upper, r) {

    let sum = 0;

    for(let i = lower; i <= upper; i++) {

        sum += Math.pow(r, i);
    }

    return sum;
}

module.exports = { geometricSummation };