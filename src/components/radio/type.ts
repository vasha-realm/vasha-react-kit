export type RadioType = {
  label: React.ReactNode;
  value: RadioValueType;
}

export type RadioValueType = string | number;

export type RadioGroupProps = {
  radios?: RadioType[];
  classNames?: string;
  defaultPickedVal?: RadioValueType;
  radioGroupStatusChanged: (newVal: RadioValueType) => void;
}

export type RadioProps = {
  label: React.ReactNode;
  value: RadioValueType;
  pickedVal?: RadioValueType;
  radioStatusChanged?: () => void;
}

export type RadioGroupRef = {
  getPickedValue: () => RadioValueType;
  setPickedValue: (value: RadioValueType) => void;
};
