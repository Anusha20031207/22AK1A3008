function interchangeFirstLastColumns(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let temp = matrix[i][0];
        matrix[i][0] = matrix[i][matrix[i].length - 1];
        matrix[i][matrix[i].length - 1] = temp;
    }
    return matrix;
}
let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
let result = interchangeFirstLastColumns(matrix);
result.forEach(row => console.log(row.join(' ')));  