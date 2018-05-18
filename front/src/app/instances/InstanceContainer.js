import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { find } from 'lodash';

import Instance from './Instance';
import { viewFuncResult } from './InstancesActions';

const mapStateToProps = (state, ownProps) => {
  const instance = find(state.instances.instances, { instance_id: ownProps.match.params.id });

  return {
    instance: instance,
    instanceError: state.instances.error,
  };
};

const mapDispatchToProps = { viewFuncResult };

const InstanceContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Instance));

export default InstanceContainer;
