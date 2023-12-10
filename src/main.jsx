import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import QuizPage from './components/quizpage/QuizPage.jsx';
import ResultPage from './components/quizpage/ResultPage.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Account from './components/Account.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="quizpage" element={<QuizPage />} />
      <Route path="resultpage" element={<ResultPage />} />
      <Route path="account" element={<Account />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthContextProvider>
);

