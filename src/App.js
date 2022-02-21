import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './index.css';
import Header from './Components/Header/Header';
import Home from './Screens/Home/Home';
import Footer from './Components/Footer/Footer';
import ContactUs from './Screens/ContactUs/ContactUs';
import Who_we_are from './Screens/Who-we-are/Who-we-are';

function App() {
  return (
    <>
      <Router>
        <Header className="position-relative opacity-100"/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Who-we-are" exact component={Who_we_are} />
          <Route path="/ContactUs" exact component={ContactUs} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
