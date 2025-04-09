'use client';
import { RadioProps } from "./type";

const Radio = (radioProps: RadioProps) => {
  const { label, value, radioStatusChanged, pickedVal } = radioProps;
  return (
    <label className="flex items-center cursor-pointer" onClick={() => radioStatusChanged?.()}>
      <div className="w-[1rem] h-[1rem] rounded-full box-content border-1 border-[var(--tc)] flex items-center justify-center mr-1">
        <div className={`size-9/12 aspect-square rounded-full bg-[var(--tc)] duration-200 ${pickedVal === value ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      {label}
      <input type="radio" value={value} className="size-0 opacity-0" />
    </label>
  )
}

export default Radio;