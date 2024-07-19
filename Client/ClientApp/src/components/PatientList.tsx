import React, { useState, FormEvent, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Form, FormGroup, Input, Button, Container, Row, Col } from 'reactstrap';

interface Hospital {
    id: string;
    name: string;
}

interface Visit {
    id: string;
    date: string;
}

interface PatientHospitalRelation {
    patientId: string;
    hospitalId: string;
    visitId: string;
    hospital: Hospital;
    visit: Visit;
}

interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    patientHospitals: PatientHospitalRelation[];
}

const PatientList: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [patients, setPatients] = useState<Patient[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('')
        if (searchValue !== '') {

            try {
                const response = await axiosInstance.get<Patient[]>(`/patients/search/${searchValue}`)
                setPatients(response.data)

            } catch (error: any) {
                setError(error.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        } else {
            getAllPatients()
        }
    };

    const getAllPatients = async () => {
        const response = await axiosInstance.get<Patient[]>(`/patients`)
        setPatients(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getAllPatients()

    }, [])


    return (
        <Container>
            <Row>
                <Col>
                    <h2>Patient List</h2>
                </Col>
            </Row>
            <Row className="justify-content-center mb-3">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSearch} className="d-flex">
                        <FormGroup className="mb-0 pr-2 flex-grow-1">
                            <Input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search for patients..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary" style={{ height: '100%' }}>
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Row xs={12}>
                    <Col className="text-center">
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error} </p>}
                        {patients && patients.length == 0 && (
                            <p>No patients found. Please try again.</p>
                        )}
                    </Col>

                    {patients.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    {patients.map((patient: Patient) => (
                                        patient.patientHospitals && (
                                            <>
                                                <th>Hospital</th>
                                                <th>Visit Date</th>
                                            </>
                                        )
                                    ))}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((patient: Patient) => (
                                        <tr key={patient.id} >
                                            <td>{patient.firstName}</td>
                                            <td>{patient.lastName}</td>
                                            <td>{patient.email}</td>
                                            {patient.patientHospitals && (
                                                <>
                                                    <td>
                                                        {patient.patientHospitals.map((relation) => (
                                                            <div key={relation.hospitalId} >
                                                                {relation.hospital.name}
                                                            </div>
                                                        ))
                                                        }
                                                    </td>
                                                    <td>
                                                        {patient.patientHospitals.map((relation) => (
                                                            <div key={relation.visitId} >
                                                                {new Date(relation.visit.date).toLocaleDateString()}
                                                            </div>
                                                        ))
                                                        }
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                    }
                </Row>
            </Row>

        </Container>
    )
}

export default PatientList
