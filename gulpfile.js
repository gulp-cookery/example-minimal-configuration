'use strict';

var gulp = require('gulp');
var chef = require('gulp-chef');

function clean(done) {
	done();
}

function scripts(done) {
	done();
}

function styles(done) {
	done();
}

function markups(done) {
	done();
}

var make = gulp.parallel(scripts, styles, markups);

var build = gulp.series(clean, make);

function watch(done) {
	done();
}

gulp.registry(chef({
	clean: clean,
	scripts: scripts,
	styles: styles,
	markups: markups,
	make: make,
	build: build,
	watch: watch,
	default: build
}));
