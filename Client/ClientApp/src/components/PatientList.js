import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const PatientSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.get(`/patients/search/${searchTerm}`);
            setPatients(response.data);
        } catch (error) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Search Patients</h1>
            <form onSubmit={handleSearch} className="search-form">
                    <input
                        className="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search patients by name"
                    />
                    <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {patients.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Hospital</th>
                            <th>Visit Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.email}</td>
                                <td>
                                    {patient.patientHospitals.map((relation) => (
                                        <div key={relation.hospitalId}>
                                            {relation.hospital.name}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {patient.patientHospitals.map((relation) => (
                                        <div key={relation.visitId}>
                                            {new Date(relation.visit.date).toLocaleDateString()}
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PatientSearch;
