import styled from 'styled-components'
import React from 'react'
export const Container = styled.header`
border-radius: 1px 0px 7px 7px;
width: 100%;
margin-bottom: -12px;
height: 250px;
position: relative;
display: flex;
-webkit-box-align: center;
align-items: center;
background: url(https://static-images.ifood.com.br/image/upload/t_banner/capa/d8e6524b-8278-46f2-a612-c7ae2a957838/202208131846_EYNl_i.jpg) center center / cover no-repeat;

div{
width: 115px;
margin: 15px;
padding: 15px;
background: #fff;
bottom: -108px;
position: relative;
box-shadow: 0px 1px #888;
border-radius: 7px;
}

div img{
width: 100%;
}
`

const Header = () => {
  return (
    <Container>
      <div>
        <img src="https://www.cardapiodigital.io/_next/image?url=https%3A%2F%2Fstatic-images.ifood.com.br%2Fimage%2Fupload%2Ft_low%2Flogosgde%2Fd8e6524b-8278-46f2-a612-c7ae2a957838%2F202208131845_dFGX_i.jpg&w=3840&q=75" />
      </div>
    </Container>
  )
}

export default Header
