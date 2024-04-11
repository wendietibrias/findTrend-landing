import { IPricingItem } from '../../../interfaces/pricing_items';
import './style.scss';
import check from '../../../assets/icons/check.png';

type PricingCardType = {
    item: IPricingItem
    isActive: boolean;
}

const PricingCard = ({
    item,
    isActive
}: PricingCardType) => {
   return (
      <div className={`pricing--card ${isActive ? 'active' : ''}`}>
         <div className='pricing--card-header'>
             <h3>{item.title}</h3>
             <p>{item.subtitle}</p>
         </div>
         <div className='pricing--card-main-info-container'>
            <div className='pricing--card-main-info'>
                <div className='pricing--card-price'>
                    <h2>{item.amount}$</h2>
                    /
                    <h5>{item.time}</h5>
                </div>
                <div className='pricing--card-benefits'>
                    {item.services.map((item:string,idx:number)=> (
                        <div className='benefit-item' key={idx}>
                            <img src={check} alt="check list"/>
                            <h5>{item}</h5>
                        </div>
                    ))}
                </div>
            </div>
            <button className={`${isActive ? 'active' : ''}`}>Start free trial</button>
         </div>
      </div>
   )
}

export default PricingCard;