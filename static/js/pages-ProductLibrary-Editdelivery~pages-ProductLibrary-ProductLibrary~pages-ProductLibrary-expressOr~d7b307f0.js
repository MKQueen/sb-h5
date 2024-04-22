(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ProductLibrary-Editdelivery~pages-ProductLibrary-ProductLibrary~pages-ProductLibrary-expressOr~d7b307f0"],{

/***/ "372J":
/*!*********************************!*\
  !*** ./src/common/requestll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "hByQ");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "ma9I");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ "pJv6");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "4UNb");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/index.js */ "Q2AE");









axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.pathImg = _config_js__WEBPACK_IMPORTED_MODULE_4__["PATH_IMG"];
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.baseApi = _config_js__WEBPACK_IMPORTED_MODULE_4__["BASE_API"];
var service = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
  baseURL: _config_js__WEBPACK_IMPORTED_MODULE_4__["BASE_API"],
  timeout: 300000,
  crossDomain: true
});

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(function (config) {
  var token = uni.getStorageSync('newToken').token;
  // if (config.method === 'post') {
  // 	config.data = qs.stringify(config.data);
  // }
  // if (config.method === 'get') {
  // 	config.url = config.url + '?' + qs.stringify(config.data);
  // }
  if (config.method === 'upload') {
    config.method = 'post';
  }
  config.headers.common['token'] = token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

//配置成功后的拦截器
service.interceptors.response.use(function (response) {
  if (response.status == 200) {
    console.log('响应拦截器的response--200', response);
    return Promise.resolve(response);
  }
}, function (error) {
  if (error.response.status === 401) {
    var search = location.search;
    var pathName = location.pathname;
    uni.$u.toast('请先登录!');
    if (search) {
      uni.redirectTo({
        url: "/pages/login/login?path=".concat(pathName).concat(search)
      });
      return;
    }
    uni.redirectTo({
      url: "/pages/login/login?path=".concat(pathName)
    });
  }
  return Promise.reject(error);
});

// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.adapter = function (config) {
  return new Promise(function (resolve, reject) {
    var settle = __webpack_require__(/*! axios/lib/core/settle */ "Rn+g");
    var buildURL = __webpack_require__(/*! axios/lib/helpers/buildURL */ "MLWZ");
    uni.request({
      method: config.method.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        };
        settle(resolve, reject, response);
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (service);

/***/ }),

/***/ "MZEg":
/*!*************************!*\
  !*** ./src/api/home.js ***!
  \*************************/
/*! exports provided: getHomeBanner, getNftseriesList, getCastingCollList, getNfttypeList, getNfttypedrawLogList, getMsgIsRead, getfindCastingList, getSelectedContent, getNewsInfo, getfindBySeriesList, submitOrder, getStock, getOrderDetail, getByOrderNo, orderPay, aliPayOrder, joinAirdrop, getIsCreateOrder, getnftapplylist, getnftapplyDetails, getDrawUserResult, getnftapplyInfo, nftapplyOrderAdd, nftapplyOrderAdds, getSeriesCollList, getSeriesCollInfo, getFindSeries, getGoods_notice, getNftresalepaying, nftresaleorders, resaleOrderPay, getBannerList, getWeixinConfig, getlistArticle, getArticleDetails, getquotationList, getMarketInfo, getIssuerInfo, projectList, deliveryList_byProject, fhdeliverylist_get, goodsDetail_find, goodsDetailAdd_find, goodsDetailMoney_get, goodsDetailMoney_getByNumber, addFhDeliveryDetail, updateFhDeliveryDetail, listDriver, updateDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeBanner", function() { return getHomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNftseriesList", function() { return getNftseriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCastingCollList", function() { return getCastingCollList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNfttypeList", function() { return getNfttypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNfttypedrawLogList", function() { return getNfttypedrawLogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsgIsRead", function() { return getMsgIsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getfindCastingList", function() { return getfindCastingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedContent", function() { return getSelectedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsInfo", function() { return getNewsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getfindBySeriesList", function() { return getfindBySeriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitOrder", function() { return submitOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStock", function() { return getStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDetail", function() { return getOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByOrderNo", function() { return getByOrderNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderPay", function() { return orderPay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliPayOrder", function() { return aliPayOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinAirdrop", function() { return joinAirdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsCreateOrder", function() { return getIsCreateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getnftapplylist", function() { return getnftapplylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getnftapplyDetails", function() { return getnftapplyDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawUserResult", function() { return getDrawUserResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getnftapplyInfo", function() { return getnftapplyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nftapplyOrderAdd", function() { return nftapplyOrderAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nftapplyOrderAdds", function() { return nftapplyOrderAdds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeriesCollList", function() { return getSeriesCollList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeriesCollInfo", function() { return getSeriesCollInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFindSeries", function() { return getFindSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoods_notice", function() { return getGoods_notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNftresalepaying", function() { return getNftresalepaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nftresaleorders", function() { return nftresaleorders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resaleOrderPay", function() { return resaleOrderPay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerList", function() { return getBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeixinConfig", function() { return getWeixinConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlistArticle", function() { return getlistArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleDetails", function() { return getArticleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getquotationList", function() { return getquotationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarketInfo", function() { return getMarketInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssuerInfo", function() { return getIssuerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectList", function() { return projectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deliveryList_byProject", function() { return deliveryList_byProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fhdeliverylist_get", function() { return fhdeliverylist_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsDetail_find", function() { return goodsDetail_find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsDetailAdd_find", function() { return goodsDetailAdd_find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsDetailMoney_get", function() { return goodsDetailMoney_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goodsDetailMoney_getByNumber", function() { return goodsDetailMoney_getByNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFhDeliveryDetail", function() { return addFhDeliveryDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFhDeliveryDetail", function() { return updateFhDeliveryDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listDriver", function() { return listDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDriver", function() { return updateDriver; });
/* harmony import */ var _common_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/request.js */ "y0tt");
/* harmony import */ var _common_requestll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/requestll.js */ "372J");



// 获取首页banner
function getHomeBanner(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/appConfig/getByAdkey',
    method: 'get',
    data: data
  });
}
// 获取首页列表数据
function getNftseriesList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/casting/nftseries/findAll',
    method: 'post',
    data: data
  });
}

