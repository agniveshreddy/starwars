import React, {memo} from 'react';
import { connect } from 'react-redux';

const PlanetDetails = ({planetDetails}) => {
    return(<div>
        planet Details
        <table>
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
        </table>
        </div>);
};

const mapStateToProps = planetDetails => planetDetails;

export default connect(mapStateToProps)(PlanetDetails);