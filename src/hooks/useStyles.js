import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
 
  appFooter: {
   
    textAlign: "center",
            color: "#fff",
            backgroundColor: "#000000",
            width: "100%",
            marginTop: "auto ",
  },
 
  appHeader: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      width: "100%",
      backgroundColor: token.colorBgLayout,
      display: "flex",
      height: "fit-content",
      justifyContent: "center",
      
  
  },
  textAlignCenter:{
    textAlign: "center",
  },
  spinnerContent:{
    padding: "50px",
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius:"4px",
  },
  nationalitySelector:{
    width: "20%",
    height: "fit-content",
  },
  justifyContentCenter:{
    justifyContent: "center",
  },
}));

export default useStyles