/* eslint-disable camelcase, no-console */
interface ServiceDef {
  [key: string]: object;
}

/**
 * benefits:
 * - A declarative dependency resolver
 * - Lazy instantiation
 * - A container that looks just like a regular object
 */
class BeanContainer {
  services: ServiceDef;

  constructor() {
    this.services = {};
  }

  service(name: string, callbackFunction: Function) {
    Object.defineProperty(this, name, {
      get: () => {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = callbackFunction(this);
        }
        return this.services[name];
      },
      configurable: true,
      enumerable: true,
    });
    return this;
  }
}

export { BeanContainer };
