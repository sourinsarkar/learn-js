const filterArray = function (arr, fn) {
    const filteredArray = [];
    let newIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {

            // We only want to include the TRUTHY values to the new filteredArray

            // Approach 1: To push into array (Wrong approach as it pushes falsy values too, which we don't want at all.)
            // filteredArray[i] = arr[i];
            
            // Approach 2: Correct Way
            // filteredArray.push(arr[i]);

            // Approach 3: Correct Way
            filteredArray[newIndex] = arr[i];
            newIndex++;
        }
    }

    return filteredArray;
}

const fooArray = [1, 2, 3, 4, 5];

const isEven = function (value) {
    return value % 2 == 0;
}

const nayaArray = filterArray(fooArray, isEven);
console.log(nayaArray);