import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { path, element: Component } = route;
                        return <Route key={index} path={path} element={<Component />} />;
                    })}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;