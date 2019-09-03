const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');

exports.build = function () {
    src('./src/js/*.js')
        .pipe(concat('build.js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(rename('build.js'))
        .pipe(uglify())
        .pipe(dest('./dist'));

    return src('./src/css/*.css')
        .pipe(concat('build.css'))
        .pipe(cleanCSS())
        .pipe(dest('./dist'));
}