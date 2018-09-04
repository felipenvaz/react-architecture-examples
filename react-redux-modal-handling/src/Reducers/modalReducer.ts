import IAction from "../Interfaces/IAction";
import { EQUIPMENT, LOCATION } from "../Constants/actions";
import EModalMode from "../Constants/EModalMode";

export interface IModalInstance {
    key: string;
    mode: EModalMode;
}

export interface IModalState {
    instances: { [key: string]: IModalInstance };
    results: { [key: string]: any };
}

export interface IModalReducerState {
    equipment: IModalState;
    location: IModalState;
}

const initialState = {
    equipment: {
        results: {},
        instances: {}
    },
    location: {
        results: {},
        instances: {}
    }
};

export default (state: IModalReducerState = initialState, action: IAction) => {
    let newState = state;
    const { equipment, location } = state;
    switch (action.type) {
        case EQUIPMENT.MODAL.OPEN:
            newState = {
                ...newState,
                equipment: {
                    open: [...equipment.open, action.payload],
                    instances: {
                        ...equipment.instances,
                        [action.payload]: { key: action.payload, mode: EModalMode.add }
                    }
                }
            };
            break;
        case EQUIPMENT.MODAL.CLOSE:
            newState = {
                ...newState,
                equipment: {
                    open: equipment.open.filter(key => key !== action.payload),
                    instances: equipment.instances
                }
            };
            break;
        case LOCATION.MODAL.OPEN:
            newState = {
                ...newState,
                location: {
                    open: [...location.open, action.payload],
                    instances: {
                        ...location.instances,
                        [action.payload]: { key: action.payload, mode: EModalMode.add }
                    }
                }
            };
            break;
        case LOCATION.MODAL.CLOSE:
            newState = {
                ...newState,
                location: {
                    open: location.open.filter(key => key !== action.payload),
                    instances: location.instances
                }
            };
            break;
    }
    return newState;
}