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

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ContactUs" exact component={ContactUs} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
