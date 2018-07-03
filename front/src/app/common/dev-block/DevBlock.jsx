import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import developersImg from '../../../assets/img/common/developers.jpg';

import './DevBlock.less';
import { sendClickEvent } from '../../../helpers/statictics';
import { clickTypes } from '../../../constants/constants';

export default class DevBlock extends PureComponent {
  render() {
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
        <img src={developersImg} alt="for-dev" />
      </div>
    );
  }
}
