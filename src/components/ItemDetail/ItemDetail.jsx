import React, { useContext, useState } from 'react'
import CartContext from '../context/cart/CartContext'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(1)
    const { cart, addItemCart } = useContext(CartContext)
    const natigate = useNavigate()

    const addItem = () => {
        addItemCart({ ...item, cuantity: count })
        natigate("/cart")
    }

    return (
        <div className="card detail container" style={{ width: '16rem' }} key={item.id}>
            <img src={item.image} className="card-img-top" style={{ width: '90%', height: '90%' }} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                <p className="card-text text-center">Precio: ${item.price}</p>
                <div className="text-center" style={{ display: 'flex' }}>
                    <button className='btn btn-primary container' style={{ marginRight: '10px' }} onClick={addItem}>Carrito</button>
                    <ItemCount  initial={1} stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail