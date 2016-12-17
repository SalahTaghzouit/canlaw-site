/*
 *
 * Identity
 *
 */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import { makeSelectIdentity } from './selectors';
import { requestIdentity } from './actions';


export class Identity extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state identity is null, get it
   */
  componentDidMount() {
    if (isEmpty(this.props.identity)) {
      this.props.reloadIdentity();
    }
  }

  render() {
    return (
      <div>
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

Identity.propTypes = {
  // TODO switch to shape instead of object
  identity: React.PropTypes.object,
  reloadIdentity: React.PropTypes.func,
  children: React.PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectIdentity(),
  (identity) => ({ identity })
);

function mapDispatchToProps(dispatch) {
  return {
    reloadIdentity: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(requestIdentity());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Identity);
