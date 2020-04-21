import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';
import 'isomorphic-fetch';

import { getUsers } from '../client/redux/selectors';
import store from '../src/store';
import App from '../src/App';

const app = express();

app.use(express.static(__dirname + '/../'));
app.use(express.static(__dirname + '/../../data'));

app.get('*', (req, res) => {


  const unsubscribe = store.subscribe(() => {
    let lofasz = store.getState()
    const events = (lofasz) => events;
    if (events !== null && events.length > 0) {
      unsubscribe();

      res.set('Content-Type', 'text/html');
      res.send(`
        <html>
          <head>
            <title>App</title>
            <style>
              body {
                font-size: 18px;
                font-family: Verdana;
              }
            </style>
          </head>
          <body>
            <div id="content">${ ReactDOMServer.renderToString(<Provider store={ store }><App /></Provider>) }</div>
            <script>
              window.__APP_STATE = ${ JSON.stringify(store.getState()) };
            </script>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `);
    }
  });

  ReactDOMServer.renderToString(<Provider store={ store }><App /></Provider>);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));