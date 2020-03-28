#!/bin/bash
test_dir=$(mktemp -d)

lerna exec yarn pack --scope "@atweel/primitives"

package_file=$(find package -name "*.tgz" | xargs -I {} realpath {})

cp -R ./tests/integration/{*.json,sources} $test_dir/

cd $test_dir/

package_manifest=`cat ./package.json`

echo "$package_manifest" | grep -v "\"@atweel/primitives\":" > package.json

yarn cache clean "@atweel/primitives"

yarn add file:$package_file

rm $package_file

ts-mocha "sources/**/*.spec.ts"

rm -rf $test_dir