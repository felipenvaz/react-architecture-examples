import * as React from 'react';
import { IRootReducerState } from '../Reducers/rootReducer';
import { connect } from 'react-redux';
import { IModalInstance } from '../Reducers/modalReducer';

export interface IModalHandlerProps {

}

export interface IModalHandlerState {

}

type Props = IModalHandlerProps & IModalHandlerMapStateToProps & IModalHandlerMapDispatchToProps;

class ModalHandler extends React.Component<Props, IModalHandlerState> {
    public render() {
        return (this.props.instances.map(i => {
            return <i.modal key={i.key} keyParam={i.key} params={i.params} />
        }));
    }
}

export interface IModalHandlerMapStateToProps {
    instances: IModalInstance[]
}

const mapStateToProps = (state: IRootReducerState): IModalHandlerMapStateToProps => ({
    instances: state.modal.instances
});

export interface IModalHandlerMapDispatchToProps {

}

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect<IModalHandlerMapStateToProps, IModalHandlerMapDispatchToProps, IModalHandlerProps>(mapStateToProps, mapDispatchToProps)(ModalHandler);