import { Navbar } from "../../ui"

export const HeroesPage = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container">
                { children }
            </div>
        </>
    )
}
