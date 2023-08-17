import { Row, Spin } from "antd";
import inLineStyles from "../../inLineStyles";
function Loading({ searchText, loading }) {

  const { styles } = inLineStyles();


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
