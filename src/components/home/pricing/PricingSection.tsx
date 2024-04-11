import './style.scss';

import imgPricing from "../../../assets/images/img-pricing.png";
import pricing_items from '../../../common/constants/pricing_items';
import { IPricingItem } from '../../../interfaces/pricing_items';
import { PricingCard } from "../../../components";

const PricingSection = () => {
    return (
        <section className="pricing--container">
             <div className='pricing--container-content'>
                <h1>Get your best deal</h1>
                <div className='switch--button-container'>
                    <h5>Montlhy</h5>
                    <button className='switch--button'>
                        <span></span>
                    </button>
                    <h5 className='disabled'>Yearly</h5>
                    <img src={imgPricing} alt="image pricing" />
                </div>
                <div className='pricing--lists'>
                    {pricing_items.map((item: IPricingItem,idx:number)=> <PricingCard key={idx} item={item} isActive={idx == 1 ? true:false} />)}
                </div>
             </div>
        </section>
    )
}

export default PricingSection;