const baseURL = 'https://jsonplaceholder.typicode.com'
const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls ={
    users: {
        users,
        byId: (id)=> `${users}/${id}`
    },
    posts: {
        byId: (id)=> `${posts}/${id}`,
        byUserId: (userId) => `${users}/${userId}${posts}`
    },
    comments: {
        byPostId: (postId)=> `${posts}/${postId}${comments}`
    }
}

export {baseURL, urls}
