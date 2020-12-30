import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import {Contact} from '../views/Contact';
import Blog from '../views/Blog';
import Settings from '../views/Settings';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import SettingsIcon from '@material-ui/icons/Settings';


export const internalLandingRoutes = [{
    name: 'Home',
    route:'/',
    view: Home,
    icon: HomeIcon,
},{
    name: 'Portfolio',
    route:'/Portfolio',
    view: Portfolio,
    icon: AssignmentIcon,
},{
    name: 'Contact',
    route:'/Contact',
    view: Contact,
    icon: MailIcon,
},{
    name: 'Blog',
    route:'/Blog',
    view: Blog,
    icon: BookIcon,
},{
    name:'Settings',
    route:'/Settings',
    view:Settings,
    icon:SettingsIcon
}];

export const externalLandingRoutes = [{
    name:"LinkedIn",
    href: "https://www.linkedin.com/in/strawhataaron",
    icon: LinkedInIcon
},{
    name:"GitHub",
    href:"https://github.com/strawhataaron",
    icon:GitHubIcon
}]