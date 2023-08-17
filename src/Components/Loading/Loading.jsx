import { Row, Spin } from "antd";
import useStyles from "../../hooks/useStyles";
function Loading({ searchText, loading }) {

  const { styles } = useStyles();


  return (
    <Row className={styles.justifyContentCenter}>
      {!searchText.length > 0 && loading && (
        <Spin tip="Loading" size="small">
          <div className={styles.spinnerContent} />
        </Spin>
      )}
    </Row>
  );
}

export default Loading;
