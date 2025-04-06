'use client';

type RadioProps = {
  label: React.ReactNode;
  value: string | number;
  radioClassName?: string;
  checked?: boolean;
}

const Radio = (radioProps: RadioProps) => {
  const { label, value, radioClassName = '', checked = false } = radioProps;
  const onChange = () => { }
  return (
    <label className="flex items-center outline cursor-pointer" onClick={onChange}>
      <div className="w-[1rem] aspect-square rounded-full border-1 border-[var(--tc)]">
        <div className={`size-9/12 aspect-square rounded-full bg-[var(--tc)] duration-200 ${checked ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      {label}
      <input type="radio" value={value} className="size-0 opacity-0" />
    </label>
  )
}

export default Radio;
