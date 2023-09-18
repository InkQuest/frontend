import { Input } from "antd";
import './style.scss'

var reg = /^\d*\.?\d*$/;

function DefaultInput(props) {
  const {
    id,
    label,
    extra,
    placeholder,
    type,
    mb,
    variant,
    onChange,
    maxLength,
    ...rest
  } = props;

  // const styles = useStyleConfig("Input", { variant });
  return (
    <Input
    className="default-input"
      {...rest}
      type={type}
      id={id}
      onWheel={(e) => e.target.blur()}
      min={0}
      placeholder={placeholder}
    />
  );
}

export default DefaultInput;
