import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Resume from './pages/Resume'; // Import your Resume component
import Error from './pages/error'; // Make sure this component exists and is exported

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />, // Define the route for Resume
  },
  {
    path: "*",
    element: <Error />, // Error component for handling not found pages
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

