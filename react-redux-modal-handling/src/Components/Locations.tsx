import * as React from 'react';
import { connect } from 'react-redux';
import { IRootReducerState } from '../Reducers/rootReducer';
import { MODAL } from '../Constants/actions';
import LocationModal from './LocationModal';
import { generateKey } from '../Utils/util';

export interface ILocationsProps {

}

export interface ILocationsState {
    lastKey?: string;
}

type Props = ILocationsProps & ILocationsMapStateToProps & ILocationsMapDispatchToProps

class Locations extends React.Component<Props, ILocationsState>{
    constructor(props: Props) {
        super(props);
        this.addLocation = this.addLocation.bind(this);

        this.state = {

        };
    }

    public render() {
        const { results } = this.props;
        const { lastKey } = this.state;
        return <div>
            <div>Last added: {lastKey && results[lastKey] && results[lastKey].name}</div>
            <button onClick={this.addLocation}>add location</button>
        </div>;
    }

    private addLocation() {
        const { results, openLocationModal } = this.props;
        const { lastKey } = this.state;
        const prevId = lastKey && results[lastKey] && results[lastKey].id;
        const key = generateKey();
        this.setState({ lastKey: key }, () => {
            openLocationModal(key, prevId);
        });
        
    }
}

export interface ILocationsMapStateToProps {
    results: { [key: string]: any }
}

const mapStateToProps = (state: IRootReducerState): ILocationsMapStateToProps => ({
    results: state.modal.results
});

export interface ILocationsMapDispatchToProps {
    openLocationModal: (key: string, prevId?: number) => void;
}

const mapDispatchToProps = (dispatch: any) => ({
    openLocationModal: (key: string, prevId?: number) => dispatch({ type: MODAL.OPEN, payload: { key, modal: LocationModal, params: { prevId: prevId || 0 } } })
});

export default connect<ILocationsMapStateToProps, ILocationsMapDispatchToProps, ILocationsProps>(mapStateToProps, mapDispatchToProps)(Locations);