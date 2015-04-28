export default function propertyDescriptor(object, property) {
  let pd = Object.getOwnPropertyDescriptor(object, property);

  if (typeof pd === 'undefined') {
    const proto = object.prototype || Object.getPrototypeOf(object);
    pd = Object.getOwnPropertyDescriptor(proto, property);
  }

  return pd;
}
