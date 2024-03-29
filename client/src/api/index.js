import axios from 'axios';
const API = axios.create({ baseURL: 'https://mern-sumit.onrender.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('userToken')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem(
            'userToken'
        )}`;
    } else req.headers.Authorization = `Bearer undefined`;
    return req;
});
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (updatedPost) =>
    API.patch(`posts/${updatedPost._id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);

export const signin = (data) =>
    API.post('https://mern-sumit.onrender.com/users/signin', {
        email: data.email,
        password: data.password,
    });

export const signup = (data) =>
    API.post('https://mern-sumit.onrender.com/users/signup', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
    });
