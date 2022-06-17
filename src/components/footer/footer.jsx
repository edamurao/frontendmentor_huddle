import React from "react";
import './footer.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import SubFooter from "./subfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (<div className="footer">
        <div className="container-xxl">
            <SubFooter />
            <div className="row">
                <div className="col footer-logo"><Logo fill="white" /></div>
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
                        <div className="col-xs-12">
                            <p>About Us</p>
                            <p>What We Do</p>
                            <p>FAQ</p>
                        </div>
                        <div className="col-xs-12">
                            <p>Carrer</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-xxl-4 footer-brands">
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 text-center copyright">
                    <span><FontAwesomeIcon icon={faCopyright} /></span> Copyright 2018 Huddle. All rights reserved.
                </div>
            </div>
        </div>
    </div>)
}