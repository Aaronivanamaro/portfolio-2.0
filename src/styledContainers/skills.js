import React from 'react'
import styled from 'styled-components'
import softSkills from '../assets/images/softSkills.png'
import techSkills from '../assets/images/techSkills.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    skillsSection,
} from '../portfolio'


const Skills = () => {

    return (

        <SkillsContainer>
            <div>
                <h2>{skillsSection.subTitle}</h2>
                <div>
                    <img src={softSkills} alt="" /> 
                    <h3>Soft Skills:</h3>
                </div>
                <ul className="soft-skills">
                    {skillsSection.softSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <div>
                    <img src={techSkills} alt="" /> 
                    <h3>Technical Skills:</h3>
                </div>
                <ul>
                    {skillsSection.techSkills.map((techSkill, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={techSkill.fontAwesomeClassname} className="skill-icons"/>
                        <p>{techSkill.skillName}</p>
                    </li>
                    ))}
                </ul>

            </div>

            <div>---LottieAnimation---</div>
        </SkillsContainer>
    )
}

const SkillsContainer = styled.div`
    margin-left: 2rem;
    div {
        div {
            display: flex;
            align-items: center;
            img {
                height: 30px;
                width: 20px;
            }        
            h3 {
                margin-left: 5px;
            }
        }
        .soft-skills {justify-content: left;}
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            justify-content: center;
            li {
                font-size: 1.2rem;
                margin-right: 2rem;
                text-align: center;
                .skill-icons {
                    font-size: 3rem;
                }
            }
        }
    }
`

export default Skills