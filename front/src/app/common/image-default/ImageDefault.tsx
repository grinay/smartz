import * as classNames from 'classnames';
import * as React from 'react';

import './ImageDefault.less';


interface IImageDefaultProps {
  src: string;
  name?: string;
  classNameImg?: string;
}

export default class ImageDefault extends React.PureComponent<IImageDefaultProps, {}> {
  constructor(props) {
    super(props);

    this.tryRequire = this.tryRequire.bind(this);
  }

  private tryRequire(src: string) {
    try {
      return require(`../../../assets/img/ctors/${src}`);
    } catch (err) {
      return null;
    }
  }

  public render() {
    const { src, name = '', classNameImg = '' } = this.props;

    const image = this.tryRequire(src);

    return (
      <div className={classNames('image-default flex', { char: image === null })}>
        {image != null
          ? <img className={classNameImg} src={image} alt={`${name ? name : ''} dapp`} />
          : <p className="empty-img">{name ? name.charAt(0).toUpperCase() : 'D'}</p>
        }
      </div>
    );
  }
}
