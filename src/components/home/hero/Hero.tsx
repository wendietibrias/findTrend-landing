import './style.scss';
import ornament from "../../../assets/backgrounds/ornament.png";
import imgHero from "../../../assets/images/img-hero.png";
import socials_media from '../../../common/constants/socials_media';
import { ISocialMediaItems } from '../../../interfaces/socials_media';
import SocialCard from '../../global/socialCard/SocialCard';

const Hero = () => {
    return (
        <section className='container--hero'>
            <div className='container--hero-info'>
                <h1>Minimize your tabs.</h1>
                <h1>Find the trends!</h1>
                <p>Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your favorite website into one place.</p>
               <div className='container--hero-action'>
                 <button className='container--hero-button'>Get Started 🔥</button>
                 <img src={imgHero} alt="all search from here"/>
               </div>
            </div>
            <div className='container-hero--social-media'>
                   {socials_media.map((item:ISocialMediaItems,idx:number)=> <SocialCard key={idx} title={item.title} className={`social-media--card item${idx+1}`} image={item.image} />)}
               </div>
            <img src={ornament} alt="bg pattern" className='hero--pattern'/>
        </section>
    )
}

export default Hero;