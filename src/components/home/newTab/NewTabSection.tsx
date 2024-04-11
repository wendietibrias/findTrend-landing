import './style.scss';
import findTrend from "../../../assets/icons/findTrend.svg";
import SocialCard from '../../global/socialCard/SocialCard';
import imgTab01 from "../../../assets/images/img-tab-01.png";
import imgTab02 from "../../../assets/images/img-tab-02.png";


const NewTabSection = () => {
    return (
        <section className='new-tab--container'>
            <div className='new-tab--container-content'>
            <h1>Open new tab is shi*t</h1>

            <div className='new-tab--container-box-main'>
                <img id="img-tab1" src={imgTab01} alt="image tab"/>

                <div className='new-tab--container-box'>
                    <SocialCard image={findTrend} title="Findtrend - Elon Musk" className='social-media--card' />
                </div>
                <img id="img-tab2" src={imgTab02} alt="image tab"/>
            </div>

           <p>A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
          </div>
        </section>
    )
}

export default NewTabSection;