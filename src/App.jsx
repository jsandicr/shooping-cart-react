import { useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import { Cart } from '../src/components/Cart'
import { CartProvider } from './context/cart'

export function App(){

    const [ products ] = useState(initialProducts)
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)

    return(
        <CartProvider>
            <Header />
            <Cart />
            <Products products={filteredProducts}/>
            <Footer />
        </CartProvider>
    )
}