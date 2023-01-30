import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About us" />
            <List>
              <List.Item>
                <Link href="/about">
                  <a className='link-color'>Learn more</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item>
                <Link href="/">
                  <a className='link-color'>Our arepas</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Made by</Header>
            <p>
              <a className='link-color' href="httNaya070ps://github.com/">@Naya070 </a>
              thanks to Platzi an its   
              <a className='link-color'  href="https://platzi.com/"> Next.JS course </a>
              imparted by {' '}
              <a className='link-color' href="https://twitter.com/jonalvarezz">@jonalvarezz</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="linkedin"
                style={{ display: 'flex' }}
                content={<a className='link-color' href="https://www.linkedin.com/in/nayarith-jim%C3%A9nez/">LinkedIn</a>}
              />
              <List.Item
                icon="mail"
                style={{ display: 'flex' }}
                content={<a className='link-color'>nayarith070@gmail.com</a>}
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a className='link-color' href="httNaya070ps://github.com/">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a className='link-color'
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
          {' from '}
          <a className='link-color' target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Arepa images taken from{' '}
          <a
            className="acnor link-color"
            target="_blank"
            href="https://365sanguchez.com/arepa-origen-historia-curiosidades/#:~:text=La%20arepa%20es%20un%20s%C3%ADmbolo,remojar%20ni%20moler%20el%20ma%C3%ADz"
            title="California Avocado"
          >
            365sanguchez
          </a>
          {' and '}
          <a className='link-color'
            target="_blank"
            href="https://www.cocinayvino.com/en-la-cocina/especiales/arepas-venezolanas-famosas/"
            title="Flaticon"
          >
            Cocina y Vino
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
      .link-color {
        Color: purple;
      }
    `}</style>
  </Segment>
)

export default Footer
