import "./style.css";
import { Row, Spin } from "antd";

function Loading({ searchText, loading }) {
  return (
    <Row style={{ justifyContent: "center" }}>
      {!searchText.length > 0 && loading && (
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
      )}
    </Row>
  );
}

export default Loading;
