export default function mockCreator(MODULES={}) {
  return function(...modules) {
    let ret = {};
    modules.forEach(mod => ret[mod] = MODULES[mod]());
    return ret;
  };
}
