export const getDataType = (value: any) => (Object.prototype.toString.call(value).slice(8, -1)).toLowerCase()
