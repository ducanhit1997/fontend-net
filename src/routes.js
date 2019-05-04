import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const routes = [
    {
        // tên đường dẫn
        path : '/',
        // xác định nó là đường dẫn duy nhất
        exact : true,
        // khai báo component tương ứng với cái route,  
        main: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        main:() =><NotFoundPage/>
    }
];

export default routes;