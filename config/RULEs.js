exports.rules = [
  // Compiling TS files
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },

  // Compiling SCSS files
  {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  },

  // Compiling SVG files
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },

  // Compiling IMAGE files
  {
    test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
    type: 'asset/resource',
  },

  // Compiling FONT files
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
];
