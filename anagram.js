function isAnagram(str1, str2) {
    // Remove any non-alphabet character and convert to lower case
    let s1 = str1.replace(/[^a-z\d]/gi, '').toLowerCase();
    let s2 = str2.replace(/[^a-z\d]/gi, '').toLowerCase();

    // Sort the characters in the strings
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');

    // Compare the sorted strings
    return sortedS1 === sortedS2;
}

console.log(isAnagram('openai!', 'open'));
console.log(isAnagram('hello', 'hello!'));