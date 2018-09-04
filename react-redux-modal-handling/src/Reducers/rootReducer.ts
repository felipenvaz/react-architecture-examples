import modal, { IModalReducerState } from './modalReducer';
import location, { ILocationReducerState } from './locationReducer';
import { combineReducers } from 'redux';
import IAction from '../Interfaces/IAction';

export interface IRootReducerState {
    modal: IModalReducerState;
    location: ILocationReducerState;
}

export default combineReducers<IRootReducerState, IAction>({
    modal,
    location
});