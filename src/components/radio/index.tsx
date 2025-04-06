import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={`flex items-center cursor-pointer relative pl-7 mb-3 select-none ${className || ''}`}>
        <input
          type="radio"
          ref={ref}
          className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
          {...props}
        />
        <span className="absolute left-0 h-5 w-5 bg-transparent border-2 border-[var(--tc)] rounded-full transition-all duration-200 peer-hover:bg-[var(--tc)]/10 peer-checked:bg-[var(--tc)] peer-checked:border-[var(--tc)]" />
        <span className="absolute left-0 h-5 w-5 after:content-[''] after:absolute after:top-1 after:left-1 after:w-2 after:h-2 after:rounded-full after:bg-[var(--bgc)] after:transition-all after:duration-200 after:opacity-0 peer-checked:after:opacity-100" />
        {label && <span className="ml-2 text-[var(--tc)]">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

interface RadioGroupProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  name,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={`flex flex-col ${className || ''}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioProps>(child)) {
          return React.cloneElement(child, {
            name,
            checked: value === child.props.value,
            onChange: handleChange,
          });
        }
        return child;
      })}
    </div>
  );
}; 