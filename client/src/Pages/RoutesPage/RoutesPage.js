// import the address1 and address2 values from the app.js file

import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutesPage.css';
import { AspectRatio } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'


function RoutesPage() {
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }

  const routes = [ // this array is a test that will be used to display the routes between the user adress and the chosen option adress.
    { 
      id: 1, 
      route: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0000000000005!2d-73.98528368477083!3d40.74881797932499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1b8b3b8a7%3A0x1b3b3b3b3b3b3b3b!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625580000000!5m2!1sen!2sus'
    },
    {
      id: 2,
      route: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4947.854750434576!2d18.052675219496468!3d59.34291135524962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d691cb7ae53%3A0x7aeb011d557fbcf2!2sHotel%20Birger%20Jarl!5e0!3m2!1sen!2sse!4v1668968500340!5m2!1sen!2sse'
    }
  ]

// in the return statement below, the routes array will be mapped to display the routes between the user adress and the chosen option adress.
// the routes will be displayed in a grid with 2 columns and 3 rows.
// the first row will be the adress of the user, the second row will be the adress of the chosen option and the third row will be the route between the two.
// the user and friend will each be handed their navigation link to the route via the google maps url. The links must be able to share the route with the other person.
// the user will be able to click on the route to see the route in google maps. ( if this could be done in the app itself, that would be ideal. )
// display address1 and address2 from the local.json file
 return (
    <div className="routes-page">
      <h1>Routes</h1>
    

      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={1} rowSpan={1}>
          <h2>Address 1</h2>
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe
              title="map"
              src={routes[1].route}
              width="560"
              height="315"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </AspectRatio>

        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <h2>Address 2</h2>
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe
              title="map"
              src={routes[0].route}
              width="560"
              height="315"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </AspectRatio>
          
        </GridItem>
      </Grid>
      <button onClick={returnHomeClick}>Return Home</button>
    </div>
  );
}
    //  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    //    {routes.map((route) => (
    //      <GridItem colSpan={1} key={route.id}>
   //         <h3>Current location1</h3>
   //       </GridItem>
  //      ))}
  //      {routes.map((route) => (
  //        <GridItem colSpan={1} key={route.id}>
   //       
   //         <AspectRatio maxW="560px" ratio={1}>
  //            <iframe
  //              title="map"
  //              src={route.route}
  //              loading="lazy"
  //            />
  //          </AspectRatio>
  //        </GridItem>
  //      ))}
  //    </Grid>
  //    <button onClick={returnHomeClick}>Return Home</button>
 //   </div>
//  );
//}


//   return (
//     <div className="routes-container"> 
//         <div className="RoutesPage">
//       <h1>Under construction...</h1>
//       <button className="Home" type="button" onClick={returnHomeClick}>
//         Return Home
//       </button>
//       <Grid   h="100vh"
//         templateRows="repeat(2, 1fr)" templateColumns='repeat(3, 1fr)' gap={4}>
//   <AspectRatio ratio={16 / 9}>
//         <iframe
//           src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
//       </AspectRatio>
// </Grid>
//     </div> 
//     </div>
//   );
// }

export default RoutesPage;