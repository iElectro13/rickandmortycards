import React from 'react'
import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className="card">
            <img src={image1} alt=""/>
            <div className="card-body">
                <h4 className="card-title">My Title</h4>
                <p className="card-text text-secondary">Sunt eu minim fugiat proident sit cillum proident duis consectetur occaecat fugiat deserunt. Et aliqua do dolore amet. Aute exercitation est incididunt amet eiusmod non consequat ipsum quis aute eu. Laborum dolore do incididunt officia cupidatat aliquip id consectetur consectetur tempor elit. In duis consectetur nisi nostrud velit adipisicing velit nostrud deserunt. Aliqua nulla aute velit dolor id aliqua. Incididunt ut ea aute ullamco ex culpa magna laboris amet pariatur.</p>
            </div>
        </div>
    )
}

export default Card
