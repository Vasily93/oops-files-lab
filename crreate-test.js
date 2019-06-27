const fs = require('fs');

const createFiles = require('./create.js');

describe('create function', () => {
    it('creates in files', done => {
        createFiles(50, err => {
            expecr(err).toBeFalsly();

            fs.readdir('./fixtures', {encoding: 'utf8' }, (err,files) => {
                expect(files).toHaveLength(50);
                done();
            });
        });
    });
});