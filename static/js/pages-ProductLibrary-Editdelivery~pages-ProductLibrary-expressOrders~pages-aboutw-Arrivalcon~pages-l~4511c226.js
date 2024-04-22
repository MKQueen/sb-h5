(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ProductLibrary-Editdelivery~pages-ProductLibrary-expressOrders~pages-aboutw-Arrivalcon~pages-l~4511c226"],{

/***/ "0EiT":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "ALS0");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "m76z");
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixin.js */ "FVma");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./props.js */ "n0OH");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/**
 * upload 上传
 * @description 该组件用于上传图片场景
 * @tutorial https://uviewui.com/components/upload.html
 * @property {String}			accept				接受的文件类型, 可选值为all media image file video （默认 'image' ）
 * @property {String | Array}	capture				图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头（默认 ['album', 'camera'] ）
 * @property {Boolean}			compressed			当accept为video时生效，是否压缩视频，默认为true（默认 true ）
 * @property {String}			camera				当accept为video时生效，可选值为back或front（默认 'back' ）
 * @property {Number}			maxDuration			当accept为video时生效，拍摄视频最长拍摄时间，单位秒（默认 60 ）
 * @property {String}			uploadIcon			上传区域的图标，只能内置图标（默认 'camera-fill' ）
 * @property {String}			uploadIconColor		上传区域的图标的字体颜色，只能内置图标（默认 #D3D4D6 ）
 * @property {Boolean}			useBeforeRead		是否开启文件读取前事件（默认 false ）
 * @property {Boolean}			previewFullImage	是否显示组件自带的图片预览功能（默认 true ）
 * @property {String | Number}	maxCount			最大上传数量（默认 52 ）
 * @property {Boolean}			disabled			是否启用（默认 false ）
 * @property {String}			imageMode			预览上传的图片时的裁剪模式，和image组件mode属性一致（默认 'aspectFill' ）
 * @property {String}			name				标识符，可以在回调函数的第二项参数中获取
 * @property {Array}			sizeType			所选的图片的尺寸, 可选值为original compressed（默认 ['original', 'compressed'] ）
 * @property {Boolean}			multiple			是否开启图片多选，部分安卓机型不支持 （默认 false ）
 * @property {Boolean}			deletable			是否展示删除按钮（默认 true ）
 * @property {String | Number}	maxSize				文件大小限制，单位为byte （默认 Number.MAX_VALUE ）
 * @property {Array}			fileList			显示已上传的文件列表
 * @property {String}			uploadText			上传区域的提示文字
 * @property {String | Number}	width				内部预览图片区域和选择图片按钮的区域宽度（默认 80 ）
 * @property {String | Number}	height				内部预览图片区域和选择图片按钮的区域高度（默认 80 ）
 * @property {Object}			customStyle			组件的样式，对象形式
 * @event {Function} afterRead		读取后的处理函数
 * @event {Function} beforeRead		读取前的处理函数
 * @event {Function} oversize		文件超出大小限制
 * @event {Function} clickPreview	点击预览图片
 * @event {Function} delete 		删除图片
 * @example <u-upload :action="action" :fileList="fileList" ></u-upload>
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "u-upload",
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _mixin_js__WEBPACK_IMPORTED_MODULE_6__["default"], _props_js__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      lists: [],
      isInCount: true
    };
  },
  watch: {
    // 监听文件列表的变化，重新整理内部数据
    fileList: {
      immediate: true,
      handler: function handler() {
        this.formatFileList();
      }
    }
  },
  methods: {
    formatFileList: function formatFileList() {
      var _this = this;
      var _this$fileList = this.fileList,
        fileList = _this$fileList === void 0 ? [] : _this$fileList,
        maxCount = this.maxCount;
      var lists = fileList.map(function (item) {
        return Object.assign(Object.assign({}, item), {
          // 如果item.url为本地选择的blob文件的话，无法判断其为video还是image，此处优先通过accept做判断处理
          isImage: _this.accept === 'image' || uni.$u.test.image(item.url || item.thumb),
          isVideo: _this.accept === 'video' || uni.$u.test.video(item.url || item.thumb),
          deletable: typeof item.deletable === 'boolean' ? item.deletable : _this.deletable
        });
      });
      this.lists = lists;
      this.isInCount = lists.length < maxCount;
    },
    chooseFile: function chooseFile() {
      var _this2 = this;
      var maxCount = this.maxCount,
        multiple = this.multiple,
        lists = this.lists,
        disabled = this.disabled;
      if (disabled) return;
      // 如果用户传入的是字符串，需要格式化成数组
      var capture;
      try {
        capture = uni.$u.test.array(this.capture) ? this.capture : this.capture.split(',');
      } catch (e) {
        capture = [];
      }
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["chooseFile"])(Object.assign({
        accept: this.accept,
        multiple: this.multiple,
        capture: capture,
        compressed: this.compressed,
        maxDuration: this.maxDuration,
        sizeType: this.sizeType,
        camera: this.camera
      }, {
        maxCount: maxCount - lists.length
      })).then(function (res) {
        _this2.onBeforeRead(multiple ? res : res[0]);
      }).catch(function (error) {
        _this2.$emit('error', error);
      });
    },
    // 文件读取之前
    onBeforeRead: function onBeforeRead(file) {
      var _this3 = this;
      var beforeRead = this.beforeRead,
        useBeforeRead = this.useBeforeRead;
      var res = true;
      // beforeRead是否为一个方法
      if (uni.$u.test.func(beforeRead)) {
        // 如果用户定义了此方法，则去执行此方法，并传入读取的文件回调
        res = beforeRead(file, this.getDetail());
      }
      if (useBeforeRead) {
        res = new Promise(function (resolve, reject) {
          _this3.$emit('beforeRead', Object.assign(Object.assign({
            file: file
          }, _this3.getDetail()), {
            callback: function callback(ok) {
              ok ? resolve() : reject();
            }
          }));
        });
      }
      if (!res) {
        return;
      }
      if (uni.$u.test.promise(res)) {
        res.then(function (data) {
          return _this3.onAfterRead(data || file);
        });
      } else {
        this.onAfterRead(file);
      }
    },
    getDetail: function getDetail(index) {
      return {
        name: this.name,
        index: index == null ? this.fileList.length : index
      };
    },
    onAfterRead: function onAfterRead(file) {
      var maxSize = this.maxSize,
        afterRead = this.afterRead;
      var oversize = Array.isArray(file) ? file.some(function (item) {
        return item.size > maxSize;
      }) : file.size > maxSize;
      if (oversize) {
        this.$emit('oversize', Object.assign({
          file: file
        }, this.getDetail()));
        return;
      }
      if (typeof afterRead === 'function') {
        afterRead(file, this.getDetail());
      }
      this.$emit('afterRead', Object.assign({
        file: file
      }, this.getDetail()));
    },
    deleteItem: function deleteItem(index) {
      this.$emit('delete', Object.assign(Object.assign({}, this.getDetail(index)), {
        file: this.fileList[index]
      }));
    },
    // 预览图片
    onPreviewImage: function onPreviewImage(item) {
      var _this4 = this;
      if (!item.isImage || !this.previewFullImage) return;
      uni.previewImage({
        // 先filter找出为图片的item，再返回filter结果中的图片url
        urls: this.lists.filter(function (item) {
          return _this4.accept === 'image' || uni.$u.test.image(item.url || item.thumb);
        }).map(function (item) {
          return item.url || item.thumb;
        }),
        current: item.url || item.thumb,
        fail: function fail() {
          uni.$u.toast('预览图片失败');
        }
      });
    },
    onPreviewVideo: function onPreviewVideo(event) {
      if (!this.data.previewFullImage) return;
      var index = event.currentTarget.dataset.index;
      var lists = this.data.lists;
      wx.previewMedia({
        sources: lists.filter(function (item) {
          return isVideoFile(item);
        }).map(function (item) {
          return Object.assign(Object.assign({}, item), {
            type: 'video'
          });
        }),
        current: index,
        fail: function fail() {
          uni.$u.toast('预览视频失败');
        }
      });
    },
    onClickPreview: function onClickPreview(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.lists[index];
      this.$emit('clickPreview', Object.assign(Object.assign({}, item), this.getDetail(index)));
    }
  }
});

/***/ }),

