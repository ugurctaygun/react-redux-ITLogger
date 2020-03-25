Redux
Json-Server
Materialize UI

npx create-react-app

npm i -D json-server concurrently

npm i materialize-css

npm i redux react-redux redux-thunk redux-devtools-extension

RUN SERVER AND CLIENT CONCURRENTLY WITH NPM

Add  "json-server": "json-server --watch db.json --port 5000",
"dev": "concurrently \"npm start\" \"npm run json-server\"",
to package.json script file to start server and client with npm run dev

Create a proxy "proxy": "http://localhost:5000" in package.json for just using '/' while doing api calls.