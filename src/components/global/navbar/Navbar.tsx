import './style.scss';
import companyLogo from "../../../assets/images/company_logo.png";
import navbar_links from '../../../common/constants/navbar_links';
import humburgerMenu from '../../../assets/icons/humburger-menu.png';
import close from "../../../assets/icons/close.png";

import { useState } from 'react';

const Navbar = () => {
    const [isActive,setIsActive] = useState<boolean>(false);
    const [showSidebar,setShowsidebar] = useState<boolean>(false);

    window.addEventListener('scroll' , function() {
         if(this.scrollY > 100) {
             setIsActive(true);
         } else {
            setIsActive(false);
         }
    });

    window.addEventListener('resize' , function() {
         if(this.window.innerWidth > 900) {
             setShowsidebar(false);
         }
    })

    return (
        <nav className={`container--navbar ${isActive ? 'active' : ''}`}>
            <div className="navbar--container">
                <img src={companyLogo} alt="company logo" className="company-logo" />
                    <ul className={`navbar--container-links ${showSidebar ? 'active' : ''}`}>
                        {navbar_links.map((item:any,idx:number)=>(
                            <li className='links-item' key={idx}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))}

                        <div className="navbar--container-buttons-wrapper">
                            <button>Login</button>
                            <button className='active'>Register</button>
                        </div>
                    </ul>
                    <div className="navbar--container-buttons">
                        <button>Login</button>
                        <button className='active'>Register</button>
                    </div>

                    <button onClick={() => setShowsidebar(!showSidebar)} id="hamburger-button">
                        <img src={showSidebar ? close : humburgerMenu} alt="menu"/>
                    </button>
                </div>
        </nav>
    )
}

export default Navbar;