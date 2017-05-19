// Find the number of unique pairs of neighboring elements with equal values in the given matrix.

// Example

// For

// a = [[1, 1, 1],
//      [1, 1, 1],
//      [1, 1, 1]]
// the output should be neighbouringElements(a) = 12.

function neighbouringElements(a) {
    var count = 0;
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a[0].length; j++){
            if(a[i][j] == a[i][j+1]) {
                count++;
            }
            if(a[i+1]){
                if(a[i+1][j] == a[i][j]){
                    count++;
                }
            }
        }
    }
    return count;
}