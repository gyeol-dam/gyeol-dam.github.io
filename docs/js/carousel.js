import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';

import '../styles/main.css'

const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);