import Item from "../Item/Item"
function ItemList ({item}) {
    return(
        <div className="row" style={{ padding: '1rem' }}>
            {item.map(item => ( <Item item={item} key={item.id}/> ))}
        </div>
    )
}
export default ItemList