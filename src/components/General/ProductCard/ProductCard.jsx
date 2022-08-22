import './ProductCard.css'
import image from '../../../assets/productos/papel-aluminio.jpeg'



const ProductCard = ({titulo, precio}) => {
    return (
        <article className='productCard'>
        <img src={image} alt="Mi producto de prueba" />
        <div>
            <h3>{titulo}</h3>
            <p>${precio}</p>
        </div>
    </article>
    );
}

export default ProductCard;