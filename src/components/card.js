import React from 'react'

const Card = ({
    title,
    description,
    icon
}) => {
    return (
        <div className="grids-effect-2 col-lg-6 col-md-6 col-sm-6 mt-4 pt-1">

            <div className="back-color">
                <span className={icon} aria-hidden="true"></span>
                <h4><a href="about.html" className="title-head">{title}</a></h4>
                <div className="para" dangerouslySetInnerHTML={{__html: description}} style={{minHeight: 200}} />
            </div>
        </div>
    )
}

export default Card