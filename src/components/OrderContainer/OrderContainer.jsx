import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const OrderContainer = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async () => {
            setLoading(true)
            const db = getFirestore()
            const docsRef = collection(db, "orders")
            const querySnapshop = await getDocs(docsRef)
            setOrders(querySnapshop.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            setLoading(false)
        })()
    }, [])

    if(loading) return <LoadingSpinner/>
    return (
        <div >
            <ol className="list-group list-group-numbered">
                {orders.map(order => < li className='list-group-item' key={order.id}>{order.id}</li>)}
            </ol>
        </div>
    )
}

export default OrderContainer