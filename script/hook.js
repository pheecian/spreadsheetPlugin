var path = require("path");
var fs = require("fs");
module.exports = function(ctx) {
if(ctx.opts.cordova.platforms.indexOf('ios')<0){return;}
var projectRoot = ctx.opts.projectRoot,
xcconfigPath = path.join(projectRoot, 'platforms/ios/cordova/build.xcconfig');
var swiftOptions = [''];
swiftOptions.push('SWIFT_VERSION = 4.0');
fs.appendFileSync(xcconfigPath, swiftOptions.join('\n'));
xcconfigPath = path.join(projectRoot, 'platforms/ios/HUE General Application/Bridging-Header.h');
swiftOptions = [''];
swiftOptions.push('#import \"ESSEditPlugin.h\"');
fs.appendFileSync(xcconfigPath, swiftOptions.join('\n'));
};
