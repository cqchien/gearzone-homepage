import { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import "./style/index.scss";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { renderRoutes, routes } from './configs/router';

function App() {

  return (
    <BrowserRouter >
      <TopBar />
      {/* Suspense lets your components “wait” for something before they can render. */}
      <Suspense fallback="loading">
        <div className="App" id="app">
          <Header />
          <Switch>
            {renderRoutes(routes)}
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
