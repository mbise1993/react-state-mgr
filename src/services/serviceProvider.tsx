import React from 'react';
import { Container } from 'inversify';

export const serviceContainer = new Container();

interface ServiceProviderContextValue {
  container: Container;
}

const ServiceProviderContext = React.createContext<ServiceProviderContextValue | null>(null);

export interface ServiceProviderProps {
  children: React.ReactNode;
}

export function ServiceProvider({ children }: ServiceProviderProps) {
  const value: ServiceProviderContextValue = {
    container: serviceContainer,
  };

  return (
    <ServiceProviderContext.Provider value={value}>{children}</ServiceProviderContext.Provider>
  );
}

export function useServiceProviderContext() {
  const context = React.useContext(ServiceProviderContext);
  if (!context) {
    throw new Error(
      `${useServiceProviderContext.name} can only be called in a descendant of ${ServiceProvider.name}`,
    );
  }

  return context;
}
