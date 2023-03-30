import React from 'react'

export default function Statistic(props) {
  return (
    <div>
        <h1>{props.stat}</h1>
        <p>{props.description}</p>
    </div>
  )
}
