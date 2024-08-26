import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"
// import { useWindowSize } from "../hooks/useWIndowSize"

const Home = () => {
    const [query, setQuery] = useState('')
    const [isDark] = useTheme()
    // const windowSize = useWindowSize()


    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setQuery={setQuery} />
            </div>
            {/* <h1 style={{ textAlign: 'center' }}>{windowSize.width} X {windowSize.height}</h1> */}
            <CountriesList query={query} />
        </main>
    )
}

export default Home