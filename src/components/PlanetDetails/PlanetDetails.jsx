import React, {memo} from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './PlanetDetails.scss';
import Container from 'react-bootstrap/Container';

const PlanetDetails = ({planetDetails}) => {
    return(<Container>
        <h1>Planet Details</h1>
        <Table striped bordered hover>
            <tbody> 
            {Object.entries(planetDetails).map(([key, val], i) => 
            <tr key={i}>
                <td>{key}</td>
                {Array.isArray(val)
                ? val.map(item => <span>{item}</span>)
                : <td>{val}</td>}
            </tr>
            )}
            </tbody>
        </Table>
        </Container>);
};

const mapStateToProps = planetDetails => planetDetails;

export default connect(mapStateToProps)(PlanetDetails);