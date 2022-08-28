import React from "react";
import mockup_img from '../../assets/img/illustration-mockups.svg';
import './content.scss'

function Content() {
    return (<div className="content-main container">
        <div className="description">
            <p className="title">Build The Community Your Fans Will Love</p>
            <p className="content">Huddle re-imagines the way we build communites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <div className="getstarted">
                <button className="btn btn-primary shadow">Get Started For Free</button>
            </div>
        </div>
        <div className="mockup-container">
            <img className="mockup-img" src={mockup_img} alt="" />
        </div>
    </div>)
}

export default Content;