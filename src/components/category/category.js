import React from 'react';
import CategoryItem from "./categoryItem";
import './category.scss'


const Category = ({category}) => {
    return (
        <div className='category'>
            {
                category.map((item)=>{
                return  <CategoryItem key={item.idCategory} item={item}/>
            }
            )}
        </div>
    );
};

export default Category;