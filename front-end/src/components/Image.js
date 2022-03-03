import Picture from './card-image.png'
import './Card.css';

const Image = (props) => {
  return (
    <img className="image" src={Picture} alt="画像" />
  );
}

export default Image;