import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import Contact from '../views/Contact';
import Blog from '../views/Blog';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';

export const internalLandingRoutes = [{
    route:'/Home',
    name: 'Home',
    view: Home,
    icon: HomeIcon,
},{
    route:'/Portfolio',
    name: 'Portfolio',
    view: Portfolio,
    icon: AssignmentIcon,
},{
    route:'/Contact',
    name: 'Contact',
    view: Contact,
    icon: MailIcon,
},{
    route:'/Blog',
    name: 'Blog',
    view: Blog,
    icon: BookIcon,
}];

export const externalLandingRoutes = [{
    route:"LinkedIn",
    href: "https://linkedin.com/strawhataaron",
    icon: LinkedInIcon
},{
    route:"GitHub",
    href:"https://github.com/strawhataaron",
    icon:GitHubIcon
}]