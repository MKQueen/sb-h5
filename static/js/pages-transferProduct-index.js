(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transferProduct-index"],{

/***/ "Eikc":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/transferProduct/index.vue?vue&type=template&id=1e5d4b5e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uModal: __webpack_require__(/*! uview-ui/components/u-modal/u-modal.vue */ "B4zQ").default,
    uPopup: __webpack_require__(/*! uview-ui/components/u-popup/u-popup.vue */ "3yU4").default,
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ "+Guo").default,
    uLoadingIcon:
      __webpack_require__(/*! uview-ui/components/u-loading-icon/u-loading-icon.vue */ "NpaR").default,
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
    { staticClass: "container" },
    [
      _c("PageNav", {
        attrs: {
          title: "转赠",
          backPath: _vm.successIsShow ? "/pages/user/myGoodsList" : "",
        },
      }),
      _c(
        "v-uni-view",
        { staticClass: "main" },
        [
          _c("v-uni-view", { staticClass: "productName" }, [
            _vm._v(_vm._s(_vm.myGoodsDetails.collName)),
          ]),
          _c("v-uni-view", { staticClass: "codeNumb" }, [
            _vm._v("#" + _vm._s(_vm.myGoodsDetails.sortSn)),
          ]),
          _c(
            "v-uni-view",
            { staticClass: "phoneBox" },
            [
              _c("v-uni-view", [_vm._v("请输入受赠方手机号码")]),
              _c("v-uni-input", {
                staticStyle: { "margin-bottom": "40rpx" },
                attrs: {
                  type: "number",
                  maxlength: "11",
                  placeholder: "请输入手机号码",
                },
                on: {
                  input: function ($event) {
                    arguments[0] = $event = _vm.$handleEvent($event)
                    _vm.dataChange(1)
                  },
                },
                model: {
                  value: _vm.transfer.phone,
                  callback: function ($$v) {
                    _vm.$set(_vm.transfer, "phone", $$v)
                  },
                  expression: "transfer.phone",
                },
              }),
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: "phoneBox" },
            [
              _c("v-uni-view", [_vm._v("请输入您的交易密码")]),
              _c("v-uni-input", {
                attrs: {
                  type: "number",
                  maxlength: "6",
                  password: true,
                  placeholder: "请输入交易密码",
                },
                on: {
                  input: function ($event) {
                    arguments[0] = $event = _vm.$handleEvent($event)
                    _vm.dataChange(2)
                  },
                },
                model: {
                  value: _vm.transfer.pass,
                  callback: function ($$v) {
                    _vm.$set(_vm.transfer, "pass", $$v)
                  },
                  expression: "transfer.pass",
                },
              }),
              _c(
                "v-uni-button",
                {
                  class: _vm.transfer.isActive ? "submit" : "",
                  attrs: { type: "default" },
                  on: {
                    click: function ($event) {
                      arguments[0] = $event = _vm.$handleEvent($event)
                      _vm.submit()
                    },
                  },
                },
                [_vm._v("提交")]
              ),
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: "content" },
            [
              _c("v-uni-view", { staticClass: "title" }, [_vm._v("转赠说明")]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v(
                  "1.区块链上转移需要一定时间，如因区块链上拥堵长时间未响应，可先行返回耐心等待，无需重复转赠；"
                ),
              ]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v("2.数字出版产品一旦转赠提交后无法撤销；"),
              ]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v("3.转赠只能转赠给实名认证且满14周岁的用户；"),
              ]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v("4.严禁以任何形式炒作数字出版产品。"),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "v-uni-view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.errMsgShow,
              expression: "errMsgShow",
            },
          ],
          staticClass: "toastBox",
        },
        [_vm._v(_vm._s(_vm.errMsg))]
      ),
      _vm.successIsShow
        ? _c(
            "v-uni-view",
            { staticClass: "successMain" },
            [
              _c("v-uni-image", {
                attrs: {
                  src: __webpack_require__(/*! ../../static/detail/paySucces.png */ "mF4/"),
                  mode: "widthFix",
                },
              }),
              _c("v-uni-view", { staticClass: "title" }, [
                _vm._v("转增信息已发送"),
              ]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v("转赠信息已推送至受赠人帐号，待受赠人确认，"),
              ]),
              _c("v-uni-view", { staticClass: "txt" }, [
                _vm._v("订单状态请到赠送记录查看!"),
              ]),
            ],
            1
          )
        : _vm._e(),
      _c(
        "u-modal",
        {
          attrs: {
            show: _vm.setPasShow,
            width: "600rpx",
            showCancelButton: true,
            confirmColor: "#2C1769",
          },
          on: {
            cancel: function ($event) {
              arguments[0] = $event = _vm.$handleEvent($event)
              _vm.setPasShow = false
            },
            confirm: function ($event) {
              arguments[0] = $event = _vm.$handleEvent($event)
              _vm.confirm.apply(void 0, arguments)
            },
          },
        },
        [
          _c(
            "v-uni-view",
            { staticClass: "slot-content" },
            [
              _c("v-uni-rich-text", {
                staticStyle: { "text-align": "center" },
                attrs: { nodes: "请先前往设置交易密码" },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "u-popup",
        {
          attrs: {
            show: _vm.transferShow,
            "bg-color": "#141414",
            mode: "bottom",
          },
        },
        [
          _c(
            "v-uni-view",
            { staticClass: "modeTitle" },
            [
              _c("v-uni-text", [_vm._v("确认转赠")]),
              _c("u-icon", {
                attrs: { name: "close", color: "#323232", size: "34rpx" },
                on: {
                  click: function ($event) {
                    arguments[0] = $event = _vm.$handleEvent($event)
                    _vm.transferShow = false
                  },
                },
              }),
            ],
            1
          ),
          _c(
            "v-uni-view",
            {
              staticClass: "shop-tips",
              staticStyle: { "min-height": "420rpx" },
            },
            [
              _vm.payData.showType == 0
                ? _c(
                    "v-uni-view",
                    { staticClass: "tip-image step1" },
                    [
                      _c("u-loading-icon", {
                        attrs: {
                          "inactive-color": "red",
                          size: "80rpx",
                          color: "#352070",
                        },
                      }),
                      _c("v-uni-text", [_vm._v("转赠请求中...")]),
                    ],
                    1
                  )
                : _c(
                    "v-uni-view",
                    { staticClass: "tip-image step2" },
                    [
                      _c("v-uni-view", { staticClass: "tips" }, [
                        _vm._v("转赠后需受赠人进行确认接收，方可转赠成功！"),
                      ]),
                      _c(
                        "v-uni-view",
                        { staticClass: "goods" },
                        [
                          _c("v-uni-image", {
                            staticClass: "img",
                            attrs: {
                              src: _vm.userObj.headPortraitUrl,
                              mode: "aspectFill",
                            },
                          }),
                          _c(
                            "v-uni-view",
                            { staticClass: "info" },
                            [
                              _c("v-uni-view", { staticClass: "name" }, [
                                _vm._v(
                                  "受赠人：" + _vm._s(_vm.userObj.username)
                                ),
                              ]),
                              _c("v-uni-text", [
                                _vm._v(
                                  "产品名称：" +
                                    _vm._s(_vm.myGoodsDetails.collName)
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: "items" },
                        [
                          _c("v-uni-text", [_vm._v("转赠数量")]),
                          _c("v-uni-view", { staticClass: "address" }, [
                            _vm._v("1"),
                          ]),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: "items" },
                        [
                          _c("v-uni-text", [_vm._v("转赠服务费")]),
                          _c("v-uni-view", { staticClass: "price" }, [
                            _vm._v("￥" + _vm._s(_vm.payMoney)),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
              _vm.payData.showType == 2
                ? _c(
                    "v-uni-view",
                    { staticClass: "footBn" },
                    [
                      _c(
                        "v-uni-view",
                        {
                          staticClass: "style2",
                          on: {
                            click: function ($event) {
                              arguments[0] = $event = _vm.$handleEvent($event)
                              _vm.payment.apply(void 0, arguments)
                            },
                          },
                        },
                        [_vm._v("立即转赠")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "ILNr":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/transferProduct/index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "S60T");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\nuni-page-body[data-v-1e5d4b5e] {\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n}\nbody.?%PAGE?%[data-v-1e5d4b5e]{\n  background-color: #fff;\n}\n.container[data-v-1e5d4b5e] {\n  min-height: 100%;\n  width: 100%;\n  height: 100%;\n  padding-top: %?120?%;\n  background-color: #fff;\n}\n.container .modeTitle[data-v-1e5d4b5e] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: %?32?%;\n  padding: 0 %?40?%;\n  color: #323232;\n  height: %?100?%;\n  background-color: #fff;\n}\n.container .shop-tips[data-v-1e5d4b5e] {\n  background-color: #fff;\n  min-height: %?760?%;\n  position: relative;\n}\n.container .shop-tips .step1[data-v-1e5d4b5e] {\n  padding-top: %?170?%;\n}\n.container .shop-tips .step1 uni-text[data-v-1e5d4b5e] {\n  display: block;\n  margin-top: %?30?%;\n  color: #333;\n  font-size: %?30?%;\n}\n.container .shop-tips .step2[data-v-1e5d4b5e] {\n  padding: 0 %?40?%;\n  padding-bottom: %?190?%;\n}\n.container .shop-tips .step2 .tips[data-v-1e5d4b5e] {\n  font-size: %?24?%;\n  color: #8D8D8D;\n  line-height: %?34?%;\n  margin-top: %?10?%;\n  margin-bottom: %?20?%;\n  text-align: left;\n  padding-bottom: %?20?%;\n  border-bottom: 1px solid #eee;\n}\n.container .shop-tips .step2 .goods[data-v-1e5d4b5e] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: %?26?%;\n}\n.container .shop-tips .step2 .goods .info[data-v-1e5d4b5e] {\n  flex: 1%;\n  text-align: left;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  min-height: %?128?%;\n  padding: %?10?% 0;\n  padding-left: %?20?%;\n}\n.container .shop-tips .step2 .goods .info .name[data-v-1e5d4b5e] {\n  font-size: %?34?%;\n  color: #111;\n  width: 100%;\n}\n.container .shop-tips .step2 .goods .info uni-text[data-v-1e5d4b5e] {\n  font-size: %?24?%;\n  color: #666;\n}\n.container .shop-tips .step2 .goods uni-image[data-v-1e5d4b5e] {\n  width: %?128?%;\n  height: %?128?%;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.container .shop-tips .step2 .items[data-v-1e5d4b5e] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: %?64?%;\n  font-size: %?28?%;\n}\n.container .shop-tips .step2 .items > uni-text[data-v-1e5d4b5e] {\n  color: #8D8D8D;\n}\n.container .shop-tips .step2 .items .address[data-v-1e5d4b5e], .container .shop-tips .step2 .items .myMoney[data-v-1e5d4b5e] {\n  color: #323232;\n}\n.container .shop-tips .step2 .items .price[data-v-1e5d4b5e] {\n  color: #2C1769;\n  font-weight: 700;\n}\n.container .shop-tips .step2 .payTypeBox .payTitle[data-v-1e5d4b5e] {\n  text-align: left;\n  font-size: %?28?%;\n  color: #323232;\n  font-weight: 500;\n  padding-bottom: %?16?%;\n  border-bottom: 1px solid #EEEEEE;\n  margin-top: %?30?%;\n}\n.container .shop-tips .step2 .payTypeBox .payItem[data-v-1e5d4b5e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: %?30?%;\n}\n.container .shop-tips .step2 .payTypeBox .payItem > uni-view[data-v-1e5d4b5e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: %?28?%;\n}\n.container .shop-tips .step2 .payTypeBox .payItem > uni-view uni-image[data-v-1e5d4b5e] {\n  width: %?52?%;\n  margin-right: %?16?%;\n}\n.container .shop-tips .step2 .payTypeBox .payItem > uni-image[data-v-1e5d4b5e] {\n  width: %?36?%;\n}\n.container .shop-tips .footBn[data-v-1e5d4b5e] {\n  width: 100%;\n  padding: 0 %?40?%;\n  position: absolute;\n  bottom: %?40?%;\n  left: 0;\n}\n.container .shop-tips .footBn > uni-view[data-v-1e5d4b5e] {\n  font-size: %?36?%;\n  color: #fff;\n  text-align: center;\n  line-height: %?100?%;\n  height: %?100?%;\n  border-radius: %?8?%;\n}\n.container .shop-tips .footBn .style1[data-v-1e5d4b5e] {\n  background-color: #999;\n}\n.container .shop-tips .footBn .style2[data-v-1e5d4b5e] {\n  background-color: #2C1769;\n}\n.container .shop-tips .tip-image[data-v-1e5d4b5e] {\n  width: 100%;\n  text-align: center;\n}\n.container .successMain[data-v-1e5d4b5e] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  background-color: #fff;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  padding-top: %?320?%;\n}\n.container .successMain uni-image[data-v-1e5d4b5e] {\n  width: %?116?%;\n  margin-bottom: %?32?%;\n}\n.container .successMain .title[data-v-1e5d4b5e] {\n  font-size: %?30?%;\n  color: #323232;\n  line-height: %?30?%;\n  padding-bottom: %?50?%;\n  font-weight: bold;\n}\n.container .successMain .txt[data-v-1e5d4b5e] {\n  padding-bottom: %?16?%;\n  line-height: %?24?%;\n  font-size: %?24?%;\n  color: #323232;\n}\n.container .toastBox[data-v-1e5d4b5e] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 99999;\n  width: auto;\n  max-width: %?600?%;\n  font-size: %?28?%;\n  padding: %?16?% %?30?%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #000;\n  border-radius: %?10?%;\n  color: #fff;\n}\n.container .main[data-v-1e5d4b5e] {\n  padding: 0 %?32?%;\n  width: 100%;\n  color: #323232;\n}\n.container .main .phoneBox[data-v-1e5d4b5e] {\n  width: 100%;\n}\n.container .main .phoneBox uni-input[data-v-1e5d4b5e] {\n  width: 100%;\n  height: %?96?%;\n  border-radius: %?8?%;\n  background: #F3F3F3;\n  border: 1px solid #F3F3F3;\n  padding: 0 %?26?%;\n  margin-bottom: %?80?%;\n  font-size: %?28?%;\n}\n.container .main .phoneBox uni-view[data-v-1e5d4b5e] {\n  font-size: %?28?%;\n  line-height: %?28?%;\n  margin-bottom: %?24?%;\n}\n.container .main .phoneBox uni-button[data-v-1e5d4b5e] {\n  height: %?96?%;\n  border-radius: %?8?%;\n  background-color: #D8D8D8;\n  line-height: %?96?%;\n  font-size: %?30?%;\n  color: #fff;\n}\n.container .main .phoneBox .submit[data-v-1e5d4b5e] {\n  background-color: #2C1769;\n}\n.container .main .phoneBox uni-button[data-v-1e5d4b5e]::after {\n  display: none;\n}\n.container .main .content[data-v-1e5d4b5e] {\n  padding-top: %?80?%;\n}\n.container .main .content .title[data-v-1e5d4b5e] {\n  font-size: %?28?%;\n  line-height: %?28?%;\n  margin-bottom: %?22?%;\n}\n.container .main .content .txt[data-v-1e5d4b5e] {\n  font-size: %?24?%;\n  color: #8d8d8d;\n  line-height: %?46?%;\n  text-align: justify;\n}\n.container .main .productName[data-v-1e5d4b5e] {\n  font-size: %?30?%;\n  line-height: %?30?%;\n  text-align: center;\n  margin-top: %?80?%;\n  margin-bottom: %?20?%;\n}\n.container .main .codeNumb[data-v-1e5d4b5e] {\n  font-size: %?32?%;\n  line-height: %?32?%;\n  text-align: center;\n  margin-bottom: %?80?%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "LI+l":
/*!**********************************************************************!*\
  !*** ./src/pages/transferProduct/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--13-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./index.vue?vue&type=script&lang=js& */ "R6w/");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "OF9/":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/transferProduct/index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-3!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& */ "u9fz");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "R6w/":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/transferProduct/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "rePB");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "Rm1S");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "ALS0");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/user.js */ "wk8/");
/* harmony import */ var _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/pageNav.vue */ "nHp4");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      payData: Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        orderId: "",
        payType: 1,
        showType: 2
      }, "orderId", ""),
      transferShow: false,
      setPasShow: false,
      transfer: {
        assetsId: "",
        phone: "",
        pass: "",
        isActive: false
      },
      errMsg: "",
      errMsgShow: false,
      successIsShow: false,
      myGoodsDetails: {
        metafile: {}
      },
      userObj: {},
      isWxOpen: false,
      payMoney: 0
    };
  },
  onLoad: function onLoad(opt) {
    this.getDetails(opt.id);
    this.getPayMoney();
    this.getConfig();
  },
  methods: {
    getPayMoney: function getPayMoney() {
      var _this = this;
      //获取转赠服务费
      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["nfttransferorderAcceptFee"])({}).then(function (res) {
        if (res.data.success) {
          _this.payMoney = res.data.obj;
        }
      }).catch(function (err) {});
    },
    confirm: function confirm() {
      //前往设置交易密码
      this.setPasShow = false;
      uni.navigateTo({
        url: "/pages/setting/payPassword"
      });
    },
    getConfig: function getConfig() {
      //判断是否为微信浏览器
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        // 微信中打开
        this.isWxOpen = true;
      } else {
        // 普通浏览器中打开
        this.isWxOpen = false;
      }
    },
    payment: function payment() {
      var _this2 = this;
      //支付转赠
      this.payData.showType = 0;
      var payPsw = this.hrymd5.md5(this.transfer.pass);
      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["transferorderAdd"])({
        phone: this.transfer.phone,
        payPsw: payPsw,
        assetsId: this.myGoodsDetails.id
      }).then(function (res) {
        if (res.data.success) {
          _this2.transfer = {
            assetsId: "",
            phone: "",
            pass: "",
            isActive: false
          };
          _this2.successIsShow = true;
          _this2.transferShow = false;
        } else {
          _this2.errMsg = res.data.msg;
          _this2.errMsgShow = true;
          _this2.errMsgHide();
        }
        _this2.payData.showType = 2;
      }).catch(function (err) {
        _this2.payData.showType = 2;
      });
      return;
      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["transferOrderBankPay"])({
        orderId: this.payData.orderId,
        type: this.payData.payType
      }).then(function (res) {
        if (res.data.success) {
          location.href = res.data.obj;
          // this.successIsShow = true;
          _this2.transferShow = false;
        } else {
          _this2.errMsg = res.data.msg;
          _this2.errMsgShow = true;
          _this2.errMsgHide();
          if (res.data.code == 801) {
            setTimeout(function () {
              uni.navigateTo({
                url: "/pages/setting/payPassword"
              });
            }, 1000);
          }
        }
      }).catch(function (err) {});
    },
    submit: function submit() {
      var _this3 = this;
      //下单
      var data = {};
      try {
        data = uni.getStorageSync('userObj');
      } catch (e) {
        // error
      }
      if (!data.payPsw) {
        this.setPasShow = true;
        return;
      }
      var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        reg1 = /^[0-9]{6}$/;
      if (!reg.test(this.transfer.phone)) {
        this.errMsg = "请输入正确的手机号!";
        this.errMsgShow = true;
        this.errMsgHide();
      } else if (!reg1.test(this.transfer.pass)) {
        this.errMsg = "请输入正确的交易密码!";
        this.errMsgShow = true;
        this.errMsgHide();
      } else {
        Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["phoneGetUser"])({
          phone: this.transfer.phone
        }).then(function (res) {
          if (res.data.success) {
            var _data = res.data.obj;
            if (_data.headPortraitUrl) {
              _data.headPortraitUrl = _this3.pathImg + _data.headPortraitUrl;
            }
            if (_data.username) {
              var name = _data.username,
                str = "",
                len = _data.username.length;
              name = _data.username.substring(0, 1);
              for (var i = 0; i < len - 1; i++) {
                str += "*";
              }
              _data.username = name + str;
            }
            _this3.userObj = _data;
            _this3.transferShow = true;
          } else {
            _this3.errMsg = res.data.msg;
            _this3.errMsgShow = true;
            _this3.errMsgHide();
          }
        }).catch(function (err) {});
        return;
        var payPsw = this.hrymd5.md5(this.transfer.pass);
        Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["transferorderAdd"])({
          phone: this.transfer.phone,
          payPsw: payPsw,
          assetsId: this.myGoodsDetails.id
        }).then(function (res) {
          if (res.data.success) {
            var _data2 = res.data.obj;
            _this3.payData.orderId = _data2.id;
            // this.transferShow = true;
          } else {
            _this3.errMsg = res.data.msg;
            _this3.errMsgShow = true;
            _this3.errMsgHide();
          }
        }).catch(function (err) {});
      }
    },
    getDetails: function getDetails(id) {
      var _this4 = this;
      //获取详情
      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["getMyGoodsDetail"])({
        id: id
      }).then(function (res) {
        if (res.data.success) {
          var data = res.data.obj;
          if (data.metafile) {
            data.metafile = JSON.parse(data.metafile);
          } else {
            data.metafile = {};
          }
          _this4.myGoodsDetails = data;
        }
      }).catch(function (err) {});
    },
    errMsgHide: function errMsgHide() {
      var _this5 = this;
      clearTimeout(this.errMsgTime);
      this.errMsgTime = setTimeout(function () {
        _this5.errMsgShow = false;
      }, 2000);
    },
    dataChange: function dataChange(i) {
      //监听数据变化
      var reg1 = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        reg = /^[0-9]{6}$/,
        flag = false;
      if (reg1.test(this.transfer.phone) && reg.test(this.transfer.pass)) {
        this.transfer.isActive = true;
      } else {
        this.transfer.isActive = false;
      }
    }
  },
  components: {
    PageNav: _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "Rm1S":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "14Sl");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "cjT7");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "HYAF");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "3Eq5");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "iqWW");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "FMNM");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "aD6s":
/*!****************************************************************************************!*\
  !*** ./src/pages/transferProduct/index.vue?vue&type=template&id=1e5d4b5e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./index.vue?vue&type=template&id=1e5d4b5e&scoped=true& */ "Eikc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "kdsY":
/*!*********************************************!*\
  !*** ./src/pages/transferProduct/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e5d4b5e&scoped=true& */ "aD6s");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "LI+l");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1e5d4b5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& */ "OF9/");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs





/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e5d4b5e",
  null,
  false,
  _index_vue_vue_type_template_id_1e5d4b5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/transferProduct/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mF4/":
/*!*****************************************!*\
  !*** ./src/static/detail/paySucces.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAABHNCSVQICAgIfAhkiAAABsxJREFUaIHVm09oXNcVh79zR7ZnRoK6YKhKs5iCFio4YLALKtXColnElh0T3D9eNOCATVRkUxvb0nO7GTCtx3JCBLFITGxoKKEkNAjZ+uOFYAxtaRYJVaihWggqqEpn4YULtjQ2o3e6eFKsmblv5r03d1z7txm4974z55v73jvn3ntGaJemvB62sReVPeD3gvQCaZRdCF1AGSgFn7qImCXQBR7zF14vLLfDJXFqbfbiD1H9OfAqkEtsR1kC7uD7H/Pa2OeOvHMAW8ynWV17C5VTCD0OfKrVPdAbZDMTDOQrrRjqSHzlJuTqWh5kp+N7ZKt2g4yzWu4FftGKoWQu3vb2I3zYppkMU4VH6W/y0/zDpAbizeyn+S6y5csIp2JcVQIWEF1kXf6LYQWoAB34vERKv4FKL7AH6I7lTzNfu8rDKD0gUwxeno4+s5Neju06CbKn6VjhLsonVJjnSGEp8nfcvtgL+gopjqLsr+7U6wxeGYpkZ+ZCN6SKQO/XbT6no8HeGukjZSZp+MvrA+AjRN/m4NhKJLuNNOX1kOI4wndQ/ys6s9civaBsoIFWmsPeGu3HyNxGbLSpAnodv5Ln8Dv3m9prp8JBAe43fmZvjfQ1BpUFkDcZ/O1Cy462qsagABPhMzvn5fD5K6G3rt4kmznFQL7cqp8tqznoZ2TTx+wz+2m+C39tEsQOqv5ZDo2Nu/G0RUUEZSBfscN2lS8HOa1VJzk0dsOFny0rBijYkorb3n4MReulL+iMbjZUwxbzadbKfw8Cca30JoNXTjh0N7kSgAKYqiGP1k7ZQWWBbCZO1tQ+JQSFrTMbJPb/AdlZM6YC5vsvSHgJBYWtM/todcgCSpCmvfigsBXWmOH6bn2AX8m35qUDOQCFTdi50X77s8pHz3kKCBFBYRNW5WfWXtG3k/roRA5B4WtYDln65p2sXpLKMSiACdaQ1s2xzxK46EZtAAUwiL8vpOdOTBfdqE2gAB0Y9qJ17SUOJNi7DRy9hNKLcI8n5Yu8Pv4g5vVuQCfP7GRHehglhzDPwcInHRv7P9USvojsYJVSk0DfRqrSz/b0fmYuDDB4tdT0UpegxXwHq+U/oewGQDnBrJczwEv1ozX6vtGmpn+1G+irae2FVDEAaSDXt+7q41dhA3RTynkDWg/r8+9IRrfKVMJu18bAbXlGdZelcZexpogi8ROJg2MrqN4M6bUDt/FlZJNpPiSGOjNDhIesauBnDAquYQfyFbLpYzQH3vOsQSGAXa5rFb6V2GI04L/RTlC7/8uG4Jy0RtraMURz4DC5mVHfFmF4aBAsYUZaP7CKD+zu1jWW9FdYNtaYqthTyLiKDuz2GVWtjfeALhl8vrQM72bOyzn54ubAbkHnvBxIfZz1+dKwLvZj/Ip12ZdM4cDu37phfqv5wnCksIRY3siGI84cgKfAqm8gOo7qG+0IL6Q4WtcmLHH48mKQss9676GWA+YnfLddlStt0aSXYzv/rGsXrnGwcDpIKtZDnqcd+su2Oudaof76H8PWfeMZ7x/UB/oyT8rfjrUm/X/p9rldmG3/AtI1PYsMFr4HW9NF9a9bTKTZlr7UPg8dymy7RD1oFddT2M7sBwTFHtUShoJc9jlW4J/tHKq0wQVshR3Il1H/iuWCDkj9nmK+/ld7HlTMpyH1B2yVP6rvbD0sr171dGav2dNHdrNafs+1n060Wn4f26JCWKIzU3W8Wg07kK+gnA4xe4Lp0fOufHSiwJ/j1r51TjY+sgQYLNwBnbAaELnK9MiZlp10oemRM4hctXfqBIcLd2tb7Yv3bOY8cM/aJ+ZdZr1zSX10olnvHGLetXfKAo8ynrUn1GDTahlukE2ffqbVMsV8euMZPR4yooThB2F73o2Lvm6N9tMhc2howdc98N9kcCzhPnMMzYzsA/kwtJxQeEhFD/DalT+HmYhW4dYYuILyAbL+m0ib4XE1c6EbTf0aYYiwwtIIoMGwKJod6UOb1S5SRvQaj2XCyeJh0suxQ4fxZahBKSFACfzDUe6u6FWpc14OXyZBo2RT86DTVGQmVlXqlNdDh/4IlWNIbVWqTbJARX8S9TviFVcHRSbjIG9Fv0jvg3yOsoyhhMjTM1/VbtBuVHqAfcSqN9brZDNn4rwgk1WST3uvYHg/pDShvRKWWOekLY42U7JN8kOFeTLpl1H/LLbFQ3tUQv2zZNIvJwEFV//+eFg+gWGY8I3vVrSIzwRr6d+18v8AcP2/nrnRfnz5MXAU61FoRAnLKFMY/SMHGoeTeGbbpTkvx7r2Y9gL0oOSA7oIfoTNeLkCPABWEF1E5SsMdxOd+kfQ/wCr+a8CTPIrNwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "u9fz":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/transferProduct/index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-3!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./index.vue?vue&type=style&index=0&id=1e5d4b5e&lang=scss&scoped=true& */ "ILNr");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ "TwZa").default
var update = add("56c69e60", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);