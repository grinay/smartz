import { connect } from 'react-redux';

import DappCustom from './DappCustom';


const mapStateToProps = (state) => ({
  search: state.app.search,
  dapps: state.dapps.dappList,
});

const DappCustomContainer = connect(mapStateToProps, null)(DappCustom);

export default DappCustomContainer;
