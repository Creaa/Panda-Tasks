const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
	return gulp.src('./src/scss/**/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./disc'))
		.pipe(browserSync.stream())
}


function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	gulp.watch('./src/scss/**/*.scss', style)
	gulp.watch('./*.html').on('change', browserSync.reload)
	gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;