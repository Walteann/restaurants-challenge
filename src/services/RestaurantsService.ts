import { Component } from "react";
import axios from 'axios';
import { Config } from './../config/api';

export class RestaurantsService extends Component {


    static getAllRestaurants = () => {
       return axios(`${Config.API_URL}/restaurants`);
    }
}