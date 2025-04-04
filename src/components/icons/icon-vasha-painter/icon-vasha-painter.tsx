const IconVashaPainter = ({ show = false }: { show?: boolean }) => {
  const arr = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg viewBox="0 0 100 100" className={`
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      ${show ? 'block' : 'hidden'}
      bg-[var(--bgc)] *:stroke-[var(--tc)]
      *:fill-none *:stroke-1
    `}>
      {arr.map((idx) => (<path key={idx} d={`M${idx * 10} 0, v100`} />))}
      {arr.map((idx) => (<path key={idx} d={`M0 ${idx * 10}, h100`} />))}
    </svg>
  )
};

export default IconVashaPainter;