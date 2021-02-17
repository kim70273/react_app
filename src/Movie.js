import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

//state가 필요없으므로 class 컴포넌트가 될 필요가 없다.

function Movie({dateAt, channelTitle, title, img}){
    return (
        <div className="movie">
            <img src={img} alt={title} title={title} />
            <div className="movie__data">
            <h4 className="movie__channel">{channelTitle}</h4>
            <h2 className="moive__title">{title}</h2>
            <h5 className="movie__dateAt">{dateAt}</h5>
            </div>
        </div>
    );
}
//map function에도 key가 필요하다. map에는 item과 itemNumber(index)가 있다.
//return하는 li에 key={index}를 추가해주면 된다.

//const summary="dsafdsafdsfds"
//summary.slice(0,4) 시작점과 끝점을 입력하면 그반큼만 반환함.

Movie.propTypes ={
    dateAt: PropTypes.string.isRequired,
    channelTitle:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired
}
//genres:PropTypes.arrayOf(PropTypesstring).isRequired
//장르 배열을 추가할때.

export default Movie;