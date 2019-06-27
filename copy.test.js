const fs = require('fs');
const { join } = require('path');
const copy = require('./copy.js');

describe('copy function', () => {
    beforeEach(done => {
        fs.writeFile(join(__dirname, 'copy-me.txt'), 'Copy Me', done);
    });

    afterEach(done => {
        fs.unlink(join(__dirname, 'copy-me.txt'), done);
    });

    it('copies a file from src to dest', done => {
        const src = join(__dirname, 'copy-me.txt');
        const dest = join(__dirname, 'copy-me-copy.txt');

        copy(src, dest, err => {
            expect(err).toBeFalsy();

            fs.readFile(dest, { encoding:'utf8' }, (err, data) => {
                expect(data).toEqual('Copy Me');

                done(err);
            });
        });
    });
});