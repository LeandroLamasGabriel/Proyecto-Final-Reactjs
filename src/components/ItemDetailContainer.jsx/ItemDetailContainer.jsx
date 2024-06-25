import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        (async () => {
            setLoading(true)

            const db = getFirestore()
            const docRef = doc(db, "products", id)
            const docSnap = await getDoc(docRef)
            setProduct({ id: docSnap.id, ...docSnap.data() })
            setLoading(false)
        })()
    }, [])

    if(loading) return <LoadingSpinner/>

    return (
        <div>
            <ItemDetail item={product} />
        </div>
    )
}

export default ItemDetailContainer