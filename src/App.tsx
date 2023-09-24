import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { RootRoutes, Rx } from "src/route/config";

function App() {
  function getConfig(config?: Rx[]) {
    if (config?.length <= 0) return '';
    return (
      <Switch>
        {config.map((n) => {
          const Element = n.element;
          const children = n.children;
          return (
            <Route path={n.path}>
              <Element />
              {getConfig(n.children)}
            </Route>
          );
        })}
      </Switch>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        {getConfig(RootRoutes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
