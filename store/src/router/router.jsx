import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import About from '../pages/about';
import Home from '../pages/home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />

            }
        ]
    }

])

export default router;