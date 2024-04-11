import brands from '../../../common/constants/brands';
import './style.scss';


const PartnerSection = () => {

    return (
        <section className='partner--container'>
            <div className='partner--container-content'>
                <h1>Findtrend make +1000 Startup grow</h1>
                <div className='partner--container-content-grids'>
                    {brands.map((item:{image:string},idx:number)=> <img src={item.image} alt={'brand'} key={idx}/>)}
                </div>
            </div>
        </section>
    )
}

export default PartnerSection;