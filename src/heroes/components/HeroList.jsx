import { useMemo } from "react"
import { HeroCard } from "./HeroCard"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    // const heroes = getHeroesByPublisher(publisher)
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                heroes.map( heroe => (
                    <HeroCard key={ heroe.id } {...heroe}/>
                ))
            }
        </div>
    )
}
