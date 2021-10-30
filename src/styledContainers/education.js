import React, { Fragment } from 'react'
import EducationCard from '../styledComponents/educationCard'
import styled from 'styled-components'
import {
    educationInfo,
} from '../portfolio'

const Education = () => {


    
    return (
        <Fragment>
            <h1>{educationInfo.title}</h1>
            <EducationCardsContainer>
                {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
                ))}
            </EducationCardsContainer>
        </Fragment>
    )

}

const EducationCardsContainer = styled.div`


`

export default Education