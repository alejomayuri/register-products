import './App.css';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductContext';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import { Route, Switch } from 'wouter';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
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
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
