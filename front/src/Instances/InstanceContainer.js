import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { find } from 'lodash';

import Instance from './Instance';
import { viewFuncResult } from './InstancesActions';

const mapStateToProps = (state, ownProps) => {
  const instance = find(state.instances.instances, { instance_id: ownProps.match.params.id });
  const ctor = find(state.ctors.ctors, { ctor_id: instance ? instance.ctor_id : -1 });
  return {
    instance: { ...instance },
    ctor
  };
};

const mapDispatchToProps = { viewFuncResult };

const InstanceContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Instance));

export default InstanceContainer;
