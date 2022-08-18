import './CartWidget.css'
import { ImCart } from "react-icons/im";

const CartWidget = ({action}) => {
    return (
        <div className="cardWidget">
             <ImCart
                // size="20px"
                // color="white"
            />
        </div>
    )
}

export default CartWidget;