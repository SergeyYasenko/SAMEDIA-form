//Основной модуль
import gulp from "gulp";

//Импорт путей
import { path } from "./gulp/config/path.js";

//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значение в глобальную переменную
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
// import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { styl } from "./gulp/tasks/styl.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html); //gulp.series(html, ftp) вместо последнего (html) в каждый пункт если нужно автомат. заливка на сервер
   gulp.watch(path.watch.styl, styl);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}

export { svgSprive }


// // основные задачи
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// основные задачи
const mainTasks = gulp.series(/*fonts,*/ gulp.parallel(copy, html, styl, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(/*reset,*/ mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(/*reset,*/mainTasks);
const deployZIP = gulp.series(/*reset,*/mainTasks, zip);
const deployFTP = gulp.series(/*reset,*/mainTasks, ftp);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }


//Выполнение сценария по умолчанию
gulp.task('default', dev);







// let project_folder = "dist";
// let source_folder = "#src";

// let path = {
//    build: {
//       html: project_folder + "/",
//       css: project_folder + "/css/",
//       js: project_folder + "/js/",
//       img: project_folder + "/img/",
//       fonts: project_folder + "/fonts/",
//    },
//    src: {
//       html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
//       css: source_folder + "/sass/sass.styl",
//       js: source_folder + "/js/script.js",
//       img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
//       fonts: source_folder + "/fonts/*.ttf",
//    },
//    watch: {
//       html: source_folder + "/**/*.html",
//       css: source_folder + "/sass/**/*.styl",
//       js: source_folder + "/js/**/*.js",
//       img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
//    },
//    clean: "./" + project_folder + "/"
// }

// let { src, dest } = require('gulp'),
//    gulp = require('gulp'),
//    browsersync = require("browser-sync").create(),
//    fileinclude = require("gulp-file-include"),
//    del = require("del"),
//    sass = require("gulp-sass")(require('sass'));

// function browserSync(params) {
//    browsersync.init({
//       server: {
//          baseDir: "./" + project_folder + "/"
//       },
//       port: 3000,
//       notify: false
//    })
// }

// function html() {
//    return src(path.src.html)
//       .pipe(fileinclude())
//       .pipe(dest(path.build.html))
//       .pipe(browsersync.stream())
// }

// function css() {
//    return src(path.src.css)
//       .pipe(
//          sass({
//             outputStyle: "expanded"
//          })
//       )
//       .pipe(dest(path.build.css))
//       .pipe(browsersync.stream())
// }


// function watchFiles(params) {
//    gulp.watch([path.watch.html], html);
// }

// function clean(params) {
//    return del(path.clean);
// }

// let build = gulp.series(clean, gulp.parallel(css, html));
// let watch = gulp.parallel(build, watchFiles, browserSync);

// exports.css = css;
// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;