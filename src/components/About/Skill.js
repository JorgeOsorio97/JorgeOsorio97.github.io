import React from 'react'

export const Skill = (props)=>{
    const classCss = `percentage percent${props.percentage}`;
    return(
    <div className="skillBar">            
            <div className="skillbarHolder">
                <div className="skillbarTitle">{props.name}</div>
                <div className={classCss}>
                    <span>{props.percentage}%</span>
                </div>    
            </div>              
    </div>
    );
}