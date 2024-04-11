import './style.scss';

type SocialCardType = {
    title:string;
    image:string;
    className:string;
}

const SocialCard = ({ title,image,className } : SocialCardType) => {
  return (
     <div className={`${className}`}>
          <img src={image} alt={title}/>
          <div className='social-media--item-desc'>
            <h5>{title}</h5>
          </div>
          <button className='close-button'>X</button>
      </div>
  )
}

export default SocialCard