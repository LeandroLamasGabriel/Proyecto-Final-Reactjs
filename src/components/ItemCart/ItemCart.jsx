import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const ItemCart = ({ item }) => {
    const { deleteItemCart } = useContext(CartContext)
    return (
        <div className="card mb-3" style={{maxWidth: '540'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <>
                        <img src={item.image} className="img-fluid rounded-start" style={{ width: '80%', height: '80%' }} alt="..."></img>
                    </>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-body-secondary">Cantidad: {item.cuantity}</small></p>
                        <button className='btn btn-primary' onClick={() => deleteItemCart(item.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart
