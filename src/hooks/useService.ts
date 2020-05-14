import React from 'react';

import { ClassType } from 'src/utilities/classType';
import { isObservableLike } from 'src/utilities/observable';
import { useServiceProviderContext } from 'src/services/serviceProvider';

export const useService = <TService>(
  serviceClass: ClassType<TService>,
  dependencies: (keyof TService)[],
) => {
  const [forceUpdateValue, forceUpdate] = React.useState(false);
  const { container } = useServiceProviderContext();

  const service: TService = React.useMemo(() => {
    return container.resolve(serviceClass);
  }, [container, serviceClass]);

  React.useEffect(() => {
    for (const key of dependencies) {
      const fieldValue = service[key];
      if (!isObservableLike(fieldValue)) {
        throw new Error(`Field "${key}" is not observable`);
      }

      const disposable = fieldValue.subscribe(() => forceUpdate(!forceUpdateValue));
      return () => disposable.dispose();
    }
  }, [dependencies, forceUpdateValue, service]);

  return service;
};
