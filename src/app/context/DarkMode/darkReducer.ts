export type DarkReducerActionType = {
  type: 'WHITE' | 'DARK';
  isDark: boolean;
};

const darkReducer = (
  prevState: boolean,
  action: DarkReducerActionType
): boolean => {
  switch (action.type) {
    case 'DARK':
      return true;
    case 'WHITE':
      return false;

    default:
      return prevState;
  }
};

export default darkReducer;
