import './vendor';
import './helpers';
import './components/preloader';
import './components/social';
import './components/burgerMenu';
import './components/scrollIndicator';
import './components/listNav';
import './components/home';
import './components/share';
import './modules/locomotive';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
