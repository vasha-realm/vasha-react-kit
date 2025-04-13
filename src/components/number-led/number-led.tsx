type SingleNumProps = {
  value: number;
  classNames?: string;
  background?: boolean;
  stroke?: string;
}

const SingleNum = (prop: SingleNumProps) => {
  const { value, classNames = '', background = false, stroke = '#ffffff' } = prop;
  const map = [
    /* 0 */{ vertical0: true, vertical1: false, vertical2: true, topLeft: true, topRight: true, bottomLeft: true, bottomRight: true },
    /* 1 */{ vertical0: false, vertical1: false, vertical2: false, topLeft: false, topRight: true, bottomLeft: false, bottomRight: true },
    /* 2 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: false, topRight: true, bottomLeft: true, bottomRight: false },
    /* 3 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: false, topRight: true, bottomLeft: false, bottomRight: true },
    /* 4 */{ vertical0: false, vertical1: true, vertical2: false, topLeft: true, topRight: true, bottomLeft: false, bottomRight: true },
    /* 5 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: true, topRight: false, bottomLeft: false, bottomRight: true },
    /* 6 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: true, topRight: false, bottomLeft: true, bottomRight: true },
    /* 7 */{ vertical0: true, vertical1: false, vertical2: false, topLeft: false, topRight: true, bottomLeft: false, bottomRight: true },
    /* 8 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: true, topRight: true, bottomLeft: true, bottomRight: true },
    /* 8 */{ vertical0: true, vertical1: true, vertical2: true, topLeft: true, topRight: true, bottomLeft: false, bottomRight: true },
  ]
  const { vertical0 = false, vertical1 = false, vertical2 = false, topLeft = false, topRight = false, bottomLeft = false, bottomRight = false } = map[value]
  const R = 4
  const GAP = 5 - R
  const width = 9 * R + 2 * GAP
  const height = 16 * R + 4 * GAP
  return (
    <svg viewBox={`${5 - R} ${5 - R} ${width} ${height}`} className={`h-full ${classNames}`}>
      <path d={`M${5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${topLeft || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M10 ${5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${vertical0 || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M${30 + 5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${topRight || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M10 ${30 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${vertical1 || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M${5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${bottomLeft || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M${30 + 5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${bottomRight || 'hidden'}`} style={{ fill: stroke }} />
      <path d={`M10 ${60 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className={`fill-red-800 ${vertical2 || 'hidden'}`} style={{ fill: stroke }} />

      {background && (
        <>
          <path d={`M${5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M10 ${5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M${30 + 5 - R} ${10}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M10 ${30 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M${5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M${30 + 5 - R} ${10 + 30}, v${5 * R}, l${R} ${R}, l${R} -${R}, v-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
          <path d={`M10 ${60 + 5 - R} h${5 * R}, l${R} ${R}, l-${R} ${R}, h-${5 * R}, l-${R} -${R}, z`} className="fill-gray-500/20 stroke-none" />
        </>
      )}
    </svg >
  )
}

interface NumLedProps {
  num: string;
  prefix?: string;
  classNames?: string;
  background?: boolean;
  stroke?: string;
  style?: React.CSSProperties;
}

const NumberLed = (prop: NumLedProps) => {
  const { num, prefix = '', classNames = '', background = false, stroke = '#ffffff', style = {} } = prop;
  const numArr = num.toString().split('');
  const numAmount = numArr.length
  const prefixAmount = prefix.length
  const amount = numAmount + prefixAmount
  const width = 38
  const height = 68
  const totalWidth = amount * width + (amount - 1) * 8
  const radio = totalWidth / height
  return (
    <div className={`flex items-center justify-between ${classNames}`}
      style={{ aspectRatio: radio, ...style }}>
      {prefix.length > 0 && (
        prefix.split('').map((n, idx) => (
          <SingleNum key={idx} value={Number(n)} background={background} stroke={'#89898d'} />
        ))
      )}
      {numArr.map((n, idx) => (
        <SingleNum key={idx} value={Number(n)} background={background} stroke={stroke} />
      ))}
    </div>
  )
};

export default NumberLed;
