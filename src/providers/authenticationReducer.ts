import { type Authentication, type TokenAction } from './types.ts';

export type AuthenticationReducer = (
  token: Authentication,
  action: TokenAction
) => Authentication;

export const authenticationReducer: AuthenticationReducer = (
  state,
  action
): Authentication => {
  switch (action.type) {
    case 'set':
      return { token: action.token };
    case 'clear': {
      localStorage.setItem(localStorageKey);
      return { token: '' };
    }
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Invalid action type ${action.type}`);
  }
};
