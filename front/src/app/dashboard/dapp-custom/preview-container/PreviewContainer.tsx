import * as React from 'react';

import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';

import './PreviewContainer.less';


interface IPreviewContainerProps {
  children: any;
}

export default class PreviewContainer extends React.PureComponent<IPreviewContainerProps, {}> {
  public render() {
    return (
      <div className="preview-container">
        <TitleContentWrapper title="Preview">
          {this.props.children}
        </TitleContentWrapper>
      </div>
    );
  }
}
