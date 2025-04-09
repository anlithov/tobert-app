import { atom, useRecoilState } from 'recoil';

export const atomAccordionConfigs = atom<Record<string, boolean>>({
  key: 'atomAccordionConfig',
  default: {},
});

export const useAccordion = () => {
  const [config, setConfig] = useRecoilState(atomAccordionConfigs);

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
