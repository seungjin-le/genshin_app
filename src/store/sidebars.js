//Action
const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'
const ASIDEBAR_TOGGLE = 'ASIDEBAR_TOGGLE'
const SIDEBAR_UNFOLDABLE = 'SIDEBAR_UNFOLDABLE'
// Action Creator
export const sidebarToggle = () => {
  return {
    type: SIDEBAR_TOGGLE,
  }
}
export const aSidebarToggle = () => {
  return {
    type: ASIDEBAR_TOGGLE,
  }
}

export const sidebarUnfoldableToggle = () => {
  return {
    type: SIDEBAR_UNFOLDABLE,
  }
}

const initialState = {
  sidebarShow: true,
  asideShow: false,
  sidebarUnfoldable: false,
}

const sidebarState = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {
        sidebarShow: action.payload !== undefined ? action.payload : !state.sidebarShow,
      }
    case ASIDEBAR_TOGGLE:
      return {
        asideShow: action.payload !== undefined ? action.payload : !state.asideShow,
      }
    case SIDEBAR_UNFOLDABLE:
      return {
        sidebarUnfoldable: !state.sidebarUnfoldable,
      }
    default:
      return state
  }
}

export default sidebarState
