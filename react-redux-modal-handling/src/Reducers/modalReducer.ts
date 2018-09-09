import IAction from "../Interfaces/IAction";
import { MODAL } from "../Constants/actions";

export interface IModalInstance {
    key: string;
    modal: React.ComponentClass<any>;
    params?: any;
}

export interface IModalReducerState {
    results: { [key: string]: any };
    instances: IModalInstance[];
}

const initialState = {
    results: {},
    instances: []
};

export default (prevState: IModalReducerState = initialState, action: IAction) => {
    let state = prevState;
    switch (action.type) {
        case MODAL.OPEN:
            state = {
                ...state,
                instances: [...state.instances, action.payload]
            };
            break;
        case MODAL.CLOSE:
            const key = action.meta;
            state = {
                ...state,
                results: {
                    ...state.results,
                    [key]: action.payload
                },
                instances: state.instances.filter(i => i.key != key)
            }
            break;
    };
    return state;
}