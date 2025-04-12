'use client'
import { useState } from "react";
import Radio from "./radio";
import { RadioGroupProps, RadioValueType } from "./type";

const RadioGroup = (radioGroupProps: RadioGroupProps) => {
  const {
    radios = [],
    classNames = '',
    defaultPickedVal = '',
    radioGroupStatusChanged,
  } = radioGroupProps;
  const [pickedValue, setPickedValue] = useState<RadioValueType>(defaultPickedVal);
  const radioStatusChanged = (newVal: RadioValueType) => {
    if (pickedValue === newVal) return;
    setPickedValue(newVal);
    radioGroupStatusChanged?.(newVal)
  }
  return (
    <div className={classNames}>
      {radios.map((radio) =>
        <Radio
          key={radio.value}
          radioStatusChanged={() => radioStatusChanged(radio.value)}
          pickedVal={pickedValue}
          {...radio}
        />
      )}
    </div>
  )
}

export default RadioGroup;
