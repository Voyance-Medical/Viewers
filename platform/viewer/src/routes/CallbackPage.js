import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CallbackComponent } from 'redux-oidc';

class CallbackPage extends Component {
  static propTypes = {
    userManager: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    return (
      <CallbackComponent
        userManager={this.props.userManager}
        successCallback={() => {
          let { pathname, search = '' } = JSON.parse(
            sessionStorage.getItem('ohif-redirect-to')
          );

          // TODO: fix this should not be fixed to specific data store
          pathname =
            '/projects/vpacs-323411/locations/europe-west3/datasets/Germany-test-dataset/dicomStores/dicom-test-data-store';

          this.props.history.push({ pathname, search });
        }}
        errorCallback={error => {
          //this.props.history.push("/");
          throw new Error(error);
        }}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default withRouter(CallbackPage);
