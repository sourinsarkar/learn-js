word) {
    const words = word.split('_');
    const newWord = [];

    for(const w of words) {
        const [fname, lname] = w.toLowerCase().trim().split('_');
        const newLname = lname.replace[lname[0], lname[0].toUpperCase()];
        newWord.push(lname);
        newWord.push(fname); 
    }
    console.log(newWord.join(''));
}

capFL('sourin_sarkar');