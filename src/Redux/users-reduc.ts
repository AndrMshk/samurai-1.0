import { UserType } from './redux-store';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

type initialStateType = typeof initialState

//fix any

type actionType = followACType
  | unFollowACType
  | setUsersACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | toggleIsFetchingACType
  | followingInProgressACType

export const usersReducer = (
  state: any = initialState,
  action: actionType) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((user: UserType) => user.id === action.payload.id
          ? { ...user, followed: true }
          : user),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((user: UserType) => user.id === action.payload.id
          ? { ...user, followed: false }
          : user),
      };
    case 'SET-USERS':
      return { ...state, users: action.payload };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.payload.page };
    case 'SET-TOTAL-USERS-COUNT':
      return { ...state, totalUsersCount: action.payload.totalUsersCount };
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.payload.isFetching };
    case 'FOLLOWING-IN-PROGRESS':
      return {
        ...state,
        followingInProgress: action.payload.inProgress
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter((id: number) => id !== action.payload.userId),
      };
    default:
      return state;
  }
};

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type followingInProgressACType = ReturnType<typeof followingInProgressAC>

export const followAC = (userId: number) => ({ type: 'FOLLOW', payload: { id: userId } } as const);
export const unFollowAC = (userId: number) => ({ type: 'UNFOLLOW', payload: { id: userId } } as const);
export const setUsersAC = (users: UserType[]) => ({ type: 'SET-USERS', payload: users } as const);
export const setCurrentPageAC = (page: number) => ({ type: 'SET-CURRENT-PAGE', payload: { page } } as const);
export const setTotalUsersCountAC = (usersCount: number) => ({
  type: 'SET-TOTAL-USERS-COUNT',
  payload: { totalUsersCount: usersCount },
} as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({
  type: 'TOGGLE-IS-FETCHING',
  payload: { isFetching },
} as const);
export const followingInProgressAC = (userId: number, inProgress: boolean) => ({
  type: 'FOLLOWING-IN-PROGRESS',
  payload: { userId: userId, inProgress: inProgress },
} as const);


