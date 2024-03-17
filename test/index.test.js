// test/test.js

const assert = require('assert');
const { splitCode } = require('../src/split');

describe('splitCode', function() {
    it('should split code into parts based on delimiter', function() {
        const code = `
            // === SPLIT === //
            const part1 = 'This is part 1';
            // === SPLIT === //
            const part2 = 'This is part 2';
            // === SPLIT === //
            const part3 = 'This is part 3';
        `;
        const parts = splitCode(code);
        assert.strictEqual(parts.length, 4);
        assert.strictEqual(parts[0].trim(), '');
        assert.strictEqual(parts[1].trim(), "const part1 = 'This is part 1';");
        assert.strictEqual(parts[2].trim(), "const part2 = 'This is part 2';");
        assert.strictEqual(parts[3].trim(), "const part3 = 'This is part 3';");
    });
});
