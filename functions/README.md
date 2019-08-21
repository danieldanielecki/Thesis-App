# Directory for Firebase Cloud Functions

The dependency **protobufjs** contains custom modification, i.e. in file `protobufjs/src/util/minimal.js` the following line `util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);` has been changed to `util.isNode = true;`. This is an issue with **@angular/fire**, [#1445](https://github.com/firebase/firebase-js-sdk/issues/1455). Most probably this is a problem with Angular's Universal Server-Side Rendering (SSR).

## Description

Dependencies are installed once deployed to the Firebase is done. Thus, including them here is not necessary and should not be used as they are installed on the server.
