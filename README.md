# Project name: <ProjectName>

## Project description
Project Description


## Requirements
1. Install ESLint 
yarn add --dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser


## Project Configuration

### TypeScript

Base tsconfig.json for browser environment. 
TS output supports by almost-all browsers. 

If you need specific browsers (like IE), you need to change compilerOptions.target and compilerOptions.module to you requirements.

Target is related to the output of your code, i.e. the compiled code targets a specific language variant.

Module defines the output module resolution system that is used. For example, if you would use “es2015” here, it would assume that your Javascript engine is capable of parsing es2015 import statements.

I'm using property 'path' for more simplier import statements. See section Project Architecture.


### React 

Pretty simple configuration for React.
I'm not using any Store libs. Just a few utils libs:
1. classnames -- for easier className managment
2. react-hook-form -- for form validation


### ESLint

You can see all used options in .eslintrc.json.
Optional you can create .vscode->settings.json for autofix-on-save feature. This folder is hidden by .gitignore by default.

Example:
```json
{
  "eslint.options": { "configFile": ".eslintrc.json" },
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

### Webpack

Webpack configs placed in config/ folder.
`webpack.config.js` is base config. It lists entry/output points, base plugins and modules for working with TSX, SCSS, SVG, Assets, Fonts.

