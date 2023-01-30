import Arepa_muerta_grande from '@components/SVGIcons/Arepa_muerta_grande';
import React from 'react'
import { Grid, Header } from 'semantic-ui-react';




const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <Arepa_muerta_grande size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">You killed the arepa</Header>
            <p>You touched it so much that you killed it. :( </p>
            <p>
              In memory of the dead arepa, you will have to buy many arepas.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
