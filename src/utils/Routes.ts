import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import Contact from '../views/Contact';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';

export const landingRoutes = [{
    route:'Home',
    name: 'Home',
    view: () => Home,
    icon: HomeIcon
},{
    route:'Portfolio',
    name: 'Portfolio',
    view: () => Portfolio,
    icon: AssignmentIcon
},{
    route:'Contact',
    name: 'Contact',
    view: () => Contact,
    icon: MailIcon
}];
