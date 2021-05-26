import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import AddNewProduct from "./pages/AddNewProduct";
import AddNewProvaider from "./pages/AddNewProvaider";
import AddNewCustomer from "./pages/AddNewCustomer";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Dashboard}/>
        <Route exact path = "/addnewproduct" component = {AddNewProduct}/>
        <Route exact path = "/addnewprovaider" component = {AddNewProvaider}/>
        <Route exact path = "/addnewcustomer" component = {AddNewCustomer}/>
        <Route component = {PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
