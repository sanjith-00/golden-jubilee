import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {

  return (
      <Container>
      <Section
        title="SWARNOTSAV'22"
        description="THE TVS SCHOOL"
        // backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightbtnText="Existing Inventory"
        downarrow = "hello"
      />
     {/*}  <Section
        title="EVENTS"
        description=""
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      {/* //   <Section */}
      {/* //   title="Model S"
      //   description="Order Online For Touchless Delivery"
      //   backgroundImg="model-s.jpg"
      //   leftBtnText="Custom Order"
      //   rightbtnText="Existing Inventory"
      // />

      //   <Section 
      //   title="Model X"
      //   description="Order Online For Touchless Delivery"
      //   backgroundImg="model-x.jpg"
      //   leftBtnText="Custom Order"
      //   rightbtnText="Existing Inventory"
      // />

      //  <Section
      //   title="Solar Panels"
      //   description="Lowest Cost Solar Panels in America"
      //   backgroundImg="solar-panel.jpg"
      //   leftBtnText="Custom Order"
      //   rightbtnText="Learn More"
      // />

      //    <Section
      //   title="Solar Roof"
      //   description="Produce Clean Energy From Your Roof"
      //   backgroundImg="solar-roof.jpg"
      //   leftBtnText="Custom Order"
      //   rightbtnText="Learn More"
      // />

      //  <Section
      //   title="Accessories"
      //   description=""
      //   backgroundImg="accessories.jpg"
      //   leftBtnText="Custom Order"
      // /> */}
      
      </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh; 
`