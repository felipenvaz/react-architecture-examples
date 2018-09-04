import * as React from 'react';
import * as Modal from 'react-modal';
import { connect } from 'react-redux';
import IEquipment from '../Interfaces/IEquipment';
import ILocation from '../Interfaces/ILocation';
import { IRootReducerState } from '../Reducers/rootReducer';
import { IModalInstance } from '../Reducers/modalReducer';
import { LOCATION } from '../Constants/actions';

export interface IEquipmentModalProps {

}

export interface IEquipmentModalState {
    equipment: IEquipment
    addLocationKey?: string;
}

interface IProps extends IEquipmentModalProps, IEquipmentModalMapStateToProps, IEquipmentModalMapDispatchToProps {
}

class EquipmentModal extends React.Component<IProps, IEquipmentModalState>{
    private inputStyle = {
        display: 'block',
        marginBottom: '10px'
    };

    constructor(props: IProps) {
        super(props);
        this.addLocation = this.addLocation.bind(this);

        this.state = {
            equipment: {
                id: 0,
                name: '',
                location: { id: 0, name: '' }
            }
        };
    }

    public render() {
        const { isOpen, locations } = this.props;
        const { equipment } = this.state;

        return (
            <Modal isOpen={isOpen}>
                <input type="text" value={equipment.name} style={this.inputStyle} />
                <select value={equipment.location.id} style={this.inputStyle}>
                    {locations.map(location => (<option key={location.id} value={location.id}>{location.name}</option>))}
                </select>
                <button onClick={this.addLocation}>Add location</button>
            </Modal>
        );
    }

    public componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.isOpen && this.props.isOpen) {
            this.setState({
                equipment: {
                    id: 0,
                    name: '',
                    location: { id: 0, name: '' }
                },
                addLocationKey: undefined
            });
        } else if(this.state.addLocationKey &&){

        }
    }

    private addLocation() {
        const key = (new Date()).getTime().toString();
        this.setState({ addLocationKey: key }, () => {
            this.props.addLocation(key);
        });
    }
}

export interface IEquipmentModalMapStateToProps {
    isOpen: boolean;
    locations: ILocation[];
    locationModalInstances: { [key: string]: IModalInstance };
}

const mapStateToProps = (state: IRootReducerState): IEquipmentModalMapStateToProps => ({
    isOpen: state.modal.equipment.open.length > 0,
    locations: state.location.list,
    locationModalInstances: state.modal.location.instances
});

export interface IEquipmentModalMapDispatchToProps {
    addLocation: (key: string) => void;
}

const mapDispatchToProps = (dispatch: any) => ({
    addLocation: (key: string) => dispatch({ type: LOCATION.MODAL.OPEN, payload: key })
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentModal);