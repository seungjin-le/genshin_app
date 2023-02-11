//Action
const SET_TOAST_STATE = 'SET_TOAST_STATE'

const initialState = {
  visibleState: false,
  text: '',
  toastColor: 'success',
  textColor: 'white',
}

const toastState = (state = initialState, {type, ...rest}) => {
  switch (type) {
    case SET_TOAST_STATE:
      return {...state, ...rest}
    default:
      return state
  }
}

export default toastState
