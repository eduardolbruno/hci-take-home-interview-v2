import React from 'react';
import { Col, Row } from 'reactstrap';

 const Home: React.FC = () => {

     return (
        <div>
        <h1>Hello, welcome!</h1>
        <Row xs={12}>
            <Col className="text-center pt-4">
                <p>You can navigate to the <code>Search</code> section using the top navigation bar. </p>
                     <p>Any questions, please contact: <a href="mailto:eduardo.luis.bruno@gmail.com">eduardo.luis.bruno@gmail.com</a></p>
            </Col>
             </Row>
         </div>

    );
}

export default Home
