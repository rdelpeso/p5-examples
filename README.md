# p5-examples
Examples of using p5 in non-traditional ways.

## Prerequisites
All samples were tested with node 8 and above. If something is not working as
expected, please check your node version.

## How to run the samples
- Enter the sample directory you wish to test
- Run `npm install`
- Run `npm build`
- Run `npm serve` (http-server will tell you where the sample is visible from)

The resulting code is located in `<sample-name>/dist`

## simple-webpack
A minimalistic setup that makes use of webpack to compile your code and p5 into a
single js file. This would allow for further transformations via transpiling, chunk
splitting, etc.

This sample includes:
- Single entry point src/index.js
- Import of p5 
- Sample code making use of p5 in instance mode
- Auto generated html with the generated js bundle file injected

## simple-typescript-webpack
Expands on simple-webpack by adding typescript support. It is otherwise
identical.

This sample includes:
- Single entry point src/index.ts
- Import of p5 which is sort of odd due to the definition file having the same
  name as the module, confusing the import clause.
- Sample typescript code making use of p5 in instance mode
- Auto generated html with the generated js bundle file injected
