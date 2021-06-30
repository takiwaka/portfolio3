import $ from 'jquery';
import 'slick-carousel';
import router from './modules/Router'
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat,faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import '../scss/app.scss';

library.add(faDog,faCat,faLongArrowAltRight);
dom.watch();
