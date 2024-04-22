(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-myOrderList"],{

/***/ "0QZ9":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/user/myOrderList.vue?vue&type=template&id=51ee56f5&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uTabs: __webpack_require__(/*! uview-ui/components/u-tabs/u-tabs.vue */ "XWJH").default,
    uCountDown: __webpack_require__(/*! uview-ui/components/u-count-down/u-count-down.vue */ "44eX")
      .default,
    "u-Image": __webpack_require__(/*! uview-ui/components/u--image/u--image.vue */ "2inG").default,
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
    { staticClass: "con-box" },
    [
      _c("PageNav", { attrs: { title: "订单记录" } }),
      _c(
        "v-uni-view",
        { staticClass: "tabBox" },
        [
          _c("u-tabs", {
            attrs: {
              activeStyle: "color:#323232;font-size: 30rpx;",
              current: _vm.tabIndex,
              inactiveStyle: "color: #8d8d8d;font-size: 30rpx;",
              lineColor: "#FE5400",
              lineWidth: "100rpx",
              itemStyle: "height:100rpx",
              list: _vm.tabList,
            },
            on: {
              change: function ($event) {
                arguments[0] = $event = _vm.$handleEvent($event)
                _vm.tabListChange.apply(void 0, arguments)
              },
            },
          }),
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: "uni-tab-content" },
        [
          _c(
            "v-uni-swiper",
            {
              staticClass: "swiper",
              attrs: {
                interval: 2000,
                duration: 500,
                autoplay: false,
                current: _vm.tabIndex,
              },
              on: {
                change: function ($event) {
                  arguments[0] = $event = _vm.$handleEvent($event)
                  _vm.swiperChange.apply(void 0, arguments)
                },
              },
            },
            _vm._l(_vm.tabList, function (val, i) {
              return _c(
                "v-uni-swiper-item",
                { key: i, staticClass: "swiper-item" },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: "swiper-box" },
                    [
                      _c(
                        "v-uni-scroll-view",
                        {
                          staticClass: "list",
                          attrs: { "scroll-y": true },
                          on: {
                            scrolltolower: function ($event) {
                              arguments[0] = $event = _vm.$handleEvent($event)
                              _vm.scrolltolower(1)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-view",
                            _vm._l(val.list, function (item, index1) {
                              return _c(
                                "v-uni-view",
                                {
                                  key: index1,
                                  staticClass: "acticities",
                                  on: {
                                    click: function ($event) {
                                      arguments[0] = $event =
                                        _vm.$handleEvent($event)
                                      _vm.seeDetails(item)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "v-uni-view",
                                    { staticClass: "order-number" },
                                    [
                                      _c(
                                        "v-uni-view",
                                        { staticClass: "orderId" },
                                        [
                                          _vm._v(
                                            "订单: " + _vm._s(item.orderNo)
                                          ),
                                        ]
                                      ),
                                      _c(
                                        "v-uni-view",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: item.orderType != 1,
                                              expression: "item.orderType!=1",
                                            },
                                          ],
                                        },
                                        [
                                          item.status == 0
                                            ? _c(
                                                "v-uni-view",
                                                { staticClass: "time" },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("剩余时长")]
                                                  ),
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "value" },
                                                    [
                                                      _c("u-count-down", {
                                                        attrs: {
                                                          time: item.countdown,
                                                          format: "mm:ss",
                                                        },
                                                        on: {
                                                          finish: function (
                                                            $event
                                                          ) {
                                                            arguments[0] =
                                                              $event =
                                                                _vm.$handleEvent(
                                                                  $event
                                                                )
                                                            _vm.finishFn(
                                                              _vm.tabIndex,
                                                              index1,
                                                              item.status
                                                            )
                                                          },
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _c(
                                            "v-uni-view",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: item.orderType == 0,
                                                  expression:
                                                    "item.orderType==0",
                                                },
                                              ],
                                            },
                                            [
                                              _c(
                                                "v-uni-view",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: item.status == 1,
                                                      expression:
                                                        "item.status == 1",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("已完成")]
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
                                                      value: item.status == 2,
                                                      expression:
                                                        "item.status == 2",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("已取消")]
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
                                                      value: item.status == 3,
                                                      expression:
                                                        "item.status == 3",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("已退款")]
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
                                                      value: item.status == 4,
                                                      expression:
                                                        "item.status == 4",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("待退款")]
                                                  ),
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
                                                  value: item.orderType == 9,
                                                  expression:
                                                    "item.orderType==9",
                                                },
                                              ],
                                            },
                                            [
                                              _c(
                                                "v-uni-view",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: item.status == 1,
                                                      expression:
                                                        "item.status == 1",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.isPrize == 1,
                                                          expression:
                                                            "item.isPrize == 1",
                                                        },
                                                      ],
                                                      staticClass: "name",
                                                    },
                                                    [_vm._v("已完成")]
                                                  ),
                                                  _c(
                                                    "v-uni-text",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.isPrize == 0,
                                                          expression:
                                                            "item.isPrize == 0",
                                                        },
                                                      ],
                                                      staticClass: "name",
                                                    },
                                                    [_vm._v("未中签")]
                                                  ),
                                                  _c(
                                                    "v-uni-text",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.isPrize == 2,
                                                          expression:
                                                            "item.isPrize == 2",
                                                        },
                                                      ],
                                                      staticClass: "name",
                                                    },
                                                    [_vm._v("预约中")]
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
                                                      value: item.status == 2,
                                                      expression:
                                                        "item.status == 2",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("已取消")]
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
                                                      value: item.status == 3,
                                                      expression:
                                                        "item.status == 3",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("已退款")]
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
                                                      value: item.status == 4,
                                                      expression:
                                                        "item.status == 4",
                                                    },
                                                  ],
                                                  staticClass: "sgTxt",
                                                },
                                                [
                                                  _c(
                                                    "v-uni-text",
                                                    { staticClass: "name" },
                                                    [_vm._v("待退款")]
                                                  ),
                                                ],
                                                1
                                              ),
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
                                              value: item.orderType == 1,
                                              expression: "item.orderType==1",
                                            },
                                          ],
                                          staticClass: "sgTxt",
                                        },
                                        [
                                          _c(
                                            "v-uni-text",
                                            { staticClass: "name" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item.status == 1
                                                    ? "已完成"
                                                    : "已取消"
                                                )
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _c(
                                    "v-uni-view",
                                    { staticClass: "show-box" },
                                    [
                                      _c(
                                        "v-uni-view",
                                        { staticClass: "fileBox" },
                                        [
                                          _c("u--image", {
                                            staticClass: "img",
                                            attrs: {
                                              bgColor: "#fff",
                                              fade: true,
                                              duration: "450",
                                              width: "100%",
                                              height: "100%",
                                              src: item.fileUrl,
                                              mode: "aspectFill",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "loading",
                                                  fn: function () {
                                                    return [
                                                      _c("u-loading-icon", {
                                                        attrs: {
                                                          color: "#2c1769",
                                                        },
                                                      }),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _c(
                                        "v-uni-view",
                                        { staticClass: "goods_info" },
                                        [
                                          _c(
                                            "v-uni-view",
                                            { staticClass: "first-line" },
                                            [
                                              _vm._v(
                                                _vm._s(item.collectionName)
                                              ),
                                            ]
                                          ),
                                          _c(
                                            "v-uni-view",
                                            {
                                              staticClass: "type_num",
                                              staticStyle: { width: "100%" },
                                            },
                                            [
                                              item.orderType == 1
                                                ? _c(
                                                    "v-uni-view",
                                                    { staticClass: "type" },
                                                    [_vm._v("空投")]
                                                  )
                                                : _c(
                                                    "v-uni-view",
                                                    { staticClass: "type" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          item.orderType == 9
                                                            ? "预售"
                                                            : "抢购"
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                              _c(
                                                "v-uni-view",
                                                { staticClass: "num" },
                                                [
                                                  _vm._v(
                                                    "数量：" + _vm._s(item.num)
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          item.orderType != 1
                                            ? _c(
                                                "v-uni-view",
                                                { staticClass: "price" },
                                                [
                                                  _c("v-uni-text", [
                                                    _vm._v(
                                                      "￥" +
                                                        _vm._s(item.payTotal)
                                                    ),
                                                  ]),
                                                  _c(
                                                    "v-uni-view",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.status == 0,
                                                          expression:
                                                            "item.status == 0",
                                                        },
                                                      ],
                                                    },
                                                    [_vm._v("待付款")]
                                                  ),
                                                  _c(
                                                    "v-uni-view",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.status == 1 &&
                                                            item.orderType ==
                                                              9 &&
                                                            item.isPrize == 2,
                                                          expression:
                                                            "item.status == 1 && item.orderType == 9 && item.isPrize == 2",
                                                        },
                                                      ],
                                                      staticStyle: {
                                                        color: "#2C1769",
                                                      },
                                                    },
                                                    [_vm._v("待抽签")]
                                                  ),
                                                  _c(
                                                    "v-uni-view",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item.status == 1 &&
                                                            item.orderType ==
                                                              9 &&
                                                            item.isPrize == 0,
                                                          expression:
                                                            "item.status == 1 && item.orderType == 9 && item.isPrize == 0",
                                                        },
                                                      ],
                                                      staticStyle: {
                                                        color: "#FF623E",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          item.refundStatus == 1
                                                            ? "退款成功"
                                                            : "待退款"
                                                        )
                                                      ),
                                                    ]
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
                            }),
                            1
                          ),
                          val.list.length >= 3 && !val.loding
                            ? _c("v-uni-view", { staticClass: "footTips" }, [
                                _vm._v("——没有更多了——"),
                              ])
                            : _vm._e(),
                          _c("u-loading-icon", {
                            attrs: { show: val.loding, color: "#2c1769" },
                          }),
                          val.list.length == 0 && !val.loding
                            ? _c(
                                "v-uni-view",
                                [
                                  _c(
                                    "v-uni-view",
                                    { staticClass: "noData" },
                                    [
                                      _c("v-uni-image", {
                                        staticClass: "noDataImg",
                                        attrs: {
                                          src: __webpack_require__(/*! ../../static/noData.png */ "gy5O"),
                                          mode: "",
                                        },
                                      }),
                                    ],
                                    1
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
            }),
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

/***/ "44eX":
/*!************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/u-count-down.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-count-down.vue?vue&type=template&id=072523e7&scoped=true& */ "7t3E");
/* harmony import */ var _u_count_down_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-count-down.vue?vue&type=script&lang=js& */ "Gi/W");
/* empty/unused harmony star reexport *//* harmony import */ var _u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& */ "OJnI");
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs





/* normalize component */

var component = Object(_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_count_down_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "072523e7",
  null,
  false,
  _u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/uview-ui/components/u-count-down/u-count-down.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7t3E":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=template&id=072523e7&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-count-down.vue?vue&type=template&id=072523e7&scoped=true& */ "cTHo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_template_id_072523e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "DUim":
/*!***********************************************************************************!*\
  !*** ./src/pages/user/myOrderList.vue?vue&type=template&id=51ee56f5&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./myOrderList.vue?vue&type=template&id=51ee56f5&scoped=true& */ "0QZ9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "Gi/W":
/*!*************************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_13_0_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../babel-loader/lib??ref--13-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-count-down.vue?vue&type=script&lang=js& */ "rjaz");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_13_0_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "IC2H":
/*!****************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/props.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "qePV");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // 倒计时时长，单位ms
    time: {
      type: [String, Number],
      default: uni.$u.props.countDown.time
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: uni.$u.props.countDown.format
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: uni.$u.props.countDown.autoStart
    },
    // 是否展示毫秒倒计时
    millisecond: {
      type: Boolean,
      default: uni.$u.props.countDown.millisecond
    }
  }
});

/***/ }),

/***/ "KHfw":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "S60T");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\nuni-view[data-v-072523e7], uni-scroll-view[data-v-072523e7], uni-swiper-item[data-v-072523e7] {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 0;\n  flex-basis: auto;\n  align-items: stretch;\n  align-content: flex-start;\n}\n.u-count-down__text[data-v-072523e7] {\n  color: #606266;\n  font-size: 15px;\n  line-height: 22px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "OJnI":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!../../../@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../postcss-loader/src??ref--9-oneOf-1-3!../../../@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& */ "ZJh6");
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_count_down_vue_vue_type_style_index_0_id_072523e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "OZ1l":
/*!****************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-count-down/utils.js ***!
  \****************************************************************/
/*! exports provided: parseTimeData, parseFormat, isSameSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeData", function() { return parseTimeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFormat", function() { return parseFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameSecond", function() { return isSameSecond; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "yXV3");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "UxlC");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);



// 补0，如1 -> 01
function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = "".concat(num);
  while (str.length < targetLength) {
    str = "0".concat(str);
  }
  return str;
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days,
    hours = timeData.hours,
    minutes = timeData.minutes,
    seconds = timeData.seconds,
    milliseconds = timeData.milliseconds;
  // 如果格式化字符串中不存在DD(天)，则将天的时间转为小时中去
  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    // 对天补0
    format = format.replace('DD', padZero(days));
  }
  // 其他同理于DD的格式化处理方式
  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', padZero(hours));
  }
  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', padZero(minutes));
  }
  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', padZero(seconds));
  }
  return format.replace('SSS', padZero(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ }),

/***/ "WPyt":
/*!****************************************!*\
  !*** ./src/pages/user/myOrderList.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myOrderList.vue?vue&type=template&id=51ee56f5&scoped=true& */ "DUim");
/* harmony import */ var _myOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myOrderList.vue?vue&type=script&lang=js& */ "pZYb");
/* empty/unused harmony star reexport *//* harmony import */ var _myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& */ "cbCY");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs





/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51ee56f5",
  null,
  false,
  _myOrderList_vue_vue_type_template_id_51ee56f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/user/myOrderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ZJh6":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../postcss-loader/src??ref--9-oneOf-1-3!../../../@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-count-down.vue?vue&type=style&index=0&id=072523e7&lang=scss&scoped=true& */ "KHfw");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ "TwZa").default
var update = add("7b26de54", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "a2Uk":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/user/myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "S60T");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "uni-page-body[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n}\n.con-box[data-v-51ee56f5] {\n  padding-top: %?120?%;\n  width: 100%;\n  height: 100%;\n}\n.con-box .tabBox[data-v-51ee56f5] {\n  width: 100%;\n  padding: %?0?% %?26?%;\n  padding-bottom: %?10?%;\n  background-color: #fff;\n}\n.con-box .uni-tab-content[data-v-51ee56f5] {\n  width: 100%;\n  height: calc(100vh - %?220?%);\n}\n.con-box .uni-tab-content .swiper[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n}\n.con-box .uni-tab-content .swiper .swiper-item[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n}\n.con-box .uni-tab-content .swiper-box[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n  padding-bottom: %?20?%;\n}\n.con-box .uni-tab-content .swiper-box .footTips[data-v-51ee56f5] {\n  text-align: center;\n  padding-bottom: %?60?%;\n  padding-top: %?30?%;\n  color: #8d8d8d;\n  font-size: %?24?%;\n}\n.con-box .uni-tab-content .swiper-box .noData[data-v-51ee56f5] {\n  position: absolute;\n  width: %?220?%;\n  height: %?180?%;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.con-box .uni-tab-content .swiper-box .noData .noDataImg[data-v-51ee56f5] {\n  width: %?220?%;\n  height: %?180?%;\n}\n.con-box .uni-tab-content .swiper-box .list[data-v-51ee56f5] {\n  height: 100%;\n  width: 100%;\n  padding: 0 %?32?%;\n  padding-top: %?24?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities[data-v-51ee56f5] {\n  width: 100%;\n  height: auto;\n  background: #fff;\n  padding: 0 %?32?%;\n  margin-bottom: %?24?%;\n  border-radius: %?8?%;\n  padding-bottom: %?32?%;\n  box-shadow: 0px %?4?% %?16?% 0px rgba(150, 150, 150, 0.05);\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number[data-v-51ee56f5] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-size: %?24?%;\n  padding-top: %?40?%;\n  padding-bottom: %?32?%;\n  margin-bottom: %?32?%;\n  border-bottom: 1px solid #F3F3F3;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .orderId[data-v-51ee56f5] {\n  flex: 1%;\n  padding-right: %?30?%;\n  line-height: %?24?%;\n  text-align: left;\n  color: #8D8D8D;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .sgTxt[data-v-51ee56f5] {\n  text-align: right;\n  color: #323232;\n  line-height: %?28?%;\n  line-height: %?28?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .time[data-v-51ee56f5] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: %?200?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .time .name[data-v-51ee56f5] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: %?22?%;\n  line-height: %?24?%;\n  color: #333;\n  mix-blend-mode: normal;\n  opacity: 0.4;\n  margin-right: %?12?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .time .value[data-v-51ee56f5] {\n  font-style: normal;\n  font-weight: 600;\n  mix-blend-mode: normal;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .order-number .time .value[data-v-51ee56f5] .u-count-down__text {\n  font-size: %?24?%;\n  line-height: %?24?%;\n  color: #DBB44E;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box[data-v-51ee56f5] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .fileBox[data-v-51ee56f5] {\n  width: %?128?%;\n  height: %?128?%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #F3F3F3;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .fileBox .img[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .fileBox uni-image[data-v-51ee56f5] {\n  width: 100%;\n  height: 100%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info[data-v-51ee56f5] {\n  padding-left: %?24?%;\n  flex: 1%;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  height: %?128?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .first-line[data-v-51ee56f5] {\n  width: 100%;\n  font-size: %?28?%;\n  line-height: %?28?%;\n  color: #323232;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .type_num[data-v-51ee56f5] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .type_num .type[data-v-51ee56f5] {\n  width: %?68?%;\n  height: %?36?%;\n  border-radius: %?4?%;\n  background: #F3F3F3;\n  color: #8D8D8D;\n  font-size: %?24?%;\n  line-height: %?36?%;\n  text-align: center;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .type_num .num[data-v-51ee56f5] {\n  padding-left: %?60?%;\n  flex: 1%;\n  color: #666;\n  font-size: %?24?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .price[data-v-51ee56f5] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: %?28?%;\n  line-height: %?28?%;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .price uni-view[data-v-51ee56f5] {\n  color: #2C1769;\n}\n.con-box .uni-tab-content .swiper-box .list .acticities .show-box .goods_info .price uni-text[data-v-51ee56f5] {\n  color: #323232;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cTHo":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=template&id=072523e7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: "u-count-down" },
    [
      _vm._t("default", [
        _c("v-uni-text", { staticClass: "u-count-down__text" }, [
          _vm._v(_vm._s(_vm.formattedTime)),
        ]),
      ]),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "cbCY":
/*!**************************************************************************************************!*\
  !*** ./src/pages/user/myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-3!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& */ "uyWr");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_style_index_0_id_51ee56f5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "gy5O":
/*!*******************************!*\
  !*** ./src/static/noData.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/noData.ba9f8335.png";

/***/ }),

/***/ "p3er":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/user/myOrderList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "KQm4");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "yXV3");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "ma9I");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pageNav.vue */ "nHp4");
/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/user.js */ "wk8/");
/* harmony import */ var _api_login_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/login.js */ "fe1z");





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
  components: {
    PageNav: _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      tabIndex: 0,
      tabList: [{
        name: "全部记录",
        list: [],
        status: "",
        loding: false
      }, {
        name: "已完成",
        list: [],
        status: "1",
        loding: false
      }
      // {name:"已取消",list:[],status:"2",loding:false},
      ],

      listQuery: {
        pages: 0,
        page: 1,
        pageSize: 10,
        orderNo: '',
        //订单编号
        status: '',
        //订单状态：0，未支付，1：已支付，2：已取消,传空默认查全部
        orderType: "" //订单类型： 1抢购订单，2：申购订单
      } //抢购，申购订单
    };
  },
  onLoad: function onLoad() {
    this.getOrderList();
  },
  methods: {
    seeDetails: function seeDetails(cur) {
      uni.navigateTo({
        url: "/pages/user/orderDetails?id=".concat(cur.id, "&type=1")
      });
    },
    tabListChange: function tabListChange(e) {
      //tab切换
      this.tabIndex = e.index;
      this.listQuery.page = 1;
      this.listQuery.status = e.status;
      this.listQuery.pages = 1;
      this.tabList[this.tabIndex].loding = false;
      this.getOrderList();
    },
    swiperChange: function swiperChange(e) {
      var current = e.detail.current;
      if (this.tabIndex != current) {
        this.listQuery.status = current == 0 ? "" : current;
        this.tabIndex = current;
        this.listQuery.page = 1;
        this.listQuery.pages = 1;
        this.tabList[this.tabIndex].loding = false;
        this.getOrderList();
      }
    },
    // 判断这个地址是视频还是图片
    isImage: function isImage(url) {
      if (!url) {
        return;
      }
      var filePath = url.toLocaleLowerCase();
      if (filePath.indexOf(".mp4") != -1) {
        return false;
      } else {
        return true;
      }
    },
    finishFn: function finishFn(i, index, status) {
      // i  0，全部，1：已完成，2：已取消
      // 订单状态：0，未支付，1：已支付，2：已取消
      if (status == 0) {
        this.tabList[i].list[index].status = 2;
      }
    },
    toShopping: function toShopping(i, item) {
      var url = '/pages/detail/confirmOrder?id=' + item.id;
      if (i == 2) {
        url += "&path=resale";
      }
      uni.navigateTo({
        url: url
      });
    },
    getOrderList: function getOrderList() {
      var _this = this;
      //抢购，申购订单
      this.tabList[this.tabIndex].loding = true;
      Object(_api_user_js__WEBPACK_IMPORTED_MODULE_6__["nftorderList"])(this.listQuery).then(function (res) {
        if (res.data.success) {
          var list = res.data.obj.list;
          _this.listQuery.pages = res.data.obj.pages;
          if (list.length == 0) {
            return;
          }
          var newList = list.filter(function (item, index) {
            if (item.endDate) {
              item.countdown = _this.moment(item.endDate).diff(new Date().getTime());
            }
            if (item.isPrize || item.isPrize == 0) {
              if (item.isPrize == 0) {
                item["isPrizeT"] = "未中签";
              } else if (item.isPrize == 1) {
                item["isPrizeT"] = "已中签";
              } else {
                item["isPrizeT"] = "预约中";
              }
            }
            if (item.fileUrl) {
              item.fileUrl = _this.pathImg + item.fileUrl;
            } else {
              item.fileUrl = "";
            }
            return item;
          });
          if (_this.listQuery.page == 1) {
            _this.tabList[_this.tabIndex].list = Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newList);
          } else {
            _this.tabList[_this.tabIndex].list = [].concat(Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.tabList[_this.tabIndex].list), Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newList));
          }
        } else {}
      }).finally(function () {
        _this.tabList[_this.tabIndex].loding = false;
      });
    },
    scrolltolower: function scrolltolower(i) {
      if (this.listQuery.pages > this.listQuery.page) {
        this.listQuery.page++;
        this.getOrderList();
      } else {
        // this.isEnd = true;
      }
    }
  }
});

/***/ }),

/***/ "pZYb":
/*!*****************************************************************!*\
  !*** ./src/pages/user/myOrderList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--13-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./myOrderList.vue?vue&type=script&lang=js& */ "p3er");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_myOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "rjaz":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-count-down/u-count-down.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props.js */ "IC2H");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "OZ1l");



//
//
//
//
//
//
//
//



/**
 * u-count-down 倒计时
 * @description 该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。
 * @tutorial https://uviewui.com/components/countDown.html
 * @property {String | Number}	time		倒计时时长，单位ms （默认 0 ）
 * @property {String}			format		时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒  （默认 'HH:mm:ss' ）
 * @property {Boolean}			autoStart	是否自动开始倒计时 （默认 true ）
 * @property {Boolean}			millisecond	是否展示毫秒倒计时 （默认 false ）
 * @event {Function} finish 倒计时结束时触发 
 * @event {Function} change 倒计时变化时触发 
 * @event {Function} start	开始倒计时
 * @event {Function} pause	暂停倒计时 
 * @event {Function} reset	重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 
 * @example <u-count-down :time="time"></u-count-down>
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'u-count-down',
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      timer: null,
      // 各单位(天，时，分等)剩余时间
      timeData: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTimeData"])(0),
      // 格式化后的时间，如"03:23:21"
      formattedTime: '0',
      // 倒计时是否正在进行中
      runing: false,
      endTime: 0,
      // 结束的毫秒时间戳
      remainTime: 0 // 剩余的毫秒时间
    };
  },

  watch: {
    time: function time(n) {
      this.reset();
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.reset();
    },
    // 开始倒计时
    start: function start() {
      if (this.runing) return;
      // 标识为进行中
      this.runing = true;
      // 结束时间戳 = 此刻时间戳 + 剩余的时间
      this.endTime = Date.now() + this.remainTime;
      this.toTick();
    },
    // 根据是否展示毫秒，执行不同操作函数
    toTick: function toTick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    macroTick: function macroTick() {
      var _this = this;
      this.clearTimeout();
      // 每隔一定时间，更新一遍定时器的值
      // 同时此定时器的作用也能带来毫秒级的更新
      this.timer = setTimeout(function () {
        // 获取剩余时间
        var remain = _this.getRemainTime();
        // 重设剩余时间
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isSameSecond"])(remain, _this.remainTime) || remain === 0) {
          _this.setRemainTime(remain);
        }
        // 如果剩余时间不为0，则继续检查更新倒计时
        if (_this.remainTime !== 0) {
          _this.macroTick();
        }
      }, 30);
    },
    microTick: function microTick() {
      var _this2 = this;
      this.clearTimeout();
      this.timer = setTimeout(function () {
        _this2.setRemainTime(_this2.getRemainTime());
        if (_this2.remainTime !== 0) {
          _this2.microTick();
        }
      }, 50);
    },
    // 获取剩余的时间
    getRemainTime: function getRemainTime() {
      // 取最大值，防止出现小于0的剩余时间值
      return Math.max(this.endTime - Date.now(), 0);
    },
    // 设置剩余的时间
    setRemainTime: function setRemainTime(remain) {
      this.remainTime = remain;
      // 根据剩余的毫秒时间，得出该有天，小时，分钟等的值，返回一个对象
      var timeData = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseTimeData"])(remain);
      this.$emit('change', timeData);
      // 得出格式化后的时间
      this.formattedTime = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseFormat"])(this.format, timeData);
      // 如果时间已到，停止倒计时
      if (remain <= 0) {
        this.pause();
        this.$emit('finish');
      }
    },
    // 重置倒计时
    reset: function reset() {
      this.pause();
      this.remainTime = this.time;
      this.setRemainTime(this.remainTime);
      if (this.autoStart) {
        this.start();
      }
    },
    // 暂停倒计时
    pause: function pause() {
      this.runing = false;
      this.clearTimeout();
    },
    // 清空定时器
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function () {
      clearTimeout(this.timer);
      this.timer = null;
    })
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimeout();
  }
});

/***/ }),

/***/ "uyWr":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--11-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/user/myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-3!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./myOrderList.vue?vue&type=style&index=0&id=51ee56f5&lang=less&scoped=true& */ "a2Uk");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ "TwZa").default
var update = add("faa38918", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);