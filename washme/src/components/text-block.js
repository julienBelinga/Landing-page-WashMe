import React from 'react';

export default function TextBlock(props) {
  return (
    <div className={`text-block ${props.class}`}>
      <h2>{props.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
    </div>
  );
}
