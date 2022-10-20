
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroCard.css'


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const [animation, setAnimation] = useState(true);

    const heroUrl = useMemo(() => `/assets/${id}.jpg`, [id]);
    return (
        <div
            className={`col${animation ? ' animate__animated animate__fadeIn' : ''}`}
            onAnimationEnd={() => setAnimation(!animation)}
        >
            <div className="card">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={heroUrl} className='img-fluid' alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                alter_ego !== characters && <p>{characters}</p>
                            }
                            <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
