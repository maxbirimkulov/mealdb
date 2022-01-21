import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import IngridientItem from "./ingridientItem";

const Ingridients = () => {
    let category = useParams();
    let [ingridient, setIngridient] = useState([]);
    const getFullIngridients = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.name}`)
            .then(({data})=> setIngridient(data.meals))
    };
    useEffect(()=>{
        getFullIngridients()
    },[]);

    return (
        <div className='category container'>
            {ingridient.map((item)=>{
                return <IngridientItem name={category.name} key={item.idMeal} item={item}/>
            })}
        </div>
    );
};

export default Ingridients;