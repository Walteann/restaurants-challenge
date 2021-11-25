import { useEffect, useState } from 'react';
import { CardRestaurant } from '../../shared/components/card-restaurant/CardRestaurant';
import { InputSearch } from '../../shared/components/input-search/InputSearch';
import { Nav } from '../../shared/components/nav/Nav';
import { RestaurantsService } from '../../services/RestaurantsService';
import './Restaurants.scss';

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);


    const getAllRestaurants = async () => {
        const { data }  = await RestaurantsService.getAllRestaurants();
        console.log(data);
        setRestaurants(data.body);
    }

    useEffect(() => {
        getAllRestaurants();

    }, []);

    return (
        <>
            <Nav />
            <header>
                <h1>Bem vindo ao Lista Rango</h1>
                <InputSearch prefixName="Buscar estabelecimento" />

            </header>

            <section className="grid">
                <div className="grid-restaurants">
                    {restaurants.map(restaurant => <CardRestaurant restaurant={restaurant}/>)}
                </div>
            </section>
            

        </>
    )
}