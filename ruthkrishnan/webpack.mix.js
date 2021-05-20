// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/test.sass', 'styles/')
.js('src/test.js', 'scripts/')