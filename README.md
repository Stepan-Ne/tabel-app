# Getting Started with Create React App

1. create-react-app .
2. BASIC TABLE
2.1 Define the columns for the table
2.2 Create a table instance using react-table
2.3 Define a basic table structure using plain HTML
2.4 Use the table instance and HTML
2.5 Include the desired CSS
3. define the columns: columns.js has columns = [{Header: 'Id'}]
4. Assosiate the each column with the data - specify the accessor prop for each column:
{Header: 'Id', accessor: id}
5. Create a table instance: useTable({columns: ..., data:...}). USETABLE recommends that you memorise the rows in columns using useMemo()
6. Define a basic table structure using html
7. Use table instance with jsx to render all necessary ui:
7.1 Destructuring a coupel of prop and methods from the table instance {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}
7.2 <table {...getTableProps()}>
7.3  <tbody {...getTableBodyProps()}>
7.4 see BasicTable.jsx
8. Include some css

9. Add Redux
10. Sorting: useSortBy. Add this hook to useTable hook.
10.1 <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
it adds propperties related to the sorting feature on each column
10.2 Add the icon to "th" that represent the sorted state of the column:
 <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
 11. Global Filtering
 11.1 Create a filter input component which takes two props: filter (value of input) 
 & setFilter 
 11.2 useGlobalFilter hook pass into the useTable hook & from the tableInstance we need to destructure two more things: state, setGlobalFilter
 11.3 From state destructure 'globalFilter'

 12. useFormik
 13. usePagination:
 13.1 Pagination (Next and Previous):
 Use page instead of rows in the jsx & nableInstance - we have 10 rows on pege
 Add two things to the tableInstamce: nextPage, previousPage & two btns for these
 Add two things to the tableInstamce: canNextPage, canPreviousPage - boolean value for the disabled prop of btns
 13.2 How many pages in totla count? 
 Add two things to the tableInstamce: goToPage, pageCount
 13.3 Pagination (Page size): 
 Add two things to the tableInstamce: setPageSize
 and pageSize from state
14. Selecting Rows:
14. Create a component that will help with selecting rows - checkbox:
useRowSelect: https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/row-selection?file=/src/App.js
selectedFlatRows
Add the column with checkbox






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
