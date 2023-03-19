'use client';
import React from 'react';
export interface CardProps {
    title: string;
    text: string;
  }


const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{text}</p>
  
        <style jsx>{`
          .card {
            background-color: #3DA410;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            bottom: 620px;
          }
        `}</style>
      </div>
    );
  };
  
  export default Card