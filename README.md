# Tv Shows Database

The application to showcase a list of tv series , categorized by genre they belong to . The shows can also be searched . more Information about a show can be found by clicking its banner.

Following env used for development

1. node v14.15.1
2. npm v8.4.1
3. Python 3.2
4. macos Sierra

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Approach:

    vuex:
        Prepared raw json structure of the shows object to created vuex state .
        Based on this setup created working base vuex store .
        created separate files for actions,getters, mutations and state.
        fetch data for all shows, specific show details and search using actions to create commits for the store.

    src:
        Folder structured having shows component as parent , ShowsList and ShowsSearch as child .
        passed copy of orderDetail and seller to their individual components to ensure no data errors.


        ShowsList:
            Vuex action returns a list of shows which already categorized by genre , implemented in actions .this list is iterated and passed to ShowsGenre one by one

        ShowsGenre:
            Scrollable list of shows from a specific genre , used scss and flex
            used events to pass clicked show data back to parent

        ShowsSearch:
            events are fired when item is searched by pressing enter or clicking the search icon and parent page is informed .
            used Flex for responsive input box

        Details:
            Used flexbox to display show specific metadata for the user including bigger image of the show .

        Header:
            contains logo and a link to get back to home from the details page

### The good

1. no libraries for crousal
2. no veutify or bootstrap only scss and flex
3. Responsive
4. using Vuex reactive store
5. separate components based approach
6. Architecture allows other features to be added in future

### Improvements (todo)

1. Global scss could be improved
2. Error handling
3. Separate component for each tv shows in dashboard, header, footer
4. More test cases
5. Some responsive behaviors could improve
6. Rating based categorization
7. Logic of categorization based on genre could move to separate utility or maybe in component
