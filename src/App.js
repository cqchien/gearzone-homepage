import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./configs/theme";
import { routes } from "./configs/router";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/UI/Loading";
import Message from "./container/Message";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/reducers/user.reducer";

const extractRoutes = routes.map((route, index) => {
  const { path, exact, component } = route;
  return <Route path={path} exact={exact} key={index} component={component} />;
});

function App() {
  const dispatch = useDispatch();
  const { loading, isLogin } = useSelector((state) => state.user);
  // dispatch to get user before get page
  useEffect(() => {
    dispatch(getUser());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          <Message />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
