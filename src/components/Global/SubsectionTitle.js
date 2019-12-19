import React from 'react';

export const SubsectionTitle = (props)=>{
    return(
        <div class="innerTitle">
<h1>{props.title}</h1>
            {props.children}
          </div>
    )
}