import Radio from "./radio";
import { RadioType } from "./type";

type RadioGroupProps = {
  radios?: RadioType[];
  classNames?: string;
  radioClassName?: string;
}

const RadioGroup = (radioGroupProps: RadioGroupProps) => {
  const { radios = [], classNames = '', radioClassName = '' } = radioGroupProps;
  return (
    <div className={classNames}>
      {radios.map((radio) => <Radio key={radio.value} radioClassName={radioClassName} {...radio} />)}
    </div>
  )
}

export default RadioGroup;