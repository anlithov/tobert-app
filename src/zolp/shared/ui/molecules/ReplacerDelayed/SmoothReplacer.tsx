import React, {
  ComponentType,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { ExtendedContainer } from './SmoothReplacer.styled.tsx';
import { useTimeout } from '../../../lib/hooks/timer/use-timeout.hook.ts';

export interface Props<T extends ComponentType<{ children?: ReactNode } & any>>
  extends PropsWithChildren {
  ContainerComponent: T;
  ContainerProps?: Partial<React.ComponentProps<T>>;
  delay?: number;
}
const SmoothReplacer = <T extends ComponentType<any>>({
  ContainerComponent,
  ContainerProps,
  delay = 1000,
  children,
}: Props<T>) => {
  const Container = ContainerComponent as ComponentType<
    { children?: ReactNode } & React.ComponentProps<T>
  >;

  const containerProps = ContainerProps as React.ComponentProps<T>;

  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState<ReactNode>(null);

  const { reSetupTimeout } = useTimeout({
    timeout: delay,
    onTimeout: () => {
      setCurrent(children);
      setHidden(false);
    },
  });

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender && !current) {
      reSetupTimeout();
      setIsInitialRender(false);
      setCurrent(children);
      return;
    }

    const isCurrentValidElement = React.isValidElement(current);
    const isChildrenValidElement = React.isValidElement(children);

    if (isCurrentValidElement && isChildrenValidElement) {
      const currentType = (current as React.ReactElement).type;
      const newChildType = (children as React.ReactElement).type;

      if (currentType === newChildType) {
        // If both components are the same, just return without triggering any animation
        return;
      }
    }

    if (current) {
      setHidden(true);
      reSetupTimeout();
    }
  }, [children]);

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

export default SmoothReplacer;
