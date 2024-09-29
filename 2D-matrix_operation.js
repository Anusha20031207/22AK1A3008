function addMatrices(mat1, mat2) {
    return mat1.map((row, i) => row.map((val, j) => val + mat2[i][j]));
}

function subtractMatrices(mat1, mat2) {
    return mat1.map((row, i) => row.map((val, j) => val - mat2[i][j]));
}

function multiplyMatrices(mat1, mat2) {
    return mat1.map((row, i) => 
        mat2[0].map((_, j) => 
            row.reduce((sum, _, k) => sum + mat1[i][k] * mat2[k][j], 0)
        )
    );
}

function traceOfMatrix(mat) {
    return mat.reduce((sum, row, i) => sum + row[i], 0);
}

// Example usage:
const mat1 = [
    [1, 2],
    [3, 4]
];

const mat2 = [
    [5, 6],
    [7, 8]
];

console.log("Addition:");
console.log(addMatrices(mat1, mat2));

console.log("Subtraction:");
console.log(subtractMatrices(mat1, mat2));

console.log("Multiplication:");
console.log(multiplyMatrices(mat1, mat2));

console.log("Trace of mat1:");
console.log(traceOfMatrix(mat1));