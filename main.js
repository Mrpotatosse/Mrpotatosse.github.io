/// CONST
const ENTER = "\n";
const SPACE = " ";
///

/// GLOBAL
const terminal = document.getElementById("terminal");
const result = document.getElementById("result");
/// 

/**
 * 
 * @param {Array<string>} tokens 
 * @returns {string}
 */
function execute(tokens) {
    return JSON.stringify({
        date: new Date(),
        tokens
    }, null, "\t")
}

/**
 * 
 * @param {string} input 
 * @returns {Array<string>}
 */
function tokenizer(input) {
    let currentIndex = 0;
    let spaceIndex = input.indexOf(SPACE, currentIndex);
    const result = [];

    while(spaceIndex !== -1) {
        const token = input.substring(currentIndex, spaceIndex);
        result.push(token);

        currentIndex = spaceIndex + SPACE.length;
        spaceIndex = input.indexOf(SPACE, currentIndex);
    }

    return result
}

/**
 * 
 * @param {Event} e 
 */
function validate(e) {
    if(terminal.textContent.length > 0 && terminal.innerText.endsWith(ENTER)) {
        const response = execute(tokenizer(terminal.textContent.trimEnd().trimStart() + " "));
        result.innerText = response;
        terminal.textContent = "";
    }

    terminal.textContent = terminal.textContent.trimStart();
}

/// INIT 
if (terminal) {
    terminal.oninput = validate;
}
