# Prettier and linter

1.-Follow the instructions https://nextjs.org/docs/basic-features/eslint
2.-Setup the package.json
```json
"scripts": {
  "lint": "next lint"
}
```
2.-execute `yarn lint` and select strict mode

3.-execute `yarn add --dev eslint-config-prettier prettier`

4.-write down the `.prettier.config.js`
```javascript
module.exports = {
  "semi": false,
  "singleQuote": true,
  "arrowParens": 'avoid',
  "trailingComma": 'none',
  "endOfLine": 'auto'
};
```
5.-go to webstorm -> preference -> languages & frameworks -> prettier
6.-select `node_modules/prettier` on the select box (for instance ~/ideaProjectsGitHub/next-cms/node_modules/prettier)
7.-check on the boxes
8.-Test it on the code when saves the source code
