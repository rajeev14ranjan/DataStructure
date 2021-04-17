function findMaxLen(str) {
    let n = str.length;
    //L(0,n-1) = same: 2 + L(1, n-2);
    //diff max(L(1,n-1), L(0,n-2))

    //L(i,i) = 1;
    //L(i, i+1) = 2 when str[i] = str[i+1]

    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push((new Array(n)).fill('*'));
    }

    for (let i = 0; i < n; i++)
        ans[i][i] = 1;

    for (let row = n - 1; row >= 0; row--) {
        for (let col = row + 1; col < n; col++) {
            if (row + 1 == col && str[row] === str[col]) {
                ans[row][col] = 2;
                continue;
            }

            if (str[row] === str[col]) {
                ans[row][col] = 2 + ans[row + 1][col - 1];
            } else {
                ans[row][col] = Math.max(ans[row][col - 1], ans[row + 1][col]);
            }
        }
    }

    ans.map(a => console.log(a.join(' ')));


    console.log(`Final answer is ${ans[0][n - 1]}`);

}

function lps(seq) {
    let n = seq.length;
    let i, j, cl;
    // Create a table to store results of subproblems 
    let L = [];
    for (let i = 0; i < n; i++) {
        L.push((new Array(n)).fill('*'));
    }

    // Strings of length 1 are palindrome of lentgh 1 
    for (i = 0; i < n; i++)
        L[i][i] = 1;

    // Build the table. Note that the lower  
    // diagonal values of table are 
    // useless and not filled in the process.  
    // The values are filled in a manner similar 
    //  to Matrix Chain Multiplication DP solution (See 
    // https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/).  
    // cl is length of substring 
    for (cl = 2; cl <= n; cl++) {
        for (i = 0; i < n - cl + 1; i++) {
            j = i + cl - 1;
            if (seq[i] === seq[j] && cl == 2)
                L[i][j] = 2;
            else if (seq[i] == seq[j])
                L[i][j] = L[i + 1][j - 1] + 2;
            else
                L[i][j] = Math.max(L[i][j - 1], L[i + 1][j]);
        }
    }

    console.log(`\n\nFinal answer is ${L[0][n - 1]}`);
    L.map(a => console.log(a.join(' ')));
}




findMaxLen("geeksforgeeks");
lps("geeksforgeeks");

// console.log(FLR("geeksforgeeks", 0, 12));