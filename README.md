# Movies Sample App

### `<company-name>` tech challenge
#### by Esther White

### PROJECT OVERVIEW

- I developed this app using Angular version 17 
- UI library used - [DevExtreme Angular Components](https://js.devexpress.com/Angular/Documentation/Guide/Angular_Components/DevExtreme_Angular_Components/)

- I started the app by using the provided CLI command for generating a template app which is provided by DeveExtreme

```
npx devextreme-cli new angular-app movies-sample-app
```

- Their template already provided a sidenav, a header and more initial components like profile, tasks and more
- Focusing on what is applicable to this project I generated a new component using the Angular CLI and I named it 'movies`

```
ng g c src/app/pages/movies
```
- I added my component to `app-navigation.ts` and I have set up the routing for my newly created component in `app-routing-module.ts` 
- I have set the `movies` component as a default landing home page with a redirect

- I changed the icon for movies with a more suitable one

- I copied the already provided `DataGrid` devextreme component from the `tasks` component, imported the `DxDataGridModule` in `app-module.ts` and made adjustments to it.

- The datagrid by devextreme already provides searching and filtering as long as I keep 

```
<dxo-filter-row [visible]="true"></dxo-filter-row>
```

- I created a Movies service 
```
ng g s movies
```

which is available in the `src/app/shared` folder. The service contains an array of 10 movies. Each movie has 
   - Name
   - Category
   - Length
   - List of actors
   
 - and a nested array of actors - 5 actors per each movie, containing actor's
    - Name
    - Age
    - Gender

- I created an interface 
```
ng g i movies
```

available in the `src/models` folder, which models my `movie` object and the nested `actor` object.
- In the `movies` component in the `dx-data-grid` I am displaying the movies from the Movies Service by injecting the movie service in the constructor and using a method called `getMovies()`
- I have added a popup dialog `dx-popup` which loads via the onc click event which I attached to each data grid row and displays the actors for each selected movie - matched by by the `getMovieActors()` method in movies service.
- I imported the `DxPopupModule` in `app-module.ts`
- I have also added an `onSelectionChanged` event handler so that the displayed actor's data grid changes and always shows the correct list of actors

- I adjusted the already provided side navigation with nested menu items to match my needs of displaying movie categories
- I created one component named `category` 

```
ng g c category
```

and I am using the `:categorySlug` in slug `app-routing-module.ts`  to dynamically display relevant data matched by the category name
- the contents of the `category` component is also a data grid, dynamically changing and only showing movies from a matching category which I filter using the `getMoviesByCategory()` method in the service
- I had to make adjustments to the method since the `categorySlug` uses all small letters and the movie categories are capitalized.
- One more adjustment that I needed to make was for the `Science Fiction` category where I had to replace the space with a `-` in addition to `toLowerCase()` so that the category would be successfully matched.

- I have kept the dialog opening functionality even for the filtered data grids since I think it's nice to have it there as well

<br>
<hr>
<hr>
<hr>
<br>

* API requests are sent to my [NodeJS Rest API](https://docs-my-api.monacodelisa.com/)

### REQUIREMENTS

Detelix frontend developer exercise:

- [x] Build a web UI that contains information about different movies
- [x] Set 10 different movies in memory with different categories and actors
- [x] Each movie has the following characteristics:
- Name
- Category
- Length
- List of actors

- [x] Each actor has the following characteristics:
- Name
- Age
- Gender

- [x] The screen will contain a side menu which will have the various movie categories and a main table of
movies with all its details(Name, Category, Length)

- [x] Each time you click on a particular movie, a dialog will appear that will contain a table of all the movie actors with their details(Name, Age, Gender)

- [x] Each time you click on a particular category, the table will contain the movies that are relevant to that category

- [x] It will be possible to sort the movies table and search it

- [x] Should be used Angular 8+ and devextreme

- https://js.devexpress.com/Documentation/Guide/Angular_Components/DevExtreme_Angular_Components/
- https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light/
- https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/Angular/Light/

- [x] The Project Solution should contain an explanatory document of the implementation and source code \
Good luck

<br>
<hr>
<hr>
<hr>
<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
