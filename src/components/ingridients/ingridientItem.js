import React from 'react';
import {Link} from "react-router-dom";

const IngridientItem = ({item, name}) => {
    return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <Link to={`/${name}/${item.idMeal}`}>
                        <img src={item.strMealThumb} alt='category'/>
                    </Link>

                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{item.strMeal}</span>
                    <Link to={`/${name}/${item.idMeal}`}>Подробнее</Link>
                </div>

            </div>
    );
};

export default IngridientItem;