export const Utils = {
  isObject (value) {
    const OBJECT_TYPE = '[object Object]';

    return value &&
      Object.prototype.toString.call(value) === OBJECT_TYPE &&
      Object.keys(value).length;
  },

  isArray (value) {
    const OBJECT_TYPE = '[object Array]';

    return value && Object.prototype.toString.call(value) === OBJECT_TYPE;
  }
};
