import $ from 'jquery';
import 'slick-carousel';
import router from './modules/Router'
import '@fortawesome/fontawesome-free/js/all'
// import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
// import {faDog, faCat} from '@fortawesome/free-solid-svg-icons';
// import {faComments} from '@fortawesome/free-regular-svg-icons';

import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
import faRegular from '@fortawesome/fontawesome-free-regular'
import faBrands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(faSolid, faRegular, faBrands)



import '../scss/app.scss';

// library.add(faDog,faComments,faCat);
// dom.watch();
fontawesome.dom.i2svg()
