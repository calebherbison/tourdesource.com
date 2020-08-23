import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import Blog from './routes/Blog.svelte'

const routes = [
    {
        name: '/',
        component: Home,
    },
    {
        name: '/about',
        component: About,
    },
    {
        name: '/blog',
        component: Blog,
    }
]

export { routes }