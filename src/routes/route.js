import { Switch, Route, Redirect } from "react-router-dom";
import Success from "../common/success";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home";
import LicensesRegistertionForm from "../components/licensesRegistertion";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/licenses" component={Home} />
    <Route
      exact
      path="/licensesregistertion"
      component={LicensesRegistertionForm}
    />
    <Route exact path="/success" component={Success} />
    <Redirect to="/"></Redirect>
  </Switch>
);

export default Routes;
