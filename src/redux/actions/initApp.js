import * as types from '../types'

export const initApp = () => dispatch => {
  let token = 'BQDswch3KUMCX_FdHSiyAGQBg2gCmHmM6IQpZPyrd49UPndEqQyltu4iImvOEuuJxibFO05eVkg9Tx0alN3GcVzyKFk1IUCWRgRnZF9G63eflEuoQxaaTvD9My-IAk5iC2KYVErg0zT8jV8U_B_rvUiIjJdeUmbprkli57TtKO0J33co7mMn741KW2frYJkxzRRHdZ2aqs7O9n11CpLLt1Rb1MTZEiDb6dHAOoperAhPAJYLo92clh82kCmiPanWj7prS4VD2-z4uCk-qMiI3m23aNP2kPgiQ8eWam1C' 
  dispatch({
    type: types.INIT,
    payload: token
  })
}