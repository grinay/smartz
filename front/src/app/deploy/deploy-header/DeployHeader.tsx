import * as React from 'react';

import './DeployHeader.less';


interface IDeployHeaderProps {
  ctor: any;
}

export default class DeployHeader extends React.PureComponent<IDeployHeaderProps, {}> {
  public render() {
    const { ctor } = this.props;

    return (
      <section className="deploy-header flex">
        {ctor.image && (
          <div className="logo">
            <img
              className="img"
              src={require(`../../common/ctor-card/img/${ctor.image}`)}
              alt={`${ctor.name} contract`}
            />
          </div>
        )}
        {ctor.name && (
          <div className={'title'}>
            <h2 className="ctor-title">{ctor.name}</h2>
            <p className="contract">
              <span>Constructor: </span>
              <a href={`${window.location.origin}/deploy/${ctor.id}`}>
                {`${window.location.origin}/deploy/${ctor.id}`}
              </a>
            </p>
          </div>
        )}
      </section>
    );
  }
}
