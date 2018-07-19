import React, { PureComponent } from 'react';
import InlineSVG from 'svg-inline-react';

import { IS_MOBILE_OS, IS_ANDROID } from '../../../helpers/detect-device';
import metamaskImg from '../../../assets/img/common/metamask.png';
import trustImg from '../../../assets/img/common/trust-icon.png';

import './InstallExtension.less';

export default class InstallExtension extends PureComponent {
    render() {
        let className = '';
        let img = {
            src: '',
            alt: ''
        };
        let text = '';
        let link = {
            href: '',
            content: ''
        };

        if (IS_MOBILE_OS) {
            if (IS_ANDROID) {
                className = 'install-trust';
                img = {
                    src: trustImg,
                    alt: 'Trust android'
                };
                text = 'To use Smartz on mobile please use Trust wallet browser';
                link = {
                    href: 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp',
                    content: <InlineSVG
                        className="badge-img"
                        src={require('../../../assets/img/common/google-play-badge.svg')}
                    />
                }
            } else {
                className = 'install-trust';
                img = {
                    src: trustImg,
                    alt: 'Trust ios'
                };
                text = 'To use Smartz on mobile please use Trust wallet browser';
                link = {
                    href: 'https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8',
                    content: <InlineSVG
                        className="badge-img"
                        src={require('../../../assets/img/common/app-store-badge.svg')}
                    />
                }
            }
        } else {
            className = 'install-metamask';
            img = {
                src: metamaskImg,
                alt: 'Metamask'
            };
            text = 'To pay Ether you need a Metamask plugin.';
            link = {
                href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
                content: 'Install for Chrome'
            }
        }

        return (
            <div className={`${className} install-extension flex`}>
                <img
                    className="img"
                    src={img.src}
                    alt={img.alt} />
                <p className="text">{text}</p>
                <a
                    className="link flex"
                    href={link.href}
                    target="_blanc">
                    {link.content}
                </a>
            </div>
        );
    }
};