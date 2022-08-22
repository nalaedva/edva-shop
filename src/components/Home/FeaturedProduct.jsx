import ProductCard from '../General/ProductCard/ProductCard'
import './FeaturedProducts.css'




const FeaturedProducts= () => {
    return ( 
        <section className="featuredProducts">
        <div className="container">
            <>
                <h2> Productos destacados</h2>
            
                    <ul>       
                        <li><ProductCard titulo="Papel Alumnio" precio= "500"/></li>   
                        <li><ProductCard titulo="Papel Alumnio 2" precio= "1500"/></li>    
                        <li><ProductCard titulo="Papel Alumnio 3" precio= "2500"/></li>  
                        <li><ProductCard titulo="Papel Alumnio 3" precio= "2500"/></li>                                          
                    </ul>
            </>
        </div>
    </section>
     );
}
 
export default FeaturedProducts;