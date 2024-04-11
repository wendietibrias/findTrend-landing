import connect_partner from '../../../common/constants/connect_partner';
import './style.scss';

import tweet1 from "../../../assets/images/tweet1.png";
import tweet2 from "../../../assets/images/tweet2.png";
import tweet3 from "../../../assets/images/tweet3.png";


const ConnectSection = () => {
    return (
        <section className='connect--container'>
            <div className='connect--container-content'>
                <h1>All platform connect to Findtrend</h1>
                <div className='social-media--lists'>
                     {connect_partner.map((item:{image:string},idx:number)=>(
                         <div className={`social-media--list-item ${idx == 1 ? 'active' : ''}`} key={idx}>
                             <img src={item.image} alt="social media" />
                         </div>
                     ))}
                </div>
                <div className="tweet--lists">
                     <img src={tweet1} alt="tweet image"/>
                     <img src={tweet2} alt="tweet image"/>
                     <img src={tweet3} alt="tweet image"/>

                     <button>View more trend</button>
                </div>
            </div>
        </section>
    )
}

export default ConnectSection;