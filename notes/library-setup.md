# Add Library Projects

## Prerequisite Packages

Install the following packages.

```ts
yarn add @nrwl/angular@14.3.6 -S
yarn add @nrwl/node@14.3.6 -S
yarn add @datadog/browser-logs -S
yarn add @datadog/browser-rum -S
yarn add guid-typescript -S
```

## Add Library Projects

```ts
nx g @nrwl/node:library rules-engine   --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/rules-engine
nx g @nrwl/node:library actions        --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/actions
nx g @nrwl/node:library core           --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/core

nx g @nrwl/angular:library configuration    --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/configuration
nx g @nrwl/angular:library logging          --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/logging
nx g @nrwl/angular:library error-handling   --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/error-handling
nx g @nrwl/angular:library common           --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/common
nx g @nrwl/angular:library http-service     --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/http-service
nx g @nrwl/angular:library foundation       --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/foundation
nx g @nrwl/angular:library validation       --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/validation
nx g @nrwl/angular:library notifications    --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/notifications
```

The following projects are great libraries - too important to just give away for now.

```ts
nx g @nrwl/angular:library version-check    --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/version-check
nx g @nrwl/angular:library analytics        --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/analytics
nx g @nrwl/angular:library state-machine    --simpleModuleName --buildable --publishable --linter=eslint --importPath=@buildmotion/state-machine
```

## Add the Source Code

```ts
cp -R ./actions/src ../../../../github/buildmotion/libs/actions
cp -R ./rules-engine/src ../../../../github/buildmotion/libs/rules-engine
cp -R ./types/src ../../../../github/buildmotion/libs/types
cp -R ./configuration/src ../../../../github/buildmotion/libs/configuration
cp -R ./logging/src ../../../../github/buildmotion/libs/logging
cp -R ./error-handling/src ../../../../github/buildmotion/libs/error-handling
cp -R ./common/src ../../../../github/buildmotion/libs/common
cp -R ./http-service/src ../../../../github/buildmotion/libs/http-service
cp -R ./foundation/src ../../../../github/buildmotion/libs/foundation
cp -R ./validation/src ../../../../github/buildmotion/libs/validation
cp -R ./notifications/src ../../../../github/buildmotion/libs/notifications
```

cp -R ./actions/src ../../../temp/buildmotion/libs/actions
cp -R ./rules-engine/src ../../../temp/buildmotion/libs/rules-engine
cp -R ./core/src ../../../temp/buildmotion/libs/core
cp -R ./configuration/src ../../../temp/buildmotion/libs/configuration
cp -R ./logging/src ../../../temp/buildmotion/libs/logging
cp -R ./error-handling/src ../../../temp/buildmotion/libs/error-handling
cp -R ./common/src ../../../temp/buildmotion/libs/common
cp -R ./http-service/src ../../../temp/buildmotion/libs/http-service
cp -R ./foundation/src ../../../temp/buildmotion/libs/foundation
cp -R ./validation/src ../../../temp/buildmotion/libs/validation
cp -R ./notifications/src ../../../temp/buildmotion/libs/notifications