(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loans-identityAttestation-firstIdentity-firstIdentity~pages-loans-identityAttestation-fourthIn~9f429b38"],{

/***/ "0K6Y":
/*!***************************************************************************************************!*\
  !*** ./src/components/addressPicker/addressPicker.vue?vue&type=template&id=466a618a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./addressPicker.vue?vue&type=template&id=466a618a&scoped=true& */ "D1tr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "4dk5":
/*!**************************!*\
  !*** ./src/api/loans.js ***!
  \**************************/
/*! exports provided: findProjectList, findPlanList, yminstallmentplan, ymuserorder, getCardInfo, cardInfoSub, getProject, getUserOrderInfo, videoSub, getUserInfo, userInfoSub, subBankCard, getBankCard, listSearch, confirmContract, supplyPic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProjectList", function() { return findProjectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPlanList", function() { return findPlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yminstallmentplan", function() { return yminstallmentplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ymuserorder", function() { return ymuserorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardInfo", function() { return getCardInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardInfoSub", function() { return cardInfoSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrderInfo", function() { return getUserOrderInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoSub", function() { return videoSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoSub", function() { return userInfoSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subBankCard", function() { return subBankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBankCard", function() { return getBankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearch", function() { return listSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmContract", function() { return confirmContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplyPic", function() { return supplyPic; });
/* harmony import */ var _common_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/request.js */ "y0tt");
//此处为扫码申请贷款分期的api-对应的pages为loans文件夹


//根据门店id查找项目列表
function findProjectList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/findProjectList',
    method: 'post',
    data: data
  });
}

//根据门店id-项目id查找分期方案列表
function findPlanList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/findPlanList',
    method: 'post',
    data: data
  });
}
//分期方案实体-id查询
function yminstallmentplan(id) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/ym/yminstallmentplan/get/' + id,
    method: 'get'
  });
}
//用户订单信息-申请分期
function ymuserorder(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/add',
    method: 'post',
    data: data
  });
}
//身份证信息获取
function getCardInfo() {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/getCardInfo',
    method: 'post'
  });
}
//身份证信息提交
function cardInfoSub(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/cardInfoSub',
    method: 'post',
    data: data
  });
}
//录制模板信息-项目id查询
function getProject(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/ym/ymrecordmould/getProject',
    method: 'post',
    data: data
  });
}
//用户订单信息-id查询
function getUserOrderInfo(id) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/finance/user/ymuserorder/get/".concat(id),
    method: 'get'
  });
}
//视频录制提交
function videoSub(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/videoSub',
    method: 'post',
    data: data
  });
}
//基本信息获取
function getUserInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/getUserInfo',
    method: 'post',
    data: data
  });
}
//基本信息提交
function userInfoSub(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/userInfoSub',
    method: 'post',
    data: data
  });
}
//确认申请,绑定银行卡
function subBankCard(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/subBankCard',
    method: 'post',
    data: data
  });
}
//银行卡信息获取
function getBankCard(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/getBankCard',
    method: 'post',
    data: data
  });
}

//用户订单信息-分页查询
function listSearch(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/list',
    method: 'post',
    data: data
  });
}

//项目确认合同签署
function confirmContract(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/confirm',
    method: 'post',
    data: data
  });
}

//补充资料
function supplyPic(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserorder/supplyPic',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "ANbb":
/*!*********************************************************************************!*\
  !*** ./src/components/addressPicker/addressPicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--13-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./addressPicker.vue?vue&type=script&lang=js& */ "Pp9f");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_addressPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "D1tr":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/components/addressPicker/addressPicker.vue?vue&type=template&id=466a618a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uPicker: __webpack_require__(/*! uview-ui/components/u-picker/u-picker.vue */ "Zl2e").default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: "addressPicker" },
    [
      _c("u-picker", {
        ref: "uPicker",
        attrs: {
          show: _vm.shows,
          defaultIndex: _vm.defaultIndex,
          columns: _vm.columns,
          keyName: "name",
        },
        on: {
          change: function ($event) {
            arguments[0] = $event = _vm.$handleEvent($event)
            _vm.changeHandler.apply(void 0, arguments)
          },
          cancel: function ($event) {
            arguments[0] = $event = _vm.$handleEvent($event)
            _vm.cancel.apply(void 0, arguments)
          },
          confirm: function ($event) {
            arguments[0] = $event = _vm.$handleEvent($event)
            _vm.confirm.apply(void 0, arguments)
          },
        },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "KTTK":
/*!***************************!*\
  !*** ./src/api/common.js ***!
  \***************************/
/*! exports provided: dictionary_config_olist, getOssUploadUrl, getSign, getBySpmkey, getArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionary_config_olist", function() { return dictionary_config_olist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOssUploadUrl", function() { return getOssUploadUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSign", function() { return getSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBySpmkey", function() { return getBySpmkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArea", function() { return getArea; });
/* harmony import */ var _common_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/request.js */ "y0tt");
//公共api

//数据字典---多pkey查询
function dictionary_config_olist(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/config/newappdic/findMapList',
    method: 'get',
    data: data
  });
}
//文件地址获取，返回文件上传路径，多个逗号隔开
function getOssUploadUrl(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/uploadFiles/getOssUploadUrl',
    method: 'post',
    data: data
  });
}
//公众号扫一扫获取签名
function getSign(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/finance/user/ymuserinfo/getSign',
    method: 'post',
    data: data
  });
}
//网站协议查询
function getBySpmkey(data) {
  // 网站协议
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/appConfig/getBySpmkey',
    method: 'get',
    data: data
  });
}
//地区三级联动
function getArea() {
  // 网站协议
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/config/newappdic/cascaderList',
    method: 'get'
  });
}

/***/ }),

/***/ "Pp9f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/components/addressPicker/addressPicker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "HaE+");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "FNk8");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/json/address.json */ "VeiF");
var _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/utils/json/address.json */ "VeiF", 1);
/* harmony import */ var _api_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/common.js */ "KTTK");






//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addressPicker",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    defaultIndex: {
      type: Array,
      default: function _default() {
        return [0, 0, 0];
      }
    }
  },
  watch: {
    show: {
      handler: function handler(newVal) {
        this.shows = newVal;
      },
      //   deep: true, //true 深度监听
      immediate: true //声明后立刻调用
    }
  },
  data: function data() {
    return {
      shows: false,
      columns: [],
      //省份数据显示，三级联动需要三维数组，展示初始数据
      columnData: [],
      //市数据
      columnDatas: [] //区地址
    };
  },
  created: function created() {
    this.initDataPicker();
  },
  mounted: function mounted() {
    console.log('s数据字典');
    this.getAreaFn();
  },
  methods: {
    //获取字典三级地区联动的数据
    getAreaFn: function getAreaFn() {
      return Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_common_js__WEBPACK_IMPORTED_MODULE_7__["getArea"])();
            case 3:
              res = _context.sent;
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('err', _context.t0);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    // 回调参数为包含columnIndex、value、values
    confirm: function confirm(e) {
      console.log('confirm', e);
      var address = '';
      if (e.value.length > 0) {
        address = {
          province: e.value[0].name,
          city: e.value[1].name,
          area: e.value[2].name
        };
        console.log('address', address);
      }
      // this.shows = false
      this.$emit("confirm", address);
    },
    // 取消
    cancel: function cancel() {
      //this.shows = false
      this.$emit("confirm", false);
    },
    // 初始化省份列表
    initDataPicker: function initDataPicker() {
      var _this = this;
      //此处的province主要用作数据的初始化，即刚打开就需要进行展示的数据，这个跟第一条省份数据相关，我的第一条是北京市，所以需要columns中的三维数组，第一维度是省份数据数组，第二维度是市数据数组，第三维度是区数据数组
      var province = []; //初始数据需要展示的省份
      var province1 = [{
        name: '市辖区',
        code: '1101'
      }]; //因为第一个市北京市，所以就直接添加北京市下辖的直辖市了 也即初始数据需要展示的市，北京市只有一个市辖区
      var province2 = []; //初始数据需要展示的区域数据，也即是 北京市市辖区内的区
      _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item) {
        province.push(item);
      });
      _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6__[0].children[0].children.map(function (item) {
        province2.push(item);
      });
      //省数据 因为要做数据初始化，所以是三维数组 
      // 数据格式 [ [所有的省份数据:{},{}] , [第一个省份下的所有的市:{},{},{}] , [第一个市下面所有的区:{},{},{}] ]
      this.columns.push(province);
      this.columns.push(province1);
      this.columns.push(province2);
      // 市数据数组，筛选address.json文件，将全国所有省下面的市数据放入数组
      // 格式[ [第一个省下面所有市,{},{},{}] , [第二个省下面所有市{},{},{}] , [第三个省下面所有市{},{},{}] ] 注意，以上的第一第二对应着 columns[0] 的数据
      _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item) {
        var city = [];
        item.children.map(function (item1) {
          city.push(item1);
        });
        _this.columnData.push(city);
      });
      //区数据数组
      //数据格式: [ 所有省下面所有市的所有区 [ 第一个省下面所有市的区:[ [第一个省下面第一个市的所有区] , [第一个省下面第二个市的所有区] ,]   ,   [ 第二个省下面所有市的区:[ [第二个省下面第一个市的所有区] , [第二个省下面第二个市的所有区] ,]   ]
      var area = [];
      _utils_json_address_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item, index) {
        var area1 = []; //省下面所有市的初始化
        item.children.map(function (item1) {
          area = []; //市下面的区初始化
          item1.children.map(function (item2) {
            area.push(item2);
          });
          area1.push(area); // 每循环一个市，添加该市下面的所有区
        });

        _this.columnDatas.push(area1); // 每循环一个省，添加该省下面的所有市
      });
    },
    changeHandler: function changeHandler(e) {
      //城市选择时触发
      var columnIndex = e.columnIndex,
        value = e.value,
        values = e.values,
        index = e.index,
        indexs = e.indexs,
        _e$picker = e.picker,
        picker = _e$picker === void 0 ? this.$refs.uPicker : _e$picker;
      // 当第一列值发生变化时，变化第二列和第三列的值（省份变更，市和区跟着变更）
      if (columnIndex === 0) {
        // 判断当前变更的是省还是市还是区
        // picker为选择器this实例，变化第二列对应的选项
        picker.setColumnValues(1, this.columnData[index]); //设置市为该省下面的所有市，index是当前省在省份数组的下标，对应市数组中的下表就是 该省下面的所有市 的数据
        picker.setColumnValues(2, this.columnDatas[index][0]); // 设置区域为该省下面第一个市下面的所有区域
      }

      if (columnIndex === 1) {
        // 当第二列发生变化 变化对应的第三列 
        picker.setColumnValues(2, this.columnDatas[indexs[0]][index]); //同上
      }
    }
  }
});

/***/ }),

/***/ "VeiF":
/*!*************************************!*\
  !*** ./src/utils/json/address.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {


/***/ }),

/***/ "nRif":
/*!********************************************************!*\
  !*** ./src/components/addressPicker/addressPicker.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addressPicker.vue?vue&type=template&id=466a618a&scoped=true& */ "0K6Y");
/* harmony import */ var _addressPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addressPicker.vue?vue&type=script&lang=js& */ "ANbb");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs




/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addressPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "466a618a",
  null,
  false,
  _addressPicker_vue_vue_type_template_id_466a618a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/addressPicker/addressPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);