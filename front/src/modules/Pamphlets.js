const TOGGLE_PAMP = 'pamp/TOGGLE_PAMP'

let = nextId = 1;

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

const initialState = [
  {
    id: 1,
    text: '예시'
  }, 
  {
    id: 2,
    text: '예시'
  },
  {
    id: 3,
    text: '예시'
  },
  {
    id: 4,
    text: '예시'
  },{
    id: 5,
    text: '예시'
  },{
    id: 6,
    text: '예시'
  },
];

export default function pamphls(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_PAMP:
        return state.map(

        );
      default:
        return state;
    }
  }