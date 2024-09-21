import './CustomerGoals.css';
import DownloadIcon from '../../img/download-icon.svg';
import ShareIcon from '../../img/share-icon.svg';
import RatingIcon from '../../img/rating-icon.svg'
import ProgressBar from './ProgressBar/ProgressBar';

function CustomerGoals() {
    
    async function fetchData() {
        const API = "";
        const response = await fetch(API);
        let info = await response.json();
    }

    let cardData = [
        {
            title: 'Conversation Dynamics',
            icon: '',
            rating: '',
        },
        {
            title: 'Decision Support Analysis',
            icon: '',
            rating: '',
        },
        {
            title: 'Feedback Sentiment',
            icon: '',
            rating: '',
        },
        {
            title: 'Collaboration Insights',
            icon: '',
            rating: '',
        },
        {
            title: 'Knowledge Exchange Patterns',
            icon: '',
            rating: '',
        },
        {
            title: 'Continuous Improvement',
            icon: '',
            rating: '',
        },
        {
            title: 'Communication Effectiveness',
            icon: '',
            rating: '',
        },
        {
            title: 'Acknowledgment Recognition',
            icon: '',
            rating: '',
        },
        {
            title: 'Social Connectivity Analysis',
            icon: '',
            rating: '',
        },
    ]

    const card = cardData.map((item)=> {
        return(
            <div className="card flex">
                <img src={item.icon} alt="" />
                <div className="details">
                    <h5>{item.title}</h5>
                    <div className="rating-info flex">
                        <p>{item.rating}</p>
                        <img src={RatingIcon} alt="" />
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="CustomerGoals">
            <div className="analytics-section flex flex-col">
                <h1>Recent interactions</h1>
                <div className="container">
                    <div className="content">
                        <div className="inner-content">
                            <div className="top flex">
                                <div className="w-50">
                                <h3>Conversational insights and customer interaction analytics</h3>
                                <p>Evaluating customer engagement and conversational dynamics.</p>
                                </div>
                                <div className="w-50 flex top-r">
                                    <div className="message">
                                        
                                    </div>
                                    <div className="download-share flex">
                                        <button>
                                            <img src={DownloadIcon} alt="" />
                                        </button>
                                        <button>
                                            <img src={ShareIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="w-50">
                                    <ProgressBar percentage={92} />
                                </div>
                                <div className="w-50"></div>
                            </div>
                            <div className="bottom flex flex-center">
                                <div className="bottom-content">
                                    {card}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerGoals;