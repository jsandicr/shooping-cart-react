import { createRoot } from 'react-dom/client'
import { App } from './App'
import '../index.css'
import { FilterProvider } from './context/filters'

const root = createRoot(document.getElementById('app')).render(
    <FilterProvider>
        <App/>
    </FilterProvider>
)