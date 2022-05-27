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
      <div className="App">
        <div className="App-header">
          <Switch>
            <ProductsProvider>
              <PrivateRoute
                component={Home}
                path="/"
              />
            </ProductsProvider>
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
