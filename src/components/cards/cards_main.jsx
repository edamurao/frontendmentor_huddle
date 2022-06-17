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
        <div className="container cards">
            {cardArr.map((item, idx) => {
                const rowReverse = (idx % 2) === 0 ? 'reverse' : '';
                
                return (
                    <div className="card-item card border-light shadow-sm" key={idx}>
                        <div className="card-body">
                            <div className={"flex-container " + rowReverse}>
                                <img className="img" src={item.img} alt="" />
                                <div>
                                    <div className="description">
                                        <h3 className="card-title">
                                            {item.title}
                                        </h3>
                                        <p className="card-text">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    )
}
