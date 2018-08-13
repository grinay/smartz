import * as React from 'react';
import { Link } from 'react-router-dom';

import { clickTypes } from '../../../constants/constants';
import { sendClickEvent } from '../../../helpers/statictics';

import './DevBlock.less';


export default class DevBlock extends React.PureComponent {
  public render() {
    return (
      <div className="dev-block">
        <div className="description">
          <h2>Developers!</h2>
          <p>You can upload your smart contract to Smartz platform.</p>
          <div className="buttons-block flex-v">
            <Link
              to="/ctor-add"
              // send click event
              onClick={() => sendClickEvent(clickTypes.UPLOAD_CONTRACT)}
              className="description__link upload flex">
              Upload contract
            </Link>
            <a
              // send click event
              onClick={() => sendClickEvent(clickTypes.LEARN_MORE)}
              href="https://wiki.smartz.io/en/contract-uploading"
              className="description__link learn flex"
              target="_blanc">
              Learn more
            </a>
          </div>
        </div>
        <img src={require('../../../assets/img/common/developers.jpg')} alt="for-dev" />
      </div>
    );
  }
}
