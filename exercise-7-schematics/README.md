# Angular State Management Workshop

by [@tomastrajan](https://twitter.com/tomastrajan)

# Welcome to Exercise #7 - Schematics

In this exercise were going to explore how to generate NgRx state features using Angular Schematics

- How to install and run NgRx schematics
- ...


## How to start

- This exercise is special compared to the rest as there are no `// TODO` comments in the source code,
  but a list of steps to be performed here in the `README.md` in the following section

## Exercise 

1. Install NgRx schematics package using `npm i -D @ngrx/schematics` and verify the installation by running `ng g @ngrx/schematics: --help`.
2. Explore printed list of "Available Schematics", we'll see it contains 
   familiar things like `component` or `module` together with new things like `feature` or reducer. 
   This is because `@ngrx/schematics` extends default `@schematics/angular` collection for our convenience.
3. Use `@ngrx/schematics` as the default workspace schematics collection by updating `angular.json` with the following (at the root level of the json)
    ```
    "cli": {
        "defaultCollection": "@ngrx/schematics"
    },
    ```
4. Run `ng g --help` and see that the output still references `@ngrx/schematics` because we set it as default collection,
   so we don't have to type whole collection name every time we want to generate something using `ng g`.
5. Generate new lazy loaded module for user feature using `ng g module features/user --route user --module app.module.ts` 
   and try to navigate to user route using main navigation.
6. Run `ng g feature --help` to explore all the available options for generating NgRx state features. We'll be using
   `-c` (`--creators`) to use new NgRx factory functions and `-a` (`--api`) to generate effects and API action stubs.
7. Generate new NgRx state feature for the `user` lazy feature using `ng g feature features/user/state/user -a -c --module features/user/user.module.ts`
8. Define and export `User` interface in the `features/user/state/user.model.ts` with `id: number`, `username: string` properties
9. Generate backend integration (API) service using `ng g service features/user/user` and implement a `load()` method 
   which will use Angular `HttpClient` to retrieve list of users (previously created `User` interface) from `http://localhost:4300/users` endpoint
10. Use the newly generated service in the `features/user/state/user.effects.ts` and adjust related actions to handle `users` payload
11. Adjust implementation in `features/user/state/user.reducer.ts` to use `@ngrx/entity` (and its `EntityState` for `User` entity) and implement 
    reducer handlers for actions previously used in the effect
12. Implement basic selectors using `@ngrx/entity` (and its `adapter`)
13. Inject the `Store` and use previously created selectors in the  `features/user/user.component.ts` to retrieve list of `User` 
    and render it in the template using `*ngFor` (simple rendering with `<div>` and printing of strings using `{{ }}` is sufficient for our case)
14. Implement `ngOnInit` lifecycle hook in the `features/user/user.component.ts` to dispatch initial action to trigger retrieving of users from backend

     
   
## How to use exercises

- every exercise folder should be installed using `npm ci`
- every exercise can be started using `npm start` to run the app
- every exercise can start tests in watch mode using `npm run watch` (jest) or you can also start the test directly from your IDE.
- every exercise has it's own `README.md` file with additional description of the given exercise
- every exercise project contains ordered `// TODO` comments inside of the source code (eg `// TODO 1: description`) which should be followed to complete the given exercise
