import { Button, SxProps, Theme,useTheme } from "@mui/material"

const CustomButton = ({
  variant,
  buttonText,
  active,
  id,
  btnType,
  style,
  paramOne,
  paramTwo,
  iconStart,
  iconEnd,
  disableState,
  type,
  buttonWidth,
  buttonFunction,
}: {
  variant: "text" | "contained" | "outlined"
  buttonText: any
  active?:boolean,
  id: number,
  btnType?:"button" | "reset" | "submit" | undefined
  style?: SxProps<Theme>
  paramOne?: any
  paramTwo?: any
  iconStart?: JSX.Element
  iconEnd?: JSX.Element
  disableState?: boolean
  type?: "secondary";
  buttonWidth?: string
  buttonFunction: (event:any,paramOne?: any, paramTwo?: any) => void
}) => {


  const defaultStyles: SxProps = {
    height: {xs:"40px",md:"44px"},
    width: buttonWidth || "100%",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: 16,
    fontWeight:500,
    boxShadow: "none",
    backgroundColor:  "#0041A1",
    color: "#FFFFFF",
    padding:{xs:"6px 5px",md:"6px 16px"},
    "&:hover": {
      backgroundColor: "#66A3FF",
      color: "#475467",
      boxShadow: "none",
    },
    '&.Mui-disabled': {
      backgroundColor: "#EAECF0",
      color: "#667085",
    },
  }

  const secondaryStyles: SxProps = {
    height: {xs:"40px",md:"44px"},
    width: buttonWidth || "100%",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: 16,
    fontWeight:500,
    boxShadow: "none",
    backgroundColor: active? "#66A3FF":"#FFFFFF",
    borderColor:"#D0D5DD",
    color: "#000000",
    padding:{xs:"6px 5px",md:"6px 16px"},
    "&:hover": {
  
    },
  }

  return (
    <>
      <Button
        key={id}
        sx={{
          ...(type == "secondary" ? secondaryStyles : defaultStyles),
          ...(style ? style : {}),
        }}
        variant={variant}
        disabled={disableState || false}
        startIcon={iconStart ? iconStart : ""}
        endIcon={iconEnd? iconEnd:""}
        type={btnType?btnType:"button"}
        onClick={(event) => {
          buttonFunction(event,paramOne, paramTwo)
        }}>
        {buttonText}
      </Button>
    </>
  )
}

export default CustomButton
