import React, { useEffect } from 'react';

export default function Statistic(props) {


  return (
    <div className='stat-container'>
        <h1>{props.stat}</h1>
        <p>{props.description}</p>
    </div>
  )
}
