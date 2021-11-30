import {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as petService from '../../services/petService';
const Details = () => {
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(async()=>{
        let petResult = await petService.getOne(petId);

        setPet(petResult)
    },[]);

    return (

        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    <Link className="button" to="/edit">Edit</Link>
                    <Link className="button" to="/delete">Delete</Link>
                    <Link className="button" to="/like">Like</Link>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>

    );
}
export default Details;