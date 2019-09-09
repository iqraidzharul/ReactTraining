import {
  State,
  initialState,
  Action,
  initialAction,
  CATEGORYADD,
  CATEGORYFETCH,
  CATEGORYFAIL,
  CATEGORYSUCESS,
  CATEGORYDELETE,
} from './ConfigCategory';

export function ReducerCategory(state: State = initialState, action: Action = initialAction) {
  switch (action.type) {
    case CATEGORYADD:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

      case CATEGORYDELETE:
        return {
          ...state,
          fetch: true,
          data: action.data,
          action: action.type,
        };

    case CATEGORYFETCH:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

    case CATEGORYSUCESS:
      return {
        ...state,
        fetch: false,
        res: action.data,
        action: action.type,
      };

    case CATEGORYFAIL:
      return {
        ...state,
        fetch: false,
        err: action.data,
        action: action.type,
      };

    default:
      return state;
  }
}
