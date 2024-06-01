const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomString(length) {
    let result = " ";
    const charLength = chars.length;
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

console.log(randomString(10));


const result = Math.random().toString(36).substring(2,10);
console.log(result);