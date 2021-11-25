import './CardRestaurants.scss';

interface Hour {
    from: string,
    to: string,
    days: number[]
}

interface Restaurant {
    address: string,
    hours: Hour[],
    id: number,
    image: string,
    name: string,
}

interface CardRestaurantProps {
    restaurant: Restaurant;
}

export const CardRestaurant = (props: CardRestaurantProps) => {
    return <div className="card-restaurant">
        <div className="card-restaurant__badge">
            <span>Aberto Agora</span>
        </div>
        <figure className="card-restaurant__figure">
            <img src={props.restaurant.image} alt={props.restaurant?.name} />
        </figure>
        <div className="card-restaurant__content">
            <h2>{props.restaurant?.name}</h2>
            <p>{props.restaurant?.address}</p>
        </div>
    </div>
}