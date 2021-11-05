import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./configs/theme";
import { routes } from "./configs/router";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/UI/Loading";

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
          <TopBar />
          <Header isScroll={true} />
          {/* Suspense lets your components “wait” for something before they can render. */}
          <Suspense fallback={<Loading />}>
            <Switch>
              {extractRoutes}
              <Route></Route>
            </Switch>
          </Suspense>
        </BrowserRouter>
        {/* <div id="_overlay"></div> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
