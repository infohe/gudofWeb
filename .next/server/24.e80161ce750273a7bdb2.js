exports.ids = [24];
exports.modules = {

/***/ "VcBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return active; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ppZR");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr7U");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mN36");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Z8Mf");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zkM6");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("RNiq");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a;



function SideNav({
  names,
  toolType,
  key2
}) {
  const [array, setArray] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  const [ToolType, setTooltype] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(toolType);

  const handleChangeTrue = () => {
    let newTooltype = ToolType;
    newTooltype.map(item => item.show = true);
    setTooltype(newTooltype);
  };

  react__WEBPACK_IMPORTED_MODULE_10___default.a.useEffect(() => console.log("type", ToolType));

  const handleSearch = event => {
    handleChangeTrue();
    setArray(tools.filter(item => event.target.value !== "" && item.display.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1));
    if (event.target.value === "") setArray(tools);
    console.log(array);
  };

  const [tools, setTools] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  return __jsx("div", null, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginTop: "60px"
    },
    tabPosition: "top",
    defaultActiveKey: key2
  }, ToolType !== undefined && ToolType.map(type => __jsx(TabPane, {
    tab: type.name,
    key: type.id
  }, __jsx("div", {
    style: {
      marginLeft: "20px",
      marginRight: "20px"
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      marginLeft: "10px",
      marginRight: "30px"
    },
    placeholder: "Search",
    prefix: __jsx("i", {
      style: {
        marginTop: "-5px"
      },
      className: "material-icons"
    }, "search"),
    onInput: e => handleSearch(e)
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: `${item.category === "conversion" ? active(item.name) : active(item.display)}`,
    style: {
      flex: 1
    }
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Instrumentation/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Electrical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Mechanical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)))))))))));
}
const active = name => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();

  if (router.query.name === Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(name)) {
    return "activecard";
  } else return "carditems1";
};

/***/ })

};;