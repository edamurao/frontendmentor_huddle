import React from "react";
import mockup_img from '../../assets/img/illustration-mockups.svg';
import './content.scss'

function Content() {
    return (<div className="content-main container">
        <div className="row align-items-center">
            <div className="col-xs-12 col-xl-5 left-content">
                <h2>Build The Community Your Fans Will Love</h2>
                <p className="content">Huddle re-imagines the way we build communites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <div className="getstarted">
                    <button className="btn btn-primary shadow">Get Started For Free</button>
                </div>
            </div>
            <div className="col-xs-12 col-xl-7">
                <img className="mockup-img" src={mockup_img} alt="" />                
            </div>
        </div>
    </div>)
}

export default Content;