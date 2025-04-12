const SvgPainter = ({ show = false }: { show?: boolean }) => {
  const arr = Array.from({ length: 11 }, (_, i) => i);
  const R = 4
  const GAP = 5 - R
  return (
    <svg viewBox={`${5 - R} ${5 - R} ${R + GAP + 7 * R + GAP + R} ${R + 2 * 2 * GAP + 2 * 7 * R + R}`} className={`
        z-[99]
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        ${show ? 'block' : 'hidden'}
        bg-[var(--bgc)]
        w-[8rem]
      `}>
      {/* aspect-square landscape:h-[75vh] portrait:w-[75vw] */}
      {arr.map((idx) => (<path key={idx} d={`M${idx * 10} 0, v100`} className="stroke-[var(--tc)] stroke-1" />))}
      {arr.map((idx) => (<path key={idx} d={`M0 ${idx * 10}, h100`} className="stroke-[var(--tc)] stroke-1" />))}

      <path d={`M${5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M10 ${5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M${30 + 5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M10 ${30 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M${5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M${30 + 5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
      <path d={`M10 ${60 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/50 stroke-none" />
    </svg>
  )
};

export default SvgPainter;