import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import Blogs from './routes/Blogs.svelte'

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
        name: '/blogs',
        component: Blogs,
    }
]

export { routes }