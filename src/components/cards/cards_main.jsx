import React from "react";
import growTogether from '../../assets/img/illustration-grow-together.svg';
import flowConversation from '../../assets/img/illustration-flowing-conversation.svg';
import yourUsers from '../../assets/img/illustration-your-users.svg';
import './cards.scss';

export default function CardsMain() {
    const cardArr = [
        {
            img: growTogether,
            title: 'Grow Together',
            content: 'Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.'
        },
        {
            img: flowConversation,
            title: 'Flow Converstations',
            content: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."

        },
        {
            img: yourUsers,
            title: 'Your Users',
            content: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately"

        }
    ];

    return (
        <div className="container-fluid cards">
            {cardArr.map((item, idx) =>
                
                    <div className="card-item card border-light shadow-sm" key={idx}>
                        <div className="card-body">
                            <div className="ratio ratio-4x3">
                                <img src={item.img} alt="" />
                            </div>
                            <h5 className="card-title text-center">
                                {item.title}
                            </h5>
                            <p className="card-text text-center">
                                {item.content}
                            </p>
                        </div>
                    </div>
                
            )}
        </div>
    )
}
