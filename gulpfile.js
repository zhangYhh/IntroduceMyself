let gulp = require("gulp");
let sass = require("gulp-sass");
gulp.task("copy-sass",async ()=>{
    gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("C:\\Users\\Administrator\\Desktop\\my\\css"));
});
gulp.task("watch-file",async ()=>{
    gulp.watch("./sass/**/*",gulp.series("copy-sass"));
})