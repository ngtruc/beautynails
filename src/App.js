
import './App.css';
import Navbar from './components/navBar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery'
import ContactPage from './components/pages/ContactPage';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beautynails" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
