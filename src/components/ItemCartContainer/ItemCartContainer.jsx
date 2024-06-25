import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'

const ItemCartContainer = () => {

    const { cart, totalPriceCart } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <div className='cartContainer'>
            {cart.length === 0 ?
                <span>Carrito Vacio</span>
                :
                <>
                    <div className='itemCartContainer'>
                        {cart.map(item => <ItemCart key={item.id} item={item} />)}
                    </div>
                    <div >
                        <div className="list-group-item">
                            <p>Total: {totalPriceCart}</p>
                        </div>
                        
                        <button className='btn btn-primary' onClick={() => navigate("/checkout")}>Finalizar compra</button>
                    </div>
                </>

            }

        </div>
    )
}

export default ItemCartContainer