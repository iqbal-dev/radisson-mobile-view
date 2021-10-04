import { Route, Switch } from "react-router";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Header from "./components/Header";
import Items from "./components/Items/Items";

function App() {
  return (
    <div className=" App container">
      <Switch>
        <Route exact path="/">
          <>
            <Header />
            <Items />
          </>
        </Route>
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
