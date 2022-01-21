import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Category from "../category/category";
import './home.scss'

const Home = () => {
    const [category, setCategory]= useState([]);
    const getAllMealCategories = () => {
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(({data})=> setCategory(data.categories))
    };
    useEffect(()=>{
        getAllMealCategories()
    },[]);
    return (
        <div className='container'>
            <Category category={category}/>
        </div>
    );
};

export default Home;