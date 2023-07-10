#!/usr/bin/env zsh

find . -type d -name "exercise*" -maxdepth 1 | while read d; do
   cd $d && pwd && npm ci &&  ng update @angular/cli@14 @angular/core@14 @angular/material@14 @angular-eslint/schematics@14 @ngrx/store@14 @ngrx/effects@14 @ngrx/entity@14 @ngrx/router-store@14 @ngrx/store-devtools@14 @ngrx/schematics@14 --force && npm i -D jest@28 @types/jest@28 jest-preset-angular@12 && cd ..
done

# Angular 12 -> 13
# npm un tslint
# rm -f tslint.json
# rm -f projects/customer-admin-app/tslint.json
# ng update @angular/cli @angular/core --force
# npm run format:write
# echo 'Y' | ng add @angular-eslint/schematics
# npm un protractor
# rm -rf projects/customer-admin-app/e2e

# ng update @angular/cli@14 @angular/core@14 @angular/material@14 @angular-eslint/schematics@14 @ngrx/store@14 @ngrx/effects@14 @ngrx/entity@14 @ngrx/router-store@14 @ngrx/store-devtools@14 @ngrx/schematics@14 --force

#globalSetup: 'jest-preset-angular/global-setup',