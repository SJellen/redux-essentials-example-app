import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toString()},
    { id: '2', title: 'Second Post!', content: 'More text', date: sub(new Date(), { minutes: 7 }).toString()},
    { id: '3', title: 'Third Post!', content: 'More text, more text', date: sub(new Date(), { minutes: 3 }).toString()}
    
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reaction[reaction]++
            }
        },
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    date: new Date().toISOString(),
                    title,
                    content,
                    user: userId
                }
            }
        }
        },
        postUpdated(state, action) {
            const { id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer