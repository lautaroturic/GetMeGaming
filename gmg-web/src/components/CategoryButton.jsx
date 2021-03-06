import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
const CategoryButton = ({ items }) => {
    const [categories, setCategories] = useState([])
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    const [todos, setTodos] = useState(true)
    const { catId } = useParams(false)
    useEffect(() => {
        const lista = items.map(item => item.category);
        const uniqueCategories = [...new Set(lista)];
        setCategories(uniqueCategories)
        if (catId) {
            setTodos(false)
        } else if (catId === undefined) {
            setTodos(true)
        }
    }, [items, catId])
    return (
        <>
            <ul className='flex justify-end xl:min-w-[1184px] md:min-w-[784px] mt-3 '>
                <NavLink to={'/products'} className={(todos ? 'block rounded-lg px-4 py-2 hover:bg-slate-800 bg-slate-600 hover:text-white ml-2' : 'block rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-600 hover:text-white ml-2')}>Todas</NavLink>
                {categories.map((uniCat, index) => <li key={index}><NavLink to={`/products/${uniCat.toLowerCase()}`} className={({ isActive }) => (isActive ? 'block rounded-lg px-4 py-2 hover:bg-slate-800 bg-slate-600 hover:text-white ml-2' : 'block rounded-lg px-4 py-2 bg-slate-800 hover:bg-slate-600 hover:text-white ml-2')}>{capitalize(uniCat)}</NavLink></li>)}
            </ul>
        </>

    )
}

export default CategoryButton