// 获取首页发布藏品列表
function getCastingCollList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/casting/nftseries/castingCollList',
    method: 'post',
    data: data
  });
}

// 藏品分类信息-查询
function getNfttypeList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cdwjs/nfttype/list',
    method: 'post',
    data: data
  });
}

// 中签记录管理 分页查询
function getNfttypedrawLogList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/apply/nftapply/drawLogList',
    method: 'post',
    data: data
  });
}

// 用户未读消息
function getMsgIsRead(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cdwjs/nftusermsg/getMsg',
    method: 'post',
    data: data
  });
}

// 获取藏品管理数据
function getfindCastingList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/casting/nftseries/findCasting',
    method: 'post',
    data: data
  });
}

// 文章资讯信息-分页查询
function getSelectedContent(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cdwjs/nftarticle/list',
    method: 'post',
    data: data
  });
}

// 文章资讯信息-分页查询
function getNewsInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/nftarticle/get/".concat(data.id),
    method: 'get',
    data: data
  });
}

//藏品管理-按系列查询列表
function getfindBySeriesList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/casting/nftseries/findBySeries',
    method: 'post',
    data: data
  });
}
// 立即抢购
function submitOrder(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/order/nftorder/submitOrder',
    method: 'post',
    data: data
  });
}

// 获取库存
function getStock(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/casting/nftseries/getStock',
    method: 'post',
    data: data
  });
}

// 订单详情
function getOrderDetail(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/order/nftorder/getOrderDetail/v2',
    method: 'post',
    data: data
  });
}

// 订单详情
function getByOrderNo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/order/nftorder/getByOrderNo',
    method: 'post',
    data: data
  });
}

// 抢购申购订单支付
function orderPay(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pay/order/pay',
    method: 'post',
    data: data
  });
}

// 支付宝支付
function aliPayOrder(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pay/aliCallback',
    method: 'post',
    data: data
  });
}

// 领取空投
function joinAirdrop(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/order/nftorder/joinAirdrop',
    method: 'post',
    data: data
  });
}

//查询订单是否生成
function getIsCreateOrder(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/order/nftorder/getIsCreateOrder',
    method: 'post',
    data: data
  });
}

//申购藏品列表 分页查询
function getnftapplylist(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/apply/nftapply/coll/list',
    method: 'post',
    data: data
  });
}

//申购藏品信息-id查询
function getnftapplyDetails(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/get/".concat(data.id),
    method: 'get',
    data: data
  });
}

