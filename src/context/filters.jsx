import { createContext, useState } from "react";

export const FilterContext = createContext()

const initialFilters = JSON.parse(window.localStorage.getItem('filters')) || {
    category:'all',
    minPrice: 0
}

export const FilterProvider = ({children}) => {
    const [filters, setFilters] = useState(initialFilters)
    return(
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    )
}