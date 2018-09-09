import { connect } from 'react-redux';
import { IRootReducerState } from '../Reducers/rootReducer';
import { MODAL } from '../Constants/actions';
import * as Modal from 'react-modal';
import * as React from 'react';
import ILocation from '../Interfaces/ILocation';

export interface ILocationModalProps {
    keyParam: string;
    params: { prevId: number; }
}

export interface ILocationModalState {
    name: string;
}

type Props = ILocationModalProps & {} & ILocationModalMapDispatchToProps

class LocationsModal extends React.Component<Props, ILocationModalState>{
    constructor(props: Props) {
        super(props);
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            name: ''
        };
    }

    public render() {
        const { name } = this.state;
        return (
            <Modal isOpen={true} ariaHideApp={false}>
                <input value={name} onChange={this.onChange} name={'name'} />
                <button onClick={this.save}>save</button>
            </Modal>
        );
    }

    private onChange(evt: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: evt.currentTarget.value });
    }

    private save() {
        const { close, params: { prevId }, keyParam } = this.props;
        const { name } = this.state;
        if (name) {
            close(keyParam, { id: prevId + 1, name });
        }
    }
}

const mapStateToProps = (state: IRootReducerState): {} => ({

});

export interface ILocationModalMapDispatchToProps {
    close: (key: string, location?: ILocation) => void;
}

const mapDispatchToProps = (dispatch: any): ILocationModalMapDispatchToProps => ({
    close: (key: string, location?: ILocation) => dispatch({ type: MODAL.CLOSE, meta: key, payload: location })
});

export default connect<{}, ILocationModalMapDispatchToProps, ILocationModalProps>(mapStateToProps, mapDispatchToProps)(LocationsModal);