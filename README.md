# p5-examples
Examples of using p5 in a non-traditional way.

## simple-webpack
A minimalistic setup that makes use of webpack to compile your code and p5 into a
single js file. This would allow for further transformations via transpiling, chunk
splitting, etc.

This sample includes:
- Single entry point src/index.js
- Import of p5 
- Sample code making use of p5 in instance mode
- Auto generated html with the generated js bundle file injected

This sample is fairly simple to get running:
- Run npm install
- Run npm run build
- Run npm run serve
  - This is an optional nice to have that will launch a web server on port 8080 for
    you to look at your code in action

The compiled code will be inside the dist directory.
