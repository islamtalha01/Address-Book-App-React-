import { Select, Space } from "antd";
const { Option } = Select;
function NationalitySelector({ nationalityList, handleChange }) {
  console.log(nationalityList);
  return (
    <Select
      mode="multiple"
      style={{
        width: "20%",
        height: "fit-content",
      }}
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
