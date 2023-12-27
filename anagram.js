const isAnagram = (str1, str2) => {
    const clean_string = str => str.replace(/[^a-b]/g, '').split('').sort().join('');
    return clean_string(str1) == clean_string(str2);
}

console.log(isAnagram('abc', 'bac'));