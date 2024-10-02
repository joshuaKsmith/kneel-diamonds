import { MetalOptions } from './metalOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SizeOptions } from './SizeOptions.js'

const container = document.querySelector('#container')

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()

    container.innerHTML = `
        <h1>Kneel Diamonds</h1>
        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>
            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>
            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>
        <article class="order">

        </article>
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
}


render()