(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/achive-component/achive-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/achive-component/achive-component.component.ts ***!
  \****************************************************************/
/*! exports provided: AchiveComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchiveComponentComponent", function() { return AchiveComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AchiveComponentComponent {
    constructor() { }
    goToBottom() {
        window.scrollTo(-100, document.body.scrollHeight);
    }
    ngOnInit() {
        setTimeout(this.goToBottom, 100);
    }
    wysun(x) {
        if (x > 0) {
            document.getElementById("slajd").style.width = "70%";
            document.getElementById("slajd").style.height = "auto";
            document.getElementById("slajd").style.marginLeft = "15%";
            document.getElementById("slajd").style.border = "5px inset #c5c4c4";
            const ha = document.getElementById("slajdtytul");
            const pe = document.getElementById("slajdp");
            document.getElementById("slajd").scrollIntoView({ behavior: "auto" });
            if (x == 1) {
                ha.innerText = "To portfolio...";
                pe.innerText = "To portfolio to mój pierwszy większy projekt w Angulrze. Jestem z niego dumny - zrobiłem go w 100% sam, i wykorzystałem bardzo wiele nowych dla mnie rozwiązań które pomogą mi w dalszym rozwoju ";
            }
            else if (x == 5) {
                document.getElementById("slajd").style.fontSize = "30px";
                ha.innerText = "Witryna cukierni...";
                pe.innerText = "To bardzo prosty projekt wykonany w ramach zadań szkolnych. Wyróżnia go jednak to że postanowiłem się tu postawić nauczycielowi, i zamiast pisać sam nudny html i css użyłem jeszcze po raz pierwszy FlexBoxa - i wyszło mi nawet nieźle! ";
            }
            else if (x == 2) {
                ha.innerText = "Herbemesa - mój pierwszy projekt komercyjny...";
                pe.innerText = "Może i nie jest idealny, ale to był mój pierwszy projekt w całości zrobiony samemu. Nawet pojawiły się pierwsze skrypty...";
            }
            else if (x == 3) {
                ha.innerText = "Agencja marketingowa...";
                pe.innerText = "Jeden z wielu projeków zrobionych przeze mnie w ramach praktyk - nauczyłęm się na nim obsługi WordPressa, i został oceniony jako najlepszy ze wszystkich przez mojego PraktykoDawcę!";
            }
            else if (x == 4) {
                ha.innerText = "Rozsyłącz maili...";
                pe.innerText = "Jeden z wielu projeków zrobionych przeze mnie w Pythonie. Niestety tak jak widać umarł on w etapie projektowym. Co prawda sama teoria wysłania Maila działała szybciej niż wersja konwencjonalna, ale samo wysłanie zajmowało kilkadziesiąt sekund... Okazało się to nieopłacalne i niepomocne podczas nauczania zdalnego...  ";
            }
        }
        else if (x == 0) {
            document.getElementById("slajd").style.width = "0%";
            document.getElementById("slajd").style.border = "0";
        }
    }
}
AchiveComponentComponent.ɵfac = function AchiveComponentComponent_Factory(t) { return new (t || AchiveComponentComponent)(); };
AchiveComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchiveComponentComponent, selectors: [["app-achive-component"]], decls: 26, vars: 0, consts: [["id", "kontenerv5"], ["id", "omnie"], ["id", "pojemnik"], ["id", "row1"], [1, "kafelekcaly", 3, "click"], [1, "zawartosckafelek"], ["src", "assets\\portfoliolook.png", "alt", ""], ["src", "assets\\herebemesa look.png", "alt", ""], ["src", "assets\\avalonlook.png", "alt", ""], ["id", "row2"], [1, "kafelekcaly"], [1, "zawartosckafelek", 3, "click"], ["src", "assets\\pythonlook.png", "alt", "", "id", "maly"], ["src", "assets\\cukeirnialook.png", "alt", ""], ["id", "slajd"], ["id", "slajdtytul"], ["id", "slajdp"], [2, "cursor", "pointer", "flex", "1", 3, "click"]], template: function AchiveComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kilka z moich realizacji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_div_click_5_listener() { return ctx.wysun(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_div_click_8_listener() { return ctx.wysun(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_div_click_11_listener() { return ctx.wysun(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_div_click_16_listener() { return ctx.wysun(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_div_click_18_listener() { return ctx.wysun(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchiveComponentComponent_Template_button_click_24_listener() { return ctx.wysun(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "kliknij aby schowa\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".kafelekcaly[_ngcontent-%COMP%]{flex:1;display: flex; flex-direction: column; justify-content: center; align-items: center;}\r\n.zawartosckafelek[_ngcontent-%COMP%]{text-align: center;  color: rgb(197, 188, 188); flex:1; opacity: 0.3; transition-duration: 300ms; cursor: pointer;}\r\n.zawartosckafelek[_ngcontent-%COMP%]:hover{opacity: 1;}\r\n#kontenerv5[_ngcontent-%COMP%]{box-shadow: inset 0px 0px 81px 4px rgba(69,43,69,1);width: 100%;height:auto; display: flex;flex-direction: column; background-color:rgb(34, 34, 59); font-family: 'Courier New', Courier, monospace; margin-bottom: 0;}\r\n#pojemnik[_ngcontent-%COMP%]{display: flex; width: 50%; margin: auto; flex-direction: column; padding: 5px; margin-bottom: 0 !important; margin-top: 2vh;border-radius: 10px;}\r\n#pojemnik[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin: 2px;}\r\n#kontenerv5[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex:1; color:white;margin: auto; margin-top: 2%; }\r\nimg[_ngcontent-%COMP%]{width: 100%; max-height: 95%;}\r\n#maly[_ngcontent-%COMP%]{max-height: 77.4%;}\r\n#row1[_ngcontent-%COMP%]{display: flex;}\r\n#row1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{flex:2}\r\n#row1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{flex:1}\r\n#row2[_ngcontent-%COMP%]{display: flex;}\r\n#row2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{flex:1}\r\n#slajd[_ngcontent-%COMP%]{\r\n    font-size: 39px;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0; \r\n    background-color:rgba(52, 47, 83, 0.925); \r\n    overflow: hidden; \r\n    display: flex; \r\n    text-align: center; \r\n    transition-duration: 300ms;\r\n    flex-direction: column; \r\n    border-radius: 5px;  \r\n    color: black;\r\n    -webkit-text-stroke: 1px black;\r\n    margin-top: 10%;\r\n   \r\n}\r\n#slajdtytul[_ngcontent-%COMP%]{flex:2;}\r\n#slajdp[_ngcontent-%COMP%]{flex:4; display:flex;justify-content: center; align-items: center; }\r\n@media only screen and (max-width: 900px) {\r\n    #row1[_ngcontent-%COMP%]{flex-direction: column;}\r\n    #row2[_ngcontent-%COMP%]{flex-direction: column;}\r\n    #pojemnik[_ngcontent-%COMP%]{width: 80%; }\r\n    #kontenerv5[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em ;}\r\n    .kafelekcaly[_ngcontent-%COMP%]{flex:1;}\r\n    #row1[_ngcontent-%COMP%], #row2[_ngcontent-%COMP%]{flex:2;}\r\n    #slajd[_ngcontent-%COMP%]{font-size: 30px; width: 80%; margin-top: 30% !important;}\r\n}\r\n@media only screen and (max-width: 500px){\r\n    h1[_ngcontent-%COMP%]{font-size: 25px !important;}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2hpdmUtY29tcG9uZW50L2FjaGl2ZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLE1BQU0sQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUM7QUFDeEcsa0JBQWtCLGtCQUFrQixHQUFHLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFDO0FBQ3BJLHdCQUF3QixVQUFVLENBQUM7QUFDbkMsWUFBWSxtREFBbUQsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxnQ0FBZ0MsRUFBRSw4Q0FBOEMsRUFBRSxnQkFBZ0IsQ0FBQztBQUNsTyxVQUFVLGFBQWEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxlQUFlLENBQUMsbUJBQW1CLENBQUM7QUFDMUosY0FBYyxXQUFXLENBQUM7QUFDMUIsZUFBZSxNQUFNLEVBQUUsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUU7QUFDakUsSUFBSSxXQUFXLEVBQUUsZUFBZSxDQUFDO0FBQ2pDLE1BQU0saUJBQWlCLENBQUM7QUFDeEIsTUFBTSxhQUFhLENBQUM7QUFDcEIsc0JBQXNCLE1BQU07QUFDNUIscUJBQXFCLE1BQU07QUFFM0IsTUFBTSxhQUFhLENBQUM7QUFDcEIsc0JBQXNCLE1BQU07QUFHNUI7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZUFBZTs7QUFFbkI7QUFDQSxZQUFZLE1BQU0sQ0FBQztBQUNuQixRQUFRLE1BQU0sRUFBRSxZQUFZLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUU7QUFHM0U7SUFDSSxNQUFNLHNCQUFzQixDQUFDO0lBQzdCLE1BQU0sc0JBQXNCLENBQUM7SUFDN0IsVUFBVSxVQUFVLEVBQUU7SUFDdEIsZUFBZSxnQkFBZ0IsQ0FBQztJQUNoQyxhQUFhLE1BQU0sQ0FBQztJQUNwQixZQUFZLE1BQU0sQ0FBQztJQUNuQixPQUFPLGVBQWUsRUFBRSxVQUFVLEVBQUUsMEJBQTBCLENBQUM7QUFDbkU7QUFFQTtJQUNJLEdBQUcsMEJBQTBCLENBQUM7O0FBRWxDIiwiZmlsZSI6ImFwcC9hY2hpdmUtY29tcG9uZW50L2FjaGl2ZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYWZlbGVrY2FseXtmbGV4OjE7ZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4uemF3YXJ0b3Nja2FmZWxla3t0ZXh0LWFsaWduOiBjZW50ZXI7ICBjb2xvcjogcmdiKDE5NywgMTg4LCAxODgpOyBmbGV4OjE7IG9wYWNpdHk6IDAuMzsgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi56YXdhcnRvc2NrYWZlbGVrOmhvdmVye29wYWNpdHk6IDE7fVxyXG4ja29udGVuZXJ2NXtib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDgxcHggNHB4IHJnYmEoNjksNDMsNjksMSk7d2lkdGg6IDEwMCU7aGVpZ2h0OmF1dG87IGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMzQsIDM0LCA1OSk7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7IG1hcmdpbi1ib3R0b206IDA7fVxyXG4jcG9qZW1uaWt7ZGlzcGxheTogZmxleDsgd2lkdGg6IDUwJTsgbWFyZ2luOiBhdXRvOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiA1cHg7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgbWFyZ2luLXRvcDogMnZoO2JvcmRlci1yYWRpdXM6IDEwcHg7fVxyXG4jcG9qZW1uaWsgZGl2e21hcmdpbjogMnB4O31cclxuI2tvbnRlbmVydjUgaDF7ZmxleDoxOyBjb2xvcjp3aGl0ZTttYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDIlOyB9XHJcbmltZ3t3aWR0aDogMTAwJTsgbWF4LWhlaWdodDogOTUlO31cclxuI21hbHl7bWF4LWhlaWdodDogNzcuNCU7fVxyXG4jcm93MXtkaXNwbGF5OiBmbGV4O31cclxuI3JvdzEgZGl2OmZpcnN0LWNoaWxke2ZsZXg6Mn1cclxuI3JvdzEgZGl2Omxhc3QtY2hpbGR7ZmxleDoxfVxyXG5cclxuI3JvdzJ7ZGlzcGxheTogZmxleDt9XHJcbiNyb3cyIGRpdjpmaXJzdC1jaGlsZHtmbGV4OjF9XHJcblxyXG5cclxuI3NsYWpke1xyXG4gICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDUyLCA0NywgODMsIDAuOTI1KTsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgXHJcbn1cclxuI3NsYWpkdHl0dWx7ZmxleDoyO31cclxuI3NsYWpkcHtmbGV4OjQ7IGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICNyb3cxe2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxyXG4gICAgI3JvdzJ7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt9XHJcbiAgICAjcG9qZW1uaWt7d2lkdGg6IDgwJTsgfVxyXG4gICAgI2tvbnRlbmVydjUgaDF7Zm9udC1zaXplOjEuNWVtIDt9XHJcbiAgICAua2FmZWxla2NhbHl7ZmxleDoxO31cclxuICAgICNyb3cxLCNyb3cye2ZsZXg6Mjt9XHJcbiAgICAjc2xhamR7Zm9udC1zaXplOiAzMHB4OyB3aWR0aDogODAlOyBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDt9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgaDF7Zm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7fVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchiveComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-achive-component',
                templateUrl: './achive-component.component.html',
                styleUrls: ['./achive-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _achive_component_achive_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achive-component/achive-component.component */ "./src/app/achive-component/achive-component.component.ts");
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack/stack.component */ "./src/app/stack/stack.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-holder/place-holder.component */ "./src/app/place-holder/place-holder.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _omnie_omnie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omnie/omnie.component */ "./src/app/omnie/omnie.component.ts");









const routes = [
    { path: 'placeholder', component: _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_3__["PlaceHolderComponent"] },
    { path: 'omnie', component: _omnie_omnie_component__WEBPACK_IMPORTED_MODULE_6__["OmnieComponent"] },
    { path: 'kontakt', component: _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_2__["KontaktComponent"] },
    { path: 'stack', component: _stack_stack_component__WEBPACK_IMPORTED_MODULE_1__["StackComponent"] },
    { path: 'achive', component: _achive_component_achive_component_component__WEBPACK_IMPORTED_MODULE_0__["AchiveComponentComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stopka_stopka_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopka/stopka.component */ "./src/app/stopka/stopka.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Portfoliov4';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-stopka");
    } }, directives: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _stopka_stopka_component__WEBPACK_IMPORTED_MODULE_3__["StopkaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-holder/place-holder.component */ "./src/app/place-holder/place-holder.component.ts");
/* harmony import */ var _omnie_omnie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omnie/omnie.component */ "./src/app/omnie/omnie.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stack/stack.component */ "./src/app/stack/stack.component.ts");
/* harmony import */ var _stopka_stopka_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stopka/stopka.component */ "./src/app/stopka/stopka.component.ts");
/* harmony import */ var _achive_component_achive_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./achive-component/achive-component.component */ "./src/app/achive-component/achive-component.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_5__["PlaceHolderComponent"],
        _omnie_omnie_component__WEBPACK_IMPORTED_MODULE_6__["OmnieComponent"],
        _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__["KontaktComponent"],
        _stack_stack_component__WEBPACK_IMPORTED_MODULE_8__["StackComponent"],
        _stopka_stopka_component__WEBPACK_IMPORTED_MODULE_9__["StopkaComponent"],
        _achive_component_achive_component_component__WEBPACK_IMPORTED_MODULE_10__["AchiveComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                    _place_holder_place_holder_component__WEBPACK_IMPORTED_MODULE_5__["PlaceHolderComponent"],
                    _omnie_omnie_component__WEBPACK_IMPORTED_MODULE_6__["OmnieComponent"],
                    _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__["KontaktComponent"],
                    _stack_stack_component__WEBPACK_IMPORTED_MODULE_8__["StackComponent"],
                    _stopka_stopka_component__WEBPACK_IMPORTED_MODULE_9__["StopkaComponent"],
                    _achive_component_achive_component_component__WEBPACK_IMPORTED_MODULE_10__["AchiveComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/kontakt/kontakt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.ts ***!
  \**********************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KontaktComponent {
    constructor() { }
    goToBottom() {
        window.scrollTo(-100, document.body.scrollHeight);
    }
    ngOnInit() {
        setTimeout(this.goToBottom, 100);
    }
    alarm() {
        alert("cyprian_kalina@wp.pl");
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 16, vars: 0, consts: [["id", "kontenert"], ["id", "omnie"], ["id", "flexkontener"], ["id", "fb"], ["href", "https://www.facebook.com/cyprian.kalina", "target", "_blank"], ["src", "assets\\facebook.png", 2, "width", "50%", "height", "50%"], ["id", "mail", 3, "click"], ["href", "mailto:cyprian_kalina@wp.pl"], ["src", "assets\\mail.png", 2, "width", "50%", "height", "50%"], ["id", "git"], ["href", "https://github.com/CyprianKal", "target", "_blank"], ["src", "assets\\git.png", 2, "width", "50%", "height", "50%"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kontakt do mnie...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KontaktComponent_Template_div_click_8_listener() { return ctx.alarm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#kontenert[_ngcontent-%COMP%]{box-shadow: inset 0px 0px 81px 4px rgba(69,43,69,1);width: 100%;height:auto; display: flex;flex-direction: column; background-color:rgb(34, 34, 59); font-family: 'Courier New', Courier, monospace; margin-bottom: 0;}\r\n\r\n#kontenert[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex:1; color:white;margin: auto; margin-top: 2%; }\r\n\r\n#omnie[_ngcontent-%COMP%]{font-size: calc(2vh + 2vw);}\r\n\r\n#flexkontener[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex:1;\r\n    text-align: center;\r\n    height: 5 00px;\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n#git[_ngcontent-%COMP%], #mail[_ngcontent-%COMP%], #fb[_ngcontent-%COMP%]{\r\n    flex:1;\r\n   \r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\na[_ngcontent-%COMP%]{display: flex;flex:2;justify-content: center;align-items: center;text-align: center; border-radius: 500%; transition-duration: 500ms; }\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 255, 255, 0.007);\r\n}\r\n\r\n#git[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #mail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #fb[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: calc(16vh + 16vw);\r\n    height: calc(16vh + 16vw);\r\n    background-color: rgb(63, 9, 9);\r\n    border-radius: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-shadow: 0px 0px 54px 2px rgba(0,0,0,1);\r\n    transition-duration: 500ms;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color: rgb(68, 68, 68);}\r\n\r\n#mail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:rgb(100, 16, 16)}\r\n\r\n#fb[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color: \t#325696;}\r\n\r\n#fb[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color: \t#29487d; }\r\n\r\n#git[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color: #333;}\r\n\r\n@media only screen and (max-width: 900px) {\r\n    #flexkontener[_ngcontent-%COMP%]{flex-direction: column;}\r\n    #mail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top: 3vh; margin-bottom: 3vh;}\r\n    #git[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #mail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #fb[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n\r\n        width: calc(20vh + 20vw);\r\n        height: calc(20vh + 20vw);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1EQUFtRCxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLHNCQUFzQixFQUFFLGdDQUFnQyxFQUFFLDhDQUE4QyxFQUFFLGdCQUFnQixDQUFDOztBQUVqTyxjQUFjLE1BQU0sRUFBRSxXQUFXLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRTs7QUFDaEUsT0FBTywwQkFBMEIsQ0FBQzs7QUFFbEM7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLE1BQU07O0lBRU4sYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFDQSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQUU7O0FBQ3hJO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUNBLGVBQWUsaUNBQWlDLENBQUM7O0FBQ2pELGdCQUFnQixpQ0FBaUM7O0FBQ2pELGNBQWMsMEJBQTBCLENBQUM7O0FBRXpDLFFBQVEsMEJBQTBCLEVBQUU7O0FBRXBDLFNBQVMsc0JBQXNCLENBQUM7O0FBRWhDO0lBQ0ksY0FBYyxzQkFBc0IsQ0FBQztJQUNyQyxVQUFVLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztJQUM5Qzs7UUFFSSx3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoiYXBwL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tvbnRlbmVydHtib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDgxcHggNHB4IHJnYmEoNjksNDMsNjksMSk7d2lkdGg6IDEwMCU7aGVpZ2h0OmF1dG87IGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMzQsIDM0LCA1OSk7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7IG1hcmdpbi1ib3R0b206IDA7fVxyXG5cclxuI2tvbnRlbmVydCBoMXtmbGV4OjE7IGNvbG9yOndoaXRlO21hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMiU7IH1cclxuI29tbmlle2ZvbnQtc2l6ZTogY2FsYygydmggKyAydncpO31cclxuXHJcbiNmbGV4a29udGVuZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDoxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1IDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcblxyXG4jZ2l0ICwjbWFpbCwgI2Zie1xyXG4gICAgZmxleDoxO1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5he2Rpc3BsYXk6IGZsZXg7ZmxleDoyO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7dGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiA1MDAlOyB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtczsgfVxyXG5hOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwNyk7XHJcbn1cclxuI2dpdCBkaXYsI21haWwgZGl2LCNmYiBkaXZ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxNnZoICsgMTZ2dyk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTZ2aCArIDE2dncpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA5LCA5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1NHB4IDJweCByZ2JhKDAsMCwwLDEpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbn1cclxuI2dpdCBkaXY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCA2OCwgNjgpO31cclxuI21haWwgZGl2OmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTYsIDE2KX1cclxuI2ZiIGRpdjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiBcdCMzMjU2OTY7fVxyXG5cclxuI2ZiIGRpdntiYWNrZ3JvdW5kLWNvbG9yOiBcdCMyOTQ4N2Q7IH1cclxuXHJcbiNnaXQgZGl2e2JhY2tncm91bmQtY29sb3I6ICMzMzM7fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgI2ZsZXhrb250ZW5lcntmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cclxuICAgICNtYWlsIGRpdnttYXJnaW4tdG9wOiAzdmg7IG1hcmdpbi1ib3R0b206IDN2aDt9XHJcbiAgICAjZ2l0IGRpdiwjbWFpbCBkaXYsI2ZiIGRpdntcclxuXHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMjB2aCArIDIwdncpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyMHZoICsgMjB2dyk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kontakt',
                templateUrl: './kontakt.component.html',
                styleUrls: ['./kontakt.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
    goToBottom() {
        window.scrollTo(-100, document.body.scrollHeight);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 19, vars: 0, consts: [["id", "kontener"], ["id", "opcje", 1, "animate__animated", "animate__rotateIn"], ["routerLink", "/omnie"], ["id", "opcjagoralewo", 3, "click"], ["routerLink", "/kontakt"], ["id", "opcjagoraprawo", 3, "click"], [2, "clear", "both"], ["routerLink", "/achive"], ["id", "opcjadollewo", 3, "click"], ["routerLink", "/stack"], ["id", "opcjadolprawo", 3, "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_3_listener() { return ctx.goToBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " O mnie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_7_listener() { return ctx.goToBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_12_listener() { return ctx.goToBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Osi\u0105gni\u0119cia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_div_click_16_listener() { return ctx.goToBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#kontener[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 97.5%;\r\n    background-color:#22223B;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    box-shadow: inset 0px 0px 81px 4px rgba(69,43,69,1);\r\n    \r\n}\r\n\r\n#opcje[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 37vh;\r\n    height: 37vh;\r\n    vertical-align: middle;\r\n   \r\n\r\n}\r\n\r\n#opcjagoralewo[_ngcontent-%COMP%]{\r\n    background-color: #332155 ;\r\n    width: 50%;\r\n    height: 50%;\r\n    float: left;\r\n    border-radius: 200px 0px 0px 0px;\r\n    -moz-border-radius: 200px 0px 0px 0px;\r\n    -webkit-border-radius: 200px 0px 0px 0px;\r\n    float: left;   \r\n    transition-duration: 500ms;\r\n    cursor: pointer;\r\n    line-height: 15vh;\r\n    font-size: 3vh;\r\n    font-family: 'Secular One', sans-serif;\r\n    color:#6a4ba3 ;\r\n}\r\n\r\n#opcjagoralewo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: rotate(-36deg);\r\n    margin-left: 2.3vh;\r\n    \r\n}\r\n\r\n#opcjagoraprawo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: rotate(36deg);\r\n    margin-top: 4.2vh;\r\n    margin-right: 1.95vh;\r\n}\r\n\r\n#opcjadolprawo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: rotate(-36deg);\r\n    margin-top: 1vh;\r\n    margin-right: 2.5vh;\r\n}\r\n\r\n#opcjadollewo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    transform: rotate(36deg);\r\n    margin-top: 1vh;\r\n    margin-left: 1vh;\r\n}\r\n\r\n#opcjagoralewo[_ngcontent-%COMP%]:hover{\r\n    width: 49%;\r\n    margin-right: 1%;\r\n    height: 49%;\r\n    margin-bottom: 1%;\r\n    background-color: #39255f ;\r\n    font-size: 2.5vh;\r\n    line-height: 14.5vh;\r\n    color:rgb(204, 25, 25);\r\n}\r\n\r\n#opcjagoraprawo[_ngcontent-%COMP%]{\r\n    background-color: #4c317f;\r\n    width: 50%;\r\n    height: 50%;\r\n    float: left;\r\n    border-radius: 0px 200px 0px 0px;\r\n    -moz-border-radius: 0px 200px 0px 0px;\r\n    -webkit-border-radius: 0px 200px 0px 0px; \r\n    transition-duration: 500ms;\r\n    cursor: pointer;\r\n    line-height: 15vh;\r\n    font-size: 3vh;\r\n    font-family: 'Secular One', sans-serif;\r\n    color:#2b1b49;   \r\n}\r\n\r\n#opcjagoraprawo[_ngcontent-%COMP%]:hover{\r\n    width: 49%;\r\n    margin-left: 1%;\r\n    height: 49%;\r\n    margin-bottom: 1%;\r\n    background-color: #513586 ;\r\n    color:rgb(204, 25, 25);\r\n    font-size: 2.5vh;\r\n    line-height: 14.5vh;\r\n    \r\n}\r\n\r\n#opcjadollewo[_ngcontent-%COMP%]{\r\n    background-color:#4c317f;\r\n    width: 50%;\r\n    height: 50%;\r\n    float: left;\r\n    border-radius: 0px 0px 0px 200px;\r\n    -moz-border-radius: 0px 0px 0px 200px;\r\n    -webkit-border-radius: 0px 0px 0px 200px;\r\n    float: left;  \r\n    transition-duration: 500ms; \r\n    cursor: pointer;\r\n    line-height: 15vh;\r\n    font-size: 3vh;\r\n    font-family: 'Secular One', sans-serif;\r\n    color:#2b1b49;  \r\n}\r\n\r\n#opcjadollewo[_ngcontent-%COMP%]:hover{\r\n    width: 49%;\r\n    margin-right: 1%;\r\n    height: 49%;\r\n    margin-top: 1%;\r\n    background-color: #513586 ;\r\n    color:rgb(204, 25, 25);\r\n    font-size: 2.5vh;\r\n    line-height: 14.5vh;\r\n}\r\n\r\n#opcjadolprawo[_ngcontent-%COMP%]{\r\n    background-color: #332155 ;\r\n    width: 50%;\r\n    height: 50%;\r\n    float: left;\r\n    border-radius: 0px 0px 200px 0px;\r\n    -moz-border-radius: 0px 0px 200px 0px;\r\n    -webkit-border-radius: 0px 0px 200px 0px;  \r\n    transition-duration: 500ms;\r\n    cursor: pointer;\r\n    line-height: 15vh;\r\n    font-size: 3vh;\r\n    font-family: 'Secular One', sans-serif;\r\n    color:#6a4ba3 ;\r\n}\r\n\r\n#opcjadolprawo[_ngcontent-%COMP%]:hover{\r\n    width: 49%;\r\n    margin-left: 1%;\r\n    height: 49%;\r\n    margin-top: 1%;\r\n    background-color: #39255f ;\r\n    font-size: 2.5vh;\r\n    line-height: 14.5vh;\r\n    color:rgb(204, 25, 25);\r\n}\r\n\r\n#buttoncolor[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 110px;\r\n    background-color: transparent;\r\n    height: 40px;\r\n    position: absolute;\r\n    top:5px;\r\n    left:5px;\r\n    transition-duration: 500ms;\r\n    border-radius:40%;\r\n    line-height: 40px;\r\n    font-size: 100%;\r\n    font-family: 'Secular One', sans-serif;\r\n    color:#64567e ;\r\n    cursor: pointer;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n#jasnastrona[_ngcontent-%COMP%]{\r\n    border-radius: 30% 0 0 30%;\r\n    top: 5px;\r\n    left:5px;\r\n    height: 90%;\r\n    width: 55px;\r\n    position: absolute;\r\n    background-color: rgba(178, 184, 183, 0.849);\r\n    opacity: 0.3;\r\n    transition-duration: 500ms;\r\n}\r\n\r\n#ciemnastrona[_ngcontent-%COMP%]{\r\n    opacity: 0.3;\r\n    border-radius: 0 30% 30% 0;\r\n    top:5px;\r\n    left:60px;\r\n    width: 55px;\r\n    height: 90%;\r\n    position: absolute;\r\n    background-color: rgba(31, 31, 36, 0.829);\r\n    transition-duration: 500ms;\r\n}\r\n\r\n#ciemnastrona[_ngcontent-%COMP%]:hover{\r\n   opacity: 1;\r\n}\r\n\r\n#jasnastrona[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n }\r\n\r\n.jasny[_ngcontent-%COMP%]{\r\n    background-color: #eeeeee !important;\r\n    box-shadow: inset 0px 0px 81px 4px rgb(110, 109, 110) !important;\r\n}\r\n\r\n.jasnyprzycisk1[_ngcontent-%COMP%]{\r\n    background-color:  #dddddd  !important;\r\n    color: rgb(133, 133, 133) !important;\r\n}\r\n\r\n.jasnyprzycisk1[_ngcontent-%COMP%]:hover{\r\n    background-color: #d6cdcd !important;\r\n    color:rgb(180, 139, 93) !important;\r\n}\r\n\r\n.jasnyprzycisk2[_ngcontent-%COMP%]{\r\n\r\n    background-color: #bbbbbb !important;\r\n    color: rgb(226, 220, 220) !important;\r\n}\r\n\r\n.jasnyprzycisk2[_ngcontent-%COMP%]:hover{\r\n    background-color: #c9bebe!important;\r\n    color:rgb(180, 139, 93) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbURBQW1EOztBQUV2RDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjs7O0FBRzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBTUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBSUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNDQUFzQztJQUN0QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDBCQUEwQjtBQUM5Qjs7QUFFQTtHQUNHLFVBQVU7QUFDYjs7QUFFQTtJQUNJLFVBQVU7Q0FDYjs7QUFDRDtJQUNJLG9DQUFvQztJQUNwQyxnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0QyIsImZpbGUiOiJhcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tvbnRlbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk3LjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjIyMjNCO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDgxcHggNHB4IHJnYmEoNjksNDMsNjksMSk7XHJcbiAgICBcclxufVxyXG5cclxuI29wY2ple1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDM3dmg7XHJcbiAgICBoZWlnaHQ6IDM3dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBcclxuXHJcbn1cclxuXHJcbiNvcGNqYWdvcmFsZXdve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjE1NSA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMDBweCAwcHggMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDsgICBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1dmg7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2VjdWxhciBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IzZhNGJhMyA7XHJcbn1cclxuI29wY2phZ29yYWxld28gaDR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzZkZWcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuM3ZoO1xyXG4gICAgXHJcbn1cclxuI29wY2phZ29yYXByYXdvIGg0e1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gICAgbWFyZ2luLXRvcDogNC4ydmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOTV2aDtcclxufVxyXG4jb3BjamFkb2xwcmF3byBoNHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNmRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xyXG59XHJcbiNvcGNqYWRvbGxld28gaDR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xyXG59XHJcblxyXG5cclxuI29wY2phZ29yYWxld286aG92ZXJ7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGhlaWdodDogNDklO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkyNTVmIDtcclxuICAgIGZvbnQtc2l6ZTogMi41dmg7XHJcbiAgICBsaW5lLWhlaWdodDogMTQuNXZoO1xyXG4gICAgY29sb3I6cmdiKDIwNCwgMjUsIDI1KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNvcGNqYWdvcmFwcmF3b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzMxN2Y7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMDBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHggMjAwcHggMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDIwMHB4IDBweCAwcHg7IFxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTV2aDtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWN1bGFyIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojMmIxYjQ5OyAgIFxyXG59XHJcblxyXG4jb3BjamFnb3JhcHJhd286aG92ZXJ7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTM1ODYgO1xyXG4gICAgY29sb3I6cmdiKDIwNCwgMjUsIDI1KTtcclxuICAgIGZvbnQtc2l6ZTogMi41dmg7XHJcbiAgICBsaW5lLWhlaWdodDogMTQuNXZoO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuI29wY2phZG9sbGV3b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRjMzE3ZjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMjAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDIwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0OyAgXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtczsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTV2aDtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWN1bGFyIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojMmIxYjQ5OyAgXHJcbn1cclxuXHJcbiNvcGNqYWRvbGxld286aG92ZXJ7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGhlaWdodDogNDklO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEzNTg2IDtcclxuICAgIGNvbG9yOnJnYigyMDQsIDI1LCAyNSk7XHJcbiAgICBmb250LXNpemU6IDIuNXZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0LjV2aDtcclxufVxyXG5cclxuXHJcblxyXG4jb3BjamFkb2xwcmF3b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzIxNTUgO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMHB4OyAgXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXZoO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlY3VsYXIgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiM2YTRiYTMgO1xyXG59XHJcblxyXG4jb3BjamFkb2xwcmF3bzpob3ZlcntcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBoZWlnaHQ6IDQ5JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MjU1ZiA7XHJcbiAgICBmb250LXNpemU6IDIuNXZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0LjV2aDtcclxuICAgIGNvbG9yOnJnYigyMDQsIDI1LCAyNSk7XHJcbn1cclxuXHJcbiNidXR0b25jb2xvcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjVweDtcclxuICAgIGxlZnQ6NXB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWN1bGFyIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojNjQ1NjdlIDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbiNqYXNuYXN0cm9uYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJSAwIDAgMzAlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OjVweDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OCwgMTg0LCAxODMsIDAuODQ5KTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG59XHJcbiNjaWVtbmFzdHJvbmF7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDMwJSAzMCUgMDtcclxuICAgIHRvcDo1cHg7XHJcbiAgICBsZWZ0OjYwcHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDM2LCAwLjgyOSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxufVxyXG5cclxuI2NpZW1uYXN0cm9uYTpob3ZlcntcclxuICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2phc25hc3Ryb25hOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuIH1cclxuLmphc255e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA4MXB4IDRweCByZ2IoMTEwLCAxMDksIDExMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmphc255cHJ6eWNpc2sxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNkZGRkZGQgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDEzMywgMTMzLCAxMzMpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmphc255cHJ6eWNpc2sxOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2Y2RjZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6cmdiKDE4MCwgMTM5LCA5MykgIWltcG9ydGFudDtcclxufVxyXG4uamFzbnlwcnp5Y2lzazJ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyMjYsIDIyMCwgMjIwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uamFzbnlwcnp5Y2lzazI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzliZWJlIWltcG9ydGFudDtcclxuICAgIGNvbG9yOnJnYigxODAsIDEzOSwgOTMpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/omnie/omnie.component.ts":
/*!******************************************!*\
  !*** ./src/app/omnie/omnie.component.ts ***!
  \******************************************/
/*! exports provided: OmnieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmnieComponent", function() { return OmnieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OmnieComponent {
    constructor() { }
    goToBottom() {
        window.scrollTo(-100, document.body.scrollHeight);
    }
    ngOnInit() {
        setTimeout(this.goToBottom, 100);
    }
}
OmnieComponent.ɵfac = function OmnieComponent_Factory(t) { return new (t || OmnieComponent)(); };
OmnieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OmnieComponent, selectors: [["app-omnie"]], decls: 35, vars: 0, consts: [["id", "kontenerr"], ["id", "omnie"], ["id", "pojemnik"], [1, "kafelekcaly"], [1, "tytulkafelek"], [1, "zawartosckafelek"], ["id", "pojemnikdwa"], ["id", "nazwa"], ["id", "zdjeciemnie"], ["src", "assets\\placeholderhuman.png", 2, "width", "auto", "max-height", "400px", "text-align", "center", "margin-bottom", "0"], ["id", "zawod"]], template: function OmnieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Troch\u0119 o mnie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kim ja w\u0142a\u015Bciwie jestem?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cze\u015B\u0107! Zapomnia\u0142em si\u0119 przedstawi\u0107... Nazwam sie Cyprian Kalina i jestem FrontEnd Developerem. Mam 18 lat, i pe\u0142n\u0105 my\u015Bli g\u0142ow\u0119. Programowania ucz\u0119 si\u0119 g\u0142\u00F3wnie z pasjii i w\u0142asnej ambicjii - stwierdzi\u0142em \u017Ce to co daj\u0105 mi w szkole to za ma\u0142o... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I wtedy zacz\u0105\u0142em si\u0119 uczy\u0107!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I cho\u0107 na pocz\u0105tku by\u0142o strasznie ci\u0119\u017Cko to z czasem zacz\u0105\u0142em ogarnia\u0107 coraz wi\u0119cej i chod\u017A wiem jak d\u0142uga droga jest jeszcze przedemn\u0105, to ciesz\u0119 si\u0119 patrz\u0105c na to co ju\u017C prze\u017Cy\u0142em i co za mn\u0105. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Moje ambicj\u0119 zacz\u0119\u0142y mnie prze\u015Bciga\u0107...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " W pewnym momencie przesta\u0142em nad\u0105\u017Ca\u0107 za ilo\u015Bci\u0105 nauki kt\u00F3r\u0105 sobie narzuci\u0142em i my\u015B\u0142a\u0142em \u017Ce nie dam rady, mia\u0142em spor\u0105 przerw\u0119... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ale wr\u00F3ci\u0142em pe\u0142en energii!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Starszy i m\u0105drzejszy - jestem skoncentrowany na celu. To co - skoro si\u0119 ju\u017C znamy, popracujemy razem? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cyprian Kalina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "FrontEnd Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#kontenerr[_ngcontent-%COMP%]{box-shadow: inset 0px 0px 81px 4px rgba(69,43,69,1);width: 100%;height:auto; display: flex;flex-direction: column; background-color:rgb(34, 34, 59); font-family: 'Courier New', Courier, monospace; margin-bottom: 0;}\r\n\r\n#kontenerr[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex:1; color:white;margin: auto; margin-top: 2%; }\r\n\r\n#omnie[_ngcontent-%COMP%]{font-size: calc(2vh + 2vw);}\r\n\r\n#pojemnik[_ngcontent-%COMP%]{display: flex; padding: 50px;}\r\n\r\n.kafelekcaly[_ngcontent-%COMP%]{flex:1;display: flex; flex-direction: column; margin: 10px; padding: 10px; justify-content: center; align-items: center;}\r\n\r\n.zawartosckafelek[_ngcontent-%COMP%]{text-align: center; background-color: #363852; color: rgb(197, 188, 188); border-radius: 0 0 10px 10px;}\r\n\r\n.tytulkafelek[_ngcontent-%COMP%]{text-align: center;background-color: rgb(74, 78, 105);  border-radius: 10px 10px 0 0;}\r\n\r\n#pojemnikdwa[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center;\r\n    margin: 0;\r\n}\r\n\r\n#zdjeciemnie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom: 0;}\r\n\r\n#nazwa[_ngcontent-%COMP%]{flex:2; font-size: calc(2vw + 2vh); padding: 5px;}\r\n\r\n#zdjeciemnie[_ngcontent-%COMP%]{flex:2; text-align: center; margin-bottom: 0;}\r\n\r\n#zawod[_ngcontent-%COMP%]{flex:3;  font-size: calc(2vw + 2vh);}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n    #pojemnik[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        padding: 10px;\r\n    }\r\n    #pojemnikdwa[_ngcontent-%COMP%]{flex-direction: column;}\r\n    #zdjeciemnie[_ngcontent-%COMP%]{order: 2;}\r\n    #zawod[_ngcontent-%COMP%]{margin-bottom: 20px;}\r\n    #nazwa[_ngcontent-%COMP%]{margin-bottom: 20px;}\r\n    .zawartosckafelek[_ngcontent-%COMP%]{width: 70vw ;}\r\n    .tytulkafelek[_ngcontent-%COMP%]{width: 70vw;  } \r\n    #zdjeciemnie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height: 200px !important;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vbW5pZS9vbW5pZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbURBQW1ELENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsc0JBQXNCLEVBQUUsZ0NBQWdDLEVBQUUsOENBQThDLEVBQUUsZ0JBQWdCLENBQUM7O0FBRWpPLGNBQWMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFOztBQUNoRSxPQUFPLDBCQUEwQixDQUFDOztBQUNsQyxVQUFVLGFBQWEsRUFBRSxhQUFhLENBQUM7O0FBRXZDLGFBQWEsTUFBTSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDOztBQUNySSxrQkFBa0Isa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLENBQUM7O0FBQ3pILGNBQWMsa0JBQWtCLENBQUMsa0NBQWtDLEdBQUcsNEJBQTRCLENBQUM7O0FBRW5HO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUNBLGlCQUFpQixnQkFBZ0IsQ0FBQzs7QUFDbEMsT0FBTyxNQUFNLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxDQUFDOztBQUN4RCxhQUFhLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQzs7QUFDMUQsT0FBTyxNQUFNLEdBQUcsMEJBQTBCLENBQUM7O0FBQzNDO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjtJQUNBLGFBQWEsc0JBQXNCLENBQUM7SUFDcEMsYUFBYSxRQUFRLENBQUM7SUFDdEIsT0FBTyxtQkFBbUIsQ0FBQztJQUMzQixPQUFPLG1CQUFtQixDQUFDO0lBQzNCLGtCQUFrQixZQUFZLENBQUM7SUFDL0IsY0FBYyxXQUFXLEdBQUc7SUFDNUIsaUJBQWlCLDRCQUE0QixDQUFDO0FBQ2xEIiwiZmlsZSI6ImFwcC9vbW5pZS9vbW5pZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tvbnRlbmVycntib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDgxcHggNHB4IHJnYmEoNjksNDMsNjksMSk7d2lkdGg6IDEwMCU7aGVpZ2h0OmF1dG87IGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMzQsIDM0LCA1OSk7IGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7IG1hcmdpbi1ib3R0b206IDA7fVxyXG5cclxuI2tvbnRlbmVyciBoMXtmbGV4OjE7IGNvbG9yOndoaXRlO21hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMiU7IH1cclxuI29tbmlle2ZvbnQtc2l6ZTogY2FsYygydmggKyAydncpO31cclxuI3BvamVtbmlre2Rpc3BsYXk6IGZsZXg7IHBhZGRpbmc6IDUwcHg7fVxyXG5cclxuLmthZmVsZWtjYWx5e2ZsZXg6MTtkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXJnaW46IDEwcHg7IHBhZGRpbmc6IDEwcHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO31cclxuLnphd2FydG9zY2thZmVsZWt7dGV4dC1hbGlnbjogY2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzODUyOyBjb2xvcjogcmdiKDE5NywgMTg4LCAxODgpOyBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O31cclxuLnR5dHVsa2FmZWxla3t0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCA3OCwgMTA1KTsgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7fSBcclxuXHJcbiNwb2plbW5pa2R3YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiN6ZGplY2llbW5pZSBpbWd7bWFyZ2luLWJvdHRvbTogMDt9XHJcbiNuYXp3YXtmbGV4OjI7IGZvbnQtc2l6ZTogY2FsYygydncgKyAydmgpOyBwYWRkaW5nOiA1cHg7fVxyXG4jemRqZWNpZW1uaWV7ZmxleDoyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDA7fVxyXG4jemF3b2R7ZmxleDozOyAgZm9udC1zaXplOiBjYWxjKDJ2dyArIDJ2aCk7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgI3BvamVtbmlre1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgICNwb2plbW5pa2R3YXtmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cclxuICAgICN6ZGplY2llbW5pZXtvcmRlcjogMjt9XHJcbiAgICAjemF3b2R7bWFyZ2luLWJvdHRvbTogMjBweDt9XHJcbiAgICAjbmF6d2F7bWFyZ2luLWJvdHRvbTogMjBweDt9XHJcbiAgICAuemF3YXJ0b3Nja2FmZWxla3t3aWR0aDogNzB2dyA7fVxyXG4gICAgLnR5dHVsa2FmZWxla3t3aWR0aDogNzB2dzsgIH0gXHJcbiAgICAjemRqZWNpZW1uaWUgaW1ne21heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmnieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-omnie',
                templateUrl: './omnie.component.html',
                styleUrls: ['./omnie.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/place-holder/place-holder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/place-holder/place-holder.component.ts ***!
  \********************************************************/
/*! exports provided: PlaceHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolderComponent", function() { return PlaceHolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlaceHolderComponent {
    constructor() { }
    ngOnInit() {
        window.scrollTo(-300, document.body.scrollHeight);
    }
}
PlaceHolderComponent.ɵfac = function PlaceHolderComponent_Factory(t) { return new (t || PlaceHolderComponent)(); };
PlaceHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceHolderComponent, selectors: [["app-place-holder"]], decls: 1, vars: 0, consts: [["id", "elo"]], template: function PlaceHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbGFjZS1ob2xkZXIvcGxhY2UtaG9sZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJhcHAvcGxhY2UtaG9sZGVyL3BsYWNlLWhvbGRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceHolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-place-holder',
                templateUrl: './place-holder.component.html',
                styleUrls: ['./place-holder.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/stack/stack.component.ts":
/*!******************************************!*\
  !*** ./src/app/stack/stack.component.ts ***!
  \******************************************/
/*! exports provided: StackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StackComponent {
    constructor() { }
    goToBottom() {
        window.scrollTo(-100, document.body.scrollHeight);
    }
    ngOnInit() {
        setTimeout(this.goToBottom, 100);
    }
}
StackComponent.ɵfac = function StackComponent_Factory(t) { return new (t || StackComponent)(); };
StackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackComponent, selectors: [["app-stack"]], decls: 46, vars: 0, consts: [["id", "kontenerv3"], ["id", "flexboxcon"], [1, "dwaobok"], ["id", "skill1"], [1, "kontentnazwa"], ["src", "assets\\Angular.png", "alt", "", 2, "width", "100px"], ["id", "skill2"], ["src", "assets\\html.png", "alt", "", 2, "width", "100px"], [1, "jedendlugi"], ["id", "skill3"], ["src", "assets\\git.png", 2, "width", "100px"], ["id", "skill4"], ["src", "assets\\flexbox.png", 2, "width", "100px"], ["id", "skill5"], ["src", "assets\\css.png", 2, "width", "100px"], ["id", "skill6"], ["src", "assets\\wordpress.png", "a", "", 2, "width", "100px"], ["id", "skill7"], ["src", "assets\\Typescript.png", 2, "width", "100px"], ["id", "skill8"], ["src", "assets\\js.png", 2, "width", "100px"], ["id", "skill9"], ["src", "assets\\python.png", 2, "width", "100px"]], template: function StackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M\u00F3j stack technologiczny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FLEXBOX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "WORDPRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "PYTHON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#kontenerv3[_ngcontent-%COMP%]{text-align: center;box-shadow: inset 0px 0px 81px 4px rgba(69,43,69,1);width: 100%;height:auto; display: flex;flex-direction: column; background-color:rgb(34, 34, 59); font-family: 'Courier New', Courier, monospace; margin-bottom: 0;}\r\n\r\n#kontenerv3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:white;margin: auto; margin-top: 2%; margin-bottom: 2%;}\r\n\r\n#flexboxcon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    max-width: 80%;\r\n    min-width: 60%;\r\n    margin: auto;\r\n\r\n    \r\n    flex-direction: column;\r\n}\r\n\r\n#flexboxcon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: calc(0.5vw + 0.5vh);\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.dwaobok[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    flex-direction: row;\r\n    \r\n}\r\n\r\n.jedendlugi[_ngcontent-%COMP%]{\r\n    display: flex;\r\n   \r\n}\r\n\r\n#skill1[_ngcontent-%COMP%]{background-color:#fc6c5c; flex: 1; border-radius: 10px; display: flex;}\r\n\r\n#skill2[_ngcontent-%COMP%]{background-color: #e34c26;flex: 1; border-radius: 10px;}\r\n\r\n#skill3[_ngcontent-%COMP%]{background-color: \t#800000;flex: 1;}\r\n\r\n#skill4[_ngcontent-%COMP%]{background-color: rgb(83, 83, 139);flex: 1; border-radius: 10px;}\r\n\r\n#skill5[_ngcontent-%COMP%]{background-color: #264de4;flex: 1; border-radius: 10px;}\r\n\r\n#skill6[_ngcontent-%COMP%]{background-color: #21759b;flex: 1;}\r\n\r\n#skill7[_ngcontent-%COMP%]{background-color:#007acc;flex: 1;}\r\n\r\n#skill8[_ngcontent-%COMP%]{background-color: #F0DB4F;flex: 1; border-radius: 10px;}\r\n\r\n#skill9[_ngcontent-%COMP%]{background-color: #4B8BBE;flex: 1; border-radius: 10px; margin-bottom: 2vh}\r\n\r\n.kontentnazwa[_ngcontent-%COMP%]{ \r\n    margin: auto; font-size: 0px; background-color: transparent; display: none; position: absolute; transition-duration: 500ms;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -khtml-user-select: none;\r\n    -webkit-user-select: none;\r\n    -o-user-select: none;\r\n}\r\n\r\n#skill1[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color:#fc3c27cb;}\r\n\r\n#skill2[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color:#a12000da;}\r\n\r\n#skill3[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color:\t#c70000b2;}\r\n\r\n#skill4[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color:  rgba(56, 56, 107, 0.89);}\r\n\r\n#skill5[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color:#0123a7de;}\r\n\r\n#skill6[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color: #0e5474c4;}\r\n\r\n#skill7[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 40px; background-color: #005186c5;}\r\n\r\n#skill8[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 40px; background-color: #bda822ce;}\r\n\r\n#skill9[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{font-size: 50px; background-color: #266599e3;}\r\n\r\n@media only screen and (max-width: 900px) {\r\n    .dwaobok[_ngcontent-%COMP%]{flex-direction: column!important;}\r\n    #flexboxcon[_ngcontent-%COMP%]{width: 90%;}\r\n    #flexboxcon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:2vh;margin-bottom: 2vh; flex-direction: row!important;}\r\n    #skill3[_ngcontent-%COMP%], #skill6[_ngcontent-%COMP%]{margin-bottom: -2vh !important; margin-top: -2vh !important;}\r\n    #skill9[_ngcontent-%COMP%]{margin-top: -2vh !important;}\r\n    .kontentnazwa[_ngcontent-%COMP%]{display: none !important;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdGFjay9zdGFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksa0JBQWtCLENBQUMsbURBQW1ELENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsc0JBQXNCLEVBQUUsZ0NBQWdDLEVBQUUsOENBQThDLEVBQUUsZ0JBQWdCLENBQUM7O0FBRXJQLGVBQWUsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7O0FBRTNFO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTs7O0lBR1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUlBLFFBQVEsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQzs7QUFDOUUsUUFBUSx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUM7O0FBQy9ELFFBQVEsMEJBQTBCLENBQUMsT0FBTyxDQUFDOztBQUMzQyxRQUFRLGtDQUFrQyxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQzs7QUFDeEUsUUFBUSx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUM7O0FBQy9ELFFBQVEseUJBQXlCLENBQUMsT0FBTyxDQUFDOztBQUMxQyxRQUFRLHdCQUF3QixDQUFDLE9BQU8sQ0FBQzs7QUFDekMsUUFBUSx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUM7O0FBQy9ELFFBQVEseUJBQXlCLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQjs7QUFFbEY7SUFDSSxZQUFZLEVBQUUsY0FBYyxFQUFFLDZCQUE2QixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEI7SUFDMUgsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFJQSxrQkFBa0IsZUFBZSxFQUFFLDBCQUEwQixDQUFDOztBQUM5RCxrQkFBa0IsZUFBZSxFQUFFLDBCQUEwQixDQUFDOztBQUM5RCxrQkFBa0IsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztBQUMvRCxrQkFBa0IsZUFBZSxFQUFFLDBDQUEwQyxDQUFDOztBQUM5RSxrQkFBa0IsZUFBZSxFQUFFLDBCQUEwQixDQUFDOztBQUM5RCxrQkFBa0IsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztBQUMvRCxrQkFBa0IsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztBQUMvRCxrQkFBa0IsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztBQUMvRCxrQkFBa0IsZUFBZSxFQUFFLDJCQUEyQixDQUFDOztBQUcvRDtJQUNJLFNBQVMsZ0NBQWdDLENBQUM7SUFDMUMsWUFBWSxVQUFVLENBQUM7SUFDdkIsZ0JBQWdCLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSw2QkFBNkIsQ0FBQztJQUNqRixpQkFBaUIsOEJBQThCLEVBQUUsMkJBQTJCLENBQUM7SUFDN0UsUUFBUSwyQkFBMkIsQ0FBQztJQUNwQyxjQUFjLHdCQUF3QixDQUFDO0FBQzNDIiwiZmlsZSI6ImFwcC9zdGFjay9zdGFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2tvbnRlbmVydjN7dGV4dC1hbGlnbjogY2VudGVyO2JveC1zaGFkb3c6IGluc2V0IDBweCAwcHggODFweCA0cHggcmdiYSg2OSw0Myw2OSwxKTt3aWR0aDogMTAwJTtoZWlnaHQ6YXV0bzsgZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBiYWNrZ3JvdW5kLWNvbG9yOnJnYigzNCwgMzQsIDU5KTsgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTsgbWFyZ2luLWJvdHRvbTogMDt9XHJcblxyXG4ja29udGVuZXJ2MyBoMXtjb2xvcjp3aGl0ZTttYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDIlOyBtYXJnaW4tYm90dG9tOiAyJTt9XHJcblxyXG4jZmxleGJveGNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1pbi13aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2ZsZXhib3hjb24gZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogY2FsYygwLjV2dyArIDAuNXZoKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kd2FvYm9re1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIFxyXG59XHJcblxyXG4uamVkZW5kbHVnaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbiNza2lsbDF7YmFja2dyb3VuZC1jb2xvcjojZmM2YzVjOyBmbGV4OiAxOyBib3JkZXItcmFkaXVzOiAxMHB4OyBkaXNwbGF5OiBmbGV4O31cclxuI3NraWxsMntiYWNrZ3JvdW5kLWNvbG9yOiAjZTM0YzI2O2ZsZXg6IDE7IGJvcmRlci1yYWRpdXM6IDEwcHg7fVxyXG4jc2tpbGwze2JhY2tncm91bmQtY29sb3I6IFx0IzgwMDAwMDtmbGV4OiAxO31cclxuI3NraWxsNHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDgzLCAxMzkpO2ZsZXg6IDE7IGJvcmRlci1yYWRpdXM6IDEwcHg7fVxyXG4jc2tpbGw1e2JhY2tncm91bmQtY29sb3I6ICMyNjRkZTQ7ZmxleDogMTsgYm9yZGVyLXJhZGl1czogMTBweDt9XHJcbiNza2lsbDZ7YmFja2dyb3VuZC1jb2xvcjogIzIxNzU5YjtmbGV4OiAxO31cclxuI3NraWxsN3tiYWNrZ3JvdW5kLWNvbG9yOiMwMDdhY2M7ZmxleDogMTt9XHJcbiNza2lsbDh7YmFja2dyb3VuZC1jb2xvcjogI0YwREI0RjtmbGV4OiAxOyBib3JkZXItcmFkaXVzOiAxMHB4O31cclxuI3NraWxsOXtiYWNrZ3JvdW5kLWNvbG9yOiAjNEI4QkJFO2ZsZXg6IDE7IGJvcmRlci1yYWRpdXM6IDEwcHg7IG1hcmdpbi1ib3R0b206IDJ2aH1cclxuXHJcbi5rb250ZW50bmF6d2F7IFxyXG4gICAgbWFyZ2luOiBhdXRvOyBmb250LXNpemU6IDBweDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuI3NraWxsMTpob3ZlciBkaXZ7Zm9udC1zaXplOiA1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiNmYzNjMjdjYjt9XHJcbiNza2lsbDI6aG92ZXIgZGl2e2ZvbnQtc2l6ZTogNTBweDsgYmFja2dyb3VuZC1jb2xvcjojYTEyMDAwZGE7fVxyXG4jc2tpbGwzOmhvdmVyIGRpdntmb250LXNpemU6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6XHQjYzcwMDAwYjI7fVxyXG4jc2tpbGw0OmhvdmVyIGRpdntmb250LXNpemU6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDU2LCA1NiwgMTA3LCAwLjg5KTt9XHJcbiNza2lsbDU6aG92ZXIgZGl2e2ZvbnQtc2l6ZTogNTBweDsgYmFja2dyb3VuZC1jb2xvcjojMDEyM2E3ZGU7fVxyXG4jc2tpbGw2OmhvdmVyIGRpdntmb250LXNpemU6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwZTU0NzRjNDt9XHJcbiNza2lsbDc6aG92ZXIgZGl2e2ZvbnQtc2l6ZTogNDBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwNTE4NmM1O31cclxuI3NraWxsODpob3ZlciBkaXZ7Zm9udC1zaXplOiA0MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRhODIyY2U7fVxyXG4jc2tpbGw5OmhvdmVyIGRpdntmb250LXNpemU6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICMyNjY1OTllMzt9XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmR3YW9ib2t7ZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7fVxyXG4gICAgI2ZsZXhib3hjb257d2lkdGg6IDkwJTt9XHJcbiAgICAjZmxleGJveGNvbiBkaXZ7bWFyZ2luLXRvcDoydmg7bWFyZ2luLWJvdHRvbTogMnZoOyBmbGV4LWRpcmVjdGlvbjogcm93IWltcG9ydGFudDt9XHJcbiAgICAjc2tpbGwzLCAjc2tpbGw2e21hcmdpbi1ib3R0b206IC0ydmggIWltcG9ydGFudDsgbWFyZ2luLXRvcDogLTJ2aCAhaW1wb3J0YW50O31cclxuICAgICNza2lsbDl7bWFyZ2luLXRvcDogLTJ2aCAhaW1wb3J0YW50O31cclxuICAgIC5rb250ZW50bmF6d2F7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O31cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stack',
                templateUrl: './stack.component.html',
                styleUrls: ['./stack.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/stopka/stopka.component.ts":
/*!********************************************!*\
  !*** ./src/app/stopka/stopka.component.ts ***!
  \********************************************/
/*! exports provided: StopkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopkaComponent", function() { return StopkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StopkaComponent {
    constructor() { }
    ngOnInit() {
    }
}
StopkaComponent.ɵfac = function StopkaComponent_Factory(t) { return new (t || StopkaComponent)(); };
StopkaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StopkaComponent, selectors: [["app-stopka"]], decls: 2, vars: 0, template: function StopkaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cyprian Kalina \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 1.5em;\r\n    font-size: 1em;\r\n    background-color: rgb(41, 39, 49);\r\n    text-align: center;\r\n    color:rgb(68, 67, 77);\r\n    line-height: 1.5em;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdG9wa2Evc3RvcGthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImFwcC9zdG9wa2Evc3RvcGthLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzksIDQ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYig2OCwgNjcsIDc3KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopkaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stopka',
                templateUrl: './stopka.component.html',
                styleUrls: ['./stopka.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AngularProjekty\Portfolio\Portfoliov4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map