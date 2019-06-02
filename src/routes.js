import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Admin from './pages/Admin/Admin';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
export const routersUser = [
    // {
    //     // tên đường dẫn
    //     path : '/',
    //     // xác định nó là đường dẫn duy nhất
    //     exact : true,
    //     // khai báo component tương ứng với cái route,  
    //     main: () => <HomePage/>
    // },
    // {
    //     path: '',
    //     exact: false,
    //     main:() =><NotFoundPage/>
    // }
];
export const routersAdmin = [
    {
        // tên đường dẫn
        path : '/admin',
        // xác định nó là đường dẫn duy nhất
        exact : true,
        // khai báo component tương ứng với cái route,  
        main: () => <Admin/>
    },
];