//用户中签结果
function getDrawUserResult(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/drawUserResult",
    method: 'post',
    data: data
  });
}

//申购藏品信息-id查询
function getnftapplyInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/info/v2",
    method: 'post',
    data: data
  });
}

//申购订单下单
function nftapplyOrderAdd(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/order/add",
    method: 'post',
    data: data
  });
}

//申购订单下单
function nftapplyOrderAdds(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/order/add/batch",
    method: 'post',
    data: data
  });
}

//发售
//系列列表
function getSeriesCollList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/casting/nftseries/seriesCollList",
    method: 'post',
    data: data
  });
}
//系列列表
function getSeriesCollInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/casting/nftseries/seriesCollInfo",
    method: 'post',
    data: data
  });
}

//系列列表
function getFindSeries(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/casting/nftseries/findSeries",
    method: 'post',
    data: data
  });
}

//预售列表 分页查询
function getGoods_notice(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/casting/nftseries/presaleList",
    method: 'post',
    data: data
  });
}

//转售
//转售市场挂单信息-分页查询
function getNftresalepaying(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/nftresalepaying/list",
    method: 'post',
    data: data
  });
}
function nftresaleorders(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/bank/nftresaleorder/get/".concat(data.id),
    method: 'get',
    data: data
  });
}
function resaleOrderPay(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/pay/resaleOrder/pay",
    method: 'post',
    data: data
  });
}

//banner查询
function getBannerList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/bank/nftbanner/list",
    method: 'post',
    data: data
  });
}

//查询跳转小程序配置参数
function getWeixinConfig(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/apply/nftapply/weixin",
    method: 'post',
    data: data
  });
}

//网站文章列表-分页查询
function getlistArticle(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/appConfig/listArticle",
    method: 'get',
    data: data
  });
}

//查询文章详情-id查询
function getArticleDetails(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/appConfig/getArticle",
    method: 'get',
    data: data
  });
}

//藏品行情信息-分页查询
function getquotationList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/bank/nftpricelog/openPrice/list",
    method: 'post',
    data: data
  });
}

//转售市场开闭市信息查询
function getMarketInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/nftresalepaying/getInfo",
    method: 'post',
    data: data
  });
}

//发行方信息-id查询
function getIssuerInfo(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/cdwjs/nftissuer/get/".concat(data.id),
    method: 'get',
    data: data
  });
}

//项目列表2024.3.11
function projectList(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhcreditcontract/projectList",
    method: 'post',
    data: data
  });
}
// 项目下送货单列表
function deliveryList_byProject(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // url:`/credit/fhdeliverylist/deliveryList`,
    url: "/credit/fhdeliverylist/list",
    method: 'post',
    data: data
  });
}
// 编辑回显送货单
function fhdeliverylist_get(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhdeliverylist/get/".concat(data.id),
    //编辑的时候用  传货运单号
    method: 'get',
    data: data
  });
}
// 送货单编号下-货物详情查询
function goodsDetail_find(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhcreditgoodsdetail/find",
    //编辑的时候用  传货运单号
    method: 'post',
    data: data
  });
}
function goodsDetailAdd_find(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // url:`/credit/fhcreditcontract/goodsDetailList`, //新增时候传合同id
    url: "/credit/fhcreditgoodsdetail/find",
    //订单id
    method: 'post',
    data: data
  });
}
function goodsDetailMoney_get(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhcreditgoodsdetail/findGoodsMoney",
    //获取订单金额 订单id
    method: 'post',
    data: data
  });
}
function goodsDetailMoney_getByNumber(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhcreditgoodsdetail/findDelivery",
    //获取订单金额 快递单号
    method: 'post',
    data: data
  });
}

// 货物详情和送货单信息-新增
function addFhDeliveryDetail(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // url:`/credit/fhdeliverylist/addFhDeliveryDetail`,
    url: "/credit/fhdeliverylist/modify",
    method: 'post',
    data: data
  });
}
// 货物详情和送货单信息-修改
function updateFhDeliveryDetail(data) {
  return Object(_common_requestll_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: "/credit/fhdeliverylist/updateFhDeliveryDetail",
    method: 'post',
    data: data
  });
}
// 司机列表
function listDriver(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhdriver/listDriver",
    method: 'post',
    data: data
  });
}
// 货物发车修改
function updateDriver(data) {
  return Object(_common_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/credit/fhdeliverylist/updateDriver",
    method: 'post',
    data: data
  });
}

/***/ })

}]);