let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence');
let wait = require("gulp-wait");

// CSS
gulp.task('sass', function () {
    var stream = gulp.src('src/scss/styles.scss')
        .pipe(wait(500))
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('src/'));
    return stream;
});

gulp.task('minify-css', () => {
  return gulp.src('./src/styles.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/'));
});

gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

gulp.task('watch', function () {
	gulp.watch('src/scss/*.scss', ['styles']);
});

