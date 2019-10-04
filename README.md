# Angular State Management Workshop

by [@tomastrajan](https://twitter.com/tomastrajan)

# Welcome! 🤗

## How to use exercises

- every exercise folder should be installed using `npm ci`
- every exercise can be started using `npm start` to run the app
- every exercise can start tests in watch mode using `npm run watch` (jest) or you can also start the test directly from your IDE.
- every exercise has it's own `README.md` file with additional description of the given exercise
- every exercise project contains ordered `// TODO` comments inside of the source code (eg `// TODO 1: description`) which should be followed to complete the given exercise


## Reference solution
You can always compare your solution with the `exercise-finished` project which contains
working solution for every previous exercise


## How to use Jest in "watch" mode

- `a` - to run all tests
- `w` followed by `p` - to run only specific files (regexp, eg `todo.comp` will run `todo.component.spec.ts` file)


## Effects (backend requests)

- the `npm start` starts both frontend and simple backend which serves `db.json` file (as CRUD json API)
- performing backend requests (with effects) will change content of that file
- the content can be "reset" by comping content from `db-backup.json` file into `db.json` file
