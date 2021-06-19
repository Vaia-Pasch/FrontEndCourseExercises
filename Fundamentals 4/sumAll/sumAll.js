const sumAll = function(smallest, largest) {
        let total = smallest + largest;
        if (total < 0); {
            return "ERROR"
        } 
        let n = (largest - smallest + 1);
        let sum = n * (smallest + largest) / 2; 
    
        return sum;
    }

module.exports = sumAll