/***/ "7qg7":
/*!****************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/u-upload.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-upload.vue?vue&type=template&id=49deb6f2&scoped=true& */ "986Y");
/* harmony import */ var _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-upload.vue?vue&type=script&lang=js& */ "pmPA");
/* empty/unused harmony star reexport *//* harmony import */ var _u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& */ "zGEm");
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs





/* normalize component */

var component = Object(_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49deb6f2",
  null,
  false,
  _u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/uview-ui/components/u-upload/u-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "986Y":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=49deb6f2&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-upload.vue?vue&type=template&id=49deb6f2&scoped=true& */ "H8hy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_template_id_49deb6f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "FVma":
/*!************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/mixin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    // 监听accept的变化，判断是否符合个平台要求
    // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
    accept: {
      immediate: true,
      handler: function handler(val) {
        if (val === 'all' || val === 'media') {
          uni.$u.error('只有微信小程序才支持把accept配置为all、media之一');
        }
      }
    }
  }
});

/***/ }),

/***/ "H8hy":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=49deb6f2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "u-upload", style: [_vm.$u.addStyle(_vm.customStyle)] },
    [
      _c(
        "v-uni-view",
        { staticClass: "u-upload__wrap" },
        [
          _vm.previewImage
            ? _vm._l(_vm.lists, function (item, index) {
                return _c(
                  "v-uni-view",
                  { key: index, staticClass: "u-upload__wrap__preview" },
                  [
                    item.isImage || (item.type && item.type === "image")
                      ? _c("v-uni-image", {
                          staticClass: "u-upload__wrap__preview__image",
                          style: [
                            {
                              width: _vm.$u.addUnit(_vm.width),
                              height: _vm.$u.addUnit(_vm.height),
                            },
                          ],
                          attrs: {
                            src: item.thumb || item.url,
                            mode: _vm.imageMode,
                          },
                          on: {
                            click: function ($event) {
                              arguments[0] = $event = _vm.$handleEvent($event)
                              _vm.onPreviewImage(item)
                            },
                          },
                        })
                      : _c(
                          "v-uni-view",
                          { staticClass: "u-upload__wrap__preview__other" },
                          [
                            _c("u-icon", {
                              attrs: {
                                color: "#80CBF9",
                                size: "26",
                                name:
                                  item.isVideo ||
                                  (item.type && item.type === "video")
                                    ? "movie"
                                    : "folder",
                              },
                            }),
                            _c(
                              "v-uni-text",
                              {
                                staticClass:
                                  "u-upload__wrap__preview__other__text",
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    item.isVideo ||
                                      (item.type && item.type === "video")
                                      ? "视频"
                                      : "文件"
                                  )
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                    item.status === "uploading" || item.status === "failed"
                      ? _c(
                          "v-uni-view",
                          { staticClass: "u-upload__status" },
                          [
                            _c(
                              "v-uni-view",
                              { staticClass: "u-upload__status__icon" },
                              [
                                item.status === "failed"
                                  ? _c("u-icon", {
                                      attrs: {
                                        name: "close-circle",
                                        color: "#ffffff",
                                        size: "25",
                                      },
                                    })
                                  : _c("u-loading-icon", {
                                      attrs: {
                                        size: "22",
                                        mode: "circle",
                                        color: "#ffffff",
                                      },
                                    }),
                              ],
                              1
                            ),
                            item.message
                              ? _c(
                                  "v-uni-text",
                                  { staticClass: "u-upload__status__message" },
                                  [_vm._v(_vm._s(item.message))]
                                )
                              : _vm._e(),
                          ],
                          1
                        )
                      : _vm._e(),
                    item.status !== "uploading" &&
                    (_vm.deletable || item.deletable)
                      ? _c(
                          "v-uni-view",
                          {
                            staticClass: "u-upload__deletable",
                            on: {
                              click: function ($event) {
                                $event.stopPropagation()
                                arguments[0] = $event = _vm.$handleEvent($event)
                                _vm.deleteItem(index)
                              },
                            },
                          },
                          [
                            _c(
                              "v-uni-view",
                              { staticClass: "u-upload__deletable__icon" },
                              [
                                _c("u-icon", {
                                  attrs: {
                                    name: "close",
                                    color: "#ffffff",
                                    size: "10",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    item.status === "success"
                      ? _c(
                          "v-uni-view",
                          { staticClass: "u-upload__success" },
                          [
                            _c(
                              "v-uni-view",
                              { staticClass: "u-upload__success__icon" },
                              [
                                _c("u-icon", {
                                  attrs: {
                                    name: "checkmark",
                                    color: "#ffffff",
                                    size: "12",
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
                )
              })
            : _vm._e(),
          _vm.isInCount
            ? [
                _vm.$slots.default || _vm.$slots.$default
                  ? _c(
                      "v-uni-view",
                      {
                        on: {
                          click: function ($event) {
                            arguments[0] = $event = _vm.$handleEvent($event)
                            _vm.chooseFile.apply(void 0, arguments)
                          },
                        },
                      },
                      [_vm._t("default")],
                      2
                    )
                  : _c(
                      "v-uni-view",
                      {
                        staticClass: "u-upload__button",
                        class: [_vm.disabled && "u-upload__button--disabled"],
                        style: [
                          {
                            width: _vm.$u.addUnit(_vm.width),
                            height: _vm.$u.addUnit(_vm.height),
                          },
                        ],
                        attrs: {
                          "hover-class": !_vm.disabled
                            ? "u-upload__button--hover"
                            : "",
                          "hover-stay-time": "150",
                        },
                        on: {
                          click: function ($event) {
                            arguments[0] = $event = _vm.$handleEvent($event)
                            _vm.chooseFile.apply(void 0, arguments)
                          },
                        },
                      },
                      [
                        _c("u-icon", {
                          attrs: {
                            name: _vm.uploadIcon,
                            size: "26",
                            color: _vm.uploadIconColor,
                          },
                        }),
                        _vm.uploadText
                          ? _c(
                              "v-uni-text",
                              { staticClass: "u-upload__button__text" },
                              [_vm._v(_vm._s(_vm.uploadText))]
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
              ]
            : _vm._e(),
        ],
        2
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "cgRH":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "S60T");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\nuni-view[data-v-49deb6f2], uni-scroll-view[data-v-49deb6f2], uni-swiper-item[data-v-49deb6f2] {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 0;\n  flex-basis: auto;\n  align-items: stretch;\n  align-content: flex-start;\n}\n.u-upload[data-v-49deb6f2] {\n\n  display: flex;\n\n  flex-direction: column;\n  flex: 1;\n}\n.u-upload__wrap[data-v-49deb6f2] {\n\n  display: flex;\n\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.u-upload__wrap__preview[data-v-49deb6f2] {\n  border-radius: 2px;\n  margin: 0 8px 8px 0;\n  position: relative;\n  overflow: hidden;\n\n  display: flex;\n\n  flex-direction: row;\n}\n.u-upload__wrap__preview__image[data-v-49deb6f2] {\n  width: 80px;\n  height: 80px;\n}\n.u-upload__wrap__preview__other[data-v-49deb6f2] {\n  width: 80px;\n  height: 80px;\n  background-color: rgb(242, 242, 242);\n  flex: 1;\n\n  display: flex;\n\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.u-upload__wrap__preview__other__text[data-v-49deb6f2] {\n  font-size: 11px;\n  color: #909193;\n  margin-top: 2px;\n}\n.u-upload__deletable[data-v-49deb6f2] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgb(55, 55, 55);\n  height: 14px;\n  width: 14px;\n\n  display: flex;\n\n  flex-direction: row;\n  border-bottom-left-radius: 100px;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n}\n.u-upload__deletable__icon[data-v-49deb6f2] {\n  position: absolute;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  top: 0px;\n  right: 0px;\n  top: 1px;\n  right: 0;\n}\n.u-upload__success[data-v-49deb6f2] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n\n  display: flex;\n\n  flex-direction: row;\n  border-style: solid;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: #5ac725;\n  border-right-color: #5ac725;\n  border-width: 9px;\n  align-items: center;\n  justify-content: center;\n}\n.u-upload__success__icon[data-v-49deb6f2] {\n  position: absolute;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  bottom: -10px;\n  right: -10px;\n}\n.u-upload__status[data-v-49deb6f2] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.u-upload__status__icon[data-v-49deb6f2] {\n  position: relative;\n  z-index: 1;\n}\n.u-upload__status__message[data-v-49deb6f2] {\n  font-size: 12px;\n  color: #FFFFFF;\n  margin-top: 5px;\n}\n.u-upload__button[data-v-49deb6f2] {\n\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  background-color: rgb(244, 245, 247);\n  border-radius: 2px;\n  margin: 0 8px 8px 0;\n  box-sizing: border-box;\n}\n.u-upload__button__text[data-v-49deb6f2] {\n  font-size: 11px;\n  color: #909193;\n  margin-top: 2px;\n}\n.u-upload__button--hover[data-v-49deb6f2] {\n  background-color: rgb(230, 231, 233);\n}\n.u-upload__button--disabled[data-v-49deb6f2] {\n  opacity: 0.5;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "m76z":
/*!************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/utils.js ***!
  \************************************************************/
/*! exports provided: chooseFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseFile", function() { return chooseFile; });
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "VTBJ");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "yq1k");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "E9XD");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "JTJg");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);









function pickExclude(obj, keys) {
  // 某些情况下，type可能会为
  if (!['[object Object]', '[object File]'].includes(Object.prototype.toString.call(obj))) {
    return {};
  }
  return Object.keys(obj).reduce(function (prev, key) {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
function formatImage(res) {
  return res.tempFiles.map(function (item) {
    return Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pickExclude(item, ['path'])), {}, {
      type: 'image',
      url: item.path,
      thumb: item.path,
      size: item.size,
      name: item.name
    });
  });
}
function formatVideo(res) {
  return [Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg'])), {}, {
    type: 'video',
    url: res.tempFilePath,
    thumb: res.thumbTempFilePath,
    size: res.size,
    name: res.name
  })];
}
function formatMedia(res) {
  return res.tempFiles.map(function (item) {
    return Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath'])), {}, {
      type: res.type,
      url: item.tempFilePath,
      thumb: res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath,
      size: item.size
    });
  });
}
function formatFile(res) {
  return res.tempFiles.map(function (item) {
    return Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pickExclude(item, ['path'])), {}, {
      url: item.path,
      size: item.size,
      name: item.name,
      type: item.type
    });
  });
}
function chooseFile(_ref) {
  var accept = _ref.accept,
    multiple = _ref.multiple,
    capture = _ref.capture,
    compressed = _ref.compressed,
    maxDuration = _ref.maxDuration,
    sizeType = _ref.sizeType,
    camera = _ref.camera,
    maxCount = _ref.maxCount;
  return new Promise(function (resolve, reject) {
    switch (accept) {
      case 'image':
        uni.chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture,
          sizeType: sizeType,
          success: function success(res) {
            return resolve(formatImage(res));
          },
          fail: reject
        });
        break;
      case 'video':
        uni.chooseVideo({
          sourceType: capture,
          compressed: compressed,
          maxDuration: maxDuration,
          camera: camera,
          success: function success(res) {
            return resolve(formatVideo(res));
          },
          fail: reject
        });
        break;

      // 只有微信小程序才支持chooseMessageFile接口
      case 'file':
        // 需要hx2.9.9以上才支持uni.chooseFile
        uni.chooseFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: function success(res) {
            return resolve(formatFile(res));
          },
          fail: reject
        });
        break;
      default:
        // 此为保底选项，在accept不为上面任意一项的时候选取全部文件

        // 需要hx2.9.9以上才支持uni.chooseFile
        uni.chooseFile({
          count: multiple ? maxCount : 1,
          type: 'all',
          success: function success(res) {
            return resolve(formatFile(res));
          },
          fail: reject
        });
    }
  });
}

/***/ }),

/***/ "n0OH":
/*!************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/props.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "qePV");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // 接受的文件类型, 可选值为all media image file video
    accept: {
      type: String,
      default: uni.$u.props.upload.accept
    },
    // 	图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
    capture: {
      type: [String, Array],
      default: uni.$u.props.upload.capture
    },
    // 当accept为video时生效，是否压缩视频，默认为true
    compressed: {
      type: Boolean,
      default: uni.$u.props.upload.compressed
    },
    // 当accept为video时生效，可选值为back或front
    camera: {
      type: String,
      default: uni.$u.props.upload.camera
    },
    // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
    maxDuration: {
      type: Number,
      default: uni.$u.props.upload.maxDuration
    },
    // 上传区域的图标，只能内置图标
    uploadIcon: {
      type: String,
      default: uni.$u.props.upload.uploadIcon
    },
    // 上传区域的图标的颜色，默认
    uploadIconColor: {
      type: String,
      default: uni.$u.props.upload.uploadIconColor
    },
    // 是否开启文件读取前事件
    useBeforeRead: {
      type: Boolean,
      default: uni.$u.props.upload.useBeforeRead
    },
    // 读取后的处理函数
    afterRead: {
      type: Function,
      default: null
    },
    // 读取前的处理函数
    beforeRead: {
      type: Function,
      default: null
    },
    // 是否显示组件自带的图片预览功能
    previewFullImage: {
      type: Boolean,
      default: uni.$u.props.upload.previewFullImage
    },
    // 最大上传数量
    maxCount: {
      type: [String, Number],
      default: uni.$u.props.upload.maxCount
    },
    // 是否启用
    disabled: {
      type: Boolean,
      default: uni.$u.props.upload.disabled
    },
    // 预览上传的图片时的裁剪模式，和image组件mode属性一致
    imageMode: {
      type: String,
      default: uni.$u.props.upload.imageMode
    },
    // 标识符，可以在回调函数的第二项参数中获取
    name: {
      type: String,
      default: uni.$u.props.upload.name
    },
    // 所选的图片的尺寸, 可选值为original compressed
    sizeType: {
      type: Array,
      default: uni.$u.props.upload.sizeType
    },
    // 是否开启图片多选，部分安卓机型不支持
    multiple: {
      type: Boolean,
      default: uni.$u.props.upload.multiple
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: uni.$u.props.upload.deletable
    },
    // 文件大小限制，单位为byte
    maxSize: {
      type: [String, Number],
      default: uni.$u.props.upload.maxSize
    },
    // 显示已上传的文件列表
    fileList: {
      type: Array,
      default: uni.$u.props.upload.fileList
    },
    // 上传区域的提示文字
    uploadText: {
      type: String,
      default: uni.$u.props.upload.uploadText
    },
    // 内部预览图片区域和选择图片按钮的区域宽度
    width: {
      type: [String, Number],
      default: uni.$u.props.upload.width
    },
    // 内部预览图片区域和选择图片按钮的区域高度
    height: {
      type: [String, Number],
      default: uni.$u.props.upload.height
    },
    // 是否在上传完成后展示预览图
    previewImage: {
      type: Boolean,
      default: uni.$u.props.upload.previewImage
    }
  }
});

/***/ }),

/***/ "oA0I":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!./node_modules/postcss-loader/src??ref--9-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../postcss-loader/src??ref--9-oneOf-1-3!../../../@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& */ "cgRH");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/lib/addStylesClient.js */ "TwZa").default
var update = add("46853b8c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "pmPA":
/*!*****************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_13_0_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../babel-loader/lib??ref--13-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-upload.vue?vue&type=script&lang=js& */ "0EiT");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_13_0_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "zGEm":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader??ref--9-oneOf-1-0!../../../@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-2!../../../postcss-loader/src??ref--9-oneOf-1-3!../../../@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--9-oneOf-1-4!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-1-5!../../../@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./u-upload.vue?vue&type=style&index=0&id=49deb6f2&lang=scss&scoped=true& */ "oA0I");
/* harmony import */ var _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_dcloudio_vue_cli_plugin_uni_packages_h5_vue_style_loader_index_js_ref_9_oneOf_1_0_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_2_postcss_loader_src_index_js_ref_9_oneOf_1_3_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_1_5_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_u_upload_vue_vue_type_style_index_0_id_49deb6f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);