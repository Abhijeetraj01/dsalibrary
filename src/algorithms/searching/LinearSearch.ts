export function linearSearch(                                               //TC- Worst-> O(n), Average -> O(n), Best -> O(1)
    arr: number[],
    target: number
): number {                                                                 //SC - O(1)

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}