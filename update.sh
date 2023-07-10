#!/usr/bin/env zsh

find . -type d -name "exercise*" -maxdepth 1 | while read d; do
   cd $d && pwd && npm ci &&  ng update @angular/cli@16 @angular/core@16 @angular/material@16 @angular-eslint/schematics@16 @ngrx/store@16 @ngrx/effects@16 @ngrx/router-store@16 @ngrx/store-devtools@16 @ngrx/schematics@16 --force && npm i -D jest@28 @types/jest@28 jest-preset-angular@12 && cd ..
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

# ng update @angular/cli@16 @angular/core@16 @angular/material@16 @angular-eslint/schematics@16 @ngrx/store@16 @ngrx/effects@16 @ngrx/entity@16 @ngrx/router-store@16 @ngrx/store-devtools@16 @ngrx/schematics@16 --force
