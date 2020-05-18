import React, {PureComponent} from 'react';
import { searchPlanets, getPlanetInfo } from '../../actions/PlanetActions';
import { connect } from 'react-redux';
import Planet from '../Planet';
import Legend from '../Legend';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {DARK_GRAY, GRAY, SILVER, LIGHT_GRAY, GAINS_BORO, RED} from '../../constants';
import './SearchPage.scss'; 

class SearchPage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onPlanetClick = this.onPlanetClick.bind(this);
        this.classifyClassName = this.classifyClassName.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.props.dispatch(searchPlanets(value));
    }

    onPlanetClick(planetName){
        this.props.dispatch(getPlanetInfo(planetName));
    }

    classifyClassName(population){
        const pop = Number(population);
        switch(true){
            case (pop >= 21000000000):
                return  DARK_GRAY;
            case (pop <= 21000000000 && pop >= 4000000000):
                return  GRAY;
            case (pop <= 4000000000 && pop >= 1000000000):
                return SILVER;
            case (pop <= 1000000000 && pop >= 400000000):
                return LIGHT_GRAY;
            case (pop <= 400000000 && pop >= 0):
                return GAINS_BORO;
            default: 
                return RED;
        }
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
            <Container>
                <div className='searchBar'>
                    <Form.Control onChange={this.handleChange}/>
                    {planets && 
                    (planets.length>0
                    ?planets.map((planet, i) => {
                        const className = this.classifyClassName(planet.population);
                        return (
                            <Planet 
                                className={className}
                                name={planet.name}
                                key={i}
                                onClick={() => this.onPlanetClick(planet.name)}
                            />
                        );
                    })
                    :<div>{planets.error}</div>)}
                </div>
                <Legend/>
            </Container>
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