// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import FormPage from './pages/FormPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Planner from './pages/Planner.tsx';


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Home />
    }, 
    {
      path: '/FormPage',
      element: <FormPage />
    },
    {
      path: '/Planner',
      element: <Planner />
    }
  ]
}
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
