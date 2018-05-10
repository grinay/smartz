import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import FunctionCard from './FunctionCard';

import {
  transactionNew, transactionReceipt
} from '../InstancesActions';
 
const mapDispatchToProps = {
  transactionNew, transactionReceipt
};
 
const FunctionCardContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(FunctionCard));
 
export default FunctionCardContainer;
