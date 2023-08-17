import { Select, Space } from "antd";
const { Option } = Select;
import useStyles from "../../hooks/useStyles";
function NationalitySelector({ nationalityList, handleChange }) {
  const { styles } = useStyles();
  return (
    <Select
      className={styles.nationalitySelector}
      mode="multiple"
      placeholder="select one country"
      onChange={handleChange}
      optionLabelProp="label"

    >
      {nationalityList.map((item, index) => (
        <Option key={index} value={item.value} label={item.label}>
          <Space>{item.content}</Space>
        </Option>
      ))}
    </Select>
  );
}

export default NationalitySelector;
