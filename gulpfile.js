const postcss = require('gulp-postcss');
const gulp = require('gulp');
const rename = require('gulp-rename');
const fallback = require('postcss-fallback-gradient');

const processors = [
    fallback
];

gulp.task('default', () => {
    return gulp.src('./in.css')
        .pipe(postcss(processors))
        .pipe(rename({
            basename: 'out'
            }))
        .pipe(gulp.dest('./'));
});