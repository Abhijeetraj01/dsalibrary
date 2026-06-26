//recursion
export function fibonacciRecursive(
    n: number
): number {

    if (n <= 1) {
        return n;
    }

    return (
        fibonacciRecursive(n - 1) +
        fibonacciRecursive(n - 2)
    );
}

//memoization
export function fibonacciMemo(
    n: number
): number {

    const memo =
        new Map<number, number>();

    return helper(
        n,
        memo
    );
}

function helper(
    n: number,
    memo: Map<number, number>
): number {

    if (n <= 1) {
        return n;
    }

    if (memo.has(n)) {
        return memo.get(n)!;
    }

    const answer =
        helper(
            n - 1,
            memo
        ) +
        helper(
            n - 2,
            memo
        );

    memo.set(
        n,
        answer
    );

    return answer;
}

//tabulation
export function fibonacciTabulation(
    n: number
): number {

    if (n <= 1) {
        return n;
    }

    const dp =
        new Array(n + 1).fill(0);

    dp[1] = 1;

    for (
        let i = 2;
        i <= n;
        i++
    ) {

        dp[i] =
            dp[i - 1] +
            dp[i - 2];
    }

    return dp[n];
}