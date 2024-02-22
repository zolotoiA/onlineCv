import {createStore} from "redux";

const allReducers = combineReducers({
    cars: CarsReducers
});

export default allReducers