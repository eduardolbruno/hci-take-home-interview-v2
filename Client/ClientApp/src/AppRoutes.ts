import React from 'react';
import Home from './components/Home';
import PatientList from './components/PatientList';

// Define the type for the AppRoutes array
interface AppRoute {
    path: string;
    element: React.ComponentType;
}

const AppRoutes: AppRoute[] = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/search',
        element: PatientList,
    },
];

export default AppRoutes;