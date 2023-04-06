import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './store'
import PageRoutes from './PageRoutes';
import './App.css';
import './global/basic.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PageRoutes/>
      </Provider>
    </div>
  );
}

export default App;
