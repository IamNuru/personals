import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Page from "../components/Page"

import Personal from "../components/Personal"
/* import personals from "../_mocks/personals" */

const Personals = () => {
  const personals = useSelector(state => state.personal.personals)
  
  return (
    <Page title="Personals" sx={{height:'90vh', mx:1, mt:12}}>
      {
        personals ? <>
          {
            personals?.length > 0 ? <>
              {
                personals?.map((personal) => {
                  return <Personal personal={personal} key={personal.id} />
                })
              }
            </> :
              <Box sx={{ display: 'grid', height:'100%', alignItems: 'center', justifyContent: 'center', textAlign:'center' }}>
                <Typography variant="h5" sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>You currently have no personal.<Link to="/add-new-personal">Add Personal</Link> </Typography>
              </Box>
          }
        </> : <Typography>Please wait... Loading your personals</Typography>
      }
    </Page>
  )
}

export default Personals