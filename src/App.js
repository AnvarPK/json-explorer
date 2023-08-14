import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { Page } from './layout';
import { Explorer, Upload } from './pages';
import router from './router';

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
