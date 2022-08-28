import React from "react";
import './footer.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import SubFooter from "./subfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (<div className="footer">
        <div className="footer-container container-xxl">
            <SubFooter />
            <div className="footer-menu">
                <div className="row">
                    <div className="col footer-logo">
                        <Logo 
                            width={168}
                            height={27}
                            viewBox="104 0 40 40"
                            fill="white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-xxl-4">
                        <div className="row">
                            <div className="contact col-xs-12">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis purus, posuere non nisl et, vestibulum posuere nibh. Duis.</p>
                            </div>
                            <div className="contact col-xs-12">
                                <FontAwesomeIcon icon={faPhone} />
                                <p>
                                    +1-53-123-4567
                                </p>
                            </div>
                            <div className="contact col-xs-12">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>
                                    example@fylo.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-xxl-4 bottom-menu">
                        <div className="row">
                            <div className="col-xs-12 col-xxl-6">
                                <div className="bm-link"><a href="#">About Us</a></div>
                                <div className="bm-link"><a href="#">What We Do</a></div>
                                <div className="bm-link"><a href="#">FAQ</a></div>
                            </div>
                            <div className="col-xs-12 col-xxl-6">
                                <div className="bm-link"><a href="#">Career</a></div>
                                <div className="bm-link"><a href="#">Blog</a></div>
                                <div className="bm-link"><a href="#">Contact Us</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-xxl-4 footer-brands">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="copyright">
                        <span><FontAwesomeIcon icon={faCopyright} /></span> Copyright 2018 Huddle. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>)
}