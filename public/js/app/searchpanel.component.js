"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_component_1 = require('./dropdown.component');
var SearchPanelComponent = (function () {
    function SearchPanelComponent() {
        this.currenciesList = ["AUD", "EUR", "YEN", "LKR", "USD", "NZD"];
    }
    SearchPanelComponent = __decorate([
        core_1.Component({
            selector: 'oz-searchpanel',
            template: "  <div class=\"panel-searchbar panel-success\">\n                            <div class=\"panel-body\">\n                                <div class=\"col-sm-3\">\n                                    <p style=\"font-size: 30px\">I want to convert</p>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <input type=\"text\" class=\"form-control input-lg\" value=\"1000\" />\n                                </div>\n                                <div class=\"col-sm-2\">\n                                        <oz-dropdown (select)=\"sourceCurrency = $event\" [values]=\"currenciesList\"></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-1\" style=\"font-size: 30px\">To</div>\n                                <div class=\"col-sm-2\">\n                                        <oz-dropdown (select)=\"convertToCurrency = $event\" [values]=\"currenciesList\"></oz-dropdown>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <button type=\"button\" class=\"btn btn-success btn-lg\">Compare</button>\n                                </div>\n                            </div>\n                        </div>\n",
            directives: [dropdown_component_1.DropdownComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
exports.SearchPanelComponent = SearchPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLG1DQUErQixzQkFFL0IsQ0FBQyxDQUZvRDtBQTJCckQ7SUFBQTtRQUdJLG1CQUFjLEdBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUE3QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsdXpDQW9CWDtZQUNDLFVBQVUsRUFBQyxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7OzRCQUFBO0lBS0YsMkJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDRCQUFvQix1QkFJaEMsQ0FBQSIsImZpbGUiOiJzZWFyY2hwYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0e0Ryb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuL2Ryb3Bkb3duLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3otc2VhcmNocGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgICA8ZGl2IGNsYXNzPVwicGFuZWwtc2VhcmNoYmFyIHBhbmVsLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4XCI+SSB3YW50IHRvIGNvbnZlcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnXCIgdmFsdWU9XCIxMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvei1kcm9wZG93biAoc2VsZWN0KT1cInNvdXJjZUN1cnJlbmN5ID0gJGV2ZW50XCIgW3ZhbHVlc109XCJjdXJyZW5jaWVzTGlzdFwiPjwvb3otZHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIj5UbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG96LWRyb3Bkb3duIChzZWxlY3QpPVwiY29udmVydFRvQ3VycmVuY3kgPSAkZXZlbnRcIiBbdmFsdWVzXT1cImN1cnJlbmNpZXNMaXN0XCI+PC9vei1kcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWxnXCI+Q29tcGFyZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5gLFxyXG4gIGRpcmVjdGl2ZXM6W0Ryb3Bkb3duQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFuZWxDb21wb25lbnQge1xyXG4gICAgc291cmNlQ3VycmVuY3k6c3RyaW5nO1xyXG4gICAgY29udmVydFRvQ3VycmVuY3k6c3RyaW5nO1xyXG4gICAgY3VycmVuY2llc0xpc3Q6YW55W10gPSBbXCJBVURcIiwgXCJFVVJcIiwgXCJZRU5cIiwgXCJMS1JcIiwgXCJVU0RcIiwgXCJOWkRcIl07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9