/**
 * Shows the list of mapping items in the screen, the user can do
 * CRUD operations on this ui.
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * @since 3.25.0
 */

/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/**
 * Internal dependencies
 */
import store from "./store";
import MappingComponent from "./components/mapping-component/mapping-component";
// @@todo: we can use BEM and SCSS.
import "./mappings.css";

window.addEventListener("load", () => {
  ReactDOM.render(
    <Provider store={store}>
      <MappingComponent />
    </Provider>,
    document.getElementById("wl-mappings-container")
  );
});