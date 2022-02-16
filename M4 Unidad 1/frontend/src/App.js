import { BrowserRouter as Router,Sitch, Route, Switch } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <Router>
      <Headers/>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/nosotros" exact component={NosotrosPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contacto" exact component={ContactoPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
