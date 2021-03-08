import { Provider } from 'react-redux';
import { store } from './redux/store';
import CatReducer from './components/CatReducer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CatReducer />
    </div>
    </Provider>
  );
}

export default App;

