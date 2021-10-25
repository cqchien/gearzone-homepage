import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./configs/theme";
import { routes } from "./configs/router";

const extractRoutes = routes.map((route, index) => {
  const { path, exact, component } = route;
  return <Route path={path} exact={exact} key={index} component={component} />;
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Routing */}
        <BrowserRouter>
          {/* Suspense lets your components “wait” for something before they can render. */}
          <Suspense fallback="Loading....">
            <Switch>
              {extractRoutes}
              <Route></Route>
            </Switch>
          </Suspense>
        </BrowserRouter>
        {/* <div id="_overlay"></div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
