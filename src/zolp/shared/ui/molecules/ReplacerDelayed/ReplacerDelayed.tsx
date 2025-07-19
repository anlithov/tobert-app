import React, {
  ComponentType,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { ExtendedContainer } from './SmoothReplacer.styled.tsx';
import { useTimeout } from '../../../lib/hooks/timer/use-timeout.hook.ts';

export interface Props<
  T extends ComponentType<{ children?: ReactNode } & any>,
  R extends string,
> extends PropsWithChildren {
  ContainerComponent: T;
  ContainerProps?: Partial<React.ComponentProps<T>>;
  delay?: number;
  keySelected: R;
  components: Record<R, ReactNode>;
}
const ReplacerDelayed = <T extends ComponentType<any>, R extends string>({
  ContainerComponent,
  ContainerProps,
  delay = 200,
  keySelected,
  components,
}: Props<T, R>) => {
  const Container = ContainerComponent as ComponentType<
    { children?: ReactNode } & React.ComponentProps<T>
  >;

  const containerProps = ContainerProps as React.ComponentProps<T>;

  const [currentKey, setCurrentKey] = useState<R | null>(null);

  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState<ReactNode>(null);

  const { reSetupTimeout } = useTimeout({
    timeout: delay,
    onTimeout: () => {
      setCurrent(components[currentKey]);
      setHidden(false);
    },
  });

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender || !current) {
      setIsInitialRender(false);
      setCurrentKey(keySelected);
      setCurrent(components[keySelected]);
      return;
    }

    if (current) {
      setHidden(true);
      setCurrentKey(keySelected);
      reSetupTimeout();
    }
  }, [keySelected]);

  // Listen components set change
  useEffect(() => {
    if (currentKey) {
      setCurrent(components[currentKey]);
    }
  }, [components]);

  return (
    <ExtendedContainer
      className={hidden ? 'hidden' : ''}
      delay={delay}
      asComponent={Container}
      {...containerProps}
    >
      {current}
    </ExtendedContainer>
  );
};

export default ReplacerDelayed;
