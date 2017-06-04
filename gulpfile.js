'use strict';

const gulp = require('gulp'),
	clean = require('gulp-clean'),
	less = require('gulp-less'),
	pug = require('gulp-pug');

const LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	LessPluginCleanCSS = require('less-plugin-clean-css');

const cleanCss = new LessPluginCleanCSS({advanced: true}),
	autoPreFix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('clean', () => {
	return gulp.src('www/*')
		.pipe(clean());
});

gulp.task('css', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoPreFix, cleanCss]}))
		.pipe(gulp.dest('www/css'));;
});

gulp.task('html', () => {
	return gulp.src('src/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('www'));
});

gulp.task('default', ['css', 'html'], () => {});

gulp.task('server',['default'],function(){
	gulp.src('www')
		.pipe(server({
			host: "0.0.0.0",
			liveReload: true,
			directoryListing: false,
			open: true
		}));
	gulp.watch(['src/**/*'], ['default']);
});