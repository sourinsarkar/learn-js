// function generateRandomString(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
// }

// console.log(generateRandomString(10));

// const regex = /sourin\s*sarkar/;
// console.log(regex.test('abc'));
// console.log(regex.test('sourin'));
// console.log(regex.test('sourin sarkar'));

// const regex_phone = /^\d{10}\s*$/;
// console.log(regex_phone.test('1234567890'));
// console.log(regex_phone.test('1234567s90'));
// console.log(regex_phone.test('12 34567890'));
// console.log(regex_phone.test('12  34567890'));
// console.log(regex_phone.test('12   34567890'));
// console.log(regex_phone.test('34567890'));
// console.log(regex_phone.test('3456789.0'));

// const newname = /^[a-zA-Z]{6}$/;
// console.log(newname.test('abcdefghijklmnopqrstuvwxyz'));
// console.log(newname.test('sometO'));

const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,12}$/;
const regex_emailG = /[\w-\.]+@([\w-]+\.)+[\w-]{2,12}/g;
console.log(regex_email.test('mail@example.com'));
// console.log(regex_emailG.match('My email is mail@example.com.'));

const str = 'My email is mail@example.com and other email is uk@gmail.com.';
const new_email = str.match(regex_emailG);
const [a, b] = new_email;
console.log(`Sourin's email is: ${a}`);
console.log(`UK's email is: ${b}`);

// const foo = "Hello world";
// console.log(foo.charAt(2));
// console.log(foo.charAt(0));
// console.log(foo.charAt(12));
// console.log(foo.charAt(5));
// console.log(foo.charAt(8));
// console.log(foo.charAt(3) === ' ' ? "Don't use space." : ' ');