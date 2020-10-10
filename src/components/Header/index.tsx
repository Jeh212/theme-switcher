import React, { useContext } from 'react';
import Switch from 'react-switch'
import {ThemeContext } from 'styled-components'
import {darken, shade } from 'polished'
import {Container} from './styles'



interface Props{

  toggleTheme():void;


}


const Header:React.FC<Props> = ({toggleTheme})=>{

  const {color,title} = useContext(ThemeContext)

  return(

    <Container>
     ✖ <Switch
          onChange={toggleTheme}
          checked={title ==='dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          width={60}
          height={10}
          handleDiameter={20}
          offColor={shade(0.15,color.primary)}
          onColor= {color.secundary}
     />

    </Container>

  );

}

export default Header