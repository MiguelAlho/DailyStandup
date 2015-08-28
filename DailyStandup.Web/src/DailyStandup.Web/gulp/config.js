var fs = require("fs");

eval("var projectFile = " + fs.readFileSync("./project.json"));

var assets = "./assets/";

module.exports = {
    paths: {
        source: {
            bower: "./bower_components/",
            images: assets + "images/",
            sass: assets + "sass/",
            react: assets + "js/"
        },
        destination: {
            images: "./" + projectFile.webroot + "/images/",
            lib: "./" + projectFile.webroot + "/lib/",
            css: "./" + projectFile.webroot + "/css/",
            app: "./" + projectFile.webroot + "/app/"
        }
    },
    project: projectFile
};
