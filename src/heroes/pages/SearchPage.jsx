import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useState } from "react";



export const SearchPage = () => {

    //TODO: MEJORAR LAS ANIMACIONES

    const navigate = useNavigate();
    const location = useLocation();
    const [animation, setAnimation] = useState(true);
    // const [animationErr, setAnimationErr] = useState(true);
    const animationCondition = animation ? ' animate__animated animate__fadeIn' : '';

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
        //Acá se coloca como parametro inicial la q para que el query parameter
        //sea lo que se muestre en la barra de busqueda.
        //Si no hay nada, el valor de la q se establece inicialmente como un string vacío.

    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                            ?
                            <div className={`alert alert-primary${animationCondition}`}>Search a hero</div>
                            : (heroes.length === 0) && <div className={`alert alert-danger${animationCondition}`}>There is no results <b>{q}</b></div>
                    }

                    {/* <HeroCard /> */}
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
