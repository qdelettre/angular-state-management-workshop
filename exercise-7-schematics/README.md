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

1. Install NgRx schematics package using `npm i -D c` and verify the installation by running `ng g @ngrx/schematics: --help`
2. Explore printed list of "Available Schematics", we'll see it contains 
   familiar things like `component` or `module` together with new things like `feature` or reducer. 
   This is because `@ngrx/schematics` extends default `@schematics/angular` collection for our convenience.
3. Use `@ngrx/schematics` as the default workspace schematics collection by updating `angular.json` with the following (at the root level of the json)
    ```
    "cli": {
        "defaultCollection": "@ngrx/schematics"
    },
    ```
4. Run `ng g --help` and see that the output still references `@ngrx/schematics` because we set it as default collection
   so we don't have to type whole collection name every time we want to generate something using `ng g`
   
     
   
## How to use exercises

- every exercise folder should be installed using `npm ci`
- every exercise can be started using `npm start` to run the app
- every exercise can start tests in watch mode using `npm run watch` (jest) or you can also start the test directly from your IDE.
- every exercise has it's own `README.md` file with additional description of the given exercise
- every exercise project contains ordered `// TODO` comments inside of the source code (eg `// TODO 1: description`) which should be followed to complete the given exercise
