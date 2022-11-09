const calculator = () => {
    const add = function (add1, add2) {
        return add1 + add2;
    };

    const subtract = function (sub1, sub2) {
        return sub1 - sub2;
    };

    const sum = function (total) {
        const summed = total.reduce((total, num) => {
            return total + num;
        }, 0);
        return summed;
    };

    const multiply = function (total) {
        const multiplied = total.reduce((total, num) => {
            return total * num;
        });
        return multiplied;
    };
    return {
        add,
        subtract,
        sum,
        multiply,
    };
};

module.exports = {
    calculator,
};
