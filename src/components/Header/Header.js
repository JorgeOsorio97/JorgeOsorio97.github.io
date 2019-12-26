import React from 'react'

export const Header = ()=>{
    return(
		<header id="header" className="clearfix">
			
			<div className=" holder960">

			<a href="javascript:void(0)" className="mobileBtn" ><i className="icon-menu"></i></a>
			
				<nav id="mainNav" >
				<ul>
					<li><a href="#wrapper">Inicio</a></li>
					<li><a href="#about">¿Quien soy?</a></li>
					<li><a href="#resume">Curriculum</a></li>
					<li><a href="#portfolio">Portafolio</a></li>
					<li><a href="#contact">Contacto</a></li>
					
				</ul>
				
				</nav>
			
			
			
			
				</div>
			</header>
			);
}