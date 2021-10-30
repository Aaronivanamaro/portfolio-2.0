import React, { Fragment } from 'react'
import Education from './education'
import Greeting from '../styledComponents/greeting'
import Skills from './skills'

const Main = () => {


    return (
        <Fragment>
            <Greeting />
            <Skills />
            <Education />
        </Fragment>
    )
}

export default Main