import { createStyles } from "antd-style";

const inLineStyles = createStyles(({ token, css }) => ({
  appFooter: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000000",
    width: "100%",
    marginTop: "auto",
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
  textAlignCenter: {
    textAlign: "center",
  },
  spinnerContent: {
    padding: "50px",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
  },
  nationalitySelector: {
    width: "30%",
    height: "fit-content",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  notFound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: token.colorText,
  },
  sidebarMenu: {
    height: "100%",
  },

  usersListContainer: {
    marginLeft: "0px",
    marginRight: "0px",
    paddingRight: "8px",
    paddingLeft: "8px"
  },
  cardMeta: {
    display: "block",

  },
  refElement: {
    display: "flex",
    textAlign: "center",
    height: "10px",
    marginTop: "auto ",
    
  },
  homePageContainer: {
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0px 0px ",
  },
  homePageContentContainer: {
    flexWrap: "wrap",
    margin: "0px 0px",
  },
  zeroPadding: { margin: "0px 0px" },
  settingsPageContainer: {
    flexDirection: "column",
    minHeight: "100vh",
  },
  settingsPageContentContainer: {
    height: "100vh",
  },
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 6,
}));

export default inLineStyles;
