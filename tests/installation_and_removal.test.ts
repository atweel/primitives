import 'jest';
import tempy from 'tempy';
import { writeFileSync, rmdirSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { sync as globSync } from 'glob';

const PACKAGE_NAME = '@atweel/primitives';

const PACKAGE_MANAGERS = [ 'npm', 'yarn' ];

for (const packageManager of PACKAGE_MANAGERS) {
    describe(`Installation and removal via ${ packageManager }`, () => {
        let packageDirectory: string = undefined;
        let packageFile;

        beforeAll(() => {
            packageFile = globSync('./*.tgz', {
                absolute: true,
            })[0];

            packageDirectory = tempy.directory();

            console.log(`Test package directory: ${ packageDirectory }`);
        });

        afterAll(() => {
            rmdirSync(packageDirectory, {
                recursive: true,
            });
        });
    
        test(`Installation via ${ packageManager }`, () => {
            writeFileSync(path.resolve(packageDirectory, 'package.json'), JSON.stringify({
                name: 'test-package',
                version: '1.0.0',
                description: 'Test package',
                license: 'MIT',
                repository: 'https://github.com/testpackage',
                dependencies: {
                    [PACKAGE_NAME]: `file:${ packageFile }`,
                },
            }));
    
            execSync(`${ packageManager } install`, {
                cwd: packageDirectory,
            });

            const nodeModulesDirectory = path.resolve(packageDirectory, 'node_modules');

            const packagedFiles = globSync(`**/*`, {
                cwd: path.resolve(nodeModulesDirectory, PACKAGE_NAME),
            });

            expect(packagedFiles).toContain('package.json');
            expect(packagedFiles).toContain('readme.md');
            expect(packagedFiles).toContain('library/exports.js');
        });
    
        test(`Removal via ${ packageManager }`, () => {    
            execSync(`${ packageManager } remove ${ PACKAGE_NAME }`, {
                cwd: packageDirectory,
            });
        });
    });
}
