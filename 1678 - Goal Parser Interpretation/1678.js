/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let chars = "Goal";
    let ans = "";
    for(let i=0; i<command.length; i++) {
        if(command[i] == "(" && command[i+1] == ")") {
            ans = ans + "o";
        }
        else if(chars.includes(command[i])) {
            ans = ans + command[i];
        }
        else {
            ans = ans + "";
        }
    }
    return ans;
};