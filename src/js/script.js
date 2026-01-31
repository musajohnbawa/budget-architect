function calculateDaily(total) {
return total / 7;
}

function financialHealthStatus(dailyLimit) {
    if (dailyLimit < 2000) {
        return {status: "Low Budget", message: "Avoid luxury expenses"};
    }else if (dailyLimit >= 2000 && dailyLimit <= 10000) {
        return {status: "Mid Budget", message: "You have a balanced budget"};
    }else {
        return {status: "High budget", message: "Consider investing your surpluas"};
    }
}

const name = "Kreg";
const weeklyBudget = 21000;

const dailyLimit = calculateDaily(weeklyBudget);
const health = financialHealthStatus(dailyLimit);

console.log(`Hi ${name}, your daily spending limit is ${dailyLimit}`);
console.log(`Financial health status: ${health.status}`);
console.log(`Advice: ${health.message}`);