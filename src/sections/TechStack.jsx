import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";

export const TechStack = () => {
    return (
        <div id="skills" className={'flex-center section-padding'}>
            <div className={'w-full h-full md:px-10 px-5'}>
                <TitleHeader
                title={'My Preferred Tech Stack'}
                sub={'Skill I bring to the table'}/>

            </div>
        </div>
    )
}
