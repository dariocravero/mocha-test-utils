export default function propertyDescriptor(object, property) {
  const proto = object.prototype || Object.getPrototypeOf(object);
  return Object.getOwnPropertyDescriptor(proto, property);
}
