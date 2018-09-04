interface IAction {
    type: string;
    payload?: any;
    meta?: any;
}

export default IAction;