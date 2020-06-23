/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let length = matrix.length;
    
    for(let i=0; i<length; i++){
        for(let j=i; j<length; j++ ){
                let temp = matrix[j][i];
                matrix[j][i] = matrix[i][j];
                matrix[i][j] = temp;
        }
    }
    
    for(let i=0; i<length; i++){
        let j=0, k=length-1;
        while(j < k ){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][k];
            matrix[i][k] = temp;
            j++, k--
        }
    }
    
    return matrix
};