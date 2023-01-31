"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 88554:
/*!*************************************************************************!*\
  !*** ./src/app/modules/vendor/become-vendor/become-vendor.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BecomeVendorComponent": () => (/* binding */ BecomeVendorComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/slider */ 99324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70938);



class BecomeVendorComponent {
  constructor() {
    this.TeamSliderConfig = src_app_shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.TeamSlider;
    this.TestimonialSliderConfig = src_app_shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.TestimonialSlider;
    // Testimonial Carousel
    this.testimonial = [{
      image: 'assets/images/testimonial/1.jpg',
      name: 'Mark jkcno',
      designation: 'Designer',
      description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
    }, {
      image: 'assets/images/testimonial/2.jpg',
      name: 'Adegoke Yusuff',
      designation: 'Content Writer',
      description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
    }, {
      image: 'assets/images/testimonial/1.jpg',
      name: 'John Shipmen',
      designation: 'Lead Developer',
      description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
    }];
    // Team 
    this.team = [{
      image: 'assets/images/team/1.jpg',
      name: 'Mark jkcno',
      designation: 'Designer'
    }, {
      image: 'assets/images/team/2.jpg',
      name: 'Adegoke Yusuff',
      designation: 'Content Writer'
    }, {
      image: 'assets/images/team/3.jpg',
      name: 'John Shipmen',
      designation: 'Lead Developer'
    }, {
      image: 'assets/images/team/4.jpg',
      name: 'Hileri Keol',
      designation: 'CEO & Founder at Company'
    }, {
      image: 'assets/images/team/3.jpg',
      name: 'John Shipmen',
      designation: 'Lead Developer'
    }];
  }
  ngOnInit() {}
}
BecomeVendorComponent.ɵfac = function BecomeVendorComponent_Factory(t) {
  return new (t || BecomeVendorComponent)();
};
BecomeVendorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BecomeVendorComponent,
  selectors: [["app-become-vendor"]],
  decls: 153,
  vars: 0,
  consts: [[1, "breadcrumb-section"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "page-title"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "about-page", "section-b-space"], [1, "col-lg-12"], [1, "banner-section"], ["src", "../assets/images/becomevendor.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload"], [1, "col-sm-12"], [1, "service", "section-b-space", "pt-0"], [1, "row", "partition4"], [1, "col-lg-3", "col-md-6", "service-block1"], ["viewBox", "-29 0 487 487.71902", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m220.867188 266.175781c-.902344-.195312-1.828126-.230469-2.742188-.09375-9.160156-1.066406-16.070312-8.816406-16.085938-18.035156 0-4.417969-3.582031-8-8-8-4.417968 0-8 3.582031-8 8 .023438 15.394531 10.320313 28.878906 25.164063 32.953125v8c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-7.515625c17.132813-3.585937 28.777344-19.542969 26.976563-36.953125-1.804688-17.410156-16.472657-30.640625-33.976563-30.644531-10.03125 0-18.164063-8.132813-18.164063-18.164063s8.132813-18.164062 18.164063-18.164062 18.164063 8.132812 18.164063 18.164062c0 4.417969 3.582031 8 8 8 4.417968 0 8-3.582031 8-8-.023438-16.164062-11.347657-30.105468-27.164063-33.441406v-7.28125c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v7.769531c-16.507813 4.507813-27.132813 20.535157-24.859375 37.496094s16.746094 29.621094 33.859375 29.617187c9.898437 0 17.972656 7.925782 18.152344 17.820313.183593 9.894531-7.597657 18.113281-17.488281 18.472656zm0 0"], ["d", "m104.195312 222.5c0 64.070312 51.9375 116.007812 116.007813 116.007812s116.007813-51.9375 116.007813-116.007812-51.9375-116.007812-116.007813-116.007812c-64.039063.070312-115.933594 51.96875-116.007813 116.007812zm116.007813-100.007812c55.234375 0 100.007813 44.773437 100.007813 100.007812s-44.773438 100.007812-100.007813 100.007812-100.007813-44.773437-100.007813-100.007812c.0625-55.207031 44.800782-99.945312 100.007813-100.007812zm0 0"], ["d", "m375.648438 358.230469-62.667969 29.609375c-8.652344-16.09375-25.25-26.335938-43.515625-26.851563l-57.851563-1.589843c-9.160156-.261719-18.148437-2.582032-26.292969-6.789063l-5.886718-3.050781c-30.140625-15.710938-66.066406-15.671875-96.175782.101562l.367188-13.335937c.121094-4.417969-3.359375-8.097657-7.777344-8.21875l-63.4375-1.746094c-4.417968-.121094-8.09375 3.359375-8.214844 7.777344l-3.832031 139.210937c-.121093 4.417969 3.359375 8.097656 7.777344 8.21875l63.4375 1.746094h.21875c4.335937 0 7.882813-3.449219 8-7.78125l.183594-6.660156 16.480469-8.824219c6.46875-3.480469 14.03125-4.308594 21.097656-2.308594l98.414062 27.621094c.171875.050781.34375.089844.519532.128906 7.113281 1.488281 14.363281 2.234375 21.628906 2.230469 15.390625.007812 30.601562-3.308594 44.589844-9.730469.34375-.15625.675781-.339843.992187-.546875l142.691406-92.296875c3.554688-2.300781 4.703125-6.96875 2.621094-10.65625-10.59375-18.796875-34.089844-25.957031-53.367187-16.257812zm-359.070313 107.5625 3.390625-123.21875 47.441406 1.304687-3.390625 123.222656zm258.925781-2.09375c-17.378906 7.84375-36.789062 10.007812-55.46875 6.191406l-98.148437-27.550781c-11.046875-3.121094-22.871094-1.828125-32.976563 3.605468l-8.421875 4.511719 2.253907-81.925781c26.6875-17.75 60.914062-19.574219 89.335937-4.765625l5.886719 3.050781c10.289062 5.3125 21.636718 8.242188 33.210937 8.578125l57.855469 1.589844c16.25.46875 30.050781 12.039063 33.347656 27.960937l-86.175781-2.378906c-4.417969-.121094-8.09375 3.363282-8.21875 7.777344-.121094 4.417969 3.363281 8.097656 7.777344 8.21875l95.101562 2.617188h.222657c4.332031-.003907 7.875-3.453126 7.992187-7.78125.097656-3.476563-.160156-6.957032-.773437-10.378907l64.277343-30.371093c.0625-.027344.125-.058594.1875-.089844 9.117188-4.613282 20.140625-3.070313 27.640625 3.871094zm0 0"], ["d", "m228.203125 84v-76c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v76c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"], ["d", "m288.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"], ["d", "m168.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "enable-background", "new 0 0 512 512"], ["d", "m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"], ["d", "M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283    C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"], ["d", "m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"], [1, "col-lg-3", "col-md-6", "service-block1", "border", "border-0"], ["viewBox", "0 -31 480 479", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m152 352.5h16v16h-16zm0 0"], ["d", "m376 352.5h16v16h-16zm0 0"], ["d", "m0 328.5h40v16h-40zm0 0"], ["d", "m16 296.5h24v16h-24zm0 0"], ["d", "m24 264.5h16v16h-16zm0 0"], ["d", "m477.65625 250.84375-99.257812-99.28125c-4.503907-4.539062-10.640626-7.082031-17.039063-7.0625h-89.359375c-1.648438.035156-3.242188.597656-4.550781 1.601562-13.421875-44.203124-54.390625-74.253906-100.582031-73.777343-46.195313.472656-86.535157 31.359375-99.046876 75.828125-12.507812 44.46875 5.8125 91.859375 44.980469 116.347656h-40.800781c-4.417969 0-8 3.582031-8 8v72c0 13.253906 10.746094 24 24 24h16.640625c1.746094 12.164062 7.453125 23.410156 16.238281 32h-120.878906v16h384c27.8125-.03125 51.386719-20.472656 55.359375-48h16.640625c13.253906 0 24-10.746094 24-24v-88c0-2.121094-.84375-4.15625-2.34375-5.65625zm-13.65625 13.65625h-120v-72h52.6875l67.3125 67.3125zm-384-88c0-48.601562 39.398438-88 88-88s88 39.398438 88 88-39.398438 88-88 88c-48.578125-.058594-87.941406-39.421875-88-88zm184 39.9375v48.0625h-40.800781c18.21875-11.445312 32.46875-28.226562 40.800781-48.0625zm-144 144.0625c0-22.089844 17.910156-40 40-40s40 17.910156 40 40-17.910156 40-40 40c-22.082031-.027344-39.972656-17.917969-40-40zm79.121094 40c8.785156-8.589844 14.492187-19.835938 16.238281-32h113.28125c1.746094 12.164062 7.453125 23.410156 16.238281 32zm184.878906 0c-22.089844 0-40-17.910156-40-40s17.910156-40 40-40 40 17.910156 40 40c-.027344 22.082031-17.917969 39.972656-40 40zm72-48h-16.640625c-3.953125-27.535156-27.542969-47.976562-55.359375-47.976562s-51.40625 20.441406-55.359375 47.976562h-113.28125c-3.953125-27.535156-27.542969-47.976562-55.359375-47.976562s-51.40625 20.441406-55.359375 47.976562h-16.640625c-4.417969 0-8-3.582031-8-8v-64h192c4.417969 0 8-3.582031 8-8v-112h81.359375c2.148437.003906 4.203125.867188 5.703125 2.398438l13.601562 13.601562h-36.664062c-8.835938 0-16 7.164062-16 16v72c0 8.835938 7.164062 16 16 16h120v64c0 4.417969-3.582031 8-8 8zm0 0"], ["d", "m304 296.5h32v16h-32zm0 0"], ["d", "m168 32.5h128v16h-128zm0 0"], ["d", "m136 32.5h16v16h-16zm0 0"], ["d", "m120 .5h144v16h-144zm0 0"], ["d", "m88 .5h16v16h-16zm0 0"], ["d", "m114.347656 218.84375 96.003906-96 11.3125 11.3125-96.003906 96.003906zm0 0"], ["d", "m200 184.5c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24 24-10.746094 24-24-10.746094-24-24-24zm0 32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0"], ["d", "m136 168.5c13.253906 0 24-10.746094 24-24s-10.746094-24-24-24-24 10.746094-24 24 10.746094 24 24 24zm0-32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8-8-3.582031-8-8 3.582031-8 8-8zm0 0"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M404.267,315.41c-10.048-20.949-45.995-50.027-80.725-78.123c-19.371-15.659-37.675-30.464-49.344-42.133\n        c-2.923-2.944-7.296-3.883-11.157-2.496c-7.189,2.603-11.627,4.608-15.125,6.165c-5.333,2.389-7.125,3.2-14.315,3.925\n        c-3.179,0.32-6.037,2.027-7.808,4.672c-15.083,22.549-30.699,20.629-41.131,17.131c-3.328-1.109-3.925-2.539-4.245-3.904\n        c-2.24-9.365,9.003-31.168,23.573-45.739c34.667-34.688,52.544-43.371,90.304-26.496c42.837,19.157,85.76,34.155,86.187,34.304\n        c5.611,1.941,11.648-1.003,13.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589c-0.427-0.149-42.496-14.848-84.48-33.643\n        c-48.917-21.867-75.755-7.467-114.091,30.891c-14.592,14.592-34.411,44.117-29.291,65.771c2.197,9.216,8.683,16.043,18.325,19.221\n        c24.171,7.979,46.229,0.341,62.656-21.461c6.784-1.045,10.475-2.581,16.021-5.077c2.005-0.896,4.352-1.941,7.467-3.2\n        c12.203,11.456,28.672,24.789,46.016,38.805c31.36,25.365,66.923,54.123,74.923,70.763c3.947,8.213-0.299,13.568-3.179,16.021\n        c-4.224,3.627-10.005,4.779-13.141,2.581c-3.456-2.368-7.957-2.517-11.52-0.384c-3.584,2.133-5.589,6.165-5.141,10.304\n        c0.725,6.784-5.483,10.667-8.171,12.011c-6.827,3.456-13.952,2.859-16.619,0.384c-2.987-2.773-7.275-3.584-11.072-2.176\n        c-3.797,1.429-6.443,4.928-6.827,8.981c-0.64,6.997-5.824,13.717-12.587,16.341c-3.264,1.237-8,1.984-12.245-1.899\n        c-2.645-2.389-6.315-3.307-9.749-2.475c-3.477,0.853-6.272,3.371-7.488,6.72c-0.405,1.067-1.323,3.627-11.307,3.627\n        c-7.104,0-19.883-4.8-26.133-8.939c-7.488-4.928-54.443-39.957-94.997-73.92c-5.696-4.8-15.552-15.083-24.256-24.171\n        c-7.723-8.064-14.784-15.381-18.411-18.453c-4.544-3.84-11.264-3.264-15.04,1.259c-3.797,4.501-3.243,11.243,1.259,15.04\n        c3.307,2.795,9.707,9.557,16.768,16.917c9.515,9.941,19.349,20.224,25.963,25.771c39.723,33.259,87.467,69.163,96.981,75.413\n        c7.851,5.163,24.768,12.416,37.867,12.416c10.517,0,18.603-2.411,24.213-7.125c7.509,2.923,16.043,2.944,24.256-0.256\n        c9.707-3.755,17.685-11.328,22.208-20.501c8.405,1.792,18.027,0.533,26.773-3.861c8.555-4.309,14.741-10.901,17.813-18.603\n        c8.491,0.448,17.237-2.56,24.469-8.768C407.979,346.407,411.349,330.109,404.267,315.41z"], ["d", "M213.333,138.663h-96c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h96\n        c5.888,0,10.667-4.779,10.667-10.667S219.221,138.663,213.333,138.663z"], ["d", "M435.52,292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189,20.949c-4.885,3.285-6.187,9.92-2.901,14.805\n        c2.069,3.051,5.44,4.715,8.875,4.715c2.027,0,4.096-0.576,5.931-1.813l31.189-20.949\n        C437.504,304.231,438.805,297.597,435.52,292.711z"], ["d", "M369.301,343.613c-7.637-6.016-41.792-40.981-62.912-62.997c-4.075-4.267-10.837-4.416-15.083-0.32\n        c-4.267,4.075-4.395,10.837-0.32,15.083c5.483,5.717,53.845,56.128,65.088,65.003c1.941,1.536,4.288,2.283,6.592,2.283\n        c3.136,0,6.272-1.408,8.405-4.075C374.72,353.981,373.931,347.261,369.301,343.613z"], ["d", "M326.677,365.01c-12.779-10.219-44.885-44.331-52.139-52.224c-4.011-4.352-10.731-4.608-15.083-0.64\n        c-4.331,3.989-4.629,10.752-0.64,15.083c0.384,0.405,38.699,41.771,54.528,54.443c1.963,1.557,4.331,2.325,6.656,2.325\n        c3.115,0,6.229-1.387,8.341-3.989C332.011,375.399,331.264,368.679,326.677,365.01z"], ["d", "M284.224,386.493c-15.211-12.821-46.336-45.952-52.416-52.459c-4.032-4.309-10.795-4.544-15.083-0.512\n        c-4.309,4.032-4.523,10.773-0.512,15.083c8.747,9.365,38.528,40.939,54.251,54.208c2.005,1.685,4.437,2.517,6.869,2.517\n        c3.029,0,6.059-1.301,8.171-3.797C289.301,397.01,288.725,390.29,284.224,386.493z"], ["d", "M124.672,120.253C106.389,102.93,33.28,97.319,11.307,96.018c-3.029-0.149-5.824,0.853-7.957,2.88\n        C1.216,100.903,0,103.719,0,106.663v192c0,5.888,4.779,10.667,10.667,10.667h64c4.608,0,8.704-2.965,10.133-7.36\n        c1.557-4.779,38.315-117.589,43.157-173.056C128.235,125.671,127.04,122.471,124.672,120.253z M66.88,287.997H21.333V118.098\n        c34.283,2.709,71.275,8.597,84.715,15.125C100.395,179.943,74.816,262.951,66.88,287.997z"], ["d", "M501.333,117.33c-83.755,0-130.219,21.44-132.16,22.336c-2.773,1.301-4.843,3.712-5.696,6.635s-0.427,6.059,1.173,8.661\n        c13.184,21.227,54.464,139.115,62.4,167.872c1.28,4.629,5.483,7.829,10.283,7.829h64c5.888,0,10.667-4.779,10.667-10.667v-192\n        C512,122.087,507.221,117.33,501.333,117.33z M490.667,309.33h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325\n        c16.277-5.525,51.243-15.019,101.995-16.213V309.33z"], [1, "section-b-space", "become-vendor"], [1, "step-bg"], [1, "col-lg-4"], [1, "step-box"], [1, "steps"], [1, "start-selling", "section-b-space"], [1, "col"], ["type", "text", "placeholder", "Email ID", 1, "form-control"], ["type", "tel", "pattern", "[0-9]{3}-[0-9]{2}-[0-9]{3}", "placeholder", "Phone Number", 1, "form-control"], ["href", "#", 1, "btn", "btn-solid", "btn-sm"]],
  template: function BecomeVendorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "become a vendor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "nav", 5)(9, "ol", 6)(10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "become a vendor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 10)(16, "div", 1)(17, "div", 2)(18, "div", 11)(19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start your business with Multikart & reach customers across the World...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1)(29, "section", 15)(30, "div", 16)(31, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 19)(34, "path", 20)(35, "path", 21)(36, "path", 22)(37, "path", 23)(38, "path", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "lowest cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "svg", 25)(45, "g")(46, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 26)(48, "path", 27)(49, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "high growth rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "svg", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "path", 31)(57, "path", 32)(58, "path", 33)(59, "path", 34)(60, "path", 35)(61, "path", 36)(62, "path", 37)(63, "path", 38)(64, "path", 39)(65, "path", 40)(66, "path", 41)(67, "path", 42)(68, "path", 43)(69, "path", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "dedicated pickup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "svg", 45)(76, "g")(77, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "path", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "g")(80, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "g")(83, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "path", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "g")(86, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "g")(89, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "path", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "g")(92, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "path", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "g")(95, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "path", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "g")(98, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "path", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "most approachable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "section", 54)(105, "div", 1)(106, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "doing business on multikart is really easy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55)(109, "div", 2)(110, "div", 56)(111, "div", 57)(112, "div")(113, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "List your products & Get support service provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Register your business for free and create a product catalogue. Sell under your own private label or sell an existing brand. Get your documentation & cataloging done with ease from our Professional Services network.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 56)(120, "div", 57)(121, "div")(122, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Receive orders & Schedule a pickup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Once listed, your products will be available to millions of users.Get orders and manage your online business via our Seller Panel and Seller Zone Mobile App.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 56)(129, "div", 57)(130, "div")(131, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Receive quick payment & grow your business");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Receive quick and hassle-free payments in your account once your orders are fulfilled. Expand your business with low interest & collateral-free loans.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "section", 59)(138, "div", 1)(139, "div", 60)(140, "div")(141, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "start selling");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Multikart marketplace is India\u2019s leading platform for selling online. Be it a manufacturer, vendor or supplier, simply sell your products online on Multikart and become a top ecommerce player with minimum investment. Through a team of experts offering exclusive seller workshops, training, seller support and convenient seller portal, Multikart focuses on educating and empowering sellers across India. Selling on Multikart.com is easy and absolutely free. All you need is to register, list your catalogue and start selling your products.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "form")(146, "div", 2)(147, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "start selling");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 98411:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vendor/vendor-dashboard/vendor-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorDashboardComponent": () => (/* binding */ VendorDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70938);


class VendorDashboardComponent {}
VendorDashboardComponent.ɵfac = function VendorDashboardComponent_Factory(t) {
  return new (t || VendorDashboardComponent)();
};
VendorDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VendorDashboardComponent,
  selectors: [["app-vendor-dashboard"]],
  decls: 623,
  vars: 0,
  consts: [[1, "breadcrumb-section"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "page-title"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "dashboard-section", "section-b-space"], [1, "col-lg-3"], [1, "dashboard-sidebar"], [1, "profile-top"], [1, "profile-image"], ["src", "../assets/images/logos/17.png", "alt", "", 1, "img-fluid"], [1, "profile-detail"], [1, "faq-tab"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#dashboard", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#products", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#orders", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#profile", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#settings", 1, "nav-link"], ["data-toggle", "modal", "data-bs-target", "#logout", "href", "", 1, "nav-link"], [1, "col-lg-9"], ["id", "top-tabContent", 1, "faq-content", "tab-content"], ["id", "dashboard", 1, "tab-pane", "fade", "show", "active"], [1, "counter-section"], [1, "col-md-4"], [1, "counter-box"], ["src", "../assets/images/order-icon.png", 1, "img-fluid"], ["src", "../assets/images/sale-icon.png", 1, "img-fluid"], ["src", "../assets/images/homework-icon.png", 1, "img-fluid"], [1, "col-lg-6"], [1, "card", "dashboard-table"], [1, "card-body"], [1, "table", "mb-0"], ["scope", "col"], ["scope", "row"], ["src", "../assets/images/1.jpg", 1, "blur-up", "lazyloaded"], ["src", "../assets/images/2.jpg", 1, "blur-up", "lazyloaded"], ["src", "../assets/images/3.jpg", 1, "blur-up", "lazyloaded"], [1, "badge", "rounded-pill", "bg-success-10", "text-success", "custom-badge"], [1, "badge", "rounded-pill", "bg-danger-10", "text-danger", "custom-badge"], [1, "badge", "rounded-pill", "bg-secondary-10", "text-secondary", "custom-badge"], ["id", "products", 1, "tab-pane", "fade"], [1, "page-header-left"], [1, "container-fluid"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "form-inline", "search-form", "search-box"], [1, "form-group"], ["type", "search", "placeholder", "Search..", 1, "form-control-plaintext"], ["href", "#", 1, "btn", "btn-sm", "btn-solid", "productadd"], [1, "table-responsive", "table-desi"], ["id", "editableTable", 1, "table", "list-digital", "all-package", "table-category"], ["src", "assets/images/pro3/1.jpg", "data-field", "image", "alt", ""], ["data-field", "name"], ["data-field", "price"], ["href", "javascript:void(0)"], ["title", "Edit", 1, "fa", "fa-edit"], ["title", "Delete", 1, "fa", "fa-trash"], ["src", "assets/images/pro3/1.jpg", "alt", ""], ["id", "orders", 1, "tab-pane", "fade"], [1, "col-12"], [1, "card", "dashboard-table", "mt-0"], [1, "top-sec"], ["href", "#", 1, "btn", "btn-sm", "btn-solid"], [1, "table-responsive-sm"], [1, "table", "mb-0", "order-table-vendor"], ["id", "profile", 1, "tab-pane", "fade"], [1, "card", "mt-0"], [1, "dashboard-box"], [1, "dashboard-title"], ["data-toggle", "modal", "data-bs-target", "#edit-profile"], [1, "dashboard-detail"], [1, "details"], [1, "left"], [1, "right"], ["id", "settings", 1, "tab-pane", "fade"], [1, "account-setting"], [1, "col"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "option2", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios4", "value", "option4", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios4", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios4", "value", "option4", "checked", "", 1, "radio_animated", "form-check-input"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios5", "value", "option5", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios5", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios6", "value", "option6", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios6", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-solid", "btn-xs"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios7", "value", "option7", "checked", "", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios7", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios8", "value", "option8", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios8", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios9", "value", "option9", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios9", 1, "form-check-label"]],
  template: function VendorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "vendor dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "nav", 5)(9, "ol", 6)(10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "vendor dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10)(16, "div", 1)(17, "div", 2)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16)(24, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fashion Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "750 followers | 10 review");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "mark.enderess@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17)(31, "ul", 18)(32, "li", 19)(33, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 19)(36, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 19)(39, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 19)(42, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 19)(45, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 19)(48, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26)(51, "div", 27)(52, "div", 28)(53, "div", 29)(54, "div", 2)(55, "div", 30)(56, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div")(59, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "total products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30)(64, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div")(67, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "12500");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "total sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30)(72, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div")(75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "order pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 2)(80, "div", 35)(81, "div", 36)(82, "div", 37)(83, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "table", 38)(86, "thead")(87, "tr")(88, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "image");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "product name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tbody")(97, "tr")(98, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "neck velvet dress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "$205");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "1000");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr")(107, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "belted trench coat");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "$350");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "800");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr")(116, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "man print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "750");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 35)(125, "div", 36)(126, "div", 37)(127, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "recent orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "table", 38)(130, "thead")(131, "tr")(132, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "order id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "product details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tbody")(139, "tr")(140, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "#21515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "neck velvet dress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td")(145, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr")(148, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "#78153");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "belted trench coat");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td")(153, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr")(156, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "#51512");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "man print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td")(161, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "cancelled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr")(164, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "#78153");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "belted trench coat");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td")(169, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr")(172, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "#51512");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "man print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td")(177, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 47)(180, "div", 35)(181, "div", 48)(182, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Products List ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 49)(185, "div", 2)(186, "div", 50)(187, "div", 51)(188, "div", 52)(189, "form", 53)(190, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Add New Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 37)(195, "div", 57)(196, "table", 58)(197, "thead")(198, "tr")(199, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Product Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Product Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Entry Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Quantity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tbody")(212, "tr")(213, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "31");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td")(224, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr")(229, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "172");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "3D Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td")(240, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "tr")(245, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "210");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Graphics Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "154");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td")(256, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr")(261, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "65");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Logo Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td")(272, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "tr")(277, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "424");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "PHP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td")(288, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr")(293, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "210");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "HTML");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "27");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td")(304, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "tr")(309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "4112");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "242");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td")(320, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tr")(325, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "4570");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Wordpress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td")(336, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "tr")(341, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "4710");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "3d Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Destroy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "72");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td")(352, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 66)(357, "div", 2)(358, "div", 67)(359, "div", 68)(360, "div", 37)(361, "div", 69)(362, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "add product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 71)(367, "table", 72)(368, "thead")(369, "tr")(370, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "order id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "product details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "tbody")(379, "tr")(380, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "#125021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "neck velvet dress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td")(385, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "$205");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "tr")(390, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "#521214");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "belted trench coat");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td")(395, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "$350");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "tr")(400, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "#521021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "men print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td")(405, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "tr")(410, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "#245021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "woman print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td")(415, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr")(420, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "#122141");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "men print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td")(425, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr")(430, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "#125015");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "men print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td")(435, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "tr")(440, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "#245021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "woman print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td")(445, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "tr")(450, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "#122141");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "men print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td")(455, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "cancelled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr")(460, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "#125015");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "men print tee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td")(465, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "$150");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 73)(470, "div", 2)(471, "div", 67)(472, "div", 74)(473, "div", 37)(474, "div", 75)(475, "div", 76)(476, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 78)(481, "ul")(482, "li")(483, "div", 79)(484, "div", 80)(485, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "company name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 81)(488, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Fashion Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li")(491, "div", 79)(492, "div", 80)(493, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 81)(496, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "mark.enderess@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "li")(499, "div", 79)(500, "div", 80)(501, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Country / Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 81)(504, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li")(507, "div", 79)(508, "div", 80)(509, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Year Established");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 81)(512, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "li")(515, "div", 79)(516, "div", 80)(517, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Total Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 81)(520, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "101 - 200 People");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "li")(523, "div", 79)(524, "div", 80)(525, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "div", 81)(528, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "clothing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "li")(531, "div", 79)(532, "div", 80)(533, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "street address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 81)(536, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "549 Sulphur Springs Road");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "li")(539, "div", 79)(540, "div", 80)(541, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "city/state");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 81)(544, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "li")(547, "div", 79)(548, "div", 80)(549, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "zip");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 81)(552, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "60515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "div", 82)(555, "div", 2)(556, "div", 67)(557, "div", 74)(558, "div", 37)(559, "div", 75)(560, "div", 76)(561, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 78)(564, "div", 83)(565, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 2)(568, "div", 84)(569, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "label", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " Allow Desktop Notifications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](574, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " Enable Notifications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "label", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, " Get notification for my own activity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](582, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, " DND ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "div", 83)(586, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "deactivate account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 2)(589, "div", 84)(590, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "input", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, " I have a privacy concern ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "label", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, " This is temporary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](599, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "label", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, " other ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Deactivate Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "div", 83)(605, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Delete account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "div", 2)(608, "div", 84)(609, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "label", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, " No longer usable ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](614, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "label", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " Want to switch on other account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "label", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, " other ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "Delete Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: [".productadd[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4veFNob3AlMjAxNS94U2hvcCUyMDE1L3NyYy9hcHAvbW9kdWxlcy92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC92ZW5kb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RhZGR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwiLnByb2R1Y3RhZGQge1xuICBmbG9hdDogcmlnaHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61445:
/*!***************************************************************************!*\
  !*** ./src/app/modules/vendor/vendor-profile/vendor-profile.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorProfileComponent": () => (/* binding */ VendorProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70938);


class VendorProfileComponent {}
VendorProfileComponent.ɵfac = function VendorProfileComponent_Factory(t) {
  return new (t || VendorProfileComponent)();
};
VendorProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VendorProfileComponent,
  selectors: [["app-vendor-profile"]],
  decls: 472,
  vars: 0,
  consts: [[1, "vendor-cover"], ["src", "../assets/images/vendorprofile.jpg", "alt", "", 1, "bg-img", "lazyload", "blur-up"], [1, "vendor-profile", "pt-0"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "profile-left"], [1, "profile-image"], ["src", "../assets/images/logos/17.png", "alt", "", 1, "img-fluid"], [1, "rating"], [1, "fa", "fa-star"], [1, "profile-detail"], [1, "vendor-contact"], [1, "footer-social"], ["href", "#"], [1, "fa", "fa-facebook-f"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], ["href", "#", 1, "btn", "btn-solid", "btn-sm"], [1, "section-b-space"], [1, "col-sm-3", "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-collapse-block", "open"], [1, "collapse-block-title"], [1, "collection-collapse-block-content"], [1, "collection-brand-filter"], [1, "form-check", "collection-filter-checkbox"], ["type", "checkbox", "id", "zara", 1, "form-check-input"], ["for", "zara", 1, "form-check-label"], ["type", "checkbox", "id", "vera-moda", 1, "form-check-input"], ["for", "vera-moda", 1, "form-check-label"], ["type", "checkbox", "id", "forever-21", 1, "form-check-input"], ["for", "forever-21", 1, "form-check-label"], ["type", "checkbox", "id", "roadster", 1, "form-check-input"], ["for", "roadster", 1, "form-check-label"], ["type", "checkbox", "id", "only", 1, "form-check-input"], ["for", "only", 1, "form-check-label"], [1, "color-selector"], [1, "color-1", "active"], [1, "color-2"], [1, "color-3"], [1, "color-4"], [1, "color-5"], [1, "color-6"], [1, "color-7"], [1, "collection-collapse-block", "border-0", "open"], ["type", "checkbox", "id", "hundred", 1, "form-check-input"], ["for", "hundred", 1, "form-check-label"], ["type", "checkbox", "id", "twohundred", 1, "form-check-input"], ["for", "twohundred", 1, "form-check-label"], ["type", "checkbox", "id", "threehundred", 1, "form-check-input"], ["for", "threehundred", 1, "form-check-label"], ["type", "checkbox", "id", "fourhundred", 1, "form-check-input"], ["for", "fourhundred", 1, "form-check-label"], ["type", "checkbox", "id", "fourhundredabove", 1, "form-check-input"], ["for", "fourhundredabove", 1, "form-check-label"], [1, "collection-sidebar-banner"], ["src", "../assets/images/side-banner.png", "alt", "", 1, "img-fluid", "blur-up", "lazyload"], [1, "col"], [1, "collection-wrapper"], [1, "collection-content", "ratio_asos"], [1, "page-main-content"], [1, "col-xl-12"], [1, "filter-main-btn"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], [1, "collection-product-wrapper"], [1, "product-top-filter"], [1, "col-12"], [1, "product-filter-content"], [1, "search-count"], [1, "collection-view"], [1, "fa", "fa-th", "grid-layout-view"], [1, "fa", "fa-list-ul", "list-layout-view"], [1, "collection-grid-view"], ["src", "../assets/images/icon/2.png", "alt", "", 1, "product-2-layout-view"], ["src", "../assets/images/icon/3.png", "alt", "", 1, "product-3-layout-view"], ["src", "../assets/images/icon/4.png", "alt", "", 1, "product-4-layout-view"], ["src", "../assets/images/icon/6.png", "alt", "", 1, "product-6-layout-view"], [1, "product-page-per-view"], ["value", "High to low"], ["value", "Low to High"], [1, "product-page-filter"], [1, "product-wrapper-grid"], [1, "col-xl-3", "col-6", "col-grid-box"], [1, "product-box"], [1, "img-wrapper"], [1, "front"], ["src", "../assets/images/fashion/product/1.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], [1, "cart-info", "cart-wrap"], ["data-bs-toggle", "modal", "data-bs-target", "#addtocart", "title", "Add to cart"], [1, "ti-shopping-cart"], ["href", "javascript:void(0)", "title", "Add to Wishlist"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#quick-view", "title", "Quick View"], ["aria-hidden", "true", 1, "ti-search"], ["href", "compare.html", "title", "Compare"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-detail"], ["href", "product-page(no-sidebar).html"], [1, "color-variant"], [1, "bg-light0"], [1, "bg-light1"], [1, "bg-light2"], ["src", "../assets/images/pro/1.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/fashion/pro/04.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/fashion/product/4.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/fashion/product/25.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/beauty/pro/3.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/fashion/product/44.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], ["src", "../assets/images/beauty/pro/1.jpg", "alt", "", 1, "img-fluid", "blur-up", "lazyload", "bg-img"], [1, "product-pagination", "mb-0"], [1, "theme-paggination-block"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [1, "pagination"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "sr-only"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right"], [1, "product-search-count-bottom"]],
  template: function VendorProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fashion Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10)(15, "i", 10)(16, "i", 10)(17, "i", 10)(18, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "750 followers | 10 review");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div")(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Based in United States, Fashion store has been an Multikart member since May 15, 2017. Fashion Store are engaged in all kinds of western clothing. In garment field we have maintained 3 years exporting experience. company insist in the principle of \"Customer first, Quality uppermost\".Based in United States, Fashion store has been an ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Based in United States, Fashion store has been an Multikart member since May 15, 2017. Fashion Store are engaged in all kinds of western clothing. In garment field we have maintained 3 years exporting experience. company insist in the principle of \"Customer first, Quality uppermost\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12)(28, "div")(29, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "follow us:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "ul")(33, "li")(34, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li")(37, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "if you have any query:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "contact seller");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 20)(50, "div", 3)(51, "div", 4)(52, "div", 21)(53, "div", 22)(54, "div", 23)(55, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26)(59, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "vendor category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28)(62, "div", 29)(63, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "bags");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "shoes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "beauty products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26)(84, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "colors");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28)(87, "div", 41)(88, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "li", 42)(90, "li", 43)(91, "li", 44)(92, "li", 45)(93, "li", 46)(94, "li", 47)(95, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49)(97, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28)(100, "div", 29)(101, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "$10 - $100");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "$100 - $200");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "$200 - $300");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "$300 - $400");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "$400 above");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 60)(122, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 62)(125, "div", 63)(126, "div", 64)(127, "div", 65)(128, "div", 4)(129, "div", 66)(130, "div", 67)(131, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 70)(135, "div", 71)(136, "div", 4)(137, "div", 72)(138, "div", 73)(139, "div", 74)(140, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Showing Products 1-24 of 10 Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 75)(143, "ul")(144, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 78)(149, "ul")(150, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 83)(159, "select")(160, "option", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "24 Products Par Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "50 Products Par Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "100 Products Par Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 86)(167, "select")(168, "option", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Sorting items");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "50 Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "100 Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 87)(175, "div", 4)(176, "div", 88)(177, "div", 89)(178, "div", 90)(179, "div", 91)(180, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 93)(183, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 102)(192, "div")(193, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 10)(195, "i", 10)(196, "i", 10)(197, "i", 10)(198, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 103)(200, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "li", 105)(208, "li", 106)(209, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 88)(211, "div", 89)(212, "div", 90)(213, "div", 91)(214, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 93)(217, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 102)(226, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 10)(228, "i", 10)(229, "i", 10)(230, "i", 10)(231, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 103)(233, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "li", 105)(241, "li", 106)(242, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 88)(244, "div", 89)(245, "div", 90)(246, "div", 91)(247, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 93)(250, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 102)(259, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 10)(261, "i", 10)(262, "i", 10)(263, "i", 10)(264, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 103)(266, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "li", 105)(274, "li", 106)(275, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 88)(277, "div", 89)(278, "div", 90)(279, "div", 91)(280, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 93)(283, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 102)(292, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 10)(294, "i", 10)(295, "i", 10)(296, "i", 10)(297, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 103)(299, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "li", 105)(307, "li", 106)(308, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 88)(310, "div", 89)(311, "div", 90)(312, "div", 91)(313, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 93)(316, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 102)(325, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 10)(327, "i", 10)(328, "i", 10)(329, "i", 10)(330, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 103)(332, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "li", 105)(340, "li", 106)(341, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 88)(343, "div", 89)(344, "div", 90)(345, "div", 91)(346, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "img", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 93)(349, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 102)(358, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 10)(360, "i", 10)(361, "i", 10)(362, "i", 10)(363, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 103)(365, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "li", 105)(373, "li", 106)(374, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 88)(376, "div", 89)(377, "div", 90)(378, "div", 91)(379, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "img", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 93)(382, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 102)(391, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "i", 10)(393, "i", 10)(394, "i", 10)(395, "i", 10)(396, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "a", 103)(398, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "li", 105)(406, "li", 106)(407, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 88)(409, "div", 89)(410, "div", 90)(411, "div", 91)(412, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "img", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 93)(415, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "i", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "i", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 102)(424, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "i", 10)(426, "i", 10)(427, "i", 10)(428, "i", 10)(429, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "a", 103)(431, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Slim Fit Cotton Shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "$500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "ul", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "li", 105)(439, "li", 106)(440, "li", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 115)(442, "div", 116)(443, "div", 4)(444, "div", 117)(445, "nav", 118)(446, "ul", 119)(447, "li", 120)(448, "a", 121)(449, "span", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "i", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "span", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "li", 125)(454, "a", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "li", 120)(457, "a", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "li", 120)(460, "a", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li", 120)(463, "a", 127)(464, "span", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "i", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "span", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 117)(469, "div", 129)(470, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Showing Products 1-24 of 10 Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 72892:
/*!*********************************************************!*\
  !*** ./src/app/modules/vendor/vendor-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorRoutingModule": () => (/* binding */ VendorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _become_vendor_become_vendor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./become-vendor/become-vendor.component */ 88554);
/* harmony import */ var _vendor_dashboard_vendor_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-dashboard/vendor-dashboard.component */ 98411);
/* harmony import */ var _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor-profile/vendor-profile.component */ 61445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: 'become/vendor',
  component: _become_vendor_become_vendor_component__WEBPACK_IMPORTED_MODULE_0__.BecomeVendorComponent
}, {
  path: 'dashboard',
  component: _vendor_dashboard_vendor_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.VendorDashboardComponent
}, {
  path: 'profile',
  component: _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_2__.VendorProfileComponent
}];
class VendorRoutingModule {}
VendorRoutingModule.ɵfac = function VendorRoutingModule_Factory(t) {
  return new (t || VendorRoutingModule)();
};
VendorRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: VendorRoutingModule
});
VendorRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VendorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 60852:
/*!*************************************************!*\
  !*** ./src/app/modules/vendor/vendor.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorModule": () => (/* binding */ VendorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-routing.module */ 72892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);



class VendorModule {}
VendorModule.ɵfac = function VendorModule_Factory(t) {
  return new (t || VendorModule)();
};
VendorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VendorModule
});
VendorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VendorModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorRoutingModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=852.js.map