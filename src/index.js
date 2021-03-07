module.exports = function check(str, bracketsConfig) {
    let leftBrackets = [];
    let rightBrackets = [];
    let strBrackets = {}
    for (const bracketsConfigElement of bracketsConfig) {
        leftBrackets.push(bracketsConfigElement[0]);
        rightBrackets.push(bracketsConfigElement[1]);

        strBrackets[bracketsConfigElement[0]] = bracketsConfigElement[1];
    }

    let strLeftBrackets = [];
    for (let i = 0; i < str.length; i++) {
        if (leftBrackets.includes(str[i]) && (!rightBrackets.includes(str[i]) || !strLeftBrackets.includes(str[i]))) {
            strLeftBrackets.push(str[i]);
        } else if (rightBrackets.includes(str[i])) {
            if (strBrackets[strLeftBrackets.pop()] !== str[i]) {
                return false;
            }
        }
    }
    return !strLeftBrackets.length;
}
