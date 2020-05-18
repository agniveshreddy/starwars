import React, {PureComponent} from 'react';
import { searchPlanets, getPlanetInfo } from '../../actions/PlanetActions';
import { connect } from 'react-redux';
import Planet from '../Planet';
import {types} from '../../actions';

class SearchPage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onPlanetClick = this.onPlanetClick.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.props.dispatch(searchPlanets(value));
    }

    onPlanetClick(planetName){
        console.log('on planet click called');
        this.props.dispatch(getPlanetInfo(planetName));
    }

    componentDidUpdate(){
        const {planetDetails}  = this.props;
        if(planetDetails && planetDetails.name){
            this.props.history.push('/planet');
        }
    }

    render() {
        const {planets} = this.props
        return(
            <>
            <input onChange={this.handleChange}/>
            {planets && 
            (planets.length>0
            ?planets.map((planet, i) => {
                return (
                    <Planet 
                        name={planet.name}
                        key={i}
                        onClick={() => this.onPlanetClick(planet.name)}
                    />
                );
            })
            :<div>{planets.error}</div>)}
            </>
        );
    }
}

//const mapStateToProps = ({planets, planetDetails}) => {planets, planetDetails};
function mapStateToProps(state) {
    return {
      planets: state.planets,
      planetDetails: state.planetDetails,
    }
  }

export default connect(mapStateToProps)(SearchPage);