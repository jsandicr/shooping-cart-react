import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

const updateFiltersLocalStorage = (filters) => {
    window.localStorage.setItem('filters', JSON.stringify(filters))
}

export const Filters = () => {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const minCategoryFilterId = useId()

    const handleMinPrice = (event) => {
        const newFilters = 
            {
                ...filters,
                minPrice: event.target.value
            }

        updateFiltersLocalStorage(newFilters)
        setFilters(newFilters)
    }

    const handleCategory = (event) => {
        const newFilters = 
            {
                ...filters,
                category: event.target.value
            }
        updateFiltersLocalStorage(newFilters)
        setFilters(newFilters)
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleMinPrice}
                    value={filters.minPrice}/>
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={minCategoryFilterId}>Category</label>
                <select id={minCategoryFilterId} onChange={handleCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}