export const AUTH_SCREENS = {
  login: 'login',
  register: 'register',
} as const;
type AuthScreensKeys = keyof typeof AUTH_SCREENS;
type AuthScreens = (typeof AUTH_SCREENS)[AuthScreensKeys];

export const DYNAMIC_SLUGS = {
  authMode: 'authMode',
} as const;

export const ROUTES_NAMES = {
  AUTH: '/auth',
  AUTH_DYNAMIC: `/auth/:${DYNAMIC_SLUGS.authMode}`,

  SHOWCASE: '/showcase',
};

export const ROUTES_NAMES_GENERATOR = {
  AUTH: (route: AuthScreens) => `/auth/${route}`,
};
