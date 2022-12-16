import '../style/subscribe.scss';

const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <section>
                <div className="secSubscribe">
                    <div>
                        <img src="http://127.0.0.1:3001/static/img/subscribe-icon.png"/>
                    </div>
                    <div className="subText">
                        <p id="ss-text1">Subscribe For The Lastest Updates</p>
                        <p id="ss-text2">Subscribe to newslatter and never miss the new post every week</p>
                    </div>

                    <div>
                        <input type="email" placeholder="Enter your email here...."/>
                            <button variant="text" className="button-subscribe">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Subscribe;