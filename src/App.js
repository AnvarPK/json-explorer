import { Provider } from 'react-redux';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { Page } from './layout';
import { Explorer, Upload } from './pages';
import router from './router';
import store from './redux';

function App() {
  return (<Provider store={store}>
    <RouterProvider router={router} />
  </Provider>);
}

export default App;
