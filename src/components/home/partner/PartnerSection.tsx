import './style.scss';


const PartnerSection = () => {

    const brandLists = [];

    for(let i = 0; i < 16; i++) {
        brandLists.push(`src/assets/images/brand${i+1}.png`);
    }

    return (
        <section className='partner--container'>
            <div className='partner--container-content'>
                <h1>Findtrend make +1000 Startup grow</h1>
                <div className='partner--container-content-grids'>
                    {brandLists.map((item:string,idx:number)=> <img src={item} alt={item} key={idx}/>)}
                </div>
            </div>
        </section>
    )
}

export default PartnerSection;