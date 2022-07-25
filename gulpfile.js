import gulp from "gulp";

gulp.task("build", function (done) {
    gulp.src("./src/*.js", { sourcemaps: true })
        .pipe(gulp.dest("./build"))
    done();
});
