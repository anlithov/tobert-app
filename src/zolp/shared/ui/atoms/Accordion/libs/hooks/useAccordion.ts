import { atom, useAtom } from 'jotai';

export const atomAccordionConfigs = atom<Record<string, boolean>>({});

export const useAccordion = () => {
  const [config, setConfig] = useAtom(atomAccordionConfigs);

  const setAccordionConfig = (key: string, value: boolean) => {
    setConfig({
      ...config,
      [key]: value,
    });
  };

  const toggleAccordionVisibility = (key: string) => {
    setAccordionConfig(key, !config[key]);
  };

  const getAccordionVisibility = (key: string) => {
    return config[key];
  };

  const addAccordion = (key: string, value: boolean) => {
    setAccordionConfig(key, value);
  };

  return {
    toggleAccordionVisibility,
    getAccordionVisibility,
    addAccordion,
  };
};
