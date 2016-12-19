## Getting started

install nodejs

run the following 

```
npm install -g npm@latest
npm install -g yo cordova ionic generator-m-ionic bower


```

You can now use gulp to run various commands, and yo to scaffold parts of the app together


You can get a full guide of commands from [here](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides)

Short version:

`gulp watch` will run the app in the browser. Any cordova commands should be ran with `gulp --cordova "<command here>"`

Enable live reload when running on an emulator or device 

```
gulp --livereload "run ios --device" # --device is not always necessary
gulp --livereload "emulate ios"
```

you can scaffold parts of the app with the following commands

```
yo m-ionic:constant <constantName> <moduleName>
yo m-ionic:controller <controllerName> <moduleName>
yo m-ionic:directive <directiveName> <moduleName>
yo m-ionic:filter <filterName> <moduleName>
yo m-ionic:pair <pairName> <moduleName> # creates controller & template
yo m-ionic:template <templateName> <moduleName>
yo m-ionic:service <serviceName> <moduleName>

```

Run xcode from gulp

```
gulp --cordova "prepare ios"
```

build the code

```
gulp build
gulp build --force-build # build despite linting errors
gulp build --minify # minifies javascript, CSS, HTML and images.
```