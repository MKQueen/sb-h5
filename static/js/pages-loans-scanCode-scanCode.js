(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loans-scanCode-scanCode"],{

/***/ "1o0T":
/*!***********************************************!*\
  !*** ./src/pages/loans/scanCode/scanCode.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanCode.vue?vue&type=template&id=17cc820c&scoped=true& */ "oX2d");
/* harmony import */ var _scanCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanCode.vue?vue&type=script&lang=js& */ "6uNk");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "8MXW");

var renderjs




/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _scanCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17cc820c",
  null,
  false,
  _scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/loans/scanCode/scanCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6uNk":
/*!************************************************************************!*\
  !*** ./src/pages/loans/scanCode/scanCode.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--13-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./scanCode.vue?vue&type=script&lang=js& */ "wK5g");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "GKBh":
/*!*********************************************!*\
  !*** ./node_modules/weixin-js-sdk/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!(function(e, n) {
  module.exports = n(e);
})(window, function(o, e) {
  if (!o.jWeixin) {
    var n,
      c = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        onMenuShareQZone: "menu:share:QZone",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest",
        openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
        startSearchBeacons: "startMonitoringBeacons",
        stopSearchBeacons: "stopMonitoringBeacons",
        onSearchBeacons: "onBeaconsInRange",
        consumeAndShareCard: "consumedShareCard",
        openAddress: "editAddress"
      },
      a = (function() {
        var e = {};
        for (var n in c) e[c[n]] = n;
        return e;
      })(),
      i = o.document,
      t = i.title,
      r = navigator.userAgent.toLowerCase(),
      s = navigator.platform.toLowerCase(),
      d = !(!s.match("mac") && !s.match("win")),
      u = -1 != r.indexOf("wxdebugger"),
      l = -1 != r.indexOf("micromessenger"),
      p = -1 != r.indexOf("android"),
      f = -1 != r.indexOf("iphone") || -1 != r.indexOf("ipad"),
      m = (n =
        r.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
        r.match(/micromessenger\/(\d+\.\d+)/))
        ? n[1]
        : "",
      g = {
        initStartTime: L(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      },
      h = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: f ? 1 : p ? 2 : -1,
        clientVersion: m,
        url: encodeURIComponent(location.href)
      },
      v = {},
      S = { _completes: [] },
      y = { state: 0, data: {} };
    O(function() {
      g.initEndTime = L();
    });
    var I = !1,
      _ = [],
      w = {
        config: function(e) {
          B("config", (v = e));
          var t = !1 !== v.check;
          O(function() {
            if (t)
              M(
                c.config,
                {
                  verifyJsApiList: C(v.jsApiList),
                  verifyOpenTagList: C(v.openTagList)
                },
                (function() {
                  (S._complete = function(e) {
                    (g.preVerifyEndTime = L()), (y.state = 1), (y.data = e);
                  }),
                    (S.success = function(e) {
                      h.isPreVerifyOk = 0;
                    }),
                    (S.fail = function(e) {
                      S._fail ? S._fail(e) : (y.state = -1);
                    });
                  var t = S._completes;
                  return (
                    t.push(function() {
                      !(function() {
                        if (
                          !(
                            d ||
                            u ||
                            v.debug ||
                            m < "6.0.2" ||
                            h.systemType < 0
                          )
                        ) {
                          var i = new Image();
                          (h.appId = v.appId),
                            (h.initTime = g.initEndTime - g.initStartTime),
                            (h.preVerifyTime =
                              g.preVerifyEndTime - g.preVerifyStartTime),
                            w.getNetworkType({
                              isInnerInvoke: !0,
                              success: function(e) {
                                h.networkType = e.networkType;
                                var n =
                                  "https://open.weixin.qq.com/sdk/report?v=" +
                                  h.version +
                                  "&o=" +
                                  h.isPreVerifyOk +
                                  "&s=" +
                                  h.systemType +
                                  "&c=" +
                                  h.clientVersion +
                                  "&a=" +
                                  h.appId +
                                  "&n=" +
                                  h.networkType +
                                  "&i=" +
                                  h.initTime +
                                  "&p=" +
                                  h.preVerifyTime +
                                  "&u=" +
                                  h.url;
                                i.src = n;
                              }
                            });
                        }
                      })();
                    }),
                    (S.complete = function(e) {
                      for (var n = 0, i = t.length; n < i; ++n) t[n]();
                      S._completes = [];
                    }),
                    S
                  );
                })()
              ),
                (g.preVerifyStartTime = L());
            else {
              y.state = 1;
              for (var e = S._completes, n = 0, i = e.length; n < i; ++n)
                e[n]();
              S._completes = [];
            }
          }),
            w.invoke ||
              ((w.invoke = function(e, n, i) {
                o.WeixinJSBridge && WeixinJSBridge.invoke(e, x(n), i);
              }),
              (w.on = function(e, n) {
                o.WeixinJSBridge && WeixinJSBridge.on(e, n);
              }));
        },
        ready: function(e) {
          0 != y.state ? e() : (S._completes.push(e), !l && v.debug && e());
        },
        error: function(e) {
          m < "6.0.2" || (-1 == y.state ? e(y.data) : (S._fail = e));
        },
        checkJsApi: function(e) {
          M(
            "checkJsApi",
            { jsApiList: C(e.jsApiList) },
            ((e._complete = function(e) {
              if (p) {
                var n = e.checkResult;
                n && (e.checkResult = JSON.parse(n));
              }
              e = (function(e) {
                var n = e.checkResult;
                for (var i in n) {
                  var t = a[i];
                  t && ((n[t] = n[i]), delete n[i]);
                }
                return e;
              })(e);
            }),
            e)
          );
        },
        onMenuShareTimeline: function(e) {
          P(
            c.onMenuShareTimeline,
            {
              complete: function() {
                M(
                  "shareTimeline",
                  {
                    title: e.title || t,
                    desc: e.title || t,
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                    type: e.type || "link",
                    data_url: e.dataUrl || ""
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareAppMessage: function(n) {
          P(
            c.onMenuShareAppMessage,
            {
              complete: function(e) {
                "favorite" === e.scene
                  ? M("sendAppMessage", {
                      title: n.title || t,
                      desc: n.desc || "",
                      link: n.link || location.href,
                      img_url: n.imgUrl || "",
                      type: n.type || "link",
                      data_url: n.dataUrl || ""
                    })
                  : M(
                      "sendAppMessage",
                      {
                        title: n.title || t,
                        desc: n.desc || "",
                        link: n.link || location.href,
                        img_url: n.imgUrl || "",
                        type: n.type || "link",
                        data_url: n.dataUrl || ""
                      },
                      n
                    );
              }
            },
            n
          );
        },
        onMenuShareQQ: function(e) {
          P(
            c.onMenuShareQQ,
            {
              complete: function() {
                M(
                  "shareQQ",
                  {
                    title: e.title || t,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareWeibo: function(e) {
          P(
            c.onMenuShareWeibo,
            {
              complete: function() {
                M(
                  "shareWeiboApp",
                  {
                    title: e.title || t,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareQZone: function(e) {
          P(
            c.onMenuShareQZone,
            {
              complete: function() {
                M(
                  "shareQZone",
                  {
                    title: e.title || t,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        updateTimelineShareData: function(e) {
          M(
            "updateTimelineShareData",
            { title: e.title, link: e.link, imgUrl: e.imgUrl },
            e
          );
        },
        updateAppMessageShareData: function(e) {
          M(
            "updateAppMessageShareData",
            { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl },
            e
          );
        },
        startRecord: function(e) {
          M("startRecord", {}, e);
        },
        stopRecord: function(e) {
          M("stopRecord", {}, e);
        },
        onVoiceRecordEnd: function(e) {
          P("onVoiceRecordEnd", e);
        },
        playVoice: function(e) {
          M("playVoice", { localId: e.localId }, e);
        },
        pauseVoice: function(e) {
          M("pauseVoice", { localId: e.localId }, e);
        },
        stopVoice: function(e) {
          M("stopVoice", { localId: e.localId }, e);
        },
        onVoicePlayEnd: function(e) {
          P("onVoicePlayEnd", e);
        },
        uploadVoice: function(e) {
          M(
            "uploadVoice",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
            },
            e
          );
        },
        downloadVoice: function(e) {
          M(
            "downloadVoice",
            {
              serverId: e.serverId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
            },
            e
          );
        },
        translateVoice: function(e) {
          M(
            "translateVoice",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
            },
            e
          );
        },
        chooseImage: function(e) {
          M(
            "chooseImage",
            {
              scene: "1|2",
              count: e.count || 9,
              sizeType: e.sizeType || ["original", "compressed"],
              sourceType: e.sourceType || ["album", "camera"]
            },
            ((e._complete = function(e) {
              if (p) {
                var n = e.localIds;
                try {
                  n && (e.localIds = JSON.parse(n));
                } catch (e) {}
              }
            }),
            e)
          );
        },
        getLocation: function(e) {},
        previewImage: function(e) {
          M(c.previewImage, { current: e.current, urls: e.urls }, e);
        },
        uploadImage: function(e) {
          M(
            "uploadImage",
            {
              localId: e.localId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
            },
            e
          );
        },
        downloadImage: function(e) {
          M(
            "downloadImage",
            {
              serverId: e.serverId,
              isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
            },
            e
          );
        },
        getLocalImgData: function(e) {
          !1 === I
            ? ((I = !0),
              M(
                "getLocalImgData",
                { localId: e.localId },
                ((e._complete = function(e) {
                  if (((I = !1), 0 < _.length)) {
                    var n = _.shift();
                    wx.getLocalImgData(n);
                  }
                }),
                e)
              ))
            : _.push(e);
        },
        getNetworkType: function(e) {
          M(
            "getNetworkType",
            {},
            ((e._complete = function(e) {
              e = (function(e) {
                var n = e.errMsg;
                e.errMsg = "getNetworkType:ok";
                var i = e.subtype;
                if ((delete e.subtype, i)) e.networkType = i;
                else {
                  var t = n.indexOf(":"),
                    o = n.substring(t + 1);
                  switch (o) {
                    case "wifi":
                    case "edge":
                    case "wwan":
                      e.networkType = o;
                      break;
                    default:
                      e.errMsg = "getNetworkType:fail";
                  }
                }
                return e;
              })(e);
            }),
            e)
          );
        },
        openLocation: function(e) {
          M(
            "openLocation",
            {
              latitude: e.latitude,
              longitude: e.longitude,
              name: e.name || "",
              address: e.address || "",
              scale: e.scale || 28,
              infoUrl: e.infoUrl || ""
            },
            e
          );
        },
        getLocation: function(e) {
          M(
            c.getLocation,
            { type: (e = e || {}).type || "wgs84" },
            ((e._complete = function(e) {
              delete e.type;
            }),
            e)
          );
        },
        hideOptionMenu: function(e) {
          M("hideOptionMenu", {}, e);
        },
        showOptionMenu: function(e) {
          M("showOptionMenu", {}, e);
        },
        closeWindow: function(e) {
          M("closeWindow", {}, (e = e || {}));
        },
        hideMenuItems: function(e) {
          M("hideMenuItems", { menuList: e.menuList }, e);
        },
        showMenuItems: function(e) {
          M("showMenuItems", { menuList: e.menuList }, e);
        },
        hideAllNonBaseMenuItem: function(e) {
          M("hideAllNonBaseMenuItem", {}, e);
        },
        showAllNonBaseMenuItem: function(e) {
          M("showAllNonBaseMenuItem", {}, e);
        },
        scanQRCode: function(e) {
          M(
            "scanQRCode",
            {
              needResult: (e = e || {}).needResult || 0,
              scanType: e.scanType || ["qrCode", "barCode"]
            },
            ((e._complete = function(e) {
              if (f) {
                var n = e.resultStr;
                if (n) {
                  var i = JSON.parse(n);
                  e.resultStr = i && i.scan_code && i.scan_code.scan_result;
                }
              }
            }),
            e)
          );
        },
        openAddress: function(e) {
          M(
            c.openAddress,
            {},
            ((e._complete = function(e) {
              e = (function(e) {
                return (
                  (e.postalCode = e.addressPostalCode),
                  delete e.addressPostalCode,
                  (e.provinceName = e.proviceFirstStageName),
                  delete e.proviceFirstStageName,
                  (e.cityName = e.addressCitySecondStageName),
                  delete e.addressCitySecondStageName,
                  (e.countryName = e.addressCountiesThirdStageName),
                  delete e.addressCountiesThirdStageName,
                  (e.detailInfo = e.addressDetailInfo),
                  delete e.addressDetailInfo,
                  e
                );
              })(e);
            }),
            e)
          );
        },
        openProductSpecificView: function(e) {
          M(
            c.openProductSpecificView,
            {
              pid: e.productId,
              view_type: e.viewType || 0,
              ext_info: e.extInfo
            },
            e
          );
        },
        addCard: function(e) {
          for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {
            var r = n[t],
              a = { card_id: r.cardId, card_ext: r.cardExt };
            i.push(a);
          }
          M(
            c.addCard,
            { card_list: i },
            ((e._complete = function(e) {
              var n = e.card_list;
              if (n) {
                for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {
                  var o = n[i];
                  (o.cardId = o.card_id),
                    (o.cardExt = o.card_ext),
                    (o.isSuccess = !!o.is_succ),
                    delete o.card_id,
                    delete o.card_ext,
                    delete o.is_succ;
                }
                (e.cardList = n), delete e.card_list;
              }
            }),
            e)
          );
        },
        chooseCard: function(e) {
          M(
            "chooseCard",
            {
              app_id: v.appId,
              location_id: e.shopId || "",
              sign_type: e.signType || "SHA1",
              card_id: e.cardId || "",
              card_type: e.cardType || "",
              card_sign: e.cardSign,
              time_stamp: e.timestamp + "",
              nonce_str: e.nonceStr
            },
            ((e._complete = function(e) {
              (e.cardList = e.choose_card_info), delete e.choose_card_info;
            }),
            e)
          );
        },
        openCard: function(e) {
          for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {
            var r = n[t],
              a = { card_id: r.cardId, code: r.code };
            i.push(a);
          }
          M(c.openCard, { card_list: i }, e);
        },
        consumeAndShareCard: function(e) {
          M(
            c.consumeAndShareCard,
            { consumedCardId: e.cardId, consumedCode: e.code },
            e
          );
        },
        chooseWXPay: function(e) {
          M(c.chooseWXPay, V(e), e);
        },
        openEnterpriseRedPacket: function(e) {
          M(c.openEnterpriseRedPacket, V(e), e);
        },
        startSearchBeacons: function(e) {
          M(c.startSearchBeacons, { ticket: e.ticket }, e);
        },
        stopSearchBeacons: function(e) {
          M(c.stopSearchBeacons, {}, e);
        },
        onSearchBeacons: function(e) {
          P(c.onSearchBeacons, e);
        },
        openEnterpriseChat: function(e) {
          M(
            "openEnterpriseChat",
            { useridlist: e.userIds, chatname: e.groupName },
            e
          );
        },
        launchMiniProgram: function(e) {
          M(
            "launchMiniProgram",
            {
              targetAppId: e.targetAppId,
              path: (function(e) {
                if ("string" == typeof e && 0 < e.length) {
                  var n = e.split("?")[0],
                    i = e.split("?")[1];
                  return (n += ".html"), void 0 !== i ? n + "?" + i : n;
                }
              })(e.path),
              envVersion: e.envVersion
            },
            e
          );
        },
        openBusinessView: function(e) {
          M(
            "openBusinessView",
            {
              businessType: e.businessType,
              queryString: e.queryString || "",
              envVersion: e.envVersion
            },
            ((e._complete = function(n) {
              if (p) {
                var e = n.extraData;
                if (e)
                  try {
                    n.extraData = JSON.parse(e);
                  } catch (e) {
                    n.extraData = {};
                  }
              }
            }),
            e)
          );
        },
        miniProgram: {
          navigateBack: function(e) {
            (e = e || {}),
              O(function() {
                M(
                  "invokeMiniProgramAPI",
                  { name: "navigateBack", arg: { delta: e.delta || 1 } },
                  e
                );
              });
          },
          navigateTo: function(e) {
            O(function() {
              M(
                "invokeMiniProgramAPI",
                { name: "navigateTo", arg: { url: e.url } },
                e
              );
            });
          },
          redirectTo: function(e) {
            O(function() {
              M(
                "invokeMiniProgramAPI",
                { name: "redirectTo", arg: { url: e.url } },
                e
              );
            });
          },
          switchTab: function(e) {
            O(function() {
              M(
                "invokeMiniProgramAPI",
                { name: "switchTab", arg: { url: e.url } },
                e
              );
            });
          },
          reLaunch: function(e) {
            O(function() {
              M(
                "invokeMiniProgramAPI",
                { name: "reLaunch", arg: { url: e.url } },
                e
              );
            });
          },
          postMessage: function(e) {
            O(function() {
              M(
                "invokeMiniProgramAPI",
                { name: "postMessage", arg: e.data || {} },
                e
              );
            });
          },
          getEnv: function(e) {
            O(function() {
              e({ miniprogram: "miniprogram" === o.__wxjs_environment });
            });
          }
        }
      },
      T = 1,
      k = {};
    return (
      i.addEventListener(
        "error",
        function(e) {
          if (!p) {
            var n = e.target,
              i = n.tagName,
              t = n.src;
            if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i)
              if (-1 != t.indexOf("wxlocalresource://")) {
                e.preventDefault(), e.stopPropagation();
                var o = n["wx-id"];
                if ((o || ((o = T++), (n["wx-id"] = o)), k[o])) return;
                (k[o] = !0),
                  wx.ready(function() {
                    wx.getLocalImgData({
                      localId: t,
                      success: function(e) {
                        n.src = e.localData;
                      }
                    });
                  });
              }
          }
        },
        !0
      ),
      i.addEventListener(
        "load",
        function(e) {
          if (!p) {
            var n = e.target,
              i = n.tagName;
            n.src;
            if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
              var t = n["wx-id"];
              t && (k[t] = !1);
            }
          }
        },
        !0
      ),
      e && (o.wx = o.jWeixin = w),
      w
    );
  }
  function M(n, e, i) {
    o.WeixinJSBridge
      ? WeixinJSBridge.invoke(n, x(e), function(e) {
          A(n, e, i);
        })
      : B(n, i);
  }
  function P(n, i, t) {
    o.WeixinJSBridge
      ? WeixinJSBridge.on(n, function(e) {
          t && t.trigger && t.trigger(e), A(n, e, i);
        })
      : B(n, t || i);
  }
  function x(e) {
    return (
      ((e = e || {}).appId = v.appId),
      (e.verifyAppId = v.appId),
      (e.verifySignType = "sha1"),
      (e.verifyTimestamp = v.timestamp + ""),
      (e.verifyNonceStr = v.nonceStr),
      (e.verifySignature = v.signature),
      e
    );
  }
  function V(e) {
    return {
      timeStamp: e.timestamp + "",
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || "SHA1"
    };
  }
  function A(e, n, i) {
    ("openEnterpriseChat" != e && "openBusinessView" !== e) ||
      (n.errCode = n.err_code),
      delete n.err_code,
      delete n.err_desc,
      delete n.err_detail;
    var t = n.errMsg;
    t ||
      ((t = n.err_msg),
      delete n.err_msg,
      (t = (function(e, n) {
        var i = e,
          t = a[i];
        t && (i = t);
        var o = "ok";
        if (n) {
          var r = n.indexOf(":");
          "confirm" == (o = n.substring(r + 1)) && (o = "ok"),
            "failed" == o && (o = "fail"),
            -1 != o.indexOf("failed_") && (o = o.substring(7)),
            -1 != o.indexOf("fail_") && (o = o.substring(5)),
            ("access denied" !=
              (o = (o = o.replace(/_/g, " ")).toLowerCase()) &&
              "no permission to execute" != o) ||
              (o = "permission denied"),
            "config" == i && "function not exist" == o && (o = "ok"),
            "" == o && (o = "fail");
        }
        return (n = i + ":" + o);
      })(e, t)),
      (n.errMsg = t)),
      (i = i || {})._complete && (i._complete(n), delete i._complete),
      (t = n.errMsg || ""),
      v.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
    var o = t.indexOf(":");
    switch (t.substring(o + 1)) {
      case "ok":
        i.success && i.success(n);
        break;
      case "cancel":
        i.cancel && i.cancel(n);
        break;
      default:
        i.fail && i.fail(n);
    }
    i.complete && i.complete(n);
  }
  function C(e) {
    if (e) {
      for (var n = 0, i = e.length; n < i; ++n) {
        var t = e[n],
          o = c[t];
        o && (e[n] = o);
      }
      return e;
    }
  }
  function B(e, n) {
    if (!(!v.debug || (n && n.isInnerInvoke))) {
      var i = a[e];
      i && (e = i),
        n && n._complete && delete n._complete,
        console.log('"' + e + '",', n || "");
    }
  }
  function L() {
    return new Date().getTime();
  }
  function O(e) {
    l &&
      (o.WeixinJSBridge
        ? e()
        : i.addEventListener &&
          i.addEventListener("WeixinJSBridgeReady", e, !1));
  }
});


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

/***/ "Z+wp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/loans/scanCode/scanCode.vue?vue&type=template&id=17cc820c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "oX2d":
/*!******************************************************************************************!*\
  !*** ./src/pages/loans/scanCode/scanCode.vue?vue&type=template&id=17cc820c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./scanCode.vue?vue&type=template&id=17cc820c&scoped=true& */ "Z+wp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_scoped_loader_index_js_scanCode_vue_vue_type_template_id_17cc820c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ "wK5g":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader!./src/pages/loans/scanCode/scanCode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "HaE+");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "ls82");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weixin-js-sdk */ "GKBh");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/common.js */ "KTTK");


//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.getSignFn();
  },
  methods: {
    getSignFn: function getSignFn() {
      return Object(_Users_one_WEB_project_bj_fuhuagongyinglian_suppplierbuyer_h5_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = {
                url: window.location.href
              };
              _context.prev = 1;
              _context.next = 4;
              return Object(_api_common_js__WEBPACK_IMPORTED_MODULE_3__["getSign"])(data);
            case 4:
              res = _context.sent;
              if (res.data.success && res.data.obj) {
                weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.config({
                  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  debug: true,
                  // 必填，公众号的唯一标识
                  appId: res.data.obj.appId,
                  // 必填，生成签名的时间戳
                  timestamp: res.data.obj.timestamp,
                  // 必填，生成签名的随机串
                  nonceStr: res.data.obj.nonceStr,
                  // 必填，签名，见附录1
                  signature: res.data.obj.signature,
                  // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                  jsApiList: ['scanQRCode']
                });
              }
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.info(_context.t0, 'err');
            case 11:
              weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.error(function (res) {
                alert('出错了：' + res.errMsg);
              });
              weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.ready(function () {
                weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.checkJsApi({
                  jsApiList: ['scanQRCode'],
                  success: function success(res) {
                    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.scanQRCode({
                      needResult: 1,
                      // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                      scanType: ['qrCode'],
                      // 可以指定扫二维码还是一维码，默认二者都有
                      success: function success(res) {
                        alert('扫描成功', res.resultStr);
                      }
                    });
                  },
                  fail: function fail(e) {
                    console.log('当前登录环境不支持扫码,请切换微信环境');
                  }
                });
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }))();
    }
  }
});

/***/ })

}]);