import * as React from 'react';
import Locations from '../Components/Locations';
import { Provider } from 'react-redux';
import store from '../store';
import ModalHandler from './ModalHandler';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <ModalHandler />
          <Locations />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;