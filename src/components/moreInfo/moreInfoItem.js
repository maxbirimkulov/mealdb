import React from 'react';
import './moreInfo.scss'

const MoreInfoItem = ({item}) => {
    console.log(Object.keys(item))
    return (
        <div className='moreInfo row'>
            <div  className="col s6">
                <img className='moreInfo__img' src={item.strMealThumb} alt=""/>
            </div >
            <div className="col s6">
                <ul>
                    <li>Название: {item.strMeal}</li>
                    <li>Категория : {item.strCategory}</li>
                    <li>Страна : {item.strArea}</li>
                </ul>

                    <iframe className="moreinditem__iframe my-frame"  src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`}
                             title="${obj.strMeal}" allowFullScreen/>


            </div>
            <div>
                <h2>Инструкция</h2>
                {item.strInstructions}
            </div>
            <div className='col s12'>
               <table className="centered">
                   <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                   </thead>
                   <tbody>

                       {Object.keys(item).filter((el)=>{
                           return  el.includes('Ingredient') && item[el]
                       }).map((el,idx)=>{
                           return <tr key={idx}>
                               <td key={idx}>{item[el]}</td>
                               <td>{item[`strMeasure${el.substring(13)}`]}</td>

                           </tr>

                       })}


                   </tbody>
               </table>
            </div>

        </div>
    );
};

export default MoreInfoItem;