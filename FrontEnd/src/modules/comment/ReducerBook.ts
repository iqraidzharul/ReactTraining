import {
  State,
  initialState,
  Action,
  initialAction,
  BOOKADD,
  BOOKFETCH,
  BOOKFAIL,
  BOOKSUCESS,
  BOOKDELETE,
} from './ConfigBook';

export function ReducerBook(state: State = initialState, action: Action = initialAction) {
  switch (action.type) {
    case BOOKADD:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

      case BOOKDELETE:
        return {
          ...state,
          fetch: true,
          data: action.data,
          action: action.type,
        };

    case BOOKFETCH:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

    case BOOKSUCESS:
      return {
        ...state,
        fetch: false,
        res: action.data,
        action: action.type,
      };

    case BOOKFAIL:
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
