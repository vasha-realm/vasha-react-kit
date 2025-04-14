'use client'
import { useState, forwardRef, useImperativeHandle } from "react";
import { RadioGroupProps, RadioGroupRef, RadioValueType } from "./type";
import Radio from "./radio";

const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>(
  (radioGroupProps, ref) => {
    const {
      radios = [],
      classNames = '',
      defaultPickedVal = '',
      radioGroupStatusChanged,
    } = radioGroupProps;

    const [pickedValue, setPickedValue] = useState<RadioValueType>(defaultPickedVal);

    // 暴露方法给外部 ref
    useImperativeHandle(ref, () => ({
      getPickedValue: () => pickedValue,
      setPickedValue: (value) => {
        setPickedValue(value);
        radioGroupStatusChanged(value);
      }
    }), [pickedValue, radioGroupStatusChanged]);

    const radioStatusChanged = (newVal: RadioValueType) => {
      if (pickedValue === newVal) return;
      setPickedValue(newVal);
      radioGroupStatusChanged(newVal);
    };

    return (
      <div className={classNames}>
        {radios.map((radio) => (
          <Radio
            key={radio.value}
            radioStatusChanged={() => radioStatusChanged(radio.value)}
            pickedVal={pickedValue}
            {...radio}
          />
        ))}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup"; // 添加 displayName 方便调试

export default RadioGroup;