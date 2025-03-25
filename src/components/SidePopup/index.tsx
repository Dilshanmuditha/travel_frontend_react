import { ReactNode } from "react"
import { Drawer, Modal } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useTheme } from "@emotion/react"
import CustomButton from "../customButton"

const SidePopup = ({
  open,
  onClose,
  mSideBar = false,
  titleColor,
  title,
  children,
  popWidth,
  popBackgroundColor,
  btnState = false,
  btnText,
  btnFunction,
  isClose,
}: {
  open: boolean
  onClose: (value: boolean) => void
  mSideBar?: boolean
  titleColor?: string
  title?: string
  children?: ReactNode
  popWidth?: number | string
  popBackgroundColor?: string
  btnState?: boolean
  btnText?: string
  btnFunction?: (event: any) => void
  isClose?: boolean
}) => {


  return (
    <Drawer
      anchor={!mSideBar ? "right" : "left"}
      open={open}
      onClose={() => onClose(false)}
      sx={{
        width: popWidth ? popWidth : 800,

        "& .MuiDrawer-paper": {
          width:popWidth ? popWidth : 800,
          boxSizing: "border-box",
          bgcolor: popBackgroundColor,
          border: 0,
          zIndex: 100,
          // marginTop: mSideBar ? "0px" : "50px",
        },
      }}>
      <div
        style={{
          padding: "27px 30px 27px 30px",
          marginTop: mSideBar ? "10px" : "0px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 16,
          fontWeight: 500,
          color: "#475467",
          transition: "border-bottom 0.3s ease-in-out",
          backgroundColor: titleColor ? titleColor : "#EAECF0",
          // position: "fixed",
          width: "100%",
        }}>
        {title}
        <div style={{ display: "flex", alignItems: "center" }}>
          {btnState && (
            <CustomButton
              variant={"outlined"}
              buttonText={btnText}
              id={1}
              buttonFunction={
                btnFunction
                  ? (event) => {
                      btnFunction(event)
                    }
                  : () => {}
              }
              style={{
                backgroundColor: "#FECDCA",
                color: "#F97066",
                border: "none !important",
                marginRight:"10px"
              }}
              type="secondary"
            />
          )}
          {isClose && (
            <CloseIcon
              sx={{
                fontSize: "25px",
                color: popBackgroundColor ? "#ffffff" : "#000000",
                cursor: "pointer",
              }}
              onClick={() => onClose(false)}
            />
          )}
        </div>
      </div>
      {children}
    </Drawer>
  )
}

export default SidePopup
