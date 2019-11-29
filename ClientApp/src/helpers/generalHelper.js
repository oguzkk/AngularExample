"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_component_1 = require("../pages/customer/customer.component");
var account_component_1 = require("../pages/account/account.component");
var GeneralHelper = /** @class */ (function () {
    function GeneralHelper() {
    }
    GeneralHelper.findPage = function (pageName) {
        return this.Pages[pageName];
    };
    GeneralHelper.Pages = { accountPage: account_component_1.AccountPage, customerPage: customer_component_1.CustomerPage };
    return GeneralHelper;
}());
exports.default = GeneralHelper;
//# sourceMappingURL=generalHelper.js.map