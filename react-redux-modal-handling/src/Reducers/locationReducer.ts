import IAction from "../Interfaces/IAction";
import { LOCATION } from "../Constants/actions";
import ILocation from "../Interfaces/ILocation";

export interface ILocationReducerState {
    list: ILocation[];
}

const initialState = {
    list: [
        { id: 1, name: `Location 1` },
        { id: 2, name: `Location 2` },
        { id: 3, name: `Location 3` }
    ]
};

export default (state: ILocationReducerState = initialState, action: IAction) => {
    let newState = state;
    switch (action.type) {
        case LOCATION.ADD:
            newState = {
                list: [...state.list, action.payload]
            };
            break;
    }
    return newState;
}