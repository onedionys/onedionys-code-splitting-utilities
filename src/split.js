// src/split.js

function splitCode(code, delimiter = '// === SPLIT === //') {
    return code.split(delimiter);
}

export { splitCode };
