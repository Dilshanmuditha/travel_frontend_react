import React, { useState } from 'react'
import SidePopup from '../../../components/SidePopup'
import { Box, CircularProgress } from '@mui/material'

interface OrderDetailsProps {
    isPopupOpen: boolean
    selectedID?: number
    pageId: number
    handleClosePopup: any
  }


const OrderDetails = (props:OrderDetailsProps) => {
    const [loading, setLoading] = useState(false)

  return (
   <>
    <SidePopup
        onClose={props.handleClosePopup}
        title={"Order Details"}
        open={props.isPopupOpen}
        mSideBar={false}
        isClose={true}
        popWidth={"60%"}
        btnState={
         false
        }
        btnText="Delete"
        btnFunction={() =>{}}>
            {loading?( 
                <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
            <CircularProgress />
          </Box>
        ):(
            <Box
                sx={{
                  padding: "50px 30px 100px 30px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflowY: "auto",
                }}>

                    
                </Box>
        )}
            
            </SidePopup></>
  )
}

export default OrderDetails