import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./components/Form/BookingForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/booking" exact component={BookingForm} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
