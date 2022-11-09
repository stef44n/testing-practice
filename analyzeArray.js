const analyzeArray = () => {
    function length(array) {
        let arrLen = array.length;
        return arrLen;
    }

    function average(array) {
        let arrLen = array.length;

        const summed = array.reduce((total, num) => {
            return total + num;
        }, 0);

        let avgValue = summed / arrLen;

        return avgValue;
    }

    function min(array) {
        array.sort(function (a, b) {
            //sort ascending
            return a - b;
        });

        return array[0];
    }

    function max(array) {
        array.sort(function (a, b) {
            return a - b;
        });

        return array[array.length - 1];
    }

    return {
        length,
        average,
        min,
        max,
    };
};

module.exports = { analyzeArray };
