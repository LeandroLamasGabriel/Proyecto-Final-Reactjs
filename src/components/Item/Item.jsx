import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <>
            <div className="card" style={{ width: '16rem' }} key={item.id}>
                <img src={item.image} className="card-img-top" style={{ width: '90%', height: '90%' }} alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title text-center">{item.name}</h5>
                    <p className="card-text text-center">{item.category}</p>
                    <button className="container">
                        <Link to={`/Products/${item.id}`} className="btn btn-primary container">Ver mas</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Item