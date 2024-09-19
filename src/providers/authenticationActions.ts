import type React from 'react';
import type { TokenAction } from './types.ts';

export const setToken = (
  payload: string,
  dispatch: React.Dispatch<TokenAction>
) => {
  dispatch({
    type: 'set',
    token: payload,
  });
};

export const clearToken = (dispatch: React.Dispatch<TokenAction>) => {
  dispatch({
    type: 'clear',
    token: '',
  });
};
