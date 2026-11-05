import { createContext, useContext, useMemo, useState } from 'react';

const FilterContext = createContext()

export function FilterProvider({children}) {
    const [filter, setFilter] = useState("all");

    const value = useMemo(() => ({ filter, setFilter }), [filter]);

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;

}

export function useFilter() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used in FilterProvider");
    }
    return context;
}