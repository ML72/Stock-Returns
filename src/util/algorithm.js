import { geometricSummation } from './math';

// finds the constants A and B to use in the percent total deduction
function getA(x) {

    return Math.min(Math.sqrt(100*x), 100);
}

function getB(x) {

    return 20/Math.sqrt(x);
}

// calculates the percent of the remaining portion of the pool to give out
function percentTotalDeduction(totalScore) {

    const r = 0.99;

    let a = getA(totalScore);
    let b = getB(totalScore);

    return a*(1-r)*geometricSummation(0, b*totalScore, r);
}

// determines the total amount of company stock to give out, in percentage
function percentTotalDistribution(poolRemaining, totalScore) {

    return poolRemaining*percentTotalDeduction(totalScore)/100;
}

// calculates how much each individual gets
function percentIndividual(score, totalScore, totalDistribution) {

    return totalDistribution*score/totalScore;
}

// converts a performance object to stock distributions
export const performanceToStocks = (performances) => {
    
    // get number of years
    let maxLength = Math.max(...Object.values(performances).map((performance) => {
        return performance.length;
    }));

    // initialize stock states
    let stockState = {
        "COMPANY": 100.00
    }

    let stockDistribution = {
        "COMPANY": [100.00]
    }

    const employees = Object.keys(performances);

    employees.forEach((employee) => {
        stockState[employee] = 0.00;
        stockDistribution[employee] = [0.00];
    });

    // calculate stock distributions over time
    for(let year = 0; year < maxLength; year++) {

        // configure returns
        if(stockState["COMPANY"] <= 50) {

            employees.forEach((employee) => {

                const toReturn = stockState[employee]*0.08;
                    
                stockState[employee] -= toReturn;
                stockState["COMPANY"] += toReturn;
            });
        }

        // find how much company has to give
        let companyLeft = stockState["COMPANY"];
        let totalScore = 0;
        
        employees.forEach((employee) => {
            if(performances[employee][year]) {
                totalScore += performances[employee][year];
            }
        });

        let companyToGive = percentTotalDistribution(companyLeft, totalScore);

        // find how much each employee gets and assign stocks respectively
        employees.forEach((employee) => {

            const performance = performances[employee][year] ? performances[employee][year] : 0;

            const toGet = percentIndividual(performance, totalScore, companyToGive);

            stockState[employee] += toGet;
        });

        stockState["COMPANY"] -= companyToGive;

        for(const [name, stock] of Object.entries(stockState)) {
            
            stockDistribution[name].push(Math.round(100*stock)/100);
        }
    }

    return stockDistribution;
}