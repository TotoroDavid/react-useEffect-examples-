import React, { useState, useEffect, useCallback } from 'react'
import getPost from './helpers/getPost'
import getUser from './helpers/getUsers'

// const initialUser = {
//     name: '',
//     email: ''
// }

// const initialPost = [
//     {
//         id: 1,
//         title: 'post 1'
//     },
//     {
//         id: 2,
//         title: 'post 2'
//     }
// ]

const FetchCard = () => {

    const [user, setUser] = useState({})
    const [post, setPost] = useState([])

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser)
            })
    }

    const updatePost = useCallback(() => {
        getPost(user.id)
            .then((newPost) => {
                setPost(newPost)
            })
    }, [user.id])

    useEffect(() => {
        updateUser()
    }, [])

    useEffect(() => {
        if (user?.id) {
            updatePost()
        }
    }, [user])

    return (
        <div>
            <button onClick={updateUser}>
                Another user
            </button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <br />
            <br />
            <h2>Post - user :{user.id}</h2>
            <ul>
                {
                    post.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchCard

