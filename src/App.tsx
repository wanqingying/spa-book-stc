import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { RootRoutes, RouteType } from "src/route/config";

function App() {
  function getConfig(config?: RouteType[]) {
    if (!config || config?.length <= 0) return "";
    return (
      <Switch>
        {config.map((n) => {
          const Element = n.element;
          const children = n.children;
          return (
            <Route path={n.path} key={n.path}>
              <Element>{getConfig(n.children)}</Element>
            </Route>
          );
        })}
      </Switch>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>{getConfig(RootRoutes)}</BrowserRouter>
    </div>
  );
}

export default App;
