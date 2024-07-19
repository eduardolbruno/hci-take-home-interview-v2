import { Home } from "./components/Home";
import PatientList from "./components/PatientList";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/search',
        element: <PatientList />
    }
];

export default AppRoutes;
