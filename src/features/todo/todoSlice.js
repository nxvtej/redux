import {createSlice, nanoid} from '@reduxjs/toolkit' 

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
           const todo = {
            id: nanoid(),
            text: action.payload,
           }

           state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        }
    }
})

// this gives us access to the reducers
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
// last this connects us to the store .