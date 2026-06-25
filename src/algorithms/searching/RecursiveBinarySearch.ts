//recursive method--                                                        //SC - O(logn)
function binarySearchHelper(
    arr: number[],
    target: number,
    left: number,
    right: number
): number {

    if (left > right) {
        return -1;
    }

    const mid =
        Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {

        return binarySearchHelper(
            arr,
            target,
            mid + 1,
            right
        );
    }

    return binarySearchHelper(
        arr,
        target,
        left,
        mid - 1
    );
}

export function recursiveBinarySearch(
    arr: number[],
    target: number
): number {

    return binarySearchHelper(
        arr,
        target,
        0,
        arr.length - 1
    );
}