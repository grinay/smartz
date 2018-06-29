import * as React from 'react';

import './DeployHeader.less';


interface IDeployHeaderProps {
  ctor: any;
}

export default class DeployHeader extends React.PureComponent<IDeployHeaderProps, {}> {
  public render() {
    const { ctor } = this.props;

    return (
      <section className="form-title deploy-header flex">
        {ctor.image && (
          <div className="form-title__logo">
            <img
              className="form-title__img"
              src={require(`../../common/ctor-card/img/${ctor.image}`)}
              alt={`${ctor.ctor_name} contract`}
            />
          </div>
        )}
        {ctor.ctor_name && (
          <div className={'form-title__title'}>
            <h2>{ctor.ctor_name}</h2>
            <p>
              <span>Contract: </span>
              <a href={`${window.location.origin}/deploy/${ctor.ctor_id}`}>
                {`${window.location.origin}/deploy/${ctor.ctor_id}`}
              </a>
            </p>
          </div>
        )}
      </section>
    );
  }
}
