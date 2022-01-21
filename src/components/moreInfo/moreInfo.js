import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import MoreInfoItem from "./moreInfoItem";
import './moreInfo.scss'


const MoreInfo = () => {
    let [info,setInfo] = useState([]);
    let more = useParams();
    const getMoreInformation = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${more.id}`)
            .then(({data})=>setInfo(data.meals))
    };
    useEffect(()=>{
        getMoreInformation()
    },[more]);
    return (
        <div className='container'>
            {info.map((item)=>{
                return <MoreInfoItem key={item.idMeal} item={item}/>
            })}
        </div>
    );
};

export default MoreInfo;