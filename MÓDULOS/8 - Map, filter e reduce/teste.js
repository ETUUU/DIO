            // Teste sem o "This"


// function op(item) {
//     return item * 2;
// }

// function mapa(arr) {
//     return arr.map(op)
// };

// nums = [1, 2, 3 ,4];

// console.log(mapa(nums));


            // Teste com o "This"

const maca = 
    {
        value: 1,
    };
const banana = 
    {
        value: 2,
    }


function mapa(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
};

nums = [1, 2, 3 ,4];

console.log(mapa(nums, banana));