import {
  State,
  initialState,
  Action,
  initialAction,
  AUTHORADD,
  AUTHORFETCH,
  AUTHORFAIL,
  AUTHORSUCESS,
  AUTHORDELETE,
} from './ConfigAuthor';

export function ReducerAuthor(state: State = initialState, action: Action = initialAction) {
  switch (action.type) {
    case AUTHORADD:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

      case AUTHORDELETE:
        return {
          ...state,
          fetch: true,
          data: action.data,
          action: action.type,
        };

    case AUTHORFETCH:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

    case AUTHORSUCESS:
      return {
        ...state,
        fetch: false,
        res: action.data,
        action: action.type,
      };

    case AUTHORFAIL:
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
