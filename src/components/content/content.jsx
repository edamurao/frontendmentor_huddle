import React from "react";
import bgImg from '../../assets/img/illustration-mockups.svg';
import './content.scss'

function Content() {
    return (<div className="content-main container">        
        <div className="row">
            <div className="col-xs-12 col-xxl-6">
                <h2 className="text-center">Build The Community Your Fans Will Love</h2>
                <p className="content text-center">Huddle re-imagines the way we build communites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <div className="getstarted">
                    <button className="btn btn-primary shadow">Get Started For Free</button>
                </div>
            </div>
            <div className="col-xs-12 col-xxl-6">
                <div className="ratio ratio-4x3">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </div>
    </div>)
}

export default Content;