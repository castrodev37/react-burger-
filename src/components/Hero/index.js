import React from 'react'

import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './styles.css'

const Hero = ()=>{
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1> Greatest Burger Eve</HeroH1>
					<HeroP>Ready in few minutes</HeroP>
					<HeroBtn>Place Order</HeroBtn>
				</HeroItems>
			</HeroContent>	
		</HeroContainer>
	)
}

export default Hero


