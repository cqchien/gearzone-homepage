import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import "./style/index.scss";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { renderRoutes, routes } from './configs/router';
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from './reducers/user';
import { getIsAuth } from "./reducers/auth";
import GlobalLoading from "./components/Loading/Global";
import NotFound from "./components/NotFound";


function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authenticate);

  useEffect(() => {
    //authentication
    dispatch(getIsAuth());
    return () => { };
  }, [dispatch]);


  useEffect(() => {
    //get user -> store redux
    if (isAuth) dispatch(getUserRequest());
    return () => { };
  }, [dispatch, isAuth]);

  return (
    <BrowserRouter >
      <TopBar />
      {/* Suspense lets your components “wait” for something before they can render. */}
      <Suspense fallback={<GlobalLoading />}>
        <div className="App" id="app">
          <Header />
          <Switch>
            {renderRoutes(routes)}
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
