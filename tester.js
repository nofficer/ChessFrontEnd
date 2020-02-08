board = [0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15,0,2,4,6,9,11,13,15]


function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

console.log(listToMatrix(board,8))
