import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axiosInstance.get('/patients');
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patient List</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.firstName} {patient.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;