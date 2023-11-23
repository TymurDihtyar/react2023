import {Component} from "react";
import {carService} from "../../services/carService";
import {Cars} from "./Cars";

class CarsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }


    componentDidMount() {
        carService.getAll().then(({data}) => this.setState({cars: data}))
    }

    render() {
        return (
            <div style={{width: '100%', padding:'10px'}}>
                <h1>Cars</h1>
                {this.state.cars.map(car => <Cars key={car.id} car={car}/>)}
            </div>
        )
    }
}

export {CarsContainer}