"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 23449:
/*!***************************************************************!*\
  !*** ./src/app/modules/user/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class DashboardComponent {
  constructor() {
    this.openDashboard = false;
  }
  ngOnInit() {}
  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 716,
  vars: 0,
  consts: [[1, "breadcrumb-section"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "page-title"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "dashboard-section", "section-b-space", "user-dashboard-section"], [1, "col-lg-3"], [1, "dashboard-sidebar"], [1, "profile-top"], [1, "profile-image"], ["src", "../assets/images/avtar.jpg", "alt", "", 1, "img-fluid"], [1, "profile-detail"], [1, "faq-tab"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-bs-toggle", "tab", "data-bs-target", "#info", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "data-bs-target", "#address", 1, "nav-link"], ["data-bs-toggle", "tab", "data-bs-target", "#orders", 1, "nav-link"], ["data-bs-toggle", "tab", "data-bs-target", "#wishlist", 1, "nav-link"], ["data-bs-toggle", "tab", "data-bs-target", "#payment", 1, "nav-link"], ["data-bs-toggle", "tab", "data-bs-target", "#profile", 1, "nav-link"], ["data-bs-toggle", "tab", "data-bs-target", "#security", 1, "nav-link"], ["href", "", 1, "nav-link"], [1, "col-lg-9"], ["id", "top-tabContent", 1, "faq-content", "tab-content"], ["id", "info", 1, "tab-pane", "fade", "show", "active"], [1, "counter-section"], [1, "welcome-msg"], [1, "col-md-4"], [1, "counter-box"], ["src", "../assets/images/icon/sale-icon.png", 1, "img-fluid"], ["src", "../assets/images/icon/homework-icon.png", 1, "img-fluid"], ["src", "../assets/images/icon/order-icon.png", 1, "img-fluid"], [1, "box-account", "box-info"], [1, "box-head"], [1, "box"], [1, "box-title"], ["href", "#"], [1, "box-content"], [1, "box", "mt-3"], ["id", "address", 1, "tab-pane", "fade"], [1, "col-12"], [1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], ["href", "#", 1, "btn", "btn-sm", "btn-solid"], [1, "address-book-section"], [1, "row", "g-4"], [1, "select-box", "active", "col-xl-4", "col-md-6"], [1, "address-box"], [1, "top"], [1, "middle"], [1, "address"], [1, "number"], [1, "bottom"], ["href", "javascript:void(0)", "data-bs-target", "#edit-address", "data-bs-toggle", "modal", 1, "bottom_btn"], ["href", "#", 1, "bottom_btn"], [1, "select-box", "col-xl-4", "col-md-6"], ["id", "orders", 1, "tab-pane", "fade"], [1, "card", "dashboard-table", "mt-0"], [1, "card-body", "table-responsive-sm"], [1, "table-responsive-xl"], [1, "table", "cart-table", "order-table"], [1, "table-head"], ["scope", "col"], ["href", "javascript:void(0)"], ["src", "../assets/images/pro3/sm.jpg", "alt", "", 1, "blur-up", "lazyloaded"], [1, "mt-0"], [1, "fs-6"], [1, "badge", "rounded-pill", "bg-success", "custom-badge"], [1, "theme-color", "fs-6"], [1, "fa", "fa-eye", "text-theme"], [1, "badge", "rounded-pill", "bg-danger", "custom-badge"], [1, "badge", "rounded-pill", "bg-secondary", "custom-badge"], ["id", "wishlist", 1, "tab-pane", "fade"], [1, "table", "cart-table", "wishlist-table"], ["src", "../assets/images/pro3/2.jpg", "alt", "", 1, "blur-up", "lazyloaded"], ["href", "javascript:void(0)", 1, "btn", "btn-xs", "btn-solid"], ["id", "payment", 1, "tab-pane", "fade"], [1, "bank-logo"], ["src", "../assets/images/bank-logo.png", 1, "bank-logo"], ["src", "../assets/images/visa.png", 1, "network-logo"], [1, "card-number"], [1, "name-validity"], [1, "left"], [1, "right"], ["src", "../assets/images/bank-logo1.png", 1, "bank-logo"], ["id", "profile", 1, "tab-pane", "fade"], [1, "dashboard-box"], [1, "dashboard-title"], ["href", "#", 1, "edit-link"], [1, "dashboard-detail"], [1, "details"], [1, "dashboard-title", "mt-lg-5", "mt-3"], ["id", "security", 1, "tab-pane", "fade"], [1, "account-setting"], [1, "col"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "option2", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios4", "value", "option4", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios4", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios4", "value", "option4", "checked", "", 1, "radio_animated", "form-check-input"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios5", "value", "option5", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios5", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios6", "value", "option6", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios6", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-solid", "btn-xs"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios7", "value", "option7", "checked", "", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios7", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios8", "value", "option8", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios8", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios3", "id", "exampleRadios9", "value", "option9", 1, "radio_animated", "form-check-input"], ["for", "exampleRadios9", 1, "form-check-label"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "user dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "nav", 5)(9, "ol", 6)(10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10)(16, "div", 1)(17, "div", 2)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16)(24, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mark Jecno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "mark.jecno@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "ul", 18)(30, "li", 19)(31, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 19)(34, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19)(37, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "My Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 19)(40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "My Wishlist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 19)(43, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Saved Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 19)(46, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 19)(49, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 19)(52, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Log Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "div", 31)(58, "div", 32)(59, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Hello, MARK JECNO !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2)(64, "div", 33)(65, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div")(68, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Total Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33)(73, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div")(76, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Pending Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33)(81, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div")(84, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Wishlist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38)(89, "div", 39)(90, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Account Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2)(93, "div", 3)(94, "div", 40)(95, "div", 41)(96, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Contact Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 43)(101, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Mark Jecno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "mark-jecno@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h6")(106, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3)(109, "div", 40)(110, "div", 41)(111, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Newsletters");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 43)(116, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "You are currently not subscribed to any newsletter.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44)(119, "div", 41)(120, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Address Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Manage Addresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2)(125, "div", 3)(126, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Default Billing Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "You have not set a default billing address.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Edit Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3)(134, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Default Shipping Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "You have not set a default shipping address.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Edit Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 45)(142, "div", 2)(143, "div", 46)(144, "div", 47)(145, "div", 48)(146, "div", 49)(147, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Address Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "+ add new");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 51)(152, "div", 52)(153, "div", 53)(154, "div", 54)(155, "div", 55)(156, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "mark jecno ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 56)(161, "div", 57)(162, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "549 Sulphur Springs Road");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "60515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 58)(169, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "mobile: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "+91 123 - 456 - 7890");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 59)(174, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 62)(179, "div", 54)(180, "div", 55)(181, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "mark jecno ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "office");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 56)(186, "div", 57)(187, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "549 Sulphur Springs Road");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "60515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 58)(194, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "mobile: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "+91 123 - 456 - 7890");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 59)(199, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 63)(204, "div", 2)(205, "div", 46)(206, "div", 64)(207, "div", 65)(208, "div", 49)(209, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "My Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 66)(212, "table", 67)(213, "thead")(214, "tr", 68)(215, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "image");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Order Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Product Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tbody")(228, "tr")(229, "td")(230, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td")(233, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "#125021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td")(236, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Purple polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td")(239, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td")(242, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td")(245, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr")(248, "td")(249, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td")(252, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "#125367");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td")(255, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Sleevless white top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td")(258, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td")(261, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td")(264, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tr")(267, "td")(268, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td")(271, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "#125948");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td")(274, "p", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "multi color polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td")(277, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td")(280, "p", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td")(283, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr")(286, "td")(287, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td")(290, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "#127569");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td")(293, "p", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Candy red solid tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td")(296, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Shipped");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td")(299, "p", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td")(302, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tr")(305, "td")(306, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td")(309, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "#125753");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td")(312, "p", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "multicolored polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td")(315, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Canceled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td")(318, "p", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td")(321, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "tr")(324, "td")(325, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td")(328, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "#125021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td")(331, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Men's Sweatshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td")(334, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Canceled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td")(337, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td")(340, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 79)(343, "div", 2)(344, "div", 46)(345, "div", 64)(346, "div", 65)(347, "div", 49)(348, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "My Wishlist");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 66)(351, "table", 80)(352, "thead")(353, "tr", 68)(354, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "image");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Order Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Product Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "th", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tbody")(365, "tr")(366, "td")(367, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td")(370, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "#125021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td")(373, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Purple polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td")(376, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td")(379, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "tr")(382, "td")(383, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td")(386, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "#125367");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td")(389, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Sleevless white top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td")(392, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td")(395, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "tr")(398, "td")(399, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td")(402, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "#125948");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td")(405, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "multi color polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td")(408, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td")(411, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "tr")(414, "td")(415, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td")(418, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "#127569");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td")(421, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Candy red solid tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td")(424, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td")(427, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr")(430, "td")(431, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td")(434, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "#125753");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td")(437, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "multicolored polo tshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td")(440, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td")(443, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "tr")(446, "td")(447, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td")(450, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "#125021");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td")(453, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Men's Sweatshirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td")(456, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "$49.54");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "td")(459, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, " Move to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 83)(462, "div", 2)(463, "div", 46)(464, "div", 47)(465, "div", 48)(466, "div", 49)(467, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Saved Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "+ add new");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 51)(472, "div", 52)(473, "div", 53)(474, "div", 54)(475, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "img", 85)(477, "img", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 87)(479, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Card Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "6262 6126 2112 1515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div", 88)(484, "div", 89)(485, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "name on card");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Mark Jecno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 90)(490, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "validity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "XX/XX");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 59)(495, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 62)(500, "div", 54)(501, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "img", 91)(503, "img", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 87)(505, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Card Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "6262 6126 2112 1515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 88)(510, "div", 89)(511, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "name on card");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Mark Jecno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 90)(516, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "validity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "XX/XX");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 59)(521, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 92)(526, "div", 2)(527, "div", 46)(528, "div", 47)(529, "div", 48)(530, "div", 93)(531, "div", 94)(532, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "div", 96)(537, "ul")(538, "li")(539, "div", 97)(540, "div", 89)(541, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "company name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 90)(544, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Fashion Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "li")(547, "div", 97)(548, "div", 89)(549, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 90)(552, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "mark.jecno@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "li")(555, "div", 97)(556, "div", 89)(557, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Country / Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 90)(560, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "li")(563, "div", 97)(564, "div", 89)(565, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Year Established");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 90)(568, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "li")(571, "div", 97)(572, "div", 89)(573, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Total Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 90)(576, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "101 - 200 People");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "li")(579, "div", 97)(580, "div", 89)(581, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 90)(584, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "clothing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "li")(587, "div", 97)(588, "div", 89)(589, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "street address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 90)(592, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "549 Sulphur Springs Road");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "li")(595, "div", 97)(596, "div", 89)(597, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "city/state");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 90)(600, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Downers Grove, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "li")(603, "div", 97)(604, "div", 89)(605, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "zip");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "div", 90)(608, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "60515");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 98)(611, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "login details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "div", 96)(616, "ul")(617, "li")(618, "div", 97)(619, "div", 89)(620, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "div", 90)(623, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "mark.jecno@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "li")(628, "div", 97)(629, "div", 89)(630, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "Phone No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "div", 90)(633, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "+01 4485 5454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "li")(638, "div", 97)(639, "div", 89)(640, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "div", 90)(643, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "******* ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "div", 99)(648, "div", 2)(649, "div", 46)(650, "div", 47)(651, "div", 48)(652, "div", 93)(653, "div", 94)(654, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "div", 96)(657, "div", 100)(658, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "div", 2)(661, "div", 101)(662, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](663, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "label", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, " Allow Desktop Notifications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](667, "input", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "label", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, " Enable Notifications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "label", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, " Get notification for my own activity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "label", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, " DND ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "div", 100)(679, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "deactivate account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "div", 2)(682, "div", 101)(683, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "label", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, " I have a privacy concern ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "input", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "label", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, " This is temporary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "label", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, " other ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Deactivate Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "div", 100)(698, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "Delete account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 2)(701, "div", 101)(702, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](703, "input", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "label", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, " No longer usable ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](707, "input", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "label", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, " Want to switch on other account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](711, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "label", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, " other ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "Delete Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()()()();
    }
  },
  styles: [".network-logo[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 50px;\n  height: auto;\n}\n\n.bank-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi94U2hvcCUyMDE1L3hTaG9wJTIwMTUvc3JjL2FwcC9tb2R1bGVzL3VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSiIsInNvdXJjZXNDb250ZW50IjpbIi5uZXR3b3JrLWxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uYmFuay1sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn0iLCIubmV0d29yay1sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iYW5rLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAyMnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 89701:
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 23449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class UserRoutingModule {}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
  return new (t || UserRoutingModule)();
};
UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UserRoutingModule
});
UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59293:
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 89701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);



class UserModule {}
UserModule.ɵfac = function UserModule_Factory(t) {
  return new (t || UserModule)();
};
UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UserModule
});
UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=293.js.map