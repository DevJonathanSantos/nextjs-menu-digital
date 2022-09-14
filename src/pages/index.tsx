import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'
// import Modal from "react-modal"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Modal from '../components/Modal'

import { ObertProdutos } from '../services/departamentoProdutoService'

const Container = styled.div``
const GroupItens = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  position: relative;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 7px;
  width: 48%;
  margin: 5px 1%;
  padding: 8px;
  display: flex;
  align-content: center;
  align-items: center;
`
const CardContent = styled.div`
  line-height: 18px;
`
const CardImage = styled.div`
  width: 20%;
  height: 77%;
  right: 15px;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
`
let list: number[] = []

for (var i = 0; i < 4; i++) {
  list.push(i)
}


const Home: React.FC = () => {

const [isOpen,setIsOpen]=useState(false)

  return (
    <Container>
      <Header />
      <Menu />

      <main>
        <section style={{ paddingTop: '40px' }}>
          <h3>Combos</h3>
          <GroupItens>
            {list.map(item => (
              <Card>
                <CardContent>
                  <h4>Combo X-Aleluia</h4>
                  <p style={{ fontSize: '14px;' }}>
                    {' '}
                    Lanche, Batata 200g, Suco da sua Escolha.
                  </p>
                  <p>A partir de R$31,03</p>
                </CardContent>
                <CardImage>
                  <img src="https://static-images.ifood.com.br/image/upload/t_low/pratos/d8e6524b-8278-46f2-a612-c7ae2a957838/202208131856_TE83_i.jpg" />
                </CardImage>
              </Card>
            ))}
          </GroupItens>
        </section>

        <section style={{ paddingTop: '40px' }}>
          <h3>Combos</h3>
          <GroupItens>
            {list.map(item => (
              <Card>
                <CardContent>
                  <h4>Combo X-Aleluia</h4>
                  <p style={{ fontSize: '14px;' }}>
                    {' '}
                    Lanche, Batata 200g, Suco da sua Escolha.
                  </p>
                  <p>A partir de R$31,03</p>
                </CardContent>
                <CardImage>
                  <img src="https://static-images.ifood.com.br/image/upload/t_low/pratos/d8e6524b-8278-46f2-a612-c7ae2a957838/202208131856_TE83_i.jpg" />
                </CardImage>
              </Card>
            ))}
          </GroupItens>
        </section>
      </main>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen}
      onClose={() => setIsOpen(false)}>
        
                Hello from the modal!
            </Modal>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { req } = context
  let url = req.headers.host

  // var departamentoProdutos = await ObertProdutos()
  return {
    props: {
      // departamentoProdutos: departamentoProdutos
      // departamentos:  JSON.parse(departamentos)
    }
  }
}

export default Home
