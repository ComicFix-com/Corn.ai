import './CustomerGoals.css';
import DownloadIcon from '../../img/download-icon.svg';
import ShareIcon from '../../img/share-icon.svg'

function CustomerGoals() {
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
                            <div className="middle"></div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerGoals;