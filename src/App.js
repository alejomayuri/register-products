import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import { Route, Switch } from 'wouter';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="App-header">
          <Switch>
            <PrivateRoute
              component={Home}
              path="/"
            />
            <Route
              component={Inicio}
              path="/inicio" />
          </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
