// import fs from 'fs';
// import fonter from 'gulp-fonter-fix';
// import ttf2woff from 'gulp-ttf2woff';
// import ttf2woff2 from 'gulp-ttf2woff2';


// export const otfToTtf = () => {
//    // Ищем файлы шрифтов .otf
//    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
//       .pipe(app.plugins.plumber(
//          app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>"
//          })))
//       // Конвертируем в .ttf
//       .pipe(fonter({
//          formats: ['ttf']
//       }))
//       // Выгружаем в исходную папку
//       .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
// }


// export const ttfToWoff = () => {
//    // Ищем файлы шрифтов .ttf
//    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
//       .pipe(app.plugins.plumber({
//          errorHandler: function (err) {
//             // Обработчик ошибок, исключая наличие нулевых байтов в сообщении
//             const errorMessage = err.message.replace(/\x00/g, ''); // убираем нулевые байты
//             console.log('Error message without null bytes:', errorMessage);
//          }
//       }))
//       .pipe(ttf2woff())
//       .pipe(app.gulp.dest(`${app.path.build.fonts}`))  // Сохраняем в формате WOFF
//       .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
//       .pipe(ttf2woff2())
//       .pipe(app.gulp.dest(`${app.path.build.fonts}`));  // Сохраняем в формате WOFF2
// }

// export const fontsStyle = () => {
//    //Файл стилей подключения шрифтов
//    let fontsFile = `${app.path.srcFolder}/styl/fonts.styl`;
//    //Проверяем, существуют ли файлы шрифтов
//    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
//       if (fontsFiles) {
//          //Проверяем, существует ли файл стилей для подключения шрифтов
//          if (!fs.existsSync(fontsFile)) {
//             //Если файла нет, создаём его
//             fs.writeFile(fontsFile, '', cb);
//             let newFileOnly;
//             for (var i = 0; i < fontsFiles.length; i++) {
//                //Записываем подключения шрифтов в файл стилей
//                let fontFileName = fontsFiles[i].split('.')[0];
//                if (newFileOnly !== fontFileName) {
//                   let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
//                   let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
//                   if (fontWeight.toLowerCase() === 'thin') {
//                      fontWeight = 100;
//                   } else if (fontWeight.toLowerCase() === 'extralight') {
//                      fontWeight = 200;
//                   } else if (fontWeight.toLowerCase() === 'light') {
//                      fontWeight = 300;
//                   } else if (fontWeight.toLowerCase() === 'medium') {
//                      fontWeight = 500;
//                   } else if (fontWeight.toLowerCase() === 'semibold') {
//                      fontWeight = 600;
//                   } else if (fontWeight.toLowerCase() === 'bold') {
//                      fontWeight = 700;
//                   } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
//                      fontWeight = 800;
//                   } else if (fontWeight.toLowerCase() === 'black') {
//                      fontWeight = 900;
//                   } else {
//                      fontWeight = 400;
//                   }
//                   fs.appendFile(fontsFile, `@font-face{\n\tfont-family ${fontName}\n\tfont-display swap\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")\n\tfont-weight ${fontWeight}\n\tfont-style normal\n}\r\n`, cb);
//                   newFileOnly = fontFileName;
//                }
//             }
//          } else {
//             //Если файл есть, выводим сообщение
//             console.log("Файл styl/fonts.styl уже существует. Для обновления файла нужно его удалить!");
//          }
//       }
//    });
//    return app.gulp.src(`${app.path.srcFolder}`);
//    function cb() { }

// }