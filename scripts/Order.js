export const OrdersList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=variety")
    const orders = await fetchResponse.json()

    return orders.map((order) => {
        const varietyMultiplier = order.variety.modifier
        const orderSubTotal = order.metal.price + order.style.price + order.size.price
        const orderPrice = orderSubTotal * varietyMultiplier
        
        return `<section class="order"><div>
            Order#${order.id}    cost ${orderPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}
        </div></section>`
    }).join("")
}