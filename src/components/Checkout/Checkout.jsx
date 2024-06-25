import React, { useState } from 'react'

const Checkout = ({ completeOrder }) => {

    const [nameBuyer, setNameBuyer] = useState("")
    const [telBuyer, setTelBuyer] = useState("")
    const [emailBuyer, setEmailBuyer] = useState("")

    const handleCompleteOrder = async (e) => {
        e.preventDefault()
        const buyer = {
            name: nameBuyer,
            tel: telBuyer,
            email: emailBuyer
        }

        await completeOrder(buyer)
    }

    return (
        <form className='container' onSubmit={(e) => handleCompleteOrder(e)}>
            <div className="mb-3">
                <label className="form-label">Ingrese su nombre y apellido</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" value={nameBuyer} onChange={(e) => setNameBuyer(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Ingrese su telefono</label>
                <input type="number" className="form-control" value={telBuyer} onChange={(e) => setTelBuyer(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ingrese su email</label>
                <input type="email" className="form-control" value={emailBuyer} onChange={(e) => setEmailBuyer(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary">Finalizar</button>
        </form>
    )
}

export default Checkout
