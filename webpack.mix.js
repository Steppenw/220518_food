let mix = require('laravel-mix');

mix.sass('src/style.scss', 'assets/dist/css')
   .options({
    processCssUrls: false
   });