import React, {PureComponent} from 'react';
import {searchPlanets} from '../../actions/searchPlanets';
import { connect } from 'react-redux';
import Planet from '../Planet';

class SearchPage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        if(value!= '')
            this.props.dispatch(searchPlanets(value));
    }

    render() {
        const {planets} = this.props
        return(
            <>
            <input onChange={this.handleChange}/>
            {(planets && planets.length>0)
            ?planets.map(planet => {
                return (
                    <Planet name={planet.name} 
                        onClick={()=>this.props.dispatch({type:'Get planet info'})}
                    />
                );
            })
            :<div>Not found</div>}
            </>
        );
    }
}

const mapStateToProps = planets => planets;

export default connect(mapStateToProps)(SearchPage);