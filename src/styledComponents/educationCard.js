import React, { Fragment } from 'react'
import styled from 'styled-components'

const EducationCard = ({ school }) => {


    return (
        <Fragment>
            <EducationCardContainer>
                <img src={school.logo} alt=""/>
                <h3>{school.schoolName}</h3>
                <p>{school.subHeader}</p>
                <p>{school.duration}</p>
                <p className="school-description">{school.description}</p>
                <ul>
                    {school.descBullets.map((descBullet, index) => (
                        <li key={index}>{descBullet}</li>
                    ))}
                </ul>
                <EducationCardBorder />
            </EducationCardContainer>
        </Fragment>
    )

}

const EducationCardContainer = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    * { margin: 0.5rem; }

    li {
        list-style: disc;
    }
    .school-description { margin: 0.5rem 2rem; }
    img {
        object-fit: cover;
        width: 4rem;
        height: 4rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        border-radius: 50%;
    }

`

const EducationCardBorder = styled.div`
    height: 30px;
    width: 80%;
    border-top: 2px solid rgba(211, 211, 211, 0.397);
    margin-bottom: 20px;
    transition: width 0.6s ease-in-out;
`

export default EducationCard