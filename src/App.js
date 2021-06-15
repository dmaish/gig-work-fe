import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./app/routes";

export default function App({ store, basename }) {
 return (
   <Provider store={store}>
       <BrowserRouter basename={basename}>
            <body class="blue-skin">
              {/* <div class="Loader"></div> */}
              <div id="main-wrapper">
                <Routes />
             </div>
            </body>
       </BrowserRouter>
   </Provider>
 );
}