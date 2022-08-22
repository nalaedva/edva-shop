import './NavCart.css'
import { ImCart } from "react-icons/im";

const NavCart = () => {
    return (
        <div className="cardWidget">
        <ImCart  />
        <span>0</span>
   </div>

      );
}
 
export default NavCart;