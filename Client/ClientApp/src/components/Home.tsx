import React from 'react';
import { Col, Row } from 'reactstrap';

const Home: React.FC = () => {

    return (
        <div>
            <h2>Hello, welcome!</h2>
            <Row xs={12}>
                <Col className="text-center pt-4">
                    <p>You can navigate to the <code>Search Patients</code> section using the top navigation bar. </p>
                    <p>Any questions, please contact: <a href="mailto:eduardo.luis.bruno@gmail.com">eduardo.luis.bruno@gmail.com</a></p>
                </Col>
            </Row>
        </div>

    );
}

export default Home
