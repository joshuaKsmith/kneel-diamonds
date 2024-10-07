import { MetalOptions } from './metalOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { saveOrder } from './PlaceOrder.js'
import { OrdersList } from './Order.js'

const container = document.querySelector('#container')

/*export*/ const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = saveOrder()
    const ordersListHTML = await OrdersList()

    container.innerHTML = `
        <h1>Kneel Diamonds</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>    
                ${metalOptionsHTML}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        <article class="order">
            ${buttonHTML}
        </article>
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersListHTML}
        </article>
    `
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of Data has changed. Regenerating HTML...")
    render()
})

render()