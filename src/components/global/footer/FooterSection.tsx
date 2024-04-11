import './style.scss';
import altCompanyLogo from '../../../assets/images/black-company-logo.png';
import footer_links from '../../../common/constants/footer_links';

const Footer = () => {
    return (
        <footer className='footer--container'>
             <div className='footer--container-content'>
                 <img src={altCompanyLogo} alt="alternate company logo" />
                 <ul>
                    {footer_links.map((item: any,idx:number)=> (
                        <li key={idx}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))}
                 </ul>
             </div>
        </footer>
    )
}

export default Footer;