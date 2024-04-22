(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-modifyPhone"],{

/***/ "1SrS":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/setting/modifyPhone.vue?vue&type=template&id=3cce2ba8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uCode: __webpack_require__(/*! uview-ui/components/u-code/u-code.vue */ "P5FN").default,
    uToast: __webpack_require__(/*! uview-ui/components/u-toast/u-toast.vue */ "jkgf").default,
    mixLoading: __webpack_require__(/*! @/components/mix-loading/mix-loading.vue */ "cuRj").default,
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
      _c("PageNav", { attrs: { title: "更换手机号" } }),
      _c(
        "v-uni-view",
        { staticClass: "form" },
        [
          _vm.stepIndex == 1
            ? _c(
                "v-uni-view",
                { staticClass: "step1" },
                [
                  _c("v-uni-image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../static/user/checkPhone1.png */ "lKO5"),
                      mode: "widthFix",
                    },
                  }),
                  _c("v-uni-text", [_vm._v("当前绑定的手机号")]),
                  _c("v-uni-view", [
                    _vm._v(_vm._s(_vm._f("setPhone")(_vm.uerInfo.mobile))),
                  ]),
                  _c("v-uni-text", [_vm._v("手机号可用于登录和密码找回")]),
                ],
                1
              )
            : _vm._e(),
          _vm.stepIndex == 2
            ? _c(
                "v-uni-view",
                { staticClass: "step2" },
                [
                  _c("v-uni-text", [_vm._v("核验手机号")]),
                  _c("v-uni-view", { staticClass: "phone" }, [
                    _vm._v(_vm._s(_vm._f("setPhone")(_vm.uerInfo.mobile))),
                  ]),
                  _c(
                    "v-uni-view",
                    { staticClass: "formInput imgCodeBox" },
                    [
                      _c("v-uni-image", {
                        staticClass: "icons",
                        attrs: {
                          src: __webpack_require__(/*! @/static/login/icon2.png */ "pDx7"),
                          mode: "widthFix",
                        },
                      }),
                      _c(
                        "v-uni-view",
                        {
                          staticClass: "imgCode",
                          staticStyle: { width: "100%" },
                        },
                        [
                          _c("v-uni-input", {
                            attrs: {
                              "placeholder-class": "placeholderStyle",
                              clearable: false,
                              placeholder: "请输入计算结果",
                            },
                            model: {
                              value: _vm.form.viewCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "viewCode", $$v)
                              },
                              expression: "form.viewCode",
                            },
                          }),
                          _c("v-uni-image", {
                            attrs: { src: _vm.codeSrc },
                            on: {
                              click: function ($event) {
                                arguments[0] = $event = _vm.$handleEvent($event)
                                _vm.getImgCode.apply(void 0, arguments)
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: "formInput codeBox" },
                    [
                      _c("v-uni-image", {
                        staticClass: "icons",
                        attrs: {
                          src: __webpack_require__(/*! @/static/login/icon2.png */ "pDx7"),
                          mode: "widthFix",
                        },
                      }),
                      _c(
                        "v-uni-view",
                        { staticClass: "send-con" },
                        [
                          _c("v-uni-input", {
                            staticClass: "inputStyle",
                            attrs: {
                              "placeholder-class": "placeholderStyle",
                              clearable: false,
                              placeholder: "请输入验证码",
                              maxlength: "6",
                            },
                            model: {
                              value: _vm.form.verifyCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "verifyCode", $$v)
                              },
                              expression: "form.verifyCode",
                            },
                          }),
                          _c("u-code", {
                            ref: "uCode",
                            attrs: {
                              "change-text": "x秒后",
                              seconds: _vm.secondsN,
                            },
                            on: {
                              change: function ($event) {
                                arguments[0] = $event = _vm.$handleEvent($event)
                                _vm.codeChange.apply(void 0, arguments)
                              },
                            },
                          }),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: "send",
                              on: {
                                click: function ($event) {
                                  arguments[0] = $event =
                                    _vm.$handleEvent($event)
                                  _vm.getCode(2)
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.tips))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm.stepIndex == 3
            ? _c(
                "v-uni-view",
                { staticClass: "step2" },
                [
                  _c(
                    "v-uni-text",
                    { staticStyle: { "margin-bottom": "40rpx" } },
                    [_vm._v("请确保手机号拥有者号与实名信息匹配")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: "formInput" },
                    [
                      _c("v-uni-image", {
                        staticClass: "icons",
                        attrs: {
                          src: __webpack_require__(/*! @/static/login/icon1.png */ "eXYA"),
                          mode: "widthFix",
                        },
                      }),
                      _c("v-uni-input", {
                        staticClass: "inputStyle",
                        attrs: {
                          "placeholder-class": "placeholderStyle",
                          placeholder: "请输入新的手机号",
                          maxlength: "11",
                          type: "number",
                        },
                        model: {
                          value: _vm.form.mobile,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "mobile", $$v)
                          },
                          expression: "form.mobile",
                        },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: "formInput imgCodeBox" },
                    [
                      _c("v-uni-image", {
                        staticClass: "icons",
                        attrs: {
                          src: __webpack_require__(/*! @/static/login/icon2.png */ "pDx7"),
                          mode: "widthFix",
                        },
                      }),
                      _c(
                        "v-uni-view",
                        {
                          staticClass: "imgCode",
                          staticStyle: { width: "100%" },
                        },
                        [
                          _c("v-uni-input", {
                            attrs: {
                              "placeholder-class": "placeholderStyle",
                              clearable: false,
                              placeholder: "请输入计算结果",
                            },
                            model: {
                              value: _vm.form.viewCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "viewCode", $$v)
                              },
                              expression: "form.viewCode",
                            },
                          }),
                          _c("v-uni-image", {
                            attrs: { src: _vm.codeSrc },
                            on: {
                              click: function ($event) {
                                arguments[0] = $event = _vm.$handleEvent($event)
                                _vm.getImgCode.apply(void 0, arguments)
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: "formInput codeBox" },
                    [
                      _c("v-uni-image", {
                        staticClass: "icons",
                        attrs: {
                          src: __webpack_require__(/*! @/static/login/icon2.png */ "pDx7"),
                          mode: "widthFix",
                        },
                      }),
                      _c(
                        "v-uni-view",
                        { staticClass: "send-con" },
                        [
                          _c("v-uni-input", {
                            staticClass: "inputStyle",
                            attrs: {
                              "placeholder-class": "placeholderStyle",
                              clearable: false,
                              placeholder: "请输入验证码",
                              maxlength: "6",
                            },
                            model: {
                              value: _vm.form.verifyCode,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "verifyCode", $$v)
                              },
                              expression: "form.verifyCode",
                            },
                          }),
                          _c("u-code", {
                            ref: "uCode1",
                            attrs: {
                              "change-text": "x秒后",
                              seconds: _vm.secondsN,
                            },
                            on: {
                              change: function ($event) {
                                arguments[0] = $event = _vm.$handleEvent($event)
                                _vm.codeChange1.apply(void 0, arguments)
                              },
                            },
                          }),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: "send",
                              on: {
                                click: function ($event) {
                                  arguments[0] = $event =
                                    _vm.$handleEvent($event)
                                  _vm.getCode(3)
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.tips1))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm.stepIndex == 4
            ? _c(
                "v-uni-view",
                { staticClass: "step4" },
                [
                  _c("v-uni-image", {
                    attrs: {
                      src: __webpack_require__(/*! ../../static/user/checkPhone.png */ "5gyo"),
                      mode: "widthFix",
                    },
                  }),
                  _c("v-uni-text", [_vm._v("手机号已更换成功")]),
                  _c("v-uni-text", [_vm._v("请使用新的手机号重新登录")]),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm.stepIndex == 1
        ? _c(
            "v-uni-view",
            { staticClass: "submit-bottom" },
            [
              _c(
                "v-uni-view",
                {
                  staticClass: "submit-btn",
                  on: {
                    click: function ($event) {
                      arguments[0] = $event = _vm.$handleEvent($event)
                      _vm.stepIndex = 2
                    },
                  },
                },
                [_vm._v("更换账号")]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm.stepIndex == 2 || _vm.stepIndex == 3
        ? _c(
            "v-uni-view",
            { staticClass: "submit-bottom" },
            [
              _c(
                "v-uni-view",
                {
                  staticClass: "submit-btn",
                  on: {
                    click: function ($event) {
                      arguments[0] = $event = _vm.$handleEvent($event)
                      _vm.nextChackPhone(_vm.stepIndex)
                    },
                  },
                },
                [_vm._v("下一步")]
              ),
            ],
            1
          )
        : _vm._e(),
      _c("u-toast", { ref: "uToast" }),
      _c("mix-loading", { ref: "min_loading" }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "29Jg":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/setting/modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-3!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& */ "n/yg");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ "TwZa").default
var update = add("e6143458", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "5gyo":
/*!****************************************!*\
  !*** ./src/static/user/checkPhone.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/checkPhone.7ad39a2e.png";

/***/ }),

/***/ "85IL":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/setting/modifyPhone.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "VTBJ");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "ALS0");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "ma9I");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/user.js */ "wk8/");
/* harmony import */ var _api_login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/login.js */ "fe1z");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "JstF");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/pageNav.vue */ "nHp4");





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
    PageNav: _components_pageNav_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      form: {
        viewCode: "",
        verifyCode: "",
        uid: "",
        mobile: ""
      },
      stepIndex: 1,
      tips: "获取验证码",
      tips1: "获取验证码",
      secondsN: 60,
      codeUid: "",
      codeSrc: ""
    };
  },
  onShow: function onShow() {
    this.getImgCode();
  },
  methods: {
    nextChackPhone: function nextChackPhone(n) {
      var _this = this;
      //下一步
      if (n == 2) {
        //核验
        var obj = this.form;
        if (obj.verifyCode == "") {
          this.$u.toast('请输入短信验证码！');
        } else {
          this.$refs.min_loading.open('正在修改！');
          Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["sendcheckMobile"])({
            uid: this.codeUid,
            verifyCode: obj.verifyCode,
            viewCode: obj.viewCode
          }).then(function (res) {
            if (res.data.success) {
              uni.showToast({
                icon: 'success',
                title: '核验成功!'
              });
              _this.form = {
                viewCode: "",
                verifyCode: "",
                uid: "",
                mobile: ""
              };
              _this.$refs.uCode.reset();
              _this.getImgCode();
              _this.secondsN = 60;
              _this.stepIndex = 3;
            } else {
              _this.$u.toast(res.data.msg);
            }
          }).catch(function (err) {
            _this.$u.toast('网络错误');
          }).finally(function () {
            _this.$refs.min_loading.close();
          });
        }
      } else {
        //新手机号
        var _obj = this.form;
        var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (!reg.test(_obj.mobile)) {
          this.$u.toast('请正确的手机号！');
        } else if (_obj.mobile == this.uerInfo.mobile) {
          uni.$u.toast('您输入的新手机号与原手机号相同！');
          return;
        } else if (_obj.verifyCode == "") {
          this.$u.toast('请输入短信验证码！');
        } else {
          this.$refs.min_loading.open('正在修改！');
          Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["updateMobile"])({
            uid: this.codeUid,
            mobile: _obj.mobile,
            verifyCode: _obj.verifyCode,
            viewCode: _obj.viewCode
          }).then(function (res) {
            if (res.data.success) {
              uni.showToast({
                icon: 'success',
                title: '更换成功,请重新登录!'
              });
              _this.stepIndex = 4;
              setTimeout(function () {
                _this.outLogin();
              }, 1500);
            } else {
              _this.$u.toast(res.data.msg);
            }
          }).catch(function (err) {
            _this.$u.toast('网络错误');
          }).finally(function () {
            _this.$refs.min_loading.close();
          });
        }
      }
    },
    // 退出登录
    outLogin: function outLogin() {
      var _this2 = this;
      Object(_api_login_js__WEBPACK_IMPORTED_MODULE_6__["logout"])().then(function (res) {
        if (res.data.success) {
          _this2.$store.dispatch("OutLogin");
          uni.reLaunch({
            url: "/pages/login/login"
          });
        }
      });
    },
    getCode: function getCode(i) {
      //获取验证码btn
      if (i == 3) {
        var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (!reg.test(this.form.mobile)) {
          this.$u.toast('请正确的手机号！');
          return;
        } else if (this.form.mobile == this.uerInfo.mobile) {
          uni.$u.toast('您输入的新手机号与原手机号相同！');
          return;
        } else if (this.form.viewCode == "") {
          uni.$u.toast('请输入图形验证码！');
          return;
        }
        if (this.$refs.uCode1.canGetCode) {
          this.getLoginCode(i);
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      } else {
        if (this.form.viewCode == "") {
          uni.$u.toast('请输入图形验证码！');
          return;
        }
        if (this.$refs.uCode.canGetCode) {
          this.getLoginCode(i);
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      }
    },
    getImgCode: function getImgCode() {
      //获取图形验证码
      this.codeUid = new Date().getTime();
      this.codeSrc = "".concat(this.baseApi, "/code/loginCode?uid=").concat(this.codeUid);
    },
    getLoginCode: function getLoginCode(i) {
      var _this3 = this;
      //获取短信验证码
      this.$refs.min_loading.open('正在发送短信验证码');
      if (i == 2) {
        //核验手机
        Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["getSendPhoneCode"])({
          mobile: this.uerInfo.mobile,
          uid: this.codeUid,
          viewCode: this.form.viewCode
        }).then(function (res) {
          if (res.data.success) {
            _this3.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            _this3.$refs.uCode.start();
          } else {
            _this3.$u.toast(res.data.msg);
          }
        }).catch(function (err) {
          _this3.$u.toast('网络错误');
        }).finally(function () {
          _this3.$refs.min_loading.close();
        });
      } else {
        //新手机验证码
        Object(_api_user_js__WEBPACK_IMPORTED_MODULE_5__["sendPhoneCode"])({
          mobile: this.form.mobile,
          uid: this.codeUid,
          viewCode: this.form.viewCode
        }).then(function (res) {
          if (res.data.success) {
            _this3.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            _this3.$refs.uCode1.start();
          } else {
            _this3.$u.toast(res.data.msg);
          }
        }).catch(function (err) {
          _this3.$u.toast('网络错误');
        }).finally(function () {
          _this3.$refs.min_loading.close();
        });
      }
    },
    // 获取验证码
    codeChange: function codeChange(text) {
      this.tips = text;
    },
    // 获取验证码
    codeChange1: function codeChange1(text) {
      this.tips1 = text;
    }
  },
  computed: Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["hasLogin", "uerInfo"])),
  filters: {
    setPhone: function setPhone(data) {
      var phone = "";
      if (data) {
        phone = data.substr(0, 3) + "****" + data.substr(7, 10);
      }
      return phone;
    }
  }
});

/***/ }),

/***/ "C4u2":
/*!**************************************************************************************!*\
  !*** ./src/pages/setting/modifyPhone.vue?vue&type=template&id=3cce2ba8&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./modifyPhone.vue?vue&type=template&id=3cce2ba8&scoped=true& */ "1SrS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "Er/L":
/*!********************************************************************!*\
  !*** ./src/pages/setting/modifyPhone.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--13-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./modifyPhone.vue?vue&type=script&lang=js& */ "85IL");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "eXYA":
/*!************************************!*\
  !*** ./src/static/login/icon1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "iWKE":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/setting/modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-3!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& */ "29Jg");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lKO5":
/*!*****************************************!*\
  !*** ./src/static/user/checkPhone1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/checkPhone1.8789eb94.png";

/***/ }),

/***/ "n/yg":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/setting/modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "S60T");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\nuni-page-body[data-v-3cce2ba8] {\n  width: 100%;\n  height: 100%;\n}\n.con-box[data-v-3cce2ba8] {\n  padding-top: %?140?%;\n  height: 100%;\n}\n.con-box .form[data-v-3cce2ba8] {\n  height: 100%;\n  background-color: #fff;\n}\n.con-box .form .step1[data-v-3cce2ba8] {\n  padding-top: %?160?%;\n  text-align: center;\n}\n.con-box .form .step1 uni-text[data-v-3cce2ba8] {\n  display: block;\n  font-size: %?24?%;\n  color: #666;\n}\n.con-box .form .step1 uni-view[data-v-3cce2ba8] {\n  margin: %?30?% 0;\n  font-size: %?60?%;\n  color: #333;\n}\n.con-box .form .step1 uni-image[data-v-3cce2ba8] {\n  width: %?160?%;\n  margin-bottom: %?30?%;\n}\n.con-box .form .step2[data-v-3cce2ba8] {\n  padding: 0 %?58?%;\n  padding-top: %?160?%;\n  text-align: center;\n}\n.con-box .form .step2 .formInput[data-v-3cce2ba8] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: %?100?%;\n  background-color: #e5e5e5;\n  padding-right: %?30?%;\n  padding-left: %?24?%;\n  margin-bottom: %?30?%;\n}\n.con-box .form .step2 .formInput .icons[data-v-3cce2ba8] {\n  width: %?56?%;\n}\n.con-box .form .step2 .formInput .send-con[data-v-3cce2ba8] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.con-box .form .step2 .formInput .send-con .send[data-v-3cce2ba8] {\n  color: #047BFF;\n  font-size: %?24?%;\n}\n.con-box .form .step2 .formInput uni-input[data-v-3cce2ba8] {\n  flex: 1%;\n  font-size: %?26?%;\n  padding-left: %?18?%;\n  color: #333;\n  text-align: left;\n}\n.con-box .form .step2 .formInput .imgCode[data-v-3cce2ba8] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.con-box .form .step2 .formInput .imgCode uni-image[data-v-3cce2ba8] {\n  width: %?200?%;\n  height: %?60?%;\n}\n.con-box .form .step2 .formInput .imgCode uni-input[data-v-3cce2ba8] {\n  flex: 1%;\n}\n.con-box .form .step2 > .phone[data-v-3cce2ba8] {\n  margin: %?30?% 0;\n  font-size: %?60?%;\n  color: #333;\n}\n.con-box .form .step2 > uni-text[data-v-3cce2ba8] {\n  display: block;\n  font-size: %?24?%;\n  color: #666;\n}\n.con-box .form .step4[data-v-3cce2ba8] {\n  text-align: center;\n  padding-top: %?160?%;\n}\n.con-box .form .step4 uni-image[data-v-3cce2ba8] {\n  width: %?148?%;\n  margin-bottom: %?26?%;\n}\n.con-box .form .step4 uni-text[data-v-3cce2ba8] {\n  display: block;\n  font-size: %?24?%;\n  color: #666;\n  margin-bottom: %?20?%;\n}\n.con-box .submit-bottom[data-v-3cce2ba8] {\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding: 0 %?58?%;\n  padding-bottom: %?100?%;\n}\n.con-box .submit-bottom .submit-btn[data-v-3cce2ba8] {\n  width: 100%;\n  height: %?100?%;\n  font-size: %?30?%;\n  font-weight: 400;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #2c1769;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "pDx7":
/*!************************************!*\
  !*** ./src/static/login/icon2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon2.e1fed86b.png";

/***/ }),

/***/ "qnh6":
/*!*******************************************!*\
  !*** ./src/pages/setting/modifyPhone.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyPhone.vue?vue&type=template&id=3cce2ba8&scoped=true& */ "C4u2");
/* harmony import */ var _modifyPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyPhone.vue?vue&type=script&lang=js& */ "Er/L");
/* empty/unused harmony star reexport *//* harmony import */ var _modifyPhone_vue_vue_type_style_index_0_id_3cce2ba8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyPhone.vue?vue&type=style&index=0&id=3cce2ba8&lang=scss&scoped=true& */ "iWKE");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs





/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modifyPhone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cce2ba8",
  null,
  false,
  _modifyPhone_vue_vue_type_template_id_3cce2ba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/setting/modifyPhone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);