type IconCloseProps = {
  classNames?: string;
  onClick?: () => void;
}
const IconClose = (iconCloseProps: IconCloseProps) => {
  const { classNames = '', ...rest } = iconCloseProps;
  return (
    <svg viewBox="0 0 100 100" className={`aspect-square *:stroke-[var(--tc)] *:fill-none ${classNames}`} {...rest}>
      <path d={`M10 10, L90 90`} className="stroke-[20]" strokeLinecap="round" />
      <path d={`M90 10, L10 90`} className="stroke-[20]" strokeLinecap="round" />
    </svg>
  )
};

export default IconClose;