import { injectable } from 'inversify';

import { serviceContainer } from '../services/serviceProvider';

export enum Scope {
  REQUEST,
  SINGLETON,
  TRANSIENT,
}

export const Service = (scope: Scope = Scope.SINGLETON): ClassDecorator => {
  return target => {
    injectable()(target);
    const binding = serviceContainer.bind(target).toSelf();

    switch (scope) {
      case Scope.REQUEST:
        binding.inRequestScope();
        break;
      case Scope.SINGLETON:
        binding.inSingletonScope();
        break;
      case Scope.TRANSIENT:
        binding.inTransientScope();
        break;
      default:
        throw new Error(`Invalid binding scope: ${scope}`);
    }
  };
};
