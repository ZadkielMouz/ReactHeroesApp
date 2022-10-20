import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    const navigate = useNavigate();
    const [animation, setAnimation] = useState(true);

    const onReturn = () => {
        navigate(-1);
    }

    const animate = () => {
        setAnimation(!animation);
    }

    if (!hero) {
        return <Navigate to={'/marvel'} />;
    }

    return (

        <div className="row mt-5">

            <div
                className={`col-4${animation ? ' animate__animated animate__fadeInLeft' : ''}`}
                onClick={animate}
                onAnimationEnd={animate}
            >
                <img
                    src={`/assets/${hero.id}.jpg`}
                    alt={`${hero.superhero}`}
                    className='img-thumbnail'
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <hr />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>
                <hr />

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <hr />

                <button
                    className="btn btn-outline-info"
                    onMouseDown={onReturn}
                >
                    Back
                </button>
            </div>


        </div>
    )
}
