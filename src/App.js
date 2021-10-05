import logo from './logo.svg';
import './App.css';
import Home from './conponents/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './conponents/Courses/Courses';
import About from './conponents/About/About';
import Contact from './conponents/Contact/Contact';
import NotFound from './conponents/NotFound/NotFound';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Events from './conponents/Events/Events';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      
           <Header></Header>
        
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
                 <Courses></Courses>
          </Route>
          <Route path="/events">
                <Events></Events>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/events">
             <Events></Events>
          </Route>
          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        
              <Footer></Footer>
        
      </Router>
    </div>
  );
}

export default App;
