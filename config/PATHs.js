const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const FOLDER_OUTPUT = path.resolve(ROOT, 'dist');
const FOLDER_INPUT = path.resolve(ROOT, 'src');


const porjectAliases = [
  'pages',
  'assets',
  'styles',
  'utils',
  'ui-kit',
  'modules',
  'store',
];

/**
 * Convert `porjectAliases` array to object with aliases.
 * Output example:
 * {
 *   'pages': path.join(FOLDER_INPUT, 'pages'),
 *   'assets': path.join(FOLDER_INPUT, 'assets'),
 *   'styles': path.join(FOLDER_INPUT, 'styles'),
 *   'utils': path.join(FOLDER_INPUT, 'utils'),
 *   'ui-kit': path.join(FOLDER_INPUT, 'ui-kit'),
 * }
 */
const ALIASES = porjectAliases.reduce((object, key) => Object.assign(
  object, { [key]: path.join(FOLDER_INPUT, key) },
), {});

module.exports = {
  ROOT,
  FOLDER_OUTPUT,
  FOLDER_INPUT,
  ALIASES,
};
