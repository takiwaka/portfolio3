import $ from 'jquery';
import 'slick-carousel';
import router from './modules/Router'
import '../scss/app.scss';
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-regular-svg-icons';

library.add(faDog,faComments,faCat);

dom.watch();