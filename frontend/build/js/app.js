(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["app"],{

/***/ "./src/application/app.js":
/*!********************************!*\
  !*** ./src/application/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_intersect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alpinejs/intersect */ "./node_modules/@alpinejs/intersect/dist/module.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/ethers.js");
/* harmony import */ var _components_axiosFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/axiosFactory */ "./src/components/axiosFactory.js");
/* harmony import */ var _components_StickyNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StickyNav */ "./src/components/StickyNav.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContactForm */ "./src/components/ContactForm.js");
/* harmony import */ var _components_ContractDetailForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ContractDetailForm */ "./src/components/ContractDetailForm.js");
/* harmony import */ var _components_ChartJs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ChartJs */ "./src/components/ChartJs.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/tinymce.min.js */ "./node_modules/tinymce/tinymce.min.js");
/* harmony import */ var tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/icons/default/icons.js */ "./node_modules/tinymce/icons/default/icons.js");
/* harmony import */ var tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default_icons_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/themes/silver/theme.js */ "./node_modules/tinymce/themes/silver/theme.js");
/* harmony import */ var tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver_theme_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tinymce/skins/content/default/content.min.css */ "./node_modules/tinymce/skins/content/default/content.min.css");
/* harmony import */ var tinymce_skins_content_default_content_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tinymce/skins/content/default/content.css */ "./node_modules/tinymce/skins/content/default/content.css");
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tinymce/skins/ui/oxide/skin.min.css */ "./node_modules/tinymce/skins/ui/oxide/skin.min.css");
/* harmony import */ var tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/skins/ui/oxide/content.min.css */ "./node_modules/tinymce/skins/ui/oxide/content.min.css");
/* harmony import */ var tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/models/dom/model.js */ "./node_modules/tinymce/models/dom/model.js");
/* harmony import */ var tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_models_dom_model_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lottiefiles_lottie_player__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @lottiefiles/lottie-player */ "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/dist/flowbite.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(flowbite__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_AccountForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/AccountForm */ "./src/components/AccountForm.js");
/* harmony import */ var _components_ContractForm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/ContractForm */ "./src/components/ContractForm.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_26__);
// This is the scss entry file














// tinymce













// import ContactForm from "../components/ContactForm";




// Global Initializations for importedlibraries //
//----------------------------------------------------------
// initialize htmx
window.htmx = (htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default());
// // initialize tinymce
window.tinymce = (tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_11___default());
// initialize lottie web and lottie player
window.lottieweb = (lottie_web__WEBPACK_IMPORTED_MODULE_26___default());
// initialize animejs
window.anime = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_22__["default"];
window.scrollMagic = (scrollmagic__WEBPACK_IMPORTED_MODULE_23___default());
// initialize ether js for crypto payment
window.ethers = ethers__WEBPACK_IMPORTED_MODULE_27__;
// initialize axios async post|get request
window.axios = _components_axiosFactory__WEBPACK_IMPORTED_MODULE_4__["default"];
// initialize swiper.js
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_9__["default"];
// initiailize izitoast alerts
window.izitoast = (izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default());
// Alpine JS Scripts
window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].plugin(_alpinejs_intersect__WEBPACK_IMPORTED_MODULE_3__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data("AccountForm", _components_AccountForm__WEBPACK_IMPORTED_MODULE_24__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('ContractForm', _components_ContractForm__WEBPACK_IMPORTED_MODULE_25__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('ContactForm', _components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"]), alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('StickyNav', _components_StickyNav__WEBPACK_IMPORTED_MODULE_5__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('ContractDetailForm', _components_ContractDetailForm__WEBPACK_IMPORTED_MODULE_7__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('ChartJs', _components_ChartJs__WEBPACK_IMPORTED_MODULE_8__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();
//----------------------------------------------------------

// set service worker link and scope start link
//----------------------------------------------------------
const sw = "/sw.js";
const home = "/";
// detect browser type
const browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_28__.detect)();
// get global variables from the base.html file for
// push notification and pwa install button
//----------------------------------------------------------
const {
  APPLICATION_SERVER_KEY,
  CREATE_WP_DEVICE,
  SEND_NOTIFICATION
} = window.WEB_PUSH_CFG;
//----------------------------------------------------------

// generate key for push notifications
//----------------------------------------------------------
function urlBase64ToUint8Array(base64String) {
  // https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6#file-urlbase64touint8array-js
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;

  // const outputData = outputArray.map((output, index) =>
  //   rawData.charCodeAt(index)
  // );
  // return outputData;
}
//----------------------------------------------------------
// this is to subscribe to push notification from the browser to the server
//----------------------------------------------------------
function saveSubscribeObj(subscription) {
  // save subscription to the server
  const subscriptionJson = subscription.toJSON();
  const endpointParts = subscriptionJson.endpoint.split("/");
  const registrationId = endpointParts[endpointParts.length - 1];
  const predata = {
    status_type: "subscribe",
    subscription: subscriptionJson,
    browser: browser.name.toLowerCase(),
    p256dh: subscriptionJson.keys.p256dh,
    auth: subscriptionJson.keys.auth,
    user_agent: navigator.getUserAgent,
    registration_id: registrationId,
    group: "users"
  };
  const data = JSON.stringify(predata);
  _components_axiosFactory__WEBPACK_IMPORTED_MODULE_4__["default"].post(CREATE_WP_DEVICE, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    if (true) {
      const subscribeNotificationButton = document.getElementById("subscribeNotificationButton");
      subscribeNotificationButton.classList.toggle("hidden", true);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().success({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Subscription Sent Successfully ${response.statusText}`
      });

      // if subscription is successfully saved to the server
      // then enable the test notification push button to be visible
      setupTriggerButton(subscription);
    }
  }).catch(function (error) {
    if (true) {
      console.log(error);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
        title: "[PUSH NOTIFICATION SERVER]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Notification Subscription ${error.message}`
      });
    }
  });
}
//----------------------------------------------------------

// this function is to send subscription notification to the server
//----------------------------------------------------------
function subscribe(registration) {
  registration.pushManager.getSubscription().then(function (subscription) {
    if (subscription) {
      console.log("subscription exists");
      saveSubscribeObj(subscription);
      setupTriggerButton(subscription);
      return;
    }
  });
  const options = {
    userVisibleOnly: true,
    // required by chrome
    applicationServerKey: urlBase64ToUint8Array(APPLICATION_SERVER_KEY)
  };
  registration.pushManager.subscribe(options).then(
  // requesting to subscribe from the server
  function (subscription) {
    if (true) {
      console.log(`subscription: `, subscription);
      console.log(subscription.endpoint);
    }

    // subscription is now saved to the server
    saveSubscribeObj(subscription);
    if (true) {
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().success({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Subscription Sent Successfully`
      });
    }
  },
  // if there is an error figure the error and throw an appropraite error message to
  // the user so he knows exactly what is wrong and can move forward or adjust for a
  // device.
  function (error) {
    if (true) {
      console.log(error);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
        title: "[PUSH NOTIFICATION SUBSCRIPTION]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `${error}`
      });
    }
  });
}
window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready 1");
});
//----------------------------------------------------------

// The function to trigger the push notification from the browser
//----------------------------------------------------------
// subscribe(reg);
function setupSubscribeButton(reg) {
  if (document.getElementById("subscribeNotificationButton")) {
    const subscribeNotificationButton = document.getElementById("subscribeNotificationButton");
    subscribeNotificationButton.classList.toggle("hidden", false);
    subscribeNotificationButton.addEventListener("click", () => {
      subscribe(reg);
      console.log("Subscribe Button Set");
    });
  }
}
//----------------------------------------------------------
// This function is for a user to test the push notification
//----------------------------------------------------------
function setupTriggerButton(subscription) {
  const subJson = subscription.toJSON();
  const endpointParts = subJson.endpoint.split("/");
  const registrationId = endpointParts[endpointParts.length - 1];
  const predata = {
    registration_id: registrationId,
    auth: subJson.keys.auth,
    head: "Welcome to Trustscrow",
    body: "This is how our push notifications shall be appearing on your device."
  };
  const data = JSON.stringify(predata);
  _components_axiosFactory__WEBPACK_IMPORTED_MODULE_4__["default"].post(SEND_NOTIFICATION, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().info({
      title: "[PUSH NOTIFICATION TEST SUCCESSFUL]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: response.data.message
    });
  }).catch(function (error) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
      title: "[PUSH NOTIFICATION TEST ERROR]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: error.response.data.detail
    });
  });
  return;
}
//----------------------------------------------------------
// End push notification button
//----------------------------------------------------------

if (document.getElementById("shareUrl")) {
  const shareButton = document.getElementById("shareUrl");
  const url = shareButton.dataset.url;
  const title = document.title;
  shareButton.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out ${title.toUpperCase()}.`,
        url: url
      }).then(() => izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().success({
        title: "[SHARE PAGE]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: `Successfully share ${url}`
      })).catch(error => izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
        title: "[SHARE PAGE ERROR]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: error
      }));
    }
  });
}
//----------------------------------------------------------

// enable service worker, then when service worker is enabled request
// permission for push notification and location services from the browser
//----------------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(sw, {
      scope: home
    }).then(registration => {
      if (true) {
        console.log("Service worker registeration succeeded: ", registration);
      }
      navigator.serviceWorker.ready.then(function (registration) {
        if (true) {
          console.log("Service worker is active: ", registration.active);
        }
        initialiseState(registration);
      });
    }).catch(err => {
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
        title: "[SERVICE WORKER]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: "Service Worker Failed to Register"
      });
      if (true) {
        console.log(err);
      }
    });
  });
}
const initialiseState = reg => {
  if (!reg.showNotification) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().error({
      title: "[PUSH UNSUPPORTED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Showing <strong>PUSH NOTIFICATIONS</strong> is unsupported"
    });
    return;
  }
  if (Notification.permission === "denied") {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().warning({
      title: "[PUSH DENIED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "You prevented us from shwoing notifications. Manually check if you have prevented push notifcation from us."
    });
    return;
  }
  if (!("PushManager" in window)) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().info({
      title: "[PUSH BROWSER UNAVAILBALE]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Push notification is not allowed in your browser."
    });
    return;
  }
  reg.pushManager.getSubscription().then(sub => {
    console.log("Registration Object", reg);
    if (!sub || sub === null) {
      setupSubscribeButton(reg);
    } else if (sub !== null) {
      console.log("Subscribe Already Done");
      // setupTriggerButton(sub);
      izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().info({
        title: "[SERVICE WORKER]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: "Push notification has already been subscribed to"
      });
    }
  });
};

//----------------------------------------------------------

// -----------------------------------------------------------------
// INSTALL BUTTON FOR PROGRESSIVE WEB APPLICATION
// ------------------------------------------------------------------
if (document.getElementById("installButton")) {
  const installButton = document.getElementById("installButton");
  // when page loads for the first time, install button will be visible
  // if the user has not installed the app or PWA.
  window.addEventListener("beforeinstallprompt", event => {
    if (true) {
      console.log("👍[PWA]", "beforeinstallprompt", event);
    }
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
    // if the PWA has been installed, hide the install button or if it has not
    // then allow for click
    installButton.classList.toggle("hidden", false);
  });
  installButton.addEventListener("click", () => {
    if (true) {
      console.log("👍[PWA] Install Button Clicked");
    }
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available. so return nothing
      return;
    }
    promptEvent.prompt();
    promptEvent.userChoice.then(choice => {
      if (true) {
        console.log("👍[PWA] User Choice: ", choice);
      }
      // iziToast.success({
      //   title: `[PWA: ${choice}]`,
      //   message: '👍 You have successfully installed the readville app',
      // });
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button once the PWA has been installed
      installButton.classList.toggle("hidden", true);
    });
  });
  //----------------------------------------------------------
}

// if app is installed, thank the user for installing the app
//----------------------------------------------------------
window.addEventListener("appinstalled", event => {
  if (true) {
    console.log("👍[PWA] Installed State: ", event);
  }
  izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_19___default().info({
    title: `[SERVICE WORKER]`,
    balloon: true,
    position: "topRight",
    animateInside: true,
    message: "Trustscrow Appreciates Your Support."
  });
});
//----------------------------------------------------------

["htmx:onLoad", "htmx:load", "load", "htmx:afterSwap", "htmx:afterOnLoad", "htmx:afterRequest"].forEach(evt => {
  window.addEventListener(evt, function () {
    return;
  });
});

/***/ }),

/***/ "./src/components/AccountForm.js":
/*!***************************************!*\
  !*** ./src/components/AccountForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountForm)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./src/components/axiosFactory.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var creditcard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! creditcard.js */ "./node_modules/creditcard.js/dist/creditcard.js");
/* harmony import */ var creditcard_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(creditcard_js__WEBPACK_IMPORTED_MODULE_3__);


 // you have access to iziToast now

function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function validateField(formElement, fieldElement) {
  let formData = new FormData(formElement);
  formData.append("__field_name__", fieldElement.name);
  if (document.getElementById('id_card_provider')) {
    var providerN = document.getElementById('id_card_provider');
    providerN.readOnly = true;
  }
  _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(formElement.action, formData).then(function (response) {
    let errors = response.data.errors;
    let errorsWrapperElement = document.getElementById(`error-wrapper-${fieldElement.name}`);
    if (errors.length === 0) {
      if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.remove('hidden');
      if (document.getElementById('subscribeDriver')) document.getElementById('subscribeDriver').classList.remove('hidden');
      if (document.getElementById('subscribeCompany')) document.getElementById('subscribeCompany').classList.remove('hidden');
      errorsWrapperElement.classList.add('hidden');
      if (errorsWrapperElement) {
        errorsWrapperElement.innerHTML = "";
      }
    } else {
      if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.add('hidden');
      if (document.getElementById('subscribeDriver')) document.getElementById('subscribeDriver').classList.add('hidden');
      if (document.getElementById('subscribeCompany')) document.getElementById('subscribeCompany').classList.add('hidden');
      errorsWrapperElement.classList.remove('hidden');
      errorsWrapperElement.classList.add('flex');
      if (errorsWrapperElement) {
        let errorsHtml = '';
        for (let i = 0; i < errors.length; i++) {
          errorsHtml += `${errors[i]}`;
        }
        errorsWrapperElement.innerHTML = errorsHtml;
      }
    }

    //   cc validator
    if (document.getElementById("id_card_exp_month") || document.getElementById("id_card_exp_year") || document.getElementById("id_card_no")) {
      var month = document.getElementById("id_card_exp_month");
      var year = document.getElementById("id_card_exp_year");
      var number = document.getElementById("id_card_no");
      var valid = document.getElementById(`error-wrapper-card_exp_year`);
      var card_no = document.getElementById(`error-wrapper-card_no`);
      var img = document.getElementById(`provider`);
      console.log(number.value);
      console.log(year.value);
      var expired = (0,creditcard_js__WEBPACK_IMPORTED_MODULE_3__.isExpirationDateValid)(`${month.value}`, `${year.value}`);
      var provider = (0,creditcard_js__WEBPACK_IMPORTED_MODULE_3__.getCreditCardNameByNumber)(`${number.value}`);
      var vcard = (0,creditcard_js__WEBPACK_IMPORTED_MODULE_3__.isValid)(`${number.value}`);
      if (expired == true) {
        valid.classList.remove('hidden', 'bg-red-200', 'text-red-600');
        valid.classList.add('flex', 'bg-green-200', 'text-green-600');
        valid.innerHTML = "Not yet expired";
        if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.remove('hidden');
      } else {
        valid.classList.add('hidden', 'bg-red-200', 'text-red-600');
        valid.classList.remove('flex', 'bg-green-200', 'text-green-600');
        valid.innerHTML = "Card has expired";
        if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.add('hidden');
      }
      if (vcard == true) {
        card_no.classList.remove('hidden', 'bg-red-200', 'text-red-600');
        card_no.classList.add('flex', 'bg-green-200', 'text-green-600');
        card_no.innerHTML = "Valid Card Number";
        if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.remove('hidden');
      } else {
        card_no.classList.add('hidden', 'bg-red-200', 'text-red-600');
        card_no.classList.remove('flex', 'bg-green-200', 'text-green-600');
        card_no.innerHTML = "Not A Valid Card Number";
        if (document.getElementById('submitForm')) document.getElementById('submitForm').classList.add('hidden');
      }
      if (provider === 'Visa') {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621";
      } else if (provider === 'Mastercard') {
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358';
      }
      providerN.value = provider;
    }
    if (response.data.avatar) {
      document.getElementById('avatar').src = response.data.avatar;
    }
  });
}
function AccountForm() {
  return {
    processing: false,
    step: 1,
    contractType: 'PRODUCT',
    service: false,
    initState() {
      this.processing = false;
      this.drawer = false;
      if (document.getElementById('navbar')) {
        const main = document.getElementById('main');
        const navbar = document.getElementById('navbar');

        // get the height of the navbar and then add it to the top padding of the main content
        const header_h = navbar.offsetHeight + 10;
        main.classList.add(`pt-[${header_h}px]`);
        this.navTop = true;
        this.showNav = false;
      }
    },
    scrollNav() {
      let currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        this.showNav = true;
        this.navTop = true;
      }
      if (currentScroll > this.lastScroll && this.showNav === false) {
        this.showNav = true;
        this.navTop = false;
      } else if (currentScroll < this.lastScroll && this.showNav === true) {
        this.showNav = false;
        this.navTop = true;
      }
      this.lastScroll = currentScroll;
    },
    next() {
      this.validate();
    },
    async markAllRead() {
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get('/all-read/').then(function (response) {
        return console.log(response);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    async markRead(id) {
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/read/${id}`).then(function (response) {
        return console.log(response);
      }).catch(function (error) {
        return console.log(error);
      });
    },
    async submitForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const div = document.getElementById('form');
      const action = formElement.action;
      const redirect = formElement.dataset.errorurl || formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          div.appendChild(formElement);
          sleep(4500); //wait 1 sec and then htmx redirect get
          if (response.status === 200 || response.status === 201) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            // location.reload();
          }

          if (response.data.username) {
            return window.location.replace(`${window.location.origin}/users/${response.data.username}/`);
          }
          if (redirect) {
            return window.location.replace(redirect); // htmx.ajax('GET', redirect, {target:'body', swap:'outerHTML'});
          }
        }).catch(function (error) {
          if (error.response && error.response.status === 403) {
            return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
              title: error.response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: error.response.data.message
            });
          }
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });

          // sleep(7500); //wait 1 sec and then htmx redirect get
          // return window.location.reload();
        });

        this.processing = false;
      }
    },
    async submitSignupForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const action = formElement.action;
      const redirect = formElement.dataset.errorurl || formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
            title: "SINGUP SUCCESSFUL",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: "You have successfully registered a new account" + response
          });
          sleep(7500); //wait 1 sec and then htmx redirect get
          return window.location.replace(redirect);
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "SIGNUP FORM ERROR",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        this.processing = false;
      }
    },
    async submitCodeForm() {
      const formElement = this.$refs.form;
      const action = formElement.action;
      const el = document.getElementById('code');
      const redirect = formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          if (response.status === 200) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            el.classList.add('hidden');
            sleep(7500); //wait 1 sec and then htmx redirect get
            return window.location.replace(redirect);
          }
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        });
      }
    },
    async deleteForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const csrf = formElement.dataset.csrf;
      const action = formElement.action;
      const redirect = formElement.dataset.redirect;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          if (response.status === 200) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            sleep(7500); //wait 1 sec and then htmx redirect get
            return location.replace(redirect);
          }
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        });
      }
      this.processing = true;
    },
    async switchForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const csrf = formElement.dataset.csrf;
      const redirect = formElement.dataset.redirect;
      const action = formElement.action;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          if (response.status === 200) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            sleep(7500); //wait 1 sec and then htmx redirect get
            return location.replace(redirect);
          }
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        });
      }
      this.processing = true;
    },
    async submitUpdateForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const action = formElement.action;
      const redirect = formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf,
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.status === 200 || response.status == 201) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            sleep(7500); //wait 1 sec and then htmx redirect get
            return htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default().ajax('GET', redirect, {
              target: 'body',
              swap: 'outerHTML'
            });
          }
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        });
      }
      this.processing = true;
    },
    async submitEmailConfirmForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const action = formElement.action;
      const redirect = formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
            title: "EMAIL CONFIRMATION  SUCCESSFUL",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: "You have successfully confirmed your email address" + response.data.message
          });
          sleep(7500); //wait 1 sec and then htmx redirect get
          if (response.data.redirect) return window.location.replace(response.data.redirect);
          window.location.replace(redirect);
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "EMAIL CONFIRMATION ERROR",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        this.processing = false;
      }
    },
    async submitLoginForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const action = formElement.action;
      const redirect = formElement.dataset.errorurl || formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
            title: "LOGIN SUCCESSFUL",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: "You have successfully logged into your account" + response
          });
          sleep(7500); //wait 1 sec and then htmx redirect get
          return window.location.replace(redirect);
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "LOGIN FORM ERROR",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        this.processing = false;
      }
    },
    async submitPasswordForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const action = formElement.action;
      const redirect = formElement.dataset.redirect;
      // const eredirect = formElement.dataset.errorurl;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
            title: "PASSWORD SUCCESSFULLY UPDATED",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: response
          });
          sleep(7500); //wait 1 sec and then htmx redirect get
          return window.location.replace(redirect);
        }).catch(function (error) {
          return izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "PASSWORD FORM ERROR",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        this.processing = false;
      }
    },
    async showPassword() {
      var x = document.getElementById("id_password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    async submitContract() {
      this.step = 'complete';
      this.processing = true;
    },
    async showSingupPassword() {
      var x = document.getElementById("id_password1");
      var y = document.getElementById("id_password2");
      if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
      } else {
        x.type = "password";
        y.type = "password";
      }
    },
    async submitFileForm() {
      this.processing = true;
      const formElement = this.$refs.form;
      const div = document.getElementById('form');
      const action = formElement.action || window.location;
      const redirect = formElement.dataset.redirect;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        if (fieldElement.type === "textarea") {
          let textarea = fieldElement.id;
          console.log('textarea content: ', window.parent.tinymce.get(textarea).getContent());
          data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
        }
        if (fieldElement.type !== "textarea") {
          data.append(fieldElement.name, fieldElement.value);
        }
      });
      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            'X-CSRFToken': csrf,
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          div.appendChild(formElement);
          if (response.status === 200 || response.status === 201) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            sleep(4500); //wait 1 sec and then htmx redirect get
            if (redirect) {
              return htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default().ajax('GET', redirect, {
                target: 'body',
                swap: 'outerHTML'
              });
            }
            return;
          }
        }).catch(function (error) {
          if (error.response && error.response.status === 403) {
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
              title: error.response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: error.response.data.message
            });
          }
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        this.processing = false;
      } else {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
          title: "Form Sending Incomplete",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `Form data is not valid. Ensure you have filled all fields accurately! ${formElement.reportValidity()}`
        });
        sleep(5500); //wait 2.5 sec and then htmx redirect get
        this.processing = false;
        htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default().ajax('GET', redirect, {
          target: 'body',
          swap: 'outerHTML'
        });
      }
    },
    validate() {
      this.processing = true;
      const formElement = this.$refs.form;
      formElement.querySelectorAll('[name]').forEach(fieldElement => {
        if (fieldElement.name == "gender" && fieldElement.value === "") {
          this.step === this.step;
        } else {
          this.step = this.step + 1;
        }
      });
      this.service = this.contractType;
      this.processing = false;
    },
    checkValidity() {
      const formElement = this.$refs.form;
      formElement.querySelectorAll('[name]').forEach(fieldElement => {
        fieldElement.addEventListener('change', event => {
          console.log(event);
          validateField(formElement, fieldElement);
        });
      });
    },
    async toggleDrawer() {
      return this.drawer = !this.drawer;
    },
    getBtnText() {
      return this.processing ? 'Processing...' : 'Submit';
    },
    contractText() {
      return this.processing ? 'Processing...' : 'Generate';
    },
    stageTwo() {
      return this.service === 'SERVICE' ? 'Service' : 'Products';
    }
  };
}

/***/ }),

/***/ "./src/components/ChartJs.js":
/*!***********************************!*\
  !*** ./src/components/ChartJs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChartJs)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.mjs");
/* harmony import */ var chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/helpers */ "./node_modules/chart.js/helpers/helpers.mjs");
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axiosFactory */ "./src/components/axiosFactory.js");



function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function ChartJs() {
  return {
    processing: false,
    dataX: null,
    dataY: null,
    dataZ: null,
    async getData() {
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${window.location.origin}/escrow/transaction/data/`).then(async response => {
        await sleep(2500);
        console.dir(response);
        this.dataX = response.data.dataX;
        this.dataY = response.data.dataY;
        this.dataZ = response.data.dataZ;
        const chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('user-chart').getContext('2d'), {
          type: 'bar',
          data: {
            labels: this.dataX,
            datasets: [{
              label: 'Yearly Earning',
              backgroundColor: 'orange',
              barPercentage: 0.5,
              barThicness: 6,
              maxBarThickness: 10,
              minBarLength: 8,
              data: this.dataY
            }, {
              label: 'Yearly Expenses',
              backgroundColor: 'red',
              barPercentage: 0.5,
              barThicness: 6,
              maxBarThickness: 10,
              minBarLength: 8,
              data: this.dataZ
            }]
          },
          options: {
            responsive: true,
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Annual Transaction Chart"
            },
            onClick: e => {
              const canvasPosition = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_1__.getRelativePosition)(e, chart);
              this.dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
              this.dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            }
          }
        });
        return chart;
      }).catch(async error => {
        await sleep(2500);
        return error;
      });
    }
  };
}

/***/ }),

/***/ "./src/components/ContactForm.js":
/*!***************************************!*\
  !*** ./src/components/ContactForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./src/components/axiosFactory.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2__);


 // you have access to iziToast now

// function serialize(data) {
//     let obj = {};
//     for (let [key, value] of data) {
//       if (obj[key] !== undefined) {
//         if (!Array.isArray(obj[key])) {
//           obj[key] = [obj[key]];
//         }
//         obj[key].push(value);
//       } else {
//         obj[key] = value;
//       }
//     }
//     return obj;
// }

function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function validateField(formElement, fieldElement) {
  let formData = new FormData(formElement);
  formData.append("__field_name__", fieldElement.name);
  _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(formElement.action, formData).then(function (response) {
    let errors = response.data.errors;
    let errorsWrapperElement = document.getElementById(`error-wrapper-${fieldElement.name}`);
    if (errors.length === 0) {
      document.getElementById('submit').classList.remove('hidden');
      errorsWrapperElement.classList.add('hidden');
      if (errorsWrapperElement) {
        errorsWrapperElement.innerHTML = "";
      }
    } else {
      document.getElementById('submit').classList.add('hidden');
      errorsWrapperElement.classList.remove('hidden');
      errorsWrapperElement.classList.add('flex');
      if (errorsWrapperElement) {
        let errorsHtml = '';
        for (let i = 0; i < errors.length; i++) {
          errorsHtml += `${errors[i]}`;
        }
        errorsWrapperElement.innerHTML = errorsHtml;
      }
    }
  });
}
function ContactForm() {
  return {
    processing: false,
    async submitForm() {
      this.processing = true;
      const formElement = this.$refs.contactForm;
      const div = document.getElementById('contact');
      const redirect = formElement.action;
      const csrf = formElement.dataset.csrf;
      let data = new FormData(formElement);
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        data.append(fieldElement.name, fieldElement.value);
      });
      console.log(data);
      // data.append('csrfmiddlewaretoken', csrf);
      // data.append('name', document.getElementById('id_name').value);
      // data.append('email', document.getElementById('id_email').value);
      // data.append('message', document.getElementById('id_message').value);

      // console.info("FORM DATA: ", data);

      // let formData = serialize(data);
      // console.info("SERIALIZED FORM DATA: ", formData);

      if (formElement.checkValidity()) {
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(redirect, data, {
          headers: {
            'X-CSRFToken': csrf
          }
        }).then(function (response) {
          // console.info("RESPONSE DATA: ", response);

          if (response.status === 200 || response.data.message === "Support Mail Successfully Sent") {
            div.innerHTML = `
                            <div class="w-full text-green-300 space-y-8 flex flex-col justify-center py-24">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block w-14 h-14 block mx-auto animate-bounce text-green-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <div class="w-full md:w-3/5 text-center space-y-3 mx-auto">
                                    <h4 class="text-green-500 font-semibold text-2xl md:text-4xl">Mail Sent Successfully</h4>
                                    <p>${response.data.message}</p>
                                </div>
                            </div>
                            `;
            izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().success({
              title: "Email Sent Successful",
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
            sleep(3500); //wait 1 sec and then htmx redirect get
            htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default().ajax('GET', redirect, {
              target: 'main',
              swap: 'outerHTML'
            });
            // sleep(3500); //wait 1 sec and then htmx redirect get
            // location.reload();
          }

          console.log(response);
        }).catch(function (error) {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
            title: "Email Sending Incomplete",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Something wrong happened: ${error}`
          });
        });
        // .finally(function () {
        //     console.log("finally");
        // });

        this.processing = false;
      } else {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_2___default().error({
          title: "Sending Email Incomplete",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `Form data is not valid. Ensure you have filled all fields accurately! ${formElement.reportValidity()}`
        });
        sleep(2500); //wait 2.5 sec and then htmx redirect get
        this.processing = false;
        htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default().ajax('GET', redirect, {
          target: 'main',
          swap: 'outerHTML'
        });
      }
    },
    async checkValidity() {
      const formElement = this.$refs.contactForm;
      formElement.querySelectorAll('[name]').forEach(fieldElement => {
        fieldElement.addEventListener('change', event => {
          console.log(event);
          validateField(formElement, fieldElement);
        });
      });
    },
    getBtnText() {
      return this.processing ? 'Processing...' : 'Submit';
    }
  };
}

/***/ }),

/***/ "./src/components/ContractDetailForm.js":
/*!**********************************************!*\
  !*** ./src/components/ContractDetailForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContractDetailForm)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./src/components/axiosFactory.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paystack_inline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @paystack/inline-js */ "./node_modules/@paystack/inline-js/es/inline.js");

 // you have access to iziToast now

function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function ContractDetailForm() {
  return {
    loading: false,
    showTooltip: false,
    showTooltip2: false,
    openServiceModal: false,
    openMilestoneModal: false,
    openProductModal: false,
    async retryPayment(slug) {
      this.loading = true;
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${window.location.origin}/escrow/transaction/retry/${slug}/`).then(async response => {
        await sleep(2500); //wait 1 sec and then htmx redirect get
        if (response.data.amount && response.data.pk && response.data.email && response.data.ref) {
          const handler = new _paystack_inline_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
          await handler.newTransaction({
            key: response.data.pk,
            // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
            email: response.data.email,
            amount: response.data.amount * 100,
            currency: "NGN",
            ref: response.data.ref,
            onSuccess: async res => {
              console.dir(res);
              await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(```${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/```).then(async response => {
                await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                  title: response.data.title,
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message: response.data.message
                });
                this.loading = false;
                await sleep(3500);
                if (response.data.slug && res.message === "Approved") {
                  return window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
                }
              });
            },
            onCancle: async function () {
              await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                title: "TRANSACTION FAILED",
                balloon: true,
                position: "topRight",
                animateInside: true,
                message: "This transaction could not be completed at the moment. Please try again!"
              });
              return window.location.reload();
            }
          });
          this.loading = false;
        }
      }).catch(async error => {
        if (error.response && error.response.status === 403) {
          await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        }
        await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: error.message
        });
        this.loading = false;
        await sleep(3500);
        return window.location.reload();
      });
      this.loading = false;
    },
    printInvoice() {
      var printContents = this.$refs.printTemplate.innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  };
}

/***/ }),

/***/ "./src/components/ContractForm.js":
/*!****************************************!*\
  !*** ./src/components/ContractForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContractForm)
/* harmony export */ });
/* harmony import */ var _axiosFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosFactory */ "./src/components/axiosFactory.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/js/iziToast.min.js */ "./node_modules/izitoast/dist/js/iziToast.min.js");
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paystack_inline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @paystack/inline-js */ "./node_modules/@paystack/inline-js/es/inline.js");

 // you have access to iziToast now

function sleep(ms) {
  return new window.Promise(resolve => setTimeout(resolve, ms));
}
function ContractForm() {
  return {
    loading: false,
    redirect: null,
    emailText: null,
    autocomplete: true,
    butocomplete: true,
    step: 1,
    formError: true,
    service: null,
    formData: {
      creator: "",
      contract_title: "",
      contract_type: "",
      amount: 0,
      localization: "",
      vendor: "",
      vendor_phone: "",
      vendor_email: "",
      vendor_address: "",
      buyer: "",
      buyer_phone: "",
      buyer_email: "",
      buyer_address: "",
      terms_agreement: "",
      terms_for_termination: ""
    },
    next() {
      if (this.service) {
        if (this.formData.creator.length > 1 && this.formData.localization.length > 1 && this.formData.contract_title.length > 1 && this.formData.contract_type.length > 1 && this.formData.amount > 100) {
          this.step++;
        }
      } else {
        if (this.formData.creator.length > 1 && this.formData.localization.length > 1 && this.formData.contract_type.length > 1 && this.formData.amount > 100) {
          this.step++;
        } else {
          izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: "Fill all fields here accurately."
          });
        }
      }
    },
    next2() {
      if (this.formData.vendor.length > 1 && this.formData.vendor_phone.length > 1 && this.formData.vendor_email.length > 1 && this.formData.vendor_address.length > 1) {
        this.step++;
      }
      return;
    },
    next3() {
      if (this.formData.buyer.length > 1 && this.formData.buyer_phone.length > 1 && this.formData.buyer_email.length > 1 && this.formData.buyer_address.length > 1) {
        this.step++;
      } else {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Fill all fields here accurately."
        });
      }
    },
    next4() {
      let agreement = window.parent.tinymce.get("id_terms_agreement").getContent();
      console.log(agreement);
      console.log(window.parent.tinymce.get("id_terms_agreement").getContent());
      if (agreement.length > 1) {
        this.step++;
      } else {
        izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "You need to add the agreement you had entered with the seller/buyer."
        });
      }
    },
    back() {
      this.step--;
    },
    async validateField(formElement, fieldElement, el) {
      let data = new FormData(formElement);
      if (fieldElement.type === "textarea") {
        let textarea = fieldElement.id;
        data.append("__field_name__", window.parent.tinymce.get(textarea).getContent());
      } else {
        data.append("__field_name__", fieldElement.name);
      }
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(formElement.action, data).then(async function (response) {
        let errors = response.data.errors;
        let errorsWrapperElement = document.getElementById(`error-wrapper-${fieldElement.name}`);
        if (errors.length === 0) {
          el = false;
          console.log(el);
          errorsWrapperElement.classList.add("hidden");
          if (errorsWrapperElement) {
            errorsWrapperElement.innerHTML = "";
          }
        } else {
          el = true;
          console.log(el);
          errorsWrapperElement.classList.remove("hidden");
          errorsWrapperElement.classList.add("flex");
          if (errorsWrapperElement) {
            let errorsHtml = "";
            for (let i = 0; i < errors.length; i++) {
              errorsHtml += `${errors[i]}`;
            }
            errorsWrapperElement.innerHTML = errorsHtml;
          }
        }
      });
      this.formError = el;
      console.log(el);
    },
    async submitContract() {
      let agreement = window.parent.tinymce.get("id_terms_for_termination").getContent();
      if (agreement.length > 1) {
        this.loading = true;
        const formElement = this.$refs.form;
        const action = formElement.action;
        const csrf = formElement.dataset.csrf;
        let data = new FormData(formElement);
        formElement.querySelectorAll("[name]").forEach(fieldElement => {
          if (fieldElement.type !== "textarea" && fieldElement.type !== 'radio') {
            data.append(fieldElement.name, fieldElement.value);
          }
          if (fieldElement.type === "textarea") {
            let textarea = fieldElement.id;
            console.log("textarea content: ", window.parent.tinymce.get(textarea).getContent());
            data.append(fieldElement.name, window.parent.tinymce.get(textarea).getContent());
          }
          if (fieldElement.type === 'radio') {
            if (fieldElement.name === 'creator') {
              console.log(this.formData.creator);
              data.append('creator', this.formData.creator);
            }
            if (fieldElement.name === 'contract_type') {
              console.log(this.formData.contract_type);
              data.append('contract_type', this.formData.contract_type);
            }
          }
        });
        console.dir(data);
        await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, data, {
          headers: {
            "X-CSRFToken": csrf
          }
        }).then(async function (response) {
          if (response.status === 200 || response.status === 201) {
            await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().success({
              title: response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: response.data.message
            });
          }
          if (response.data.amount && response.data.pk && response.data.email && response.data.ref) {
            const handler = new _paystack_inline_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            await handler.newTransaction({
              key: response.data.pk,
              // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
              email: response.data.email,
              amount: response.data.amount * 100,
              currency: "NGN",
              ref: response.data.ref,
              onSuccess: async res => {
                console.dir(res);
                const loc = `${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/`;
                await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(loc).then(async response => {
                  await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                    title: response.data.title,
                    balloon: true,
                    position: "topRight",
                    animateInside: true,
                    message: response.data.message
                  });
                  await sleep(3500);
                  if (response.data.slug && res.message === "Approved") {
                    return window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
                  }
                });
              },
              onCancle: async function () {
                await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                  title: "TRANSACTION FAILED",
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message: "This transaction could not be completed at the moment. Please try again!"
                });
                return window.location.reload();
              }
            });
          } else if (response.data.slug) {
            return window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
          }
        }).catch(async function (error) {
          if (error.response && error.response.status === 403) {
            await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
              title: error.response.data.title,
              balloon: true,
              position: "topRight",
              animateInside: true,
              message: error.response.data.message
            });
          }
          await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
            title: "Form Error",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.message
          });
          await sleep(3500); //wait 1 sec and then htmx redirect get
          return; // window.location.reload();
        });

        this.loading = false;
      } else {
        await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "You need to input a reason for termination."
        });
      }
    },
    async retryPayment(ref) {
      this.loading = true;
      await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${window.location.origin}/escrow/transaction/retry/${ref}/`).then(async response => {
        await sleep(2500); //wait 1 sec and then htmx redirect get
        if (response.data.amount && response.data.pk && response.data.email && response.data.ref) {
          const handler = new _paystack_inline_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
          await handler.newTransaction({
            key: response.data.pk,
            // key: "pk_test_e3d5e0bcf09cb129ba34480db85b925826242eb8",
            email: response.data.email,
            amount: response.data.amount * 100,
            currency: "NGN",
            ref: response.data.ref,
            onSuccess: async res => {
              console.dir(res);
              await _axiosFactory__WEBPACK_IMPORTED_MODULE_0__["default"].get(```${window.location.origin}/escrow/transaction/verify/${res.reference}/${res.status}/```).then(async response => {
                await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                  title: response.data.title,
                  balloon: true,
                  position: "topRight",
                  animateInside: true,
                  message: response.data.message
                });
                await sleep(3500);
                if (response.data.slug) {
                  return await window.location.replace(`${window.location.origin}/escrow/contract/detail/${response.data.slug}/`);
                }
              });
            },
            onCancle: async function () {
              await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().info({
                title: "TRANSACTION FAILED",
                balloon: true,
                position: "topRight",
                animateInside: true,
                message: "This transaction could not be completed at the moment. Please try again!"
              });
              return window.location.reload();
            }
          });
        }
        this.loading = false;
      }).catch(async error => {
        if (error.response && error.response.status === 403) {
          await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
            title: error.response.data.title,
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error.response.data.message
          });
        }
        await izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_1___default().error({
          title: "Form Error",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: error.message
        });
        this.loading = false;
        await sleep(3500);
        return window.location.reload();
      });
      this.loading = false;
    },
    async refresh() {
      window.location.reload();
    },
    isEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    isEmpty(el) {
      if (el.length < 2) {
        return true;
      } else {
        return false;
      }
    },
    validate() {
      this.loading = true;
      sleep(2500);
      this.step++;
      if (document.getElementById('contract_type')) {
        const contract = document.getElementById('contract_type').value;
        this.service = contract;
      }
      this.loading = false;
    },
    checkValidity() {
      this.formError = true;
      this.loading = false;
      const formElement = this.$refs.form;
      console.log("Initializing Contract Form");
      formElement.querySelectorAll("[name]").forEach(fieldElement => {
        fieldElement.addEventListener("change", event => {
          console.log(event);
          this.validateField(formElement, fieldElement, this.formError);
        });
      });
      console.log("Initialized Contract Form");
    },
    contractText() {
      return this.loading ? "Processing..." : "Submit";
    },
    stageTwo() {
      return this.service === "SERVICE" ? "Service" : "Products";
    },
    vautofill() {
      const item = this.$refs.item;
      this.autocomplete = !this.autocomplete;
      console.log(item);
      document.getElementById('id_vendor').value = this.$refs.vendor.innerText;
      document.getElementById('id_vendor_email').value = this.$refs.email.innerText;
      document.getElementById('id_vendor_phone').value = this.$refs.phone.innerText;
      document.getElementById('id_vendor_address').value = this.$refs.address.innerText;
    },
    bautofill() {
      const item = this.$refs.item;
      this.butocomplete = !this.butocomplete;
      console.log(item);
      document.getElementById('id_buyer').value = this.$refs.buyer.innerText;
      document.getElementById('id_buyer_email').value = this.$refs.email.innerText;
      document.getElementById('id_buyer_phone').value = this.$refs.phone.innerText;
      document.getElementById('id_buyer_address').value = this.$refs.address.innerText;
    }
  };
}

/***/ }),

/***/ "./src/components/StickyNav.js":
/*!*************************************!*\
  !*** ./src/components/StickyNav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyNav)
/* harmony export */ });
function StickyNav() {
  return {
    drawer: false,
    showNav: true,
    navTop: false,
    lastScroll: 0,
    initState() {
      this.drawer = false;
      if (document.getElementById('navbar')) {
        const main = document.getElementById('main');
        const navbar = document.getElementById('navbar');

        // get the height of the navbar and then add it to the top padding of the main content
        const header_h = navbar.offsetHeight + 10;
        main.classList.add(`pt-[${header_h}px]`);
        this.navTop = true;
        this.showNav = false;
      }
    },
    scrollNav() {
      let currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        this.showNav = true;
        this.navTop = true;
      }
      if (currentScroll > this.lastScroll && this.showNav === false) {
        this.showNav = true;
        this.navTop = false;
      } else if (currentScroll < this.lastScroll && this.showNav === true) {
        this.showNav = false;
        this.navTop = true;
      }
      this.lastScroll = currentScroll;
    },
    toggleDrawer() {
      return this.drawer = !this.drawer;
    }
  };
}

/***/ }),

/***/ "./src/components/axiosFactory.js":
/*!****************************************!*\
  !*** ./src/components/axiosFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfCookieName) = 'csrftoken';
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.xsrfHeaderName) = "X-CSRFTOKEN";
// axios.defaults.headers['X-CSRFToken'] = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content');
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.timeout) = 15000;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((axios__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_alpinejs_intersect_dist_module_esm_js-node_modules_lottiefiles_lottie-pl-6dc5d1"], () => (__webpack_exec__("./src/application/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzhCO0FBQ1E7QUFDUjtBQUNjO0FBQ1o7QUFDZTtBQUNDO0FBQ0k7QUFDYztBQUN0QjtBQUNoQjtBQUNZO0FBQ0k7O0FBRTVDO0FBQzZDO0FBQ0w7QUFDQTtBQUNlO0FBQ0o7QUFDTjtBQUNHO0FBQ1g7QUFHbUI7QUFDcEI7QUFDbEI7QUFDMEI7QUFDTjtBQUN0QztBQUNvRDtBQUNFO0FBQ25COztBQUVuQztBQUNBO0FBQ0E7QUFDQWtCLE1BQU0sQ0FBQ2xCLElBQUksR0FBR0EsMkRBQUk7QUFDbEI7QUFDQWtCLE1BQU0sQ0FBQ1AsT0FBTyxHQUFHQSxnRUFBTztBQUN4QjtBQUNBTyxNQUFNLENBQUNELFNBQVMsR0FBR0Esb0RBQVM7QUFDNUI7QUFDQUMsTUFBTSxDQUFDTCxLQUFLLEdBQUdBLGdFQUFLO0FBQ3BCSyxNQUFNLENBQUNDLFdBQVcsR0FBR0wscURBQVc7QUFDaEM7QUFDQUksTUFBTSxDQUFDZixNQUFNLEdBQUdBLG9DQUFNO0FBQ3RCO0FBQ0FlLE1BQU0sQ0FBQ2QsS0FBSyxHQUFHQSxnRUFBSztBQUNwQjtBQUNBYyxNQUFNLENBQUNULE1BQU0sR0FBR0EsOENBQU07QUFDdEI7QUFDQVMsTUFBTSxDQUFDRSxRQUFRLEdBQUdSLDBFQUFRO0FBQzFCO0FBQ0FNLE1BQU0sQ0FBQ2pCLE1BQU0sR0FBR0EsZ0RBQU07QUFDdEJBLHVEQUFhLENBQUNDLDJEQUFTLENBQUM7QUFDeEJELHFEQUFXLENBQUMsYUFBYSxFQUFFYyxnRUFBVyxDQUFDO0FBQ3ZDZCxxREFBVyxDQUFDLGNBQWMsRUFBRWUsaUVBQVksQ0FBQztBQUN6Q2YscURBQVcsQ0FBQyxhQUFhLEVBQUVLLCtEQUFXLENBQUMsRUFDdkNMLHFEQUFXLENBQUMsV0FBVyxFQUFFSSw2REFBUyxDQUFDO0FBQ25DSixxREFBVyxDQUFDLG9CQUFvQixFQUFFTSxzRUFBa0IsQ0FBQztBQUNyRE4scURBQVcsQ0FBQyxTQUFTLEVBQUVPLDJEQUFPLENBQUM7QUFDL0JQLHNEQUFZLEVBQUU7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsTUFBTXVCLEVBQUUsR0FBRyxRQUFRO0FBQ25CLE1BQU1DLElBQUksR0FBRyxHQUFHO0FBQ2hCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHaEIsdURBQU0sRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0VBQUVpQixzQkFBc0I7RUFBRUMsZ0JBQWdCO0VBQUVDO0FBQWtCLENBQUMsR0FDbkVYLE1BQU0sQ0FBQ1ksWUFBWTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsU0FBU0MscUJBQXFCLENBQUNDLFlBQVksRUFBRTtFQUMzQztFQUNBLElBQUlDLE9BQU8sR0FBRyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBSUYsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBRSxJQUFJLENBQUMsQ0FBQztFQUM3RCxJQUFJQyxNQUFNLEdBQUcsQ0FBQ0osWUFBWSxHQUFHQyxPQUFPLEVBQUVJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUNBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0VBRTVFLElBQUlDLE9BQU8sR0FBR3BCLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0VBQ2pDLElBQUlJLFdBQVcsR0FBRyxJQUFJQyxVQUFVLENBQUNILE9BQU8sQ0FBQ0gsTUFBTSxDQUFDO0VBRWhELEtBQUssSUFBSU8sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixPQUFPLENBQUNILE1BQU0sRUFBRSxFQUFFTyxDQUFDLEVBQUU7SUFDdkNGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDLEdBQUdKLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDRCxDQUFDLENBQUM7RUFDeEM7RUFDQSxPQUFPRixXQUFXOztFQUVsQjtFQUNBO0VBQ0E7RUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ksZ0JBQWdCLENBQUNDLFlBQVksRUFBRTtFQUN0QztFQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxZQUFZLENBQUNFLE1BQU0sRUFBRTtFQUM5QyxNQUFNQyxhQUFhLEdBQUdGLGdCQUFnQixDQUFDRyxRQUFRLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDMUQsTUFBTUMsY0FBYyxHQUFHSCxhQUFhLENBQUNBLGFBQWEsQ0FBQ2IsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUU5RCxNQUFNaUIsT0FBTyxHQUFHO0lBQ2RDLFdBQVcsRUFBRSxXQUFXO0lBQ3hCUixZQUFZLEVBQUVDLGdCQUFnQjtJQUM5QnBCLE9BQU8sRUFBRUEsT0FBTyxDQUFDNEIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7SUFDbkNDLE1BQU0sRUFBRVYsZ0JBQWdCLENBQUNXLElBQUksQ0FBQ0QsTUFBTTtJQUNwQ0UsSUFBSSxFQUFFWixnQkFBZ0IsQ0FBQ1csSUFBSSxDQUFDQyxJQUFJO0lBQ2hDQyxVQUFVLEVBQUVDLFNBQVMsQ0FBQ0MsWUFBWTtJQUNsQ0MsZUFBZSxFQUFFWCxjQUFjO0lBQy9CWSxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBRUQsTUFBTXpDLElBQUksR0FBRzBDLElBQUksQ0FBQ0MsU0FBUyxDQUFDYixPQUFPLENBQUM7RUFFcENoRCxxRUFDTyxDQUFDd0IsZ0JBQWdCLEVBQUVOLElBQUksRUFBRTtJQUM1QjZDLE9BQU8sRUFBRTtNQUNQLGNBQWMsRUFBRTtJQUNsQjtFQUNGLENBQUMsQ0FBQyxDQUNEQyxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO0lBQ3hCLElBQUlDLElBQXNDLEVBQUU7TUFDMUMsTUFBTUcsMkJBQTJCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUN6RCw2QkFBNkIsQ0FDOUI7TUFDREYsMkJBQTJCLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7TUFFNURqRSxnRkFBZ0IsQ0FBQztRQUNmbUUsS0FBSyxFQUFFLGtDQUFrQztRQUN6Q0MsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUcsa0NBQWlDZCxRQUFRLENBQUNlLFVBQVc7TUFDakUsQ0FBQyxDQUFDOztNQUVGO01BQ0E7TUFDQUMsa0JBQWtCLENBQUN4QyxZQUFZLENBQUM7SUFDbEM7RUFDRixDQUFDLENBQUMsQ0FDRHlDLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7SUFDdEIsSUFBSWpCLElBQXNDLEVBQUU7TUFDMUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQ2xCM0UsOEVBQWMsQ0FBQztRQUNibUUsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQ0MsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUcsNkJBQTRCSSxLQUFLLENBQUNKLE9BQVE7TUFDdEQsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTTyxTQUFTLENBQUNDLFlBQVksRUFBRTtFQUMvQkEsWUFBWSxDQUFDQyxXQUFXLENBQUNDLGVBQWUsRUFBRSxDQUFDekIsSUFBSSxDQUFDLFVBQVV2QixZQUFZLEVBQUU7SUFDdEUsSUFBSUEsWUFBWSxFQUFFO01BQ2hCMkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7TUFDbEM3QyxnQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDO01BQzlCd0Msa0JBQWtCLENBQUN4QyxZQUFZLENBQUM7TUFDaEM7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLE1BQU1pRCxPQUFPLEdBQUc7SUFDZEMsZUFBZSxFQUFFLElBQUk7SUFBRTtJQUN2QkMsb0JBQW9CLEVBQUVqRSxxQkFBcUIsQ0FBQ0osc0JBQXNCO0VBQ3BFLENBQUM7RUFFRGdFLFlBQVksQ0FBQ0MsV0FBVyxDQUFDRixTQUFTLENBQUNJLE9BQU8sQ0FBQyxDQUFDMUIsSUFBSTtFQUM5QztFQUNBLFVBQVV2QixZQUFZLEVBQUU7SUFDdEIsSUFBSXlCLElBQXNDLEVBQUU7TUFDMUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBRSxnQkFBZSxFQUFFNUMsWUFBWSxDQUFDO01BQzNDMkMsT0FBTyxDQUFDQyxHQUFHLENBQUM1QyxZQUFZLENBQUNJLFFBQVEsQ0FBQztJQUNwQzs7SUFFQTtJQUNBTCxnQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDO0lBQzlCLElBQUl5QixJQUFzQyxFQUFFO01BQzFDMUQsZ0ZBQWdCLENBQUM7UUFDZm1FLEtBQUssRUFBRSxrQ0FBa0M7UUFDekNDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsT0FBTyxFQUFHO01BQ1osQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0EsVUFBVUksS0FBSyxFQUFFO0lBQ2YsSUFBSWpCLElBQXNDLEVBQUU7TUFDMUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQ2xCM0UsOEVBQWMsQ0FBQztRQUNibUUsS0FBSyxFQUFFLGtDQUFrQztRQUN6Q0MsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUcsR0FBRUksS0FBTTtNQUNwQixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FDRjtBQUNIO0FBR0FyRSxNQUFNLENBQUN3RCxRQUFRLENBQUN1QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQy9EL0UsTUFBTSxDQUFDc0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNTLG9CQUFvQixDQUFDQyxHQUFHLEVBQUU7RUFDakMsSUFBSXpCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLDZCQUE2QixDQUFDLEVBQUU7SUFDMUQsTUFBTUYsMkJBQTJCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUN6RCw2QkFBNkIsQ0FDOUI7SUFDREYsMkJBQTJCLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDN0RKLDJCQUEyQixDQUFDd0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDMURQLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDO01BQ2RYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTSixrQkFBa0IsQ0FBQ3hDLFlBQVksRUFBRTtFQUN4QyxNQUFNdUQsT0FBTyxHQUFHdkQsWUFBWSxDQUFDRSxNQUFNLEVBQUU7RUFDckMsTUFBTUMsYUFBYSxHQUFHb0QsT0FBTyxDQUFDbkQsUUFBUSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pELE1BQU1DLGNBQWMsR0FBR0gsYUFBYSxDQUFDQSxhQUFhLENBQUNiLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDOUQsTUFBTWlCLE9BQU8sR0FBRztJQUNkVSxlQUFlLEVBQUVYLGNBQWM7SUFDL0JPLElBQUksRUFBRTBDLE9BQU8sQ0FBQzNDLElBQUksQ0FBQ0MsSUFBSTtJQUN2QjJDLElBQUksRUFBRSx1QkFBdUI7SUFDN0JDLElBQUksRUFBRTtFQUNSLENBQUM7RUFFRCxNQUFNaEYsSUFBSSxHQUFHMEMsSUFBSSxDQUFDQyxTQUFTLENBQUNiLE9BQU8sQ0FBQztFQUVwQ2hELHFFQUNPLENBQUN5QixpQkFBaUIsRUFBRVAsSUFBSSxFQUFFO0lBQzdCNkMsT0FBTyxFQUFFO01BQ1AsY0FBYyxFQUFFO0lBQ2xCO0VBQ0YsQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7SUFDeEJ6RCw2RUFBYSxDQUFDO01BQ1ptRSxLQUFLLEVBQUUscUNBQXFDO01BQzVDQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxRQUFRLEVBQUUsVUFBVTtNQUNwQkMsYUFBYSxFQUFFLElBQUk7TUFDbkJDLE9BQU8sRUFBRWQsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7SUFDekIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLENBQ0RHLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7SUFDdEIzRSw4RUFBYyxDQUFDO01BQ2JtRSxLQUFLLEVBQUUsZ0NBQWdDO01BQ3ZDQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxRQUFRLEVBQUUsVUFBVTtNQUNwQkMsYUFBYSxFQUFFLElBQUk7TUFDbkJDLE9BQU8sRUFBRUksS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDa0Y7SUFDL0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOUIsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7RUFDdkMsTUFBTThCLFdBQVcsR0FBRy9CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUN2RCxNQUFNK0IsR0FBRyxHQUFHRCxXQUFXLENBQUNFLE9BQU8sQ0FBQ0QsR0FBRztFQUNuQyxNQUFNM0IsS0FBSyxHQUFHTCxRQUFRLENBQUNLLEtBQUs7RUFDNUIwQixXQUFXLENBQUNSLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQzFDLElBQUlyQyxTQUFTLENBQUNnRCxLQUFLLEVBQUU7TUFDbkJoRCxTQUFTLENBQ05nRCxLQUFLLENBQUM7UUFDTDdCLEtBQUssRUFBRUEsS0FBSztRQUNaOEIsSUFBSSxFQUFHLGFBQVk5QixLQUFLLENBQUMrQixXQUFXLEVBQUcsR0FBRTtRQUN6Q0osR0FBRyxFQUFFQTtNQUNQLENBQUMsQ0FBQyxDQUNEdEMsSUFBSSxDQUFDLE1BQ0p4RCxnRkFBZ0IsQ0FBQztRQUNmbUUsS0FBSyxFQUFFLGNBQWM7UUFDckJDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsT0FBTyxFQUFHLHNCQUFxQnVCLEdBQUk7TUFDckMsQ0FBQyxDQUFDLENBQ0gsQ0FDQXBCLEtBQUssQ0FBRUMsS0FBSyxJQUNYM0UsOEVBQWMsQ0FBQztRQUNibUUsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUVJO01BQ1gsQ0FBQyxDQUFDLENBQ0g7SUFDTDtFQUNGLENBQUMsQ0FBQztBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlLElBQUkzQixTQUFTLEVBQUU7RUFDaEMxQyxNQUFNLENBQUMrRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtJQUNwQ3JDLFNBQVMsQ0FBQ21ELGFBQWEsQ0FDcEJDLFFBQVEsQ0FBQ3hGLEVBQUUsRUFBRTtNQUFFeUYsS0FBSyxFQUFFeEY7SUFBSyxDQUFDLENBQUMsQ0FDN0IyQyxJQUFJLENBQUV1QixZQUFZLElBQUs7TUFDdEIsSUFBSXJCLElBQXNDLEVBQUU7UUFDMUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRUUsWUFBWSxDQUFDO01BQ3ZFO01BRUEvQixTQUFTLENBQUNtRCxhQUFhLENBQUNHLEtBQUssQ0FBQzlDLElBQUksQ0FBQyxVQUFVdUIsWUFBWSxFQUFFO1FBQ3pELElBQUlyQixJQUFzQyxFQUFFO1VBQzFDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVFLFlBQVksQ0FBQ3dCLE1BQU0sQ0FBQztRQUNoRTtRQUVBQyxlQUFlLENBQUN6QixZQUFZLENBQUM7TUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQ0RMLEtBQUssQ0FBRStCLEdBQUcsSUFBSztNQUNkekcsOEVBQWMsQ0FBQztRQUNibUUsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUU7TUFDWCxDQUFDLENBQUM7TUFFRixJQUFJYixJQUFzQyxFQUFFO1FBQzFDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUM0QixHQUFHLENBQUM7TUFDbEI7SUFDRixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDSjtBQUVBLE1BQU1ELGVBQWUsR0FBSWpCLEdBQUcsSUFBSztFQUMvQixJQUFJLENBQUNBLEdBQUcsQ0FBQ21CLGdCQUFnQixFQUFFO0lBQ3pCMUcsOEVBQWMsQ0FBQztNQUNibUUsS0FBSyxFQUFFLG9CQUFvQjtNQUMzQkMsT0FBTyxFQUFFLElBQUk7TUFDYkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJDLGFBQWEsRUFBRSxJQUFJO01BQ25CQyxPQUFPLEVBQUU7SUFDWCxDQUFDLENBQUM7SUFDRjtFQUNGO0VBRUEsSUFBSW9DLFlBQVksQ0FBQ0MsVUFBVSxLQUFLLFFBQVEsRUFBRTtJQUN4QzVHLGdGQUFnQixDQUFDO01BQ2ZtRSxLQUFLLEVBQUUsZUFBZTtNQUN0QkMsT0FBTyxFQUFFLElBQUk7TUFDYkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJDLGFBQWEsRUFBRSxJQUFJO01BQ25CQyxPQUFPLEVBQ0w7SUFDSixDQUFDLENBQUM7SUFDRjtFQUNGO0VBRUEsSUFBSSxFQUFFLGFBQWEsSUFBSWpFLE1BQU0sQ0FBQyxFQUFFO0lBQzlCTiw2RUFBYSxDQUFDO01BQ1ptRSxLQUFLLEVBQUUsNEJBQTRCO01BQ25DQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxRQUFRLEVBQUUsVUFBVTtNQUNwQkMsYUFBYSxFQUFFLElBQUk7TUFDbkJDLE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FBQztJQUNGO0VBQ0Y7RUFFQWdCLEdBQUcsQ0FBQ1AsV0FBVyxDQUFDQyxlQUFlLEVBQUUsQ0FBQ3pCLElBQUksQ0FBRXNELEdBQUcsSUFBSztJQUM5Q2xDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFVSxHQUFHLENBQUM7SUFDdkMsSUFBSSxDQUFDdUIsR0FBRyxJQUFJQSxHQUFHLEtBQUssSUFBSSxFQUFFO01BQ3hCeEIsb0JBQW9CLENBQUNDLEdBQUcsQ0FBQztJQUMzQixDQUFDLE1BQU0sSUFBSXVCLEdBQUcsS0FBSyxJQUFJLEVBQUU7TUFDdkJsQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztNQUNyQztNQUNBN0UsNkVBQWEsQ0FBQztRQUNabUUsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxPQUFPLEVBQUU7TUFDWCxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUVKLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSVQsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7RUFDNUMsTUFBTWdELGFBQWEsR0FBR2pELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUM5RDtFQUNBO0VBQ0F6RCxNQUFNLENBQUMrRSxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRzJCLEtBQUssSUFBSztJQUN4RCxJQUFJdEQsSUFBc0MsRUFBRTtNQUMxQ2tCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBRW1DLEtBQUssQ0FBQztJQUN0RDtJQUNBO0lBQ0ExRyxNQUFNLENBQUMyRyxjQUFjLEdBQUdELEtBQUs7SUFDN0I7SUFDQTtJQUNBO0lBQ0FELGFBQWEsQ0FBQy9DLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7RUFDakQsQ0FBQyxDQUFDO0VBRUY4QyxhQUFhLENBQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUM1QyxJQUFJM0IsSUFBc0MsRUFBRTtNQUMxQ2tCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0lBQy9DO0lBRUEsTUFBTXFDLFdBQVcsR0FBRzVHLE1BQU0sQ0FBQzJHLGNBQWM7SUFDekMsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDaEI7TUFDQTtJQUNGO0lBQ0FBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3BCRCxXQUFXLENBQUNFLFVBQVUsQ0FBQzVELElBQUksQ0FBRTZELE1BQU0sSUFBSztNQUN0QyxJQUFJM0QsSUFBc0MsRUFBRTtRQUMxQ2tCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixFQUFFd0MsTUFBTSxDQUFDO01BQzlDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EvRyxNQUFNLENBQUMyRyxjQUFjLEdBQUcsSUFBSTtNQUM1QjtNQUNBRixhQUFhLENBQUMvQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQ2hELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUNGO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBM0QsTUFBTSxDQUFDK0UsZ0JBQWdCLENBQUMsY0FBYyxFQUFHMkIsS0FBSyxJQUFLO0VBQ2pELElBQUl0RCxJQUFzQyxFQUFFO0lBQzFDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVtQyxLQUFLLENBQUM7RUFDakQ7RUFFQWhILDZFQUFhLENBQUM7SUFDWm1FLEtBQUssRUFBRyxrQkFBaUI7SUFDekJDLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7O0FBRUEsQ0FDRSxhQUFhLEVBQ2IsV0FBVyxFQUNYLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLG1CQUFtQixDQUNwQixDQUFDK0MsT0FBTyxDQUFFQyxHQUFHLElBQUs7RUFDakJqSCxNQUFNLENBQUMrRSxnQkFBZ0IsQ0FBQ2tDLEdBQUcsRUFBRSxZQUFZO0lBQ3ZDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemVpQztBQUNHO0FBQ2tCLENBQUU7QUFDOEI7QUFFeEYsU0FBU0ksS0FBSyxDQUFDQyxFQUFFLEVBQUU7RUFDZixPQUFPLElBQUl0SCxNQUFNLENBQUN1SCxPQUFPLENBQUNDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFO0FBRUEsU0FBU0ksYUFBYSxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtFQUM5QyxJQUFJQyxRQUFRLEdBQUcsSUFBSUMsUUFBUSxDQUFDSCxXQUFXLENBQUM7RUFDeENFLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixFQUFFSCxZQUFZLENBQUN4RixJQUFJLENBQUM7RUFFcEQsSUFBR29CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7SUFDNUMsSUFBSXVFLFNBQVMsR0FBR3hFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0lBQzNEdUUsU0FBUyxDQUFDQyxRQUFRLEdBQUcsSUFBSTtFQUM3QjtFQUVBL0ksMERBQVUsQ0FBQ3lJLFdBQVcsQ0FBQ08sTUFBTSxFQUFFTCxRQUFRLENBQUMsQ0FBQzNFLElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7SUFDaEUsSUFBSWdGLE1BQU0sR0FBR2hGLFFBQVEsQ0FBQy9DLElBQUksQ0FBQytILE1BQU07SUFDakMsSUFBSUMsb0JBQW9CLEdBQUc1RSxRQUFRLENBQUNDLGNBQWMsQ0FBRSxpQkFBZ0JtRSxZQUFZLENBQUN4RixJQUFLLEVBQUMsQ0FBQztJQUN4RixJQUFJK0YsTUFBTSxDQUFDbEgsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUN2QixJQUFJdUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUVELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxTQUFTLENBQUMyRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQzNHLElBQUk3RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxTQUFTLENBQUMyRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3JILElBQUk3RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxTQUFTLENBQUMyRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3ZIRCxvQkFBb0IsQ0FBQzFFLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDNUMsSUFBSUYsb0JBQW9CLEVBQUU7UUFDeEJBLG9CQUFvQixDQUFDRyxTQUFTLEdBQUcsRUFBRTtNQUNyQztJQUNGLENBQUMsTUFBTTtNQUNMLElBQUkvRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRUQsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDeEcsSUFBSTlFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUVELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDbEgsSUFBSTlFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUVELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcEhGLG9CQUFvQixDQUFDMUUsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUMvQ0Qsb0JBQW9CLENBQUMxRSxTQUFTLENBQUM0RSxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFDLElBQUlGLG9CQUFvQixFQUFFO1FBQ3hCLElBQUlJLFVBQVUsR0FBRyxFQUFFO1FBQ25CLEtBQUssSUFBSWhILENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJHLE1BQU0sQ0FBQ2xILE1BQU0sRUFBRU8sQ0FBQyxFQUFFLEVBQUU7VUFDdENnSCxVQUFVLElBQUssR0FBRUwsTUFBTSxDQUFDM0csQ0FBQyxDQUFFLEVBQUM7UUFDOUI7UUFDQTRHLG9CQUFvQixDQUFDRyxTQUFTLEdBQUdDLFVBQVU7TUFDN0M7SUFHRjs7SUFFRTtJQUNGLElBQUdoRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUN2SSxJQUFJZ0YsS0FBSyxHQUFHakYsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7TUFDeEQsSUFBSWlGLElBQUksR0FBR2xGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO01BQ3RELElBQUlrRixNQUFNLEdBQUduRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7TUFDbEQsSUFBSW1GLEtBQUssR0FBR3BGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFFLDZCQUE0QixDQUFDO01BQ2xFLElBQUlvRixPQUFPLEdBQUdyRixRQUFRLENBQUNDLGNBQWMsQ0FBRSx1QkFBc0IsQ0FBQztNQUM5RCxJQUFJcUYsR0FBRyxHQUFHdEYsUUFBUSxDQUFDQyxjQUFjLENBQUUsVUFBUyxDQUFDO01BQzdDYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ29FLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDO01BQ3pCekUsT0FBTyxDQUFDQyxHQUFHLENBQUNtRSxJQUFJLENBQUNLLEtBQUssQ0FBQztNQUN2QixJQUFJQyxPQUFPLEdBQUc3QixvRUFBcUIsQ0FBRSxHQUFFc0IsS0FBSyxDQUFDTSxLQUFNLEVBQUMsRUFBRyxHQUFFTCxJQUFJLENBQUNLLEtBQU0sRUFBQyxDQUFDO01BQ3RFLElBQUlFLFFBQVEsR0FBRzdCLHdFQUF5QixDQUFFLEdBQUV1QixNQUFNLENBQUNJLEtBQU0sRUFBQyxDQUFDO01BQzNELElBQUlHLEtBQUssR0FBR2hDLHNEQUFPLENBQUUsR0FBRXlCLE1BQU0sQ0FBQ0ksS0FBTSxFQUFDLENBQUM7TUFFdEMsSUFBR0MsT0FBTyxJQUFJLElBQUksRUFBRTtRQUNoQkosS0FBSyxDQUFDbEYsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1FBQzlETyxLQUFLLENBQUNsRixTQUFTLENBQUM0RSxHQUFHLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztRQUM3RE0sS0FBSyxDQUFDTCxTQUFTLEdBQUcsaUJBQWlCO1FBQ25DLElBQUkvRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRUQsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLFNBQVMsQ0FBQzJFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDL0csQ0FBQyxNQUFNO1FBQ0hPLEtBQUssQ0FBQ2xGLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQztRQUMzRE0sS0FBSyxDQUFDbEYsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7UUFDaEVPLEtBQUssQ0FBQ0wsU0FBUyxHQUFHLGtCQUFrQjtRQUNwQyxJQUFJL0UsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUVELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxTQUFTLENBQUM0RSxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzVHO01BRUEsSUFBR1ksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNkTCxPQUFPLENBQUNuRixTQUFTLENBQUMyRSxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7UUFDaEVRLE9BQU8sQ0FBQ25GLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO1FBQy9ETyxPQUFPLENBQUNOLFNBQVMsR0FBRyxtQkFBbUI7UUFDdkMsSUFBSS9FLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUMvRyxDQUFDLE1BQU07UUFDSFEsT0FBTyxDQUFDbkYsU0FBUyxDQUFDNEUsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1FBQzdETyxPQUFPLENBQUNuRixTQUFTLENBQUMyRSxNQUFNLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztRQUNsRVEsT0FBTyxDQUFDTixTQUFTLEdBQUcseUJBQXlCO1FBQzdDLElBQUkvRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRUQsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDNUc7TUFFQSxJQUFHVyxRQUFRLEtBQUssTUFBTSxFQUFFO1FBQ3BCSCxHQUFHLENBQUNLLEdBQUcsR0FBRywwSEFBMEg7TUFDeEksQ0FBQyxNQUFNLElBQUlGLFFBQVEsS0FBSyxZQUFZLEVBQUU7UUFDbENILEdBQUcsQ0FBQ0ssR0FBRyxHQUFHLDRIQUE0SDtNQUMxSTtNQUdBbkIsU0FBUyxDQUFDZSxLQUFLLEdBQUdFLFFBQVE7SUFDNUI7SUFFQSxJQUFHOUYsUUFBUSxDQUFDL0MsSUFBSSxDQUFDZ0osTUFBTSxFQUFDO01BQ3RCNUYsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMwRixHQUFHLEdBQUdoRyxRQUFRLENBQUMvQyxJQUFJLENBQUNnSixNQUFNO0lBQzlEO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFHYSxTQUFTdkosV0FBVyxHQUFHO0VBQ2xDLE9BQU87SUFDSHdKLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxZQUFZLEVBQUUsU0FBUztJQUN2QkMsT0FBTyxFQUFFLEtBQUs7SUFFZEMsU0FBUyxHQUFHO01BQ1IsSUFBSSxDQUFDSixVQUFVLEdBQUcsS0FBSztNQUN2QixJQUFJLENBQUNLLE1BQU0sR0FBRyxLQUFLO01BRW5CLElBQUlsRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNuQyxNQUFNa0csSUFBSSxHQUFHbkcsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzVDLE1BQU1tRyxNQUFNLEdBQUdwRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7O1FBRWhEO1FBQ0EsTUFBTW9HLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxZQUFZLEdBQUcsRUFBRTtRQUV6Q0gsSUFBSSxDQUFDakcsU0FBUyxDQUFDNEUsR0FBRyxDQUFFLE9BQU11QixRQUFTLEtBQUksQ0FBQztRQUN4QyxJQUFJLENBQUNFLE1BQU0sR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7TUFDeEI7SUFDSixDQUFDO0lBRURDLFNBQVMsR0FBRztNQUNSLElBQUlDLGFBQWEsR0FBR2xLLE1BQU0sQ0FBQ21LLFdBQVc7TUFDdEMsSUFBSUQsYUFBYSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLENBQUNGLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQ0QsTUFBTSxHQUFHLElBQUk7TUFDdEI7TUFFQSxJQUFJRyxhQUFhLEdBQUcsSUFBSSxDQUFDRSxVQUFVLElBQUksSUFBSSxDQUFDSixPQUFPLEtBQUssS0FBSyxFQUFFO1FBQzNELElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUk7UUFDbkIsSUFBSSxDQUFDRCxNQUFNLEdBQUcsS0FBSztNQUN2QixDQUFDLE1BQU0sSUFBSUcsYUFBYSxHQUFHLElBQUksQ0FBQ0UsVUFBVSxJQUFJLElBQUksQ0FBQ0osT0FBTyxLQUFLLElBQUksRUFBRTtRQUNqRSxJQUFJLENBQUNBLE9BQU8sR0FBRyxLQUFLO1FBQ3BCLElBQUksQ0FBQ0QsTUFBTSxHQUFHLElBQUk7TUFDdEI7TUFDQSxJQUFJLENBQUNLLFVBQVUsR0FBR0YsYUFBYTtJQUNuQyxDQUFDO0lBRURHLElBQUksR0FBRztNQUNILElBQUksQ0FBQ0MsUUFBUSxFQUFFO0lBQ25CLENBQUM7SUFFRCxNQUFNQyxXQUFXLEdBQUc7TUFDaEIsTUFBTXJMLHlEQUFTLENBQUMsWUFBWSxDQUFDLENBQUNnRSxJQUFJLENBQzlCLFVBQVVDLFFBQVEsRUFBQztRQUNmLE9BQU9tQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLFFBQVEsQ0FBQztNQUNoQyxDQUFDLENBQ0osQ0FBQ2lCLEtBQUssQ0FDSCxVQUFVQyxLQUFLLEVBQUU7UUFDYixPQUFPQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQzdCLENBQUMsQ0FDSjtJQUNMLENBQUM7SUFFRCxNQUFNb0csUUFBUSxDQUFDQyxFQUFFLEVBQUU7TUFDZixNQUFNeEwseURBQVMsQ0FBRSxTQUFRd0wsRUFBRyxFQUFDLENBQUMsQ0FBQ3hILElBQUksQ0FDL0IsVUFBVUMsUUFBUSxFQUFDO1FBQ2YsT0FBT21CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEIsUUFBUSxDQUFDO01BQ2hDLENBQUMsQ0FDSixDQUFDaUIsS0FBSyxDQUNILFVBQVVDLEtBQUssRUFBRTtRQUNiLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDN0IsQ0FBQyxDQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU1zRyxVQUFVLEdBQUc7TUFDZixJQUFJLENBQUN0QixVQUFVLEdBQUcsSUFBSTtNQUV0QixNQUFNMUIsV0FBVyxHQUFHLElBQUksQ0FBQ2lELEtBQUssQ0FBQ0MsSUFBSTtNQUNuQyxNQUFNQyxHQUFHLEdBQUd0SCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7TUFDM0MsTUFBTXlFLE1BQU0sR0FBR1AsV0FBVyxDQUFDTyxNQUFNO01BQ2pDLE1BQU02QyxRQUFRLEdBQUdwRCxXQUFXLENBQUNsQyxPQUFPLENBQUN1RixRQUFRLElBQUlyRCxXQUFXLENBQUNsQyxPQUFPLENBQUNzRixRQUFRO01BQzdFLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFFdEIySCxHQUFHLENBQUNVLFdBQVcsQ0FBQzdELFdBQVcsQ0FBQztVQUM1Qk4sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDYixJQUFJbEUsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsSUFBSXRJLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDcEQvTCwrRUFBZ0IsQ0FBQztjQUNibUUsS0FBSyxFQUFFVixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2NBQzFCQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxRQUFRLEVBQUUsVUFBVTtjQUNwQkMsYUFBYSxFQUFFLElBQUk7Y0FDbkJDLE9BQU8sRUFBRWQsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7WUFDM0IsQ0FBQyxDQUFDO1lBQ0Y7VUFDSjs7VUFFQSxJQUFHZCxRQUFRLENBQUMvQyxJQUFJLENBQUNzTCxRQUFRLEVBQUU7WUFDdkIsT0FBTzFMLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3hLLE9BQU8sQ0FBRSxHQUFFbkIsTUFBTSxDQUFDMkwsUUFBUSxDQUFDQyxNQUFPLFVBQVN6SSxRQUFRLENBQUMvQyxJQUFJLENBQUNzTCxRQUFTLEdBQUUsQ0FBQztVQUNoRztVQUVBLElBQUlYLFFBQVEsRUFBRTtZQUNWLE9BQU8vSyxNQUFNLENBQUMyTCxRQUFRLENBQUN4SyxPQUFPLENBQUM0SixRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQzlDO1FBRUosQ0FBQyxDQUFDLENBQUMzRyxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO1VBRXRCLElBQUlBLEtBQUssQ0FBQ2xCLFFBQVEsSUFBSWtCLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDakQsT0FBTy9MLDZFQUFjLENBQUM7Y0FDbEJtRSxLQUFLLEVBQUVRLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7Y0FDaENDLE9BQU8sRUFBRSxJQUFJO2NBQ2JDLFFBQVEsRUFBRSxVQUFVO2NBQ3BCQyxhQUFhLEVBQUUsSUFBSTtjQUNuQkMsT0FBTyxFQUFFSSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtZQUNqQyxDQUFDLENBQUM7VUFDTjtVQUVBLE9BQU92RSw2RUFBYyxDQUFDO1lBQ2xCbUUsS0FBSyxFQUFFLFlBQVk7WUFDbkJDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFHLDZCQUE0QkksS0FBTTtVQUNoRCxDQUFDLENBQUM7O1VBRUY7VUFDQTtRQUNKLENBQUMsQ0FBQzs7UUFFTixJQUFJLENBQUNnRixVQUFVLEdBQUcsS0FBSztNQUMzQjtJQUVKLENBQUM7SUFFRCxNQUFNd0MsZ0JBQWdCLEdBQUc7TUFDckIsSUFBSSxDQUFDeEMsVUFBVSxHQUFHLElBQUk7TUFFdEIsTUFBTTFCLFdBQVcsR0FBRyxJQUFJLENBQUNpRCxLQUFLLENBQUNDLElBQUk7TUFDbkMsTUFBTTNDLE1BQU0sR0FBR1AsV0FBVyxDQUFDTyxNQUFNO01BQ2pDLE1BQU02QyxRQUFRLEdBQUdwRCxXQUFXLENBQUNsQyxPQUFPLENBQUN1RixRQUFRLElBQUlyRCxXQUFXLENBQUNsQyxPQUFPLENBQUNzRixRQUFRO01BQzdFLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEJ6RCwrRUFBZ0IsQ0FBQztZQUNibUUsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUUsZ0RBQWdELEdBQUdkO1VBQ2hFLENBQUMsQ0FBQztVQUNGa0UsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDYixPQUFPckgsTUFBTSxDQUFDMkwsUUFBUSxDQUFDeEssT0FBTyxDQUFDNEosUUFBUSxDQUFDO1FBRTVDLENBQUMsQ0FBQyxDQUFDM0csS0FBSyxDQUFDLFVBQVVDLEtBQUssRUFBRTtVQUV0QixPQUFPM0UsNkVBQWMsQ0FBQztZQUNsQm1FLEtBQUssRUFBRSxtQkFBbUI7WUFDMUJDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFHLDZCQUE0QkksS0FBTTtVQUNoRCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7UUFFTixJQUFJLENBQUNnRixVQUFVLEdBQUcsS0FBSztNQUMzQjtJQUVKLENBQUM7SUFFRCxNQUFNeUMsY0FBYyxHQUFHO01BQ25CLE1BQU1uRSxXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DLE1BQU0zQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtNQUNqQyxNQUFNNkQsRUFBRSxHQUFHdkksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO01BQzFDLE1BQU1zSCxRQUFRLEdBQUdwRCxXQUFXLENBQUNsQyxPQUFPLENBQUNzRixRQUFRO01BQzdDLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSx5REFBUyxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzFCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEIsSUFBSUEsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN6Qi9MLCtFQUFnQixDQUFDO2NBQ2JtRSxLQUFLLEVBQUVWLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7Y0FDMUJDLE9BQU8sRUFBRSxJQUFJO2NBQ2JDLFFBQVEsRUFBRSxVQUFVO2NBQ3BCQyxhQUFhLEVBQUUsSUFBSTtjQUNuQkMsT0FBTyxFQUFFZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtZQUMzQixDQUFDLENBQUM7WUFDRjhILEVBQUUsQ0FBQ3JJLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDMUJqQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU9ySCxNQUFNLENBQUMyTCxRQUFRLENBQUN4SyxPQUFPLENBQUM0SixRQUFRLENBQUM7VUFDNUM7UUFFSixDQUFDLENBQUMsQ0FBQzNHLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7VUFFdEIsT0FBTzNFLDZFQUFjLENBQUM7WUFDbEJtRSxLQUFLLEVBQUVRLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7WUFDaENDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFFSSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtVQUNqQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDVjtJQUVKLENBQUM7SUFFRCxNQUFNK0gsVUFBVSxHQUFHO01BQ2YsSUFBSSxDQUFDM0MsVUFBVSxHQUFHLElBQUk7TUFDdEIsTUFBTTFCLFdBQVcsR0FBRyxJQUFJLENBQUNpRCxLQUFLLENBQUNDLElBQUk7TUFDbkMsTUFBTUksSUFBSSxHQUFHdEQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDd0YsSUFBSTtNQUNyQyxNQUFNL0MsTUFBTSxHQUFHUCxXQUFXLENBQUNPLE1BQU07TUFDakMsTUFBTTZDLFFBQVEsR0FBR3BELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3NGLFFBQVE7TUFDN0MsSUFBSTNLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEIsSUFBSUEsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN6Qi9MLCtFQUFnQixDQUFDO2NBQ2JtRSxLQUFLLEVBQUVWLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7Y0FDMUJDLE9BQU8sRUFBRSxJQUFJO2NBQ2JDLFFBQVEsRUFBRSxVQUFVO2NBQ3BCQyxhQUFhLEVBQUUsSUFBSTtjQUNuQkMsT0FBTyxFQUFFZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtZQUMzQixDQUFDLENBQUM7WUFDRm9ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBT3NFLFFBQVEsQ0FBQ3hLLE9BQU8sQ0FBQzRKLFFBQVEsQ0FBQztVQUNyQztRQUVKLENBQUMsQ0FBQyxDQUFDM0csS0FBSyxDQUFDLFVBQVVDLEtBQUssRUFBRTtVQUV0QixPQUFPM0UsNkVBQWMsQ0FBQztZQUNsQm1FLEtBQUssRUFBRVEsS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDeUQsS0FBSztZQUNoQ0MsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzZEO1VBQ2pDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUNWO01BQ0EsSUFBSSxDQUFDb0YsVUFBVSxHQUFHLElBQUk7SUFDMUIsQ0FBQztJQUVELE1BQU00QyxVQUFVLEdBQUc7TUFDZixJQUFJLENBQUM1QyxVQUFVLEdBQUcsSUFBSTtNQUN0QixNQUFNMUIsV0FBVyxHQUFHLElBQUksQ0FBQ2lELEtBQUssQ0FBQ0MsSUFBSTtNQUNuQyxNQUFNSSxJQUFJLEdBQUd0RCxXQUFXLENBQUNsQyxPQUFPLENBQUN3RixJQUFJO01BQ3JDLE1BQU1GLFFBQVEsR0FBR3BELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3NGLFFBQVE7TUFDN0MsTUFBTTdDLE1BQU0sR0FBR1AsV0FBVyxDQUFDTyxNQUFNO01BQ2pDLElBQUk5SCxJQUFJLEdBQUcsSUFBSTBILFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO01BQ3BDQSxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBQ1ksWUFBWSxJQUFJO1FBQzNELElBQUlBLFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUU7VUFDbEMsSUFBSUMsUUFBUSxHQUFHeEQsWUFBWSxDQUFDOEMsRUFBRTtVQUM5QnBHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFdkUsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7VUFDbkZsTCxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXBDLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQzVMLE9BQU8sQ0FBQytLLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDLENBQUNFLFVBQVUsRUFBRSxDQUFDO1FBQ3BGO1FBRUEsSUFBSTFELFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUM7VUFDakMvSyxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXdGLFlBQVksQ0FBQ21CLEtBQUssQ0FBQztRQUN0RDtNQUNKLENBQUMsQ0FBQztNQUVGLElBQUlwQixXQUFXLENBQUM0RCxhQUFhLEVBQUUsRUFBRTtRQUM3QixNQUFNck0seURBQVMsQ0FBQ2dKLE1BQU0sRUFBRTlILElBQUksRUFBRTtVQUMxQjZDLE9BQU8sRUFBRTtZQUNQLGFBQWEsRUFBRWdJO1VBQ2pCO1FBQUMsQ0FBQyxDQUFDLENBQ0YvSCxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO1VBQ3RCLElBQUlBLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDekIvTCwrRUFBZ0IsQ0FBQztjQUNibUUsS0FBSyxFQUFFVixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2NBQzFCQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxRQUFRLEVBQUUsVUFBVTtjQUNwQkMsYUFBYSxFQUFFLElBQUk7Y0FDbkJDLE9BQU8sRUFBRWQsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7WUFDM0IsQ0FBQyxDQUFDO1lBQ0ZvRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU9zRSxRQUFRLENBQUN4SyxPQUFPLENBQUM0SixRQUFRLENBQUM7VUFDckM7UUFFSixDQUFDLENBQUMsQ0FBQzNHLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7VUFFdEIsT0FBTzNFLDZFQUFjLENBQUM7WUFDbEJtRSxLQUFLLEVBQUVRLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7WUFDaENDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFFSSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtVQUNqQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDVjtNQUNBLElBQUksQ0FBQ29GLFVBQVUsR0FBRyxJQUFJO0lBQzFCLENBQUM7SUFFRCxNQUFNNkMsZ0JBQWdCLEdBQUc7TUFDckIsSUFBSSxDQUFDN0MsVUFBVSxHQUFHLElBQUk7TUFDdEIsTUFBTTFCLFdBQVcsR0FBRyxJQUFJLENBQUNpRCxLQUFLLENBQUNDLElBQUk7TUFDbkMsTUFBTTNDLE1BQU0sR0FBR1AsV0FBVyxDQUFDTyxNQUFNO01BQ2pDLE1BQU02QyxRQUFRLEdBQUdwRCxXQUFXLENBQUNsQyxPQUFPLENBQUNzRixRQUFRO01BQzdDLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0ksSUFBSTtZQUNuQixjQUFjLEVBQUM7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEIsSUFBSUEsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsSUFBSXRJLFFBQVEsQ0FBQ3NJLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDbkQvTCwrRUFBZ0IsQ0FBQztjQUNibUUsS0FBSyxFQUFFVixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2NBQzFCQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxRQUFRLEVBQUUsVUFBVTtjQUNwQkMsYUFBYSxFQUFFLElBQUk7Y0FDbkJDLE9BQU8sRUFBRWQsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7WUFDM0IsQ0FBQyxDQUFDO1lBQ0ZvRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU92SSw4REFBUyxDQUFDLEtBQUssRUFBRWlNLFFBQVEsRUFBRTtjQUFDcUIsTUFBTSxFQUFDLE1BQU07Y0FBRUMsSUFBSSxFQUFDO1lBQVcsQ0FBQyxDQUFDO1VBQ3hFO1FBRUosQ0FBQyxDQUFDLENBQUNqSSxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO1VBRXRCLE9BQU8zRSw2RUFBYyxDQUFDO1lBQ2xCbUUsS0FBSyxFQUFFUSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO1lBQ2hDQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxRQUFRLEVBQUUsVUFBVTtZQUNwQkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLE9BQU8sRUFBRUksS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7VUFDakMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQ1Y7TUFDQSxJQUFJLENBQUNvRixVQUFVLEdBQUcsSUFBSTtJQUMxQixDQUFDO0lBRUQsTUFBTWlELHNCQUFzQixHQUFHO01BQzNCLElBQUksQ0FBQ2pELFVBQVUsR0FBRyxJQUFJO01BRXRCLE1BQU0xQixXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DLE1BQU0zQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtNQUNqQyxNQUFNNkMsUUFBUSxHQUFHcEQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDc0YsUUFBUTtNQUM3QyxNQUFNRSxJQUFJLEdBQUd0RCxXQUFXLENBQUNsQyxPQUFPLENBQUN3RixJQUFJO01BQ3JDLElBQUk3SyxJQUFJLEdBQUcsSUFBSTBILFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO01BQ3BDQSxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBQ1ksWUFBWSxJQUFJO1FBQzNELElBQUlBLFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUU7VUFDbEMsSUFBSUMsUUFBUSxHQUFHeEQsWUFBWSxDQUFDOEMsRUFBRTtVQUM5QnBHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFdkUsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7VUFDbkZsTCxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXBDLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQzVMLE9BQU8sQ0FBQytLLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDLENBQUNFLFVBQVUsRUFBRSxDQUFDO1FBQ3BGO1FBRUEsSUFBSTFELFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUM7VUFDakMvSyxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXdGLFlBQVksQ0FBQ21CLEtBQUssQ0FBQztRQUN0RDtNQUNKLENBQUMsQ0FBQztNQUVGLElBQUlwQixXQUFXLENBQUM0RCxhQUFhLEVBQUUsRUFBRTtRQUM3QixNQUFNck0sMERBQVUsQ0FBQ2dKLE1BQU0sRUFBRTlILElBQUksRUFBRTtVQUMzQjZDLE9BQU8sRUFBRTtZQUNQLGFBQWEsRUFBRWdJO1VBQ2pCO1FBQUMsQ0FBQyxDQUFDLENBQ0YvSCxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO1VBRXRCekQsK0VBQWdCLENBQUM7WUFDYm1FLEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkNDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFFLG9EQUFvRCxHQUFHZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtVQUNsRixDQUFDLENBQUM7VUFDRm9ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2IsSUFBR2xFLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzJLLFFBQVEsRUFBRSxPQUFPL0ssTUFBTSxDQUFDMkwsUUFBUSxDQUFDeEssT0FBTyxDQUFDZ0MsUUFBUSxDQUFDL0MsSUFBSSxDQUFDMkssUUFBUSxDQUFDO1VBRWpGL0ssTUFBTSxDQUFDMkwsUUFBUSxDQUFDeEssT0FBTyxDQUFDNEosUUFBUSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDM0csS0FBSyxDQUFDLFVBQVVDLEtBQUssRUFBRTtVQUV0QixPQUFPM0UsNkVBQWMsQ0FBQztZQUNsQm1FLEtBQUssRUFBRSwwQkFBMEI7WUFDakNDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFHLDZCQUE0QkksS0FBTTtVQUNoRCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7UUFFTixJQUFJLENBQUNnRixVQUFVLEdBQUcsS0FBSztNQUMzQjtJQUVKLENBQUM7SUFFRCxNQUFNa0QsZUFBZSxHQUFHO01BQ3BCLElBQUksQ0FBQ2xELFVBQVUsR0FBRyxJQUFJO01BRXRCLE1BQU0xQixXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DLE1BQU0zQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtNQUNqQyxNQUFNNkMsUUFBUSxHQUFHcEQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDdUYsUUFBUSxJQUFJckQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDc0YsUUFBUTtNQUM3RSxNQUFNRSxJQUFJLEdBQUd0RCxXQUFXLENBQUNsQyxPQUFPLENBQUN3RixJQUFJO01BQ3JDLElBQUk3SyxJQUFJLEdBQUcsSUFBSTBILFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO01BQ3BDQSxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBQ1ksWUFBWSxJQUFJO1FBQzNELElBQUlBLFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUU7VUFDbEMsSUFBSUMsUUFBUSxHQUFHeEQsWUFBWSxDQUFDOEMsRUFBRTtVQUM5QnBHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFdkUsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7VUFDbkZsTCxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXBDLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQzVMLE9BQU8sQ0FBQytLLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDLENBQUNFLFVBQVUsRUFBRSxDQUFDO1FBQ3BGO1FBRUEsSUFBSTFELFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUM7VUFDakMvSyxJQUFJLENBQUMySCxNQUFNLENBQUNILFlBQVksQ0FBQ3hGLElBQUksRUFBRXdGLFlBQVksQ0FBQ21CLEtBQUssQ0FBQztRQUN0RDtNQUNKLENBQUMsQ0FBQztNQUVGLElBQUlwQixXQUFXLENBQUM0RCxhQUFhLEVBQUUsRUFBRTtRQUM3QixNQUFNck0sMERBQVUsQ0FBQ2dKLE1BQU0sRUFBRTlILElBQUksRUFBRTtVQUMzQjZDLE9BQU8sRUFBRTtZQUNQLGFBQWEsRUFBRWdJO1VBQ2pCO1FBQUMsQ0FBQyxDQUFDLENBQ0YvSCxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO1VBQ3RCekQsK0VBQWdCLENBQUM7WUFDYm1FLEtBQUssRUFBRSxrQkFBa0I7WUFDekJDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFFLGdEQUFnRCxHQUFHZDtVQUNoRSxDQUFDLENBQUM7VUFDRmtFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2IsT0FBT3JILE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3hLLE9BQU8sQ0FBQzRKLFFBQVEsQ0FBQztRQUU1QyxDQUFDLENBQUMsQ0FBQzNHLEtBQUssQ0FBQyxVQUFVQyxLQUFLLEVBQUU7VUFFdEIsT0FBTzNFLDZFQUFjLENBQUM7WUFDbEJtRSxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxRQUFRLEVBQUUsVUFBVTtZQUNwQkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLE9BQU8sRUFBRyw2QkFBNEJJLEtBQU07VUFDaEQsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDZ0YsVUFBVSxHQUFHLEtBQUs7TUFDM0I7SUFFSixDQUFDO0lBRUQsTUFBTW1ELGtCQUFrQixHQUFHO01BQ3ZCLElBQUksQ0FBQ25ELFVBQVUsR0FBRyxJQUFJO01BRXRCLE1BQU0xQixXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DLE1BQU0zQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtNQUNqQyxNQUFNNkMsUUFBUSxHQUFHcEQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDc0YsUUFBUTtNQUM3QztNQUNBLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEJ6RCwrRUFBZ0IsQ0FBQztZQUNibUUsS0FBSyxFQUFFLCtCQUErQjtZQUN0Q0MsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUVkO1VBQ2IsQ0FBQyxDQUFDO1VBQ0ZrRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUNiLE9BQU9ySCxNQUFNLENBQUMyTCxRQUFRLENBQUN4SyxPQUFPLENBQUM0SixRQUFRLENBQUM7UUFHNUMsQ0FBQyxDQUFDLENBQUMzRyxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO1VBRXRCLE9BQU8zRSw2RUFBYyxDQUFDO1lBQ2xCbUUsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUcsNkJBQTRCSSxLQUFNO1VBQ2hELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQ2dGLFVBQVUsR0FBRyxLQUFLO01BQzNCO0lBRUosQ0FBQztJQUVELE1BQU1vRCxZQUFZLEdBQUc7TUFDakIsSUFBSUMsQ0FBQyxHQUFHbEosUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO01BQzlDLElBQUlpSixDQUFDLENBQUN2QixJQUFJLEtBQUssVUFBVSxFQUFFO1FBQ3pCdUIsQ0FBQyxDQUFDdkIsSUFBSSxHQUFHLE1BQU07TUFDakIsQ0FBQyxNQUFNO1FBQ0x1QixDQUFDLENBQUN2QixJQUFJLEdBQUcsVUFBVTtNQUNyQjtJQUNKLENBQUM7SUFFRCxNQUFNd0IsY0FBYyxHQUFHO01BQ25CLElBQUksQ0FBQ3JELElBQUksR0FBRyxVQUFVO01BQ3RCLElBQUksQ0FBQ0QsVUFBVSxHQUFHLElBQUk7SUFFMUIsQ0FBQztJQUVELE1BQU11RCxrQkFBa0IsR0FBRztNQUN2QixJQUFJRixDQUFDLEdBQUdsSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7TUFDL0MsSUFBSW9KLENBQUMsR0FBR3JKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztNQUMvQyxJQUFJaUosQ0FBQyxDQUFDdkIsSUFBSSxLQUFLLFVBQVUsSUFBSTBCLENBQUMsQ0FBQzFCLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDbER1QixDQUFDLENBQUN2QixJQUFJLEdBQUcsTUFBTTtRQUNmMEIsQ0FBQyxDQUFDMUIsSUFBSSxHQUFHLE1BQU07TUFDakIsQ0FBQyxNQUFNO1FBQ0x1QixDQUFDLENBQUN2QixJQUFJLEdBQUcsVUFBVTtRQUNuQjBCLENBQUMsQ0FBQzFCLElBQUksR0FBRyxVQUFVO01BQ3JCO0lBQ0osQ0FBQztJQUVELE1BQU0yQixjQUFjLEdBQUc7TUFDbkIsSUFBSSxDQUFDekQsVUFBVSxHQUFHLElBQUk7TUFFdEIsTUFBTTFCLFdBQVcsR0FBRyxJQUFJLENBQUNpRCxLQUFLLENBQUNDLElBQUk7TUFDbkMsTUFBTUMsR0FBRyxHQUFHdEgsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO01BQzNDLE1BQU15RSxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTSxJQUFJbEksTUFBTSxDQUFDMkwsUUFBUTtNQUNwRCxNQUFNWixRQUFRLEdBQUdwRCxXQUFXLENBQUNsQyxPQUFPLENBQUNzRixRQUFRO01BQzdDLE1BQU1FLElBQUksR0FBR3RELFdBQVcsQ0FBQ2xDLE9BQU8sQ0FBQ3dGLElBQUk7TUFDckMsSUFBSTdLLElBQUksR0FBRyxJQUFJMEgsUUFBUSxDQUFDSCxXQUFXLENBQUM7TUFDcENBLFdBQVcsQ0FBQ3VELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDbEUsT0FBTyxDQUFDWSxZQUFZLElBQUk7UUFDM0QsSUFBSUEsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUNsQyxJQUFJQyxRQUFRLEdBQUd4RCxZQUFZLENBQUM4QyxFQUFFO1VBQzlCcEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUV2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUNZLFFBQVEsQ0FBQyxDQUFDRSxVQUFVLEVBQUUsQ0FBQztVQUNuRmxMLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQUM7UUFDcEY7UUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLFVBQVUsRUFBQztVQUNqQy9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1FBQ3REO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSXBCLFdBQVcsQ0FBQzRELGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1yTSwwREFBVSxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQzNCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0ksSUFBSTtZQUNuQixjQUFjLEVBQUM7VUFDakI7UUFBQyxDQUFDLENBQUMsQ0FDRi9ILElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7VUFDdEIySCxHQUFHLENBQUNVLFdBQVcsQ0FBQzdELFdBQVcsQ0FBQztVQUM1QixJQUFJeEUsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsSUFBSXRJLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDcEQvTCwrRUFBZ0IsQ0FBQztjQUNibUUsS0FBSyxFQUFFVixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2NBQzFCQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxRQUFRLEVBQUUsVUFBVTtjQUNwQkMsYUFBYSxFQUFFLElBQUk7Y0FDbkJDLE9BQU8sRUFBRWQsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7WUFDM0IsQ0FBQyxDQUFDO1lBQ0ZvRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUkwRCxRQUFRLEVBQUU7Y0FDVixPQUFPak0sOERBQVMsQ0FBQyxLQUFLLEVBQUVpTSxRQUFRLEVBQUU7Z0JBQUNxQixNQUFNLEVBQUMsTUFBTTtnQkFBRUMsSUFBSSxFQUFDO2NBQVcsQ0FBQyxDQUFDO1lBQ3hFO1lBQ0E7VUFDSjtRQUNKLENBQUMsQ0FBQyxDQUFDakksS0FBSyxDQUFDLFVBQVVDLEtBQUssRUFBRTtVQUN0QixJQUFJQSxLQUFLLENBQUNsQixRQUFRLElBQUlrQixLQUFLLENBQUNsQixRQUFRLENBQUNzSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2pEL0wsNkVBQWMsQ0FBQztjQUNYbUUsS0FBSyxFQUFFUSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2NBQ2hDQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxRQUFRLEVBQUUsVUFBVTtjQUNwQkMsYUFBYSxFQUFFLElBQUk7Y0FDbkJDLE9BQU8sRUFBRUksS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQ7WUFDakMsQ0FBQyxDQUFDO1VBQ047VUFDQXZFLDZFQUFjLENBQUM7WUFDWG1FLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxRQUFRLEVBQUUsVUFBVTtZQUNwQkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLE9BQU8sRUFBRyw2QkFBNEJJLEtBQU07VUFDaEQsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDZ0YsVUFBVSxHQUFHLEtBQUs7TUFDM0IsQ0FBQyxNQUFNO1FBQ0gzSiw2RUFBYyxDQUFDO1VBQ1htRSxLQUFLLEVBQUUseUJBQXlCO1VBQ2hDQyxPQUFPLEVBQUUsSUFBSTtVQUNiQyxRQUFRLEVBQUUsVUFBVTtVQUNwQkMsYUFBYSxFQUFFLElBQUk7VUFDbkJDLE9BQU8sRUFBRyx5RUFBd0UwRCxXQUFXLENBQUNvRixjQUFjLEVBQUc7UUFDbkgsQ0FBQyxDQUFDO1FBQ0YxRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQ2dDLFVBQVUsR0FBRyxLQUFLO1FBQ3ZCdkssOERBQVMsQ0FBQyxLQUFLLEVBQUVpTSxRQUFRLEVBQUU7VUFBQ3FCLE1BQU0sRUFBQyxNQUFNO1VBQUVDLElBQUksRUFBQztRQUFXLENBQUMsQ0FBQztNQUNqRTtJQUVKLENBQUM7SUFFRC9CLFFBQVEsR0FBRztNQUNQLElBQUksQ0FBQ2pCLFVBQVUsR0FBRyxJQUFJO01BQ3RCLE1BQU0xQixXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DbEQsV0FBVyxDQUFDdUQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUNsRSxPQUFPLENBQUNZLFlBQVksSUFBSTtRQUMzRCxJQUFJQSxZQUFZLENBQUN4RixJQUFJLElBQUksUUFBUSxJQUFJd0YsWUFBWSxDQUFDbUIsS0FBSyxLQUFLLEVBQUUsRUFBRTtVQUM1RCxJQUFJLENBQUNPLElBQUksS0FBSyxJQUFJLENBQUNBLElBQUk7UUFDM0IsQ0FBQyxNQUFNO1VBQ0gsSUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLEdBQUcsQ0FBQztRQUM3QjtNQUNKLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ0UsT0FBTyxHQUFHLElBQUksQ0FBQ0QsWUFBWTtNQUNoQyxJQUFJLENBQUNGLFVBQVUsR0FBRyxLQUFLO0lBQzNCLENBQUM7SUFFRGtDLGFBQWEsR0FBRztNQUNaLE1BQU01RCxXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DbEQsV0FBVyxDQUFDdUQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUNsRSxPQUFPLENBQUNZLFlBQVksSUFBSTtRQUMzREEsWUFBWSxDQUFDN0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMkIsS0FBSyxJQUFJO1VBQzdDcEMsT0FBTyxDQUFDQyxHQUFHLENBQUNtQyxLQUFLLENBQUM7VUFDbEJnQixhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxDQUFDO1FBQzVDLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNb0YsWUFBWSxHQUFHO01BQ2pCLE9BQU8sSUFBSSxDQUFDdEQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDQSxNQUFNO0lBQ3JDLENBQUM7SUFFRHVELFVBQVUsR0FBRztNQUNULE9BQU8sSUFBSSxDQUFDNUQsVUFBVSxHQUFHLGVBQWUsR0FBRyxRQUFRO0lBQ3ZELENBQUM7SUFFRDZELFlBQVksR0FBRztNQUNYLE9BQU8sSUFBSSxDQUFDN0QsVUFBVSxHQUFHLGVBQWUsR0FBRyxVQUFVO0lBQ3pELENBQUM7SUFFRDhELFFBQVEsR0FBRztNQUNQLE9BQU8sSUFBSSxDQUFDM0QsT0FBTyxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUcsVUFBVTtJQUM5RDtFQUNKLENBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNXlCa0M7QUFDcUI7QUFDcEI7QUFHbkMsU0FBU25DLEtBQUssQ0FBQ0MsRUFBRSxFQUFFO0VBQ2pCLE9BQU8sSUFBSXRILE1BQU0sQ0FBQ3VILE9BQU8sQ0FBRUMsT0FBTyxJQUFLQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7QUFDakU7QUFFZSxTQUFTaEksT0FBTyxHQUFHO0VBQ2hDLE9BQU87SUFDTCtKLFVBQVUsRUFBRSxLQUFLO0lBQ2pCaUUsS0FBSyxFQUFFLElBQUk7SUFDWEMsS0FBSyxFQUFFLElBQUk7SUFDWEMsS0FBSyxFQUFFLElBQUk7SUFFWCxNQUFNQyxPQUFPLEdBQUc7TUFDZCxNQUFNdk8seURBQVMsQ0FBRSxHQUFFYyxNQUFNLENBQUMyTCxRQUFRLENBQUNDLE1BQU8sMkJBQTBCLENBQUMsQ0FDcEUxSSxJQUFJLENBQ0gsTUFBTUMsUUFBUSxJQUFJO1FBQ2hCLE1BQU1rRSxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pCL0MsT0FBTyxDQUFDb0osR0FBRyxDQUFDdkssUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQ21LLEtBQUssR0FBR25LLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ2tOLEtBQUs7UUFDaEMsSUFBSSxDQUFDQyxLQUFLLEdBQUdwSyxRQUFRLENBQUMvQyxJQUFJLENBQUNtTixLQUFLO1FBQ2hDLElBQUksQ0FBQ0MsS0FBSyxHQUFHckssUUFBUSxDQUFDL0MsSUFBSSxDQUFDb04sS0FBSztRQUNoQyxNQUFNRyxLQUFLLEdBQUcsSUFBSVAscURBQUssQ0FBQzVKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDbUssVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQzlFekMsSUFBSSxFQUFFLEtBQUs7VUFDWC9LLElBQUksRUFBRTtZQUNKeU4sTUFBTSxFQUFFLElBQUksQ0FBQ1AsS0FBSztZQUNsQlEsUUFBUSxFQUFFLENBQUM7Y0FDVEMsS0FBSyxFQUFFLGdCQUFnQjtjQUN2QkMsZUFBZSxFQUFFLFFBQVE7Y0FDekJDLGFBQWEsRUFBRSxHQUFHO2NBQ2xCQyxXQUFXLEVBQUUsQ0FBQztjQUNkQyxlQUFlLEVBQUUsRUFBRTtjQUNuQkMsWUFBWSxFQUFFLENBQUM7Y0FDZmhPLElBQUksRUFBRSxJQUFJLENBQUNtTjtZQUNiLENBQUMsRUFBRTtjQUNEUSxLQUFLLEVBQUUsaUJBQWlCO2NBQ3hCQyxlQUFlLEVBQUUsS0FBSztjQUN0QkMsYUFBYSxFQUFFLEdBQUc7Y0FDbEJDLFdBQVcsRUFBRSxDQUFDO2NBQ2RDLGVBQWUsRUFBRSxFQUFFO2NBQ25CQyxZQUFZLEVBQUUsQ0FBQztjQUNmaE8sSUFBSSxFQUFFLElBQUksQ0FBQ29OO1lBQ2IsQ0FBQztVQUNILENBQUM7VUFDRDVJLE9BQU8sRUFBRTtZQUNQeUosVUFBVSxFQUFFLElBQUk7WUFDaEJDLE1BQU0sRUFBRTtjQUNOdkssUUFBUSxFQUFFO1lBQ1osQ0FBQztZQUNERixLQUFLLEVBQUU7Y0FDTDBLLE9BQU8sRUFBRSxJQUFJO2NBQ2I1SSxJQUFJLEVBQUU7WUFDUixDQUFDO1lBQ0Q2SSxPQUFPLEVBQUdDLENBQUMsSUFBSztjQUNkLE1BQU1DLGNBQWMsR0FBR3JCLHFFQUFtQixDQUFDb0IsQ0FBQyxFQUFFZCxLQUFLLENBQUM7Y0FDcEQsSUFBSSxDQUFDTCxLQUFLLEdBQUdLLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQ2pDLENBQUMsQ0FBQ2tDLGdCQUFnQixDQUFDRixjQUFjLENBQUNoQyxDQUFDLENBQUM7Y0FDOUQsSUFBSSxDQUFDYSxLQUFLLEdBQUdJLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQzlCLENBQUMsQ0FBQytCLGdCQUFnQixDQUFDRixjQUFjLENBQUM3QixDQUFDLENBQUM7WUFDaEU7VUFDRjtRQUNGLENBQUMsQ0FBQztRQUVGLE9BQU9jLEtBQUs7TUFDZCxDQUFDLENBQUMsQ0FDSHZKLEtBQUssQ0FDSixNQUFNQyxLQUFLLElBQUk7UUFDYixNQUFNZ0QsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNqQixPQUFPaEQsS0FBSztNQUNoQixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RW1DO0FBQ0c7QUFDa0IsQ0FBRTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTZ0QsS0FBSyxDQUFDQyxFQUFFLEVBQUU7RUFDZixPQUFPLElBQUl0SCxNQUFNLENBQUN1SCxPQUFPLENBQUNDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFO0FBRUEsU0FBU0ksYUFBYSxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtFQUM5QyxJQUFJQyxRQUFRLEdBQUcsSUFBSUMsUUFBUSxDQUFDSCxXQUFXLENBQUM7RUFDeENFLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixFQUFFSCxZQUFZLENBQUN4RixJQUFJLENBQUM7RUFFcERsRCwwREFBVSxDQUFDeUksV0FBVyxDQUFDTyxNQUFNLEVBQUVMLFFBQVEsQ0FBQyxDQUFDM0UsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUNoRSxJQUFJZ0YsTUFBTSxHQUFHaEYsUUFBUSxDQUFDL0MsSUFBSSxDQUFDK0gsTUFBTTtJQUNqQyxJQUFJQyxvQkFBb0IsR0FBRzVFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFFLGlCQUFnQm1FLFlBQVksQ0FBQ3hGLElBQUssRUFBQyxDQUFDO0lBQ3hGLElBQUkrRixNQUFNLENBQUNsSCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZCdUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNDLFNBQVMsQ0FBQzJFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDNURELG9CQUFvQixDQUFDMUUsU0FBUyxDQUFDNEUsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM1QyxJQUFJRixvQkFBb0IsRUFBRTtRQUN4QkEsb0JBQW9CLENBQUNHLFNBQVMsR0FBRyxFQUFFO01BQ3JDO0lBQ0YsQ0FBQyxNQUFNO01BQ0wvRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsU0FBUyxDQUFDNEUsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUN6REYsb0JBQW9CLENBQUMxRSxTQUFTLENBQUMyRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQy9DRCxvQkFBb0IsQ0FBQzFFLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUMsSUFBSUYsb0JBQW9CLEVBQUU7UUFDeEIsSUFBSUksVUFBVSxHQUFHLEVBQUU7UUFDbkIsS0FBSyxJQUFJaEgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMkcsTUFBTSxDQUFDbEgsTUFBTSxFQUFFTyxDQUFDLEVBQUUsRUFBRTtVQUN0Q2dILFVBQVUsSUFBSyxHQUFFTCxNQUFNLENBQUMzRyxDQUFDLENBQUUsRUFBQztRQUM5QjtRQUNBNEcsb0JBQW9CLENBQUNHLFNBQVMsR0FBR0MsVUFBVTtNQUM3QztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFHYSxTQUFTcEosV0FBVyxHQUFHO0VBQ2xDLE9BQU87SUFDSGlLLFVBQVUsRUFBRSxLQUFLO0lBRWpCLE1BQU1zQixVQUFVLEdBQUc7TUFDZixJQUFJLENBQUN0QixVQUFVLEdBQUcsSUFBSTtNQUV0QixNQUFNMUIsV0FBVyxHQUFHLElBQUksQ0FBQ2lELEtBQUssQ0FBQ2lFLFdBQVc7TUFDMUMsTUFBTS9ELEdBQUcsR0FBR3RILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztNQUM5QyxNQUFNc0gsUUFBUSxHQUFHcEQsV0FBVyxDQUFDTyxNQUFNO01BQ25DLE1BQU0rQyxJQUFJLEdBQUd0RCxXQUFXLENBQUNsQyxPQUFPLENBQUN3RixJQUFJO01BQ3JDLElBQUk3SyxJQUFJLEdBQUcsSUFBSTBILFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO01BQ3BDQSxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBQ1ksWUFBWSxJQUFJO1FBQzNEeEgsSUFBSSxDQUFDMkgsTUFBTSxDQUFDSCxZQUFZLENBQUN4RixJQUFJLEVBQUV3RixZQUFZLENBQUNtQixLQUFLLENBQUM7TUFDdEQsQ0FBQyxDQUFDO01BRUZ6RSxPQUFPLENBQUNDLEdBQUcsQ0FBQ25FLElBQUksQ0FBQztNQUNqQjtNQUNBO01BQ0E7TUFDQTs7TUFFQTs7TUFFQTtNQUNBOztNQUdBLElBQUl1SCxXQUFXLENBQUM0RCxhQUFhLEVBQUUsRUFBRTtRQUM3QixNQUFNck0sMERBQVUsQ0FBQzZMLFFBQVEsRUFBRTNLLElBQUksRUFBRTtVQUM3QjZDLE9BQU8sRUFBRTtZQUNQLGFBQWEsRUFBRWdJO1VBQ2pCO1FBQUMsQ0FBQyxDQUFDLENBQ0YvSCxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO1VBQ3RCOztVQUVBLElBQUlBLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLElBQUl0SSxRQUFRLENBQUMvQyxJQUFJLENBQUM2RCxPQUFPLEtBQUssZ0NBQWdDLEVBQUU7WUFDdkY2RyxHQUFHLENBQUN2QyxTQUFTLEdBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDcEYsUUFBUSxDQUFDL0MsSUFBSSxDQUFDNkQsT0FBUTtBQUMvRDtBQUNBO0FBQ0EsNkJBQTZCO1lBQ0R2RSwrRUFBZ0IsQ0FBQztjQUNibUUsS0FBSyxFQUFFLHVCQUF1QjtjQUM5QkMsT0FBTyxFQUFFLElBQUk7Y0FDYkMsUUFBUSxFQUFFLFVBQVU7Y0FDcEJDLGFBQWEsRUFBRSxJQUFJO2NBQ25CQyxPQUFPLEVBQUVkLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzZEO1lBQzNCLENBQUMsQ0FBQztZQUNGb0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDYnZJLDhEQUFTLENBQUMsS0FBSyxFQUFFaU0sUUFBUSxFQUFFO2NBQUNxQixNQUFNLEVBQUMsTUFBTTtjQUFFQyxJQUFJLEVBQUM7WUFBVyxDQUFDLENBQUM7WUFDN0Q7WUFDQTtVQUNKOztVQUVBL0gsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixRQUFRLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUNpQixLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO1VBQ3RCM0UsNkVBQWMsQ0FBQztZQUNYbUUsS0FBSyxFQUFFLDBCQUEwQjtZQUNqQ0MsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUcsNkJBQTRCSSxLQUFNO1VBQ2hELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUNGO1FBQ0E7UUFDQTs7UUFFSixJQUFJLENBQUNnRixVQUFVLEdBQUcsS0FBSztNQUMzQixDQUFDLE1BQU07UUFDSDNKLDZFQUFjLENBQUM7VUFDWG1FLEtBQUssRUFBRSwwQkFBMEI7VUFDakNDLE9BQU8sRUFBRSxJQUFJO1VBQ2JDLFFBQVEsRUFBRSxVQUFVO1VBQ3BCQyxhQUFhLEVBQUUsSUFBSTtVQUNuQkMsT0FBTyxFQUFHLHlFQUF3RTBELFdBQVcsQ0FBQ29GLGNBQWMsRUFBRztRQUNuSCxDQUFDLENBQUM7UUFDRjFGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDZ0MsVUFBVSxHQUFHLEtBQUs7UUFDdkJ2Syw4REFBUyxDQUFDLEtBQUssRUFBRWlNLFFBQVEsRUFBRTtVQUFDcUIsTUFBTSxFQUFDLE1BQU07VUFBRUMsSUFBSSxFQUFDO1FBQVcsQ0FBQyxDQUFDO01BQ2pFO0lBRUosQ0FBQztJQUVELE1BQU1kLGFBQWEsR0FBRztNQUNsQixNQUFNNUQsV0FBVyxHQUFHLElBQUksQ0FBQ2lELEtBQUssQ0FBQ2lFLFdBQVc7TUFDMUNsSCxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBQ1ksWUFBWSxJQUFJO1FBQzNEQSxZQUFZLENBQUM3QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUyQixLQUFLLElBQUk7VUFDN0NwQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ21DLEtBQUssQ0FBQztVQUNsQmdCLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLENBQUM7UUFDNUMsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEcUYsVUFBVSxHQUFHO01BQ1QsT0FBTyxJQUFJLENBQUM1RCxVQUFVLEdBQUcsZUFBZSxHQUFHLFFBQVE7SUFDdkQ7RUFDSixDQUFDO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Sm1DO0FBQ3FCLENBQUM7QUFDWDtBQUU5QyxTQUFTaEMsS0FBSyxDQUFDQyxFQUFFLEVBQUU7RUFDakIsT0FBTyxJQUFJdEgsTUFBTSxDQUFDdUgsT0FBTyxDQUFFQyxPQUFPLElBQUtDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFLENBQUMsQ0FBQztBQUNqRTtBQUVlLFNBQVNqSSxrQkFBa0IsR0FBRztFQUMzQyxPQUFPO0lBQ0wwUCxPQUFPLEVBQUUsS0FBSztJQUNkQyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsWUFBWSxFQUFFLEtBQUs7SUFDbkJDLGdCQUFnQixFQUFFLEtBQUs7SUFDdkJDLGtCQUFrQixFQUFFLEtBQUs7SUFDekJDLGdCQUFnQixFQUFFLEtBQUs7SUFFdkIsTUFBTUMsWUFBWSxDQUFDQyxJQUFJLEVBQUU7TUFDdkIsSUFBSSxDQUFDUCxPQUFPLEdBQUcsSUFBSTtNQUNuQixNQUFNN1AseURBQ0EsQ0FBRSxHQUFFYyxNQUFNLENBQUMyTCxRQUFRLENBQUNDLE1BQU8sNkJBQTRCMEQsSUFBSyxHQUFFLENBQUMsQ0FDbEVwTSxJQUFJLENBQUMsTUFBT0MsUUFBUSxJQUFLO1FBQ3hCLE1BQU1rRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUNFbEUsUUFBUSxDQUFDL0MsSUFBSSxDQUFDbVAsTUFBTSxJQUNwQnBNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ29QLEVBQUUsSUFDaEJyTSxRQUFRLENBQUMvQyxJQUFJLENBQUNxUCxLQUFLLElBQ25CdE0sUUFBUSxDQUFDL0MsSUFBSSxDQUFDc1AsR0FBRyxFQUNqQjtVQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJYiwyREFBVyxFQUFFO1VBQ2pDLE1BQU1hLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDO1lBQzNCQyxHQUFHLEVBQUUxTSxRQUFRLENBQUMvQyxJQUFJLENBQUNvUCxFQUFFO1lBQ3JCO1lBQ0FDLEtBQUssRUFBRXRNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3FQLEtBQUs7WUFDMUJGLE1BQU0sRUFBRXBNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ21QLE1BQU0sR0FBRyxHQUFHO1lBQ2xDTyxRQUFRLEVBQUUsS0FBSztZQUNmSixHQUFHLEVBQUV2TSxRQUFRLENBQUMvQyxJQUFJLENBQUNzUCxHQUFHO1lBQ3RCSyxTQUFTLEVBQUUsTUFBT0MsR0FBRyxJQUFLO2NBQ3hCMUwsT0FBTyxDQUFDb0osR0FBRyxDQUFDc0MsR0FBRyxDQUFDO2NBRWhCLE1BQU05USx5REFDQSxDQUNELEVBQUUsR0FBRWMsTUFBTSxDQUFDMkwsUUFBUSxDQUFDQyxNQUFPLDhCQUE2Qm9FLEdBQUcsQ0FBQ0MsU0FBVSxJQUFHRCxHQUFHLENBQUN2RSxNQUFPLEdBQUcsRUFBQyxDQUMxRixDQUNBdkksSUFBSSxDQUFDLE1BQU9DLFFBQVEsSUFBSztnQkFDeEIsTUFBTXpELDRFQUFhLENBQUM7a0JBQ2xCbUUsS0FBSyxFQUFFVixRQUFRLENBQUMvQyxJQUFJLENBQUN5RCxLQUFLO2tCQUMxQkMsT0FBTyxFQUFFLElBQUk7a0JBQ2JDLFFBQVEsRUFBRSxVQUFVO2tCQUNwQkMsYUFBYSxFQUFFLElBQUk7a0JBQ25CQyxPQUFPLEVBQUVkLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzZEO2dCQUN6QixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDOEssT0FBTyxHQUFHLEtBQUs7Z0JBQ3BCLE1BQU0xSCxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJbEUsUUFBUSxDQUFDL0MsSUFBSSxDQUFDa1AsSUFBSSxJQUFJVSxHQUFHLENBQUMvTCxPQUFPLEtBQUssVUFBVSxFQUFFO2tCQUNwRCxPQUFPakUsTUFBTSxDQUFDMkwsUUFBUSxDQUFDeEssT0FBTyxDQUMzQixHQUFFbkIsTUFBTSxDQUFDMkwsUUFBUSxDQUFDQyxNQUFPLDJCQUEwQnpJLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ2tQLElBQUssR0FBRSxDQUMxRTtnQkFDSDtjQUNGLENBQUMsQ0FBQztZQUNOLENBQUM7WUFDRFksUUFBUSxFQUFFLGtCQUFrQjtjQUMxQixNQUFNeFEsNEVBQWEsQ0FBQztnQkFDbEJtRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQkMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLFFBQVEsRUFBRSxVQUFVO2dCQUNwQkMsYUFBYSxFQUFFLElBQUk7Z0JBQ25CQyxPQUFPLEVBQ0w7Y0FDSixDQUFDLENBQUM7Y0FDRixPQUFPakUsTUFBTSxDQUFDMkwsUUFBUSxDQUFDd0UsTUFBTSxFQUFFO1lBQ2pDO1VBQ0YsQ0FBQyxDQUFDO1VBQ0YsSUFBSSxDQUFDcEIsT0FBTyxHQUFHLEtBQUs7UUFDdEI7TUFDRixDQUFDLENBQUMsQ0FDRDNLLEtBQUssQ0FBQyxNQUFPQyxLQUFLLElBQUs7UUFDdEIsSUFBSUEsS0FBSyxDQUFDbEIsUUFBUSxJQUFJa0IsS0FBSyxDQUFDbEIsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsRUFBRTtVQUNuRCxNQUFNL0wsNkVBQWMsQ0FBQztZQUNuQm1FLEtBQUssRUFBRVEsS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDeUQsS0FBSztZQUNoQ0MsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzZEO1VBQy9CLENBQUMsQ0FBQztRQUNKO1FBRUEsTUFBTXZFLDZFQUFjLENBQUM7VUFDbkJtRSxLQUFLLEVBQUUsWUFBWTtVQUNuQkMsT0FBTyxFQUFFLElBQUk7VUFDYkMsUUFBUSxFQUFFLFVBQVU7VUFDcEJDLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ0o7UUFDakIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDOEssT0FBTyxHQUFHLEtBQUs7UUFDcEIsTUFBTTFILEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDakIsT0FBT3JILE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3dFLE1BQU0sRUFBRTtNQUNqQyxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNwQixPQUFPLEdBQUcsS0FBSztJQUN4QixDQUFDO0lBRURxQixZQUFZLEdBQUc7TUFDYixJQUFJQyxhQUFhLEdBQUcsSUFBSSxDQUFDekYsS0FBSyxDQUFDMEYsYUFBYSxDQUFDL0gsU0FBUztNQUN0RCxJQUFJZ0ksZ0JBQWdCLEdBQUcvTSxRQUFRLENBQUM0QixJQUFJLENBQUNtRCxTQUFTO01BRTlDL0UsUUFBUSxDQUFDNEIsSUFBSSxDQUFDbUQsU0FBUyxHQUFHOEgsYUFBYTtNQUN2Q3JRLE1BQU0sQ0FBQ3dRLEtBQUssRUFBRTtNQUNkaE4sUUFBUSxDQUFDNEIsSUFBSSxDQUFDbUQsU0FBUyxHQUFHZ0ksZ0JBQWdCO0lBQzVDO0VBQ0YsQ0FBQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdtQztBQUNxQixDQUFDO0FBQ1g7QUFFOUMsU0FBU2xKLEtBQUssQ0FBQ0MsRUFBRSxFQUFFO0VBQ2pCLE9BQU8sSUFBSXRILE1BQU0sQ0FBQ3VILE9BQU8sQ0FBRUMsT0FBTyxJQUFLQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7QUFDakU7QUFJZSxTQUFTeEgsWUFBWSxHQUFHO0VBQ3JDLE9BQU87SUFDTGlQLE9BQU8sRUFBRSxLQUFLO0lBQ2RoRSxRQUFRLEVBQUUsSUFBSTtJQUNkMEYsU0FBUyxFQUFFLElBQUk7SUFDZkMsWUFBWSxFQUFFLElBQUk7SUFDbEJDLFlBQVksRUFBRSxJQUFJO0lBQ2xCckgsSUFBSSxFQUFFLENBQUM7SUFDUHNILFNBQVMsRUFBRSxJQUFJO0lBQ2ZwSCxPQUFPLEVBQUUsSUFBSTtJQUNiM0IsUUFBUSxFQUFFO01BQ05nSixPQUFPLEVBQUUsRUFBRTtNQUNYQyxjQUFjLEVBQUUsRUFBRTtNQUNsQkMsYUFBYSxFQUFFLEVBQUU7TUFDakJ4QixNQUFNLEVBQUUsQ0FBQztNQUNUeUIsWUFBWSxFQUFFLEVBQUU7TUFFaEJDLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLFlBQVksRUFBRSxFQUFFO01BQ2hCQyxZQUFZLEVBQUUsRUFBRTtNQUNoQkMsY0FBYyxFQUFFLEVBQUU7TUFFbEJDLEtBQUssRUFBRSxFQUFFO01BQ1RDLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLGFBQWEsRUFBRSxFQUFFO01BRWpCQyxlQUFlLEVBQUUsRUFBRTtNQUNuQkMscUJBQXFCLEVBQUU7SUFDM0IsQ0FBQztJQUVEckgsSUFBSSxHQUFHO01BQ0wsSUFBSSxJQUFJLENBQUNiLE9BQU8sRUFBRTtRQUNoQixJQUFHLElBQUksQ0FBQzNCLFFBQVEsQ0FBQ2dKLE9BQU8sQ0FBQzVQLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDNEcsUUFBUSxDQUFDbUosWUFBWSxDQUFDL1AsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM0RyxRQUFRLENBQUNpSixjQUFjLENBQUM3UCxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQzRHLFFBQVEsQ0FBQ2tKLGFBQWEsQ0FBQzlQLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDNEcsUUFBUSxDQUFDMEgsTUFBTSxHQUFHLEdBQUcsRUFBQztVQUM5TCxJQUFJLENBQUNqRyxJQUFJLEVBQUU7UUFDYjtNQUNGLENBQUMsTUFBTTtRQUNMLElBQUcsSUFBSSxDQUFDekIsUUFBUSxDQUFDZ0osT0FBTyxDQUFDNVAsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM0RyxRQUFRLENBQUNtSixZQUFZLENBQUMvUCxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQzRHLFFBQVEsQ0FBQ2tKLGFBQWEsQ0FBQzlQLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDNEcsUUFBUSxDQUFDMEgsTUFBTSxHQUFHLEdBQUcsRUFBQztVQUNuSixJQUFJLENBQUNqRyxJQUFJLEVBQUU7UUFDYixDQUFDLE1BQU07VUFDTDVKLDZFQUFjLENBQUM7WUFDYm1FLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxRQUFRLEVBQUUsVUFBVTtZQUNwQkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLE9BQU8sRUFBRTtVQUNYLENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFDRixDQUFDO0lBRUQwTixLQUFLLEdBQUc7TUFDTixJQUFHLElBQUksQ0FBQzlKLFFBQVEsQ0FBQ29KLE1BQU0sQ0FBQ2hRLE1BQU0sR0FBRyxDQUFDLElBQUssSUFBSSxDQUFDNEcsUUFBUSxDQUFDcUosWUFBWSxDQUFDalEsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM0RyxRQUFRLENBQUNzSixZQUFZLENBQUNsUSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQzRHLFFBQVEsQ0FBQ3VKLGNBQWMsQ0FBQ25RLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDL0osSUFBSSxDQUFDcUksSUFBSSxFQUFFO01BQ2I7TUFDQTtJQUNGLENBQUM7SUFFRHNJLEtBQUssR0FBRztNQUNOLElBQUcsSUFBSSxDQUFDL0osUUFBUSxDQUFDd0osS0FBSyxDQUFDcFEsTUFBTSxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUM0RyxRQUFRLENBQUN5SixXQUFXLENBQUNyUSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQzRHLFFBQVEsQ0FBQzBKLFdBQVcsQ0FBQ3RRLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDNEcsUUFBUSxDQUFDMkosYUFBYSxDQUFDdlEsTUFBTSxHQUFHLENBQUMsRUFBQztRQUMzSixJQUFJLENBQUNxSSxJQUFJLEVBQUU7TUFDYixDQUFDLE1BQU07UUFDTDVKLDZFQUFjLENBQUM7VUFDYm1FLEtBQUssRUFBRSxZQUFZO1VBQ25CQyxPQUFPLEVBQUUsSUFBSTtVQUNiQyxRQUFRLEVBQUUsVUFBVTtVQUNwQkMsYUFBYSxFQUFFLElBQUk7VUFDbkJDLE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQztJQUVENE4sS0FBSyxHQUFHO01BQ04sSUFBSUMsU0FBUyxHQUFHOVIsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUNjLFVBQVUsRUFBRTtNQUM1RWhILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdU4sU0FBUyxDQUFDO01BQ3RCeE4sT0FBTyxDQUFDQyxHQUFHLENBQUN2RSxNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2MsVUFBVSxFQUFFLENBQUM7TUFDekUsSUFBR3dHLFNBQVMsQ0FBQzdRLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDdEIsSUFBSSxDQUFDcUksSUFBSSxFQUFFO01BQ2IsQ0FBQyxNQUFNO1FBQ0w1Siw2RUFBYyxDQUFDO1VBQ2JtRSxLQUFLLEVBQUUsWUFBWTtVQUNuQkMsT0FBTyxFQUFFLElBQUk7VUFDYkMsUUFBUSxFQUFFLFVBQVU7VUFDcEJDLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUM7TUFDSjtJQUNGLENBQUM7SUFHRDhOLElBQUksR0FBRztNQUNMLElBQUksQ0FBQ3pJLElBQUksRUFBRTtJQUNiLENBQUM7SUFHRCxNQUFNNUIsYUFBYSxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRW1FLEVBQUUsRUFBRTtNQUNqRCxJQUFJM0wsSUFBSSxHQUFHLElBQUkwSCxRQUFRLENBQUNILFdBQVcsQ0FBQztNQUNwQyxJQUFJQyxZQUFZLENBQUN1RCxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQ3BDLElBQUlDLFFBQVEsR0FBR3hELFlBQVksQ0FBQzhDLEVBQUU7UUFDOUJ0SyxJQUFJLENBQUMySCxNQUFNLENBQ1AsZ0JBQWdCLEVBQ2xCL0gsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQ2pEO01BQ0gsQ0FBQyxNQUFNO1FBQ0hsTCxJQUFJLENBQUMySCxNQUFNLENBQUMsZ0JBQWdCLEVBQUVILFlBQVksQ0FBQ3hGLElBQUksQ0FBQztNQUNwRDtNQUdBLE1BQU1sRCwwREFBVSxDQUFDeUksV0FBVyxDQUFDTyxNQUFNLEVBQUU5SCxJQUFJLENBQUMsQ0FDekM4QyxJQUFJLENBQUMsZ0JBQWdCQyxRQUFRLEVBQUU7UUFDOUIsSUFBSWdGLE1BQU0sR0FBR2hGLFFBQVEsQ0FBQy9DLElBQUksQ0FBQytILE1BQU07UUFDakMsSUFBSUMsb0JBQW9CLEdBQUc1RSxRQUFRLENBQUNDLGNBQWMsQ0FDL0MsaUJBQWdCbUUsWUFBWSxDQUFDeEYsSUFBSyxFQUFDLENBQ3JDO1FBR0QsSUFBSStGLE1BQU0sQ0FBQ2xILE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDdkI4SyxFQUFFLEdBQUcsS0FBSztVQUNWekgsT0FBTyxDQUFDQyxHQUFHLENBQUN3SCxFQUFFLENBQUM7VUFDZjNELG9CQUFvQixDQUFDMUUsU0FBUyxDQUFDNEUsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUM1QyxJQUFJRixvQkFBb0IsRUFBRTtZQUN4QkEsb0JBQW9CLENBQUNHLFNBQVMsR0FBRyxFQUFFO1VBQ3JDO1FBQ0YsQ0FBQyxNQUFNO1VBQ0x3RCxFQUFFLEdBQUcsSUFBSTtVQUNUekgsT0FBTyxDQUFDQyxHQUFHLENBQUN3SCxFQUFFLENBQUM7VUFDZjNELG9CQUFvQixDQUFDMUUsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLFFBQVEsQ0FBQztVQUMvQ0Qsb0JBQW9CLENBQUMxRSxTQUFTLENBQUM0RSxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQzFDLElBQUlGLG9CQUFvQixFQUFFO1lBQ3hCLElBQUlJLFVBQVUsR0FBRyxFQUFFO1lBQ25CLEtBQUssSUFBSWhILENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJHLE1BQU0sQ0FBQ2xILE1BQU0sRUFBRU8sQ0FBQyxFQUFFLEVBQUU7Y0FDdENnSCxVQUFVLElBQUssR0FBRUwsTUFBTSxDQUFDM0csQ0FBQyxDQUFFLEVBQUM7WUFDOUI7WUFDQTRHLG9CQUFvQixDQUFDRyxTQUFTLEdBQUdDLFVBQVU7VUFDN0M7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ29JLFNBQVMsR0FBRzdFLEVBQUU7TUFDbkJ6SCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3dILEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTVksY0FBYyxHQUFHO01BQ3JCLElBQUltRixTQUFTLEdBQUc5UixNQUFNLENBQUNxTCxNQUFNLENBQUM1TCxPQUFPLENBQUMrSyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2MsVUFBVSxFQUFFO01BQ2xGLElBQUd3RyxTQUFTLENBQUM3USxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ3RCLElBQUksQ0FBQzhOLE9BQU8sR0FBRyxJQUFJO1FBRW5CLE1BQU1wSCxXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO1FBQ25DLE1BQU0zQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtRQUNqQyxNQUFNK0MsSUFBSSxHQUFHdEQsV0FBVyxDQUFDbEMsT0FBTyxDQUFDd0YsSUFBSTtRQUNyQyxJQUFJN0ssSUFBSSxHQUFHLElBQUkwSCxRQUFRLENBQUNILFdBQVcsQ0FBQztRQUdwQ0EsV0FBVyxDQUFDdUQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUNsRSxPQUFPLENBQUVZLFlBQVksSUFBSztVQUMvRCxJQUFJQSxZQUFZLENBQUN1RCxJQUFJLEtBQUssVUFBVSxJQUFJdkQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNuRS9LLElBQUksQ0FBQzJILE1BQU0sQ0FBQ0gsWUFBWSxDQUFDeEYsSUFBSSxFQUFFd0YsWUFBWSxDQUFDbUIsS0FBSyxDQUFDO1VBQ3REO1VBRUEsSUFBSW5CLFlBQVksQ0FBQ3VELElBQUksS0FBSyxVQUFVLEVBQUU7WUFDcEMsSUFBSUMsUUFBUSxHQUFHeEQsWUFBWSxDQUFDOEMsRUFBRTtZQUM5QnBHLE9BQU8sQ0FBQ0MsR0FBRyxDQUNULG9CQUFvQixFQUNwQnZFLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQzVMLE9BQU8sQ0FBQytLLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDLENBQUNFLFVBQVUsRUFBRSxDQUNqRDtZQUNEbEwsSUFBSSxDQUFDMkgsTUFBTSxDQUNUSCxZQUFZLENBQUN4RixJQUFJLEVBQ2pCcEMsTUFBTSxDQUFDcUwsTUFBTSxDQUFDNUwsT0FBTyxDQUFDK0ssR0FBRyxDQUFDWSxRQUFRLENBQUMsQ0FBQ0UsVUFBVSxFQUFFLENBQ2pEO1VBQ0g7VUFFQSxJQUFJMUQsWUFBWSxDQUFDdUQsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqQyxJQUFHdkQsWUFBWSxDQUFDeEYsSUFBSSxLQUFLLFNBQVMsRUFBQztjQUNqQ2tDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ3NELFFBQVEsQ0FBQ2dKLE9BQU8sQ0FBQztjQUNsQ3pRLElBQUksQ0FBQzJILE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDRixRQUFRLENBQUNnSixPQUFPLENBQUM7WUFDL0M7WUFDQSxJQUFHakosWUFBWSxDQUFDeEYsSUFBSSxLQUFLLGVBQWUsRUFBQztjQUN2Q2tDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ3NELFFBQVEsQ0FBQ2tKLGFBQWEsQ0FBQztjQUN4QzNRLElBQUksQ0FBQzJILE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDRixRQUFRLENBQUNrSixhQUFhLENBQUM7WUFDM0Q7VUFDRjtRQUNGLENBQUMsQ0FBQztRQUVGek0sT0FBTyxDQUFDb0osR0FBRyxDQUFDdE4sSUFBSSxDQUFDO1FBRWpCLE1BQU1sQiwwREFDRCxDQUFDZ0osTUFBTSxFQUFFOUgsSUFBSSxFQUFFO1VBQ2xCNkMsT0FBTyxFQUFFO1lBQ1AsYUFBYSxFQUFFZ0k7VUFDakI7UUFDRixDQUFDLENBQUMsQ0FDRC9ILElBQUksQ0FBQyxnQkFBZ0JDLFFBQVEsRUFBRTtVQUM5QixJQUFJQSxRQUFRLENBQUNzSSxNQUFNLEtBQUssR0FBRyxJQUFJdEksUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN0RCxNQUFNL0wsK0VBQWdCLENBQUM7Y0FDckJtRSxLQUFLLEVBQUVWLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7Y0FDMUJDLE9BQU8sRUFBRSxJQUFJO2NBQ2JDLFFBQVEsRUFBRSxVQUFVO2NBQ3BCQyxhQUFhLEVBQUUsSUFBSTtjQUNuQkMsT0FBTyxFQUFFZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtZQUN6QixDQUFDLENBQUM7VUFDSjtVQUNBLElBQUlkLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ21QLE1BQU0sSUFBSXBNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ29QLEVBQUUsSUFBSXJNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3FQLEtBQUssSUFBSXRNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3NQLEdBQUcsRUFBRTtZQUN4RixNQUFNQyxPQUFPLEdBQUcsSUFBSWIsMkRBQVcsRUFBRTtZQUNqQyxNQUFNYSxPQUFPLENBQUNDLGNBQWMsQ0FBQztjQUMzQkMsR0FBRyxFQUFFMU0sUUFBUSxDQUFDL0MsSUFBSSxDQUFDb1AsRUFBRTtjQUNyQjtjQUNBQyxLQUFLLEVBQUV0TSxRQUFRLENBQUMvQyxJQUFJLENBQUNxUCxLQUFLO2NBQzFCRixNQUFNLEVBQUVwTSxRQUFRLENBQUMvQyxJQUFJLENBQUNtUCxNQUFNLEdBQUcsR0FBRztjQUNsQ08sUUFBUSxFQUFFLEtBQUs7Y0FDZkosR0FBRyxFQUFFdk0sUUFBUSxDQUFDL0MsSUFBSSxDQUFDc1AsR0FBRztjQUN0QkssU0FBUyxFQUFFLE1BQU9DLEdBQUcsSUFBSztnQkFDeEIxTCxPQUFPLENBQUNvSixHQUFHLENBQUNzQyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU1nQyxHQUFHLEdBQUksR0FBRWhTLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsTUFBTyw4QkFBNkJvRSxHQUFHLENBQUNDLFNBQVUsSUFBR0QsR0FBRyxDQUFDdkUsTUFBTyxHQUFFO2dCQUNqRyxNQUFNdk0seURBQVMsQ0FBQzhTLEdBQUcsQ0FBQyxDQUNuQjlPLElBQUksQ0FBQyxNQUFPQyxRQUFRLElBQUs7a0JBQ3hCLE1BQU16RCw0RUFBYSxDQUFDO29CQUNsQm1FLEtBQUssRUFBRVYsUUFBUSxDQUFDL0MsSUFBSSxDQUFDeUQsS0FBSztvQkFDMUJDLE9BQU8sRUFBRSxJQUFJO29CQUNiQyxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLGFBQWEsRUFBRSxJQUFJO29CQUNuQkMsT0FBTyxFQUFFZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtrQkFDekIsQ0FBQyxDQUFDO2tCQUNGLE1BQU1vRCxLQUFLLENBQUMsSUFBSSxDQUFDO2tCQUNqQixJQUFJbEUsUUFBUSxDQUFDL0MsSUFBSSxDQUFDa1AsSUFBSSxJQUFJVSxHQUFHLENBQUMvTCxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNwRCxPQUFPakUsTUFBTSxDQUFDMkwsUUFBUSxDQUFDeEssT0FBTyxDQUFFLEdBQUVuQixNQUFNLENBQUMyTCxRQUFRLENBQUNDLE1BQU8sMkJBQTBCekksUUFBUSxDQUFDL0MsSUFBSSxDQUFDa1AsSUFBSyxHQUFFLENBQUM7a0JBQzNHO2dCQUNGLENBQUMsQ0FBQztjQUNKLENBQUM7Y0FDRFksUUFBUSxFQUFFLGtCQUFpQjtnQkFDekIsTUFBTXhRLDRFQUFhLENBQUM7a0JBQ2xCbUUsS0FBSyxFQUFFLG9CQUFvQjtrQkFDM0JDLE9BQU8sRUFBRSxJQUFJO2tCQUNiQyxRQUFRLEVBQUUsVUFBVTtrQkFDcEJDLGFBQWEsRUFBRSxJQUFJO2tCQUNuQkMsT0FBTyxFQUFFO2dCQUNYLENBQUMsQ0FBQztnQkFDRixPQUFPakUsTUFBTSxDQUFDMkwsUUFBUSxDQUFDd0UsTUFBTSxFQUFFO2NBQ2pDO1lBQ0YsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxNQUFNLElBQUloTixRQUFRLENBQUMvQyxJQUFJLENBQUNrUCxJQUFJLEVBQUU7WUFDM0IsT0FBT3RQLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3hLLE9BQU8sQ0FBRSxHQUFFbkIsTUFBTSxDQUFDMkwsUUFBUSxDQUFDQyxNQUFPLDJCQUEwQnpJLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ2tQLElBQUssR0FBRSxDQUFDO1VBQzdHO1FBQ0YsQ0FBQyxDQUFDLENBQ0RsTCxLQUFLLENBQUMsZ0JBQWdCQyxLQUFLLEVBQUU7VUFDNUIsSUFBSUEsS0FBSyxDQUFDbEIsUUFBUSxJQUFJa0IsS0FBSyxDQUFDbEIsUUFBUSxDQUFDc0ksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUNuRCxNQUFNL0wsNkVBQWMsQ0FBQztjQUNuQm1FLEtBQUssRUFBRVEsS0FBSyxDQUFDbEIsUUFBUSxDQUFDL0MsSUFBSSxDQUFDeUQsS0FBSztjQUNoQ0MsT0FBTyxFQUFFLElBQUk7Y0FDYkMsUUFBUSxFQUFFLFVBQVU7Y0FDcEJDLGFBQWEsRUFBRSxJQUFJO2NBQ25CQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQzZEO1lBQy9CLENBQUMsQ0FBQztVQUNKO1VBRUEsTUFBTXZFLDZFQUFjLENBQUM7WUFDbkJtRSxLQUFLLEVBQUUsWUFBWTtZQUNuQkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsUUFBUSxFQUFFLFVBQVU7WUFDcEJDLGFBQWEsRUFBRSxJQUFJO1lBQ25CQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ0o7VUFDakIsQ0FBQyxDQUFDO1VBQ0YsTUFBTW9ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ25CLE9BQU8sQ0FBQztRQUNWLENBQUMsQ0FBQzs7UUFFRixJQUFJLENBQUMwSCxPQUFPLEdBQUcsS0FBSztNQUV0QixDQUFDLE1BQU07UUFDTCxNQUFNclAsNkVBQWMsQ0FBQztVQUNuQm1FLEtBQUssRUFBRSxZQUFZO1VBQ25CQyxPQUFPLEVBQUUsSUFBSTtVQUNiQyxRQUFRLEVBQUUsVUFBVTtVQUNwQkMsYUFBYSxFQUFFLElBQUk7VUFDbkJDLE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQztNQUNKO0lBRUYsQ0FBQztJQUVELE1BQU1vTCxZQUFZLENBQUNLLEdBQUcsRUFBRTtNQUN0QixJQUFJLENBQUNYLE9BQU8sR0FBRyxJQUFJO01BQ25CLE1BQU03UCx5REFBUyxDQUFFLEdBQUVjLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsTUFBTyw2QkFBNEI4RCxHQUFJLEdBQUUsQ0FBQyxDQUFDeE0sSUFBSSxDQUFDLE1BQU9DLFFBQVEsSUFBSztRQUNyRyxNQUFNa0UsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSWxFLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ21QLE1BQU0sSUFBSXBNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ29QLEVBQUUsSUFBSXJNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3FQLEtBQUssSUFBSXRNLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3NQLEdBQUcsRUFBRTtVQUN4RixNQUFNQyxPQUFPLEdBQUcsSUFBSWIsMkRBQVcsRUFBRTtVQUNqQyxNQUFNYSxPQUFPLENBQUNDLGNBQWMsQ0FBQztZQUMzQkMsR0FBRyxFQUFFMU0sUUFBUSxDQUFDL0MsSUFBSSxDQUFDb1AsRUFBRTtZQUNyQjtZQUNBQyxLQUFLLEVBQUV0TSxRQUFRLENBQUMvQyxJQUFJLENBQUNxUCxLQUFLO1lBQzFCRixNQUFNLEVBQUVwTSxRQUFRLENBQUMvQyxJQUFJLENBQUNtUCxNQUFNLEdBQUcsR0FBRztZQUNsQ08sUUFBUSxFQUFFLEtBQUs7WUFDZkosR0FBRyxFQUFFdk0sUUFBUSxDQUFDL0MsSUFBSSxDQUFDc1AsR0FBRztZQUN0QkssU0FBUyxFQUFFLE1BQU9DLEdBQUcsSUFBSztjQUN4QjFMLE9BQU8sQ0FBQ29KLEdBQUcsQ0FBQ3NDLEdBQUcsQ0FBQztjQUVoQixNQUFNOVEseURBQVMsQ0FBRSxFQUFFLEdBQUVjLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsTUFBTyw4QkFBNkJvRSxHQUFHLENBQUNDLFNBQVUsSUFBR0QsR0FBRyxDQUFDdkUsTUFBTyxHQUFHLEVBQUMsQ0FBQyxDQUN6R3ZJLElBQUksQ0FBQyxNQUFPQyxRQUFRLElBQUs7Z0JBQ3hCLE1BQU16RCw0RUFBYSxDQUFDO2tCQUNsQm1FLEtBQUssRUFBRVYsUUFBUSxDQUFDL0MsSUFBSSxDQUFDeUQsS0FBSztrQkFDMUJDLE9BQU8sRUFBRSxJQUFJO2tCQUNiQyxRQUFRLEVBQUUsVUFBVTtrQkFDcEJDLGFBQWEsRUFBRSxJQUFJO2tCQUNuQkMsT0FBTyxFQUFFZCxRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtnQkFDekIsQ0FBQyxDQUFDO2dCQUNGLE1BQU1vRCxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJbEUsUUFBUSxDQUFDL0MsSUFBSSxDQUFDa1AsSUFBSSxFQUFFO2tCQUN0QixPQUFPLE1BQU10UCxNQUFNLENBQUMyTCxRQUFRLENBQUN4SyxPQUFPLENBQUUsR0FBRW5CLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsTUFBTywyQkFBMEJ6SSxRQUFRLENBQUMvQyxJQUFJLENBQUNrUCxJQUFLLEdBQUUsQ0FBQztnQkFDakg7Y0FDRixDQUFDLENBQUM7WUFDSixDQUFDO1lBQ0RZLFFBQVEsRUFBRSxrQkFBaUI7Y0FDekIsTUFBTXhRLDRFQUFhLENBQUM7Z0JBQ2xCbUUsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0JDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxRQUFRLEVBQUUsVUFBVTtnQkFDcEJDLGFBQWEsRUFBRSxJQUFJO2dCQUNuQkMsT0FBTyxFQUFFO2NBQ1gsQ0FBQyxDQUFDO2NBQ0YsT0FBT2pFLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3dFLE1BQU0sRUFBRTtZQUNqQztVQUNGLENBQUMsQ0FBQztRQUNKO1FBRUEsSUFBSSxDQUFDcEIsT0FBTyxHQUFHLEtBQUs7TUFDdEIsQ0FBQyxDQUFDLENBQUMzSyxLQUFLLENBQUMsTUFBT0MsS0FBSyxJQUFLO1FBQ3hCLElBQUlBLEtBQUssQ0FBQ2xCLFFBQVEsSUFBSWtCLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQ3NJLE1BQU0sS0FBSyxHQUFHLEVBQUU7VUFDbkQsTUFBTS9MLDZFQUFjLENBQUM7WUFDbkJtRSxLQUFLLEVBQUVRLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQy9DLElBQUksQ0FBQ3lELEtBQUs7WUFDaENDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxhQUFhLEVBQUUsSUFBSTtZQUNuQkMsT0FBTyxFQUFFSSxLQUFLLENBQUNsQixRQUFRLENBQUMvQyxJQUFJLENBQUM2RDtVQUMvQixDQUFDLENBQUM7UUFDSjtRQUVBLE1BQU12RSw2RUFBYyxDQUFDO1VBQ25CbUUsS0FBSyxFQUFFLFlBQVk7VUFDbkJDLE9BQU8sRUFBRSxJQUFJO1VBQ2JDLFFBQVEsRUFBRSxVQUFVO1VBQ3BCQyxhQUFhLEVBQUUsSUFBSTtVQUNuQkMsT0FBTyxFQUFFSSxLQUFLLENBQUNKO1FBQ2pCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQzhLLE9BQU8sR0FBRyxLQUFLO1FBQ3BCLE1BQU0xSCxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pCLE9BQU9ySCxNQUFNLENBQUMyTCxRQUFRLENBQUN3RSxNQUFNLEVBQUU7TUFDakMsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDcEIsT0FBTyxHQUFHLEtBQUs7SUFDdEIsQ0FBQztJQUVELE1BQU1rRCxPQUFPLEdBQUc7TUFDZGpTLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ3dFLE1BQU0sRUFBRTtJQUMxQixDQUFDO0lBRUQrQixPQUFPLENBQUN6QyxLQUFLLEVBQUU7TUFDWCxJQUFJMEMsRUFBRSxHQUFHLGNBQWM7TUFDdkIsT0FBT0EsRUFBRSxDQUFDQyxJQUFJLENBQUMzQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVENEMsT0FBTyxDQUFDdEcsRUFBRSxFQUFFO01BQ1IsSUFBSUEsRUFBRSxDQUFDOUssTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNmLE9BQU8sSUFBSTtNQUNmLENBQUMsTUFBTTtRQUNILE9BQU8sS0FBSztNQUNoQjtJQUNKLENBQUM7SUFFRHFKLFFBQVEsR0FBRztNQUNULElBQUksQ0FBQ3lFLE9BQU8sR0FBRyxJQUFJO01BQ25CMUgsS0FBSyxDQUFDLElBQUksQ0FBQztNQUNYLElBQUksQ0FBQ2lDLElBQUksRUFBRztNQUNaLElBQUk5RixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRTtRQUM1QyxNQUFNNk8sUUFBUSxHQUFHOU8sUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNzRixLQUFLO1FBQy9ELElBQUksQ0FBQ1MsT0FBTyxHQUFHOEksUUFBUTtNQUN6QjtNQUNBLElBQUksQ0FBQ3ZELE9BQU8sR0FBRyxLQUFLO0lBQ3RCLENBQUM7SUFFRHhELGFBQWEsR0FBRztNQUNkLElBQUksQ0FBQ3FGLFNBQVMsR0FBRyxJQUFJO01BQ3JCLElBQUksQ0FBQzdCLE9BQU8sR0FBRyxLQUFLO01BQ3BCLE1BQU1wSCxXQUFXLEdBQUcsSUFBSSxDQUFDaUQsS0FBSyxDQUFDQyxJQUFJO01BQ25DdkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7TUFDekNvRCxXQUFXLENBQUN1RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xFLE9BQU8sQ0FBRVksWUFBWSxJQUFLO1FBQy9EQSxZQUFZLENBQUM3QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUcyQixLQUFLLElBQUs7VUFDakRwQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ21DLEtBQUssQ0FBQztVQUNsQixJQUFJLENBQUNnQixhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLElBQUksQ0FBQ2dKLFNBQVMsQ0FBQztRQUMvRCxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7TUFDRnRNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7SUFFRDJJLFlBQVksR0FBRztNQUNiLE9BQU8sSUFBSSxDQUFDNkIsT0FBTyxHQUFHLGVBQWUsR0FBRyxRQUFRO0lBQ2xELENBQUM7SUFFRDVCLFFBQVEsR0FBRztNQUNULE9BQU8sSUFBSSxDQUFDM0QsT0FBTyxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUcsVUFBVTtJQUM1RCxDQUFDO0lBRUQrSSxTQUFTLEdBQUc7TUFDVixNQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDNUgsS0FBSyxDQUFDNEgsSUFBSTtNQUM1QixJQUFJLENBQUM5QixZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFlBQVk7TUFDdENwTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2lPLElBQUksQ0FBQztNQUNqQmhQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDc0YsS0FBSyxHQUFHLElBQUksQ0FBQzZCLEtBQUssQ0FBQ3FHLE1BQU0sQ0FBQ3dCLFNBQVM7TUFDeEVqUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDc0YsS0FBSyxHQUFHLElBQUksQ0FBQzZCLEtBQUssQ0FBQzZFLEtBQUssQ0FBQ2dELFNBQVM7TUFDN0VqUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDc0YsS0FBSyxHQUFHLElBQUksQ0FBQzZCLEtBQUssQ0FBQzhILEtBQUssQ0FBQ0QsU0FBUztNQUM3RWpQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUNzRixLQUFLLEdBQUcsSUFBSSxDQUFDNkIsS0FBSyxDQUFDK0gsT0FBTyxDQUFDRixTQUFTO0lBQ25GLENBQUM7SUFFREcsU0FBUyxHQUFHO01BQ1YsTUFBTUosSUFBSSxHQUFHLElBQUksQ0FBQzVILEtBQUssQ0FBQzRILElBQUk7TUFDNUIsSUFBSSxDQUFDN0IsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDQSxZQUFZO01BQ3RDck0sT0FBTyxDQUFDQyxHQUFHLENBQUNpTyxJQUFJLENBQUM7TUFDakJoUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ3NGLEtBQUssR0FBRyxJQUFJLENBQUM2QixLQUFLLENBQUN5RyxLQUFLLENBQUNvQixTQUFTO01BQ3RFalAsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3NGLEtBQUssR0FBRyxJQUFJLENBQUM2QixLQUFLLENBQUM2RSxLQUFLLENBQUNnRCxTQUFTO01BQzVFalAsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3NGLEtBQUssR0FBRyxJQUFJLENBQUM2QixLQUFLLENBQUM4SCxLQUFLLENBQUNELFNBQVM7TUFDNUVqUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDc0YsS0FBSyxHQUFHLElBQUksQ0FBQzZCLEtBQUssQ0FBQytILE9BQU8sQ0FBQ0YsU0FBUztJQUNsRjtFQUVGLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDN2FlLFNBQVN0VCxTQUFTLEdBQUc7RUFDaEMsT0FBTztJQUNIdUssTUFBTSxFQUFFLEtBQUs7SUFDYk0sT0FBTyxFQUFFLElBQUk7SUFDYkQsTUFBTSxFQUFFLEtBQUs7SUFDYkssVUFBVSxFQUFFLENBQUM7SUFFYlgsU0FBUyxHQUFHO01BQ1IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztNQUVuQixJQUFJbEcsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDbkMsTUFBTWtHLElBQUksR0FBR25HLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxNQUFNbUcsTUFBTSxHQUFHcEcsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDOztRQUVoRDtRQUNBLE1BQU1vRyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsWUFBWSxHQUFHLEVBQUU7UUFFekNILElBQUksQ0FBQ2pHLFNBQVMsQ0FBQzRFLEdBQUcsQ0FBRSxPQUFNdUIsUUFBUyxLQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBRyxLQUFLO01BQ3hCO0lBQ0osQ0FBQztJQUVEQyxTQUFTLEdBQUc7TUFDUixJQUFJQyxhQUFhLEdBQUdsSyxNQUFNLENBQUNtSyxXQUFXO01BQ3RDLElBQUlELGFBQWEsSUFBSSxDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDRixPQUFPLEdBQUcsSUFBSTtRQUNuQixJQUFJLENBQUNELE1BQU0sR0FBRyxJQUFJO01BQ3RCO01BRUEsSUFBSUcsYUFBYSxHQUFHLElBQUksQ0FBQ0UsVUFBVSxJQUFJLElBQUksQ0FBQ0osT0FBTyxLQUFLLEtBQUssRUFBRTtRQUMzRCxJQUFJLENBQUNBLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQ0QsTUFBTSxHQUFHLEtBQUs7TUFDdkIsQ0FBQyxNQUFNLElBQUlHLGFBQWEsR0FBRyxJQUFJLENBQUNFLFVBQVUsSUFBSSxJQUFJLENBQUNKLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDakUsSUFBSSxDQUFDQSxPQUFPLEdBQUcsS0FBSztRQUNwQixJQUFJLENBQUNELE1BQU0sR0FBRyxJQUFJO01BQ3RCO01BQ0EsSUFBSSxDQUFDSyxVQUFVLEdBQUdGLGFBQWE7SUFDbkMsQ0FBQztJQUdEOEMsWUFBWSxHQUFHO01BQ1gsT0FBTyxJQUFJLENBQUN0RCxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUNBLE1BQU07SUFDckM7RUFDSixDQUFDO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0MwQjtBQUUxQnhLLHVFQUE4QixHQUFHLElBQUk7QUFDckNBLHNFQUE2QixHQUFHLFdBQVc7QUFDM0NBLHNFQUE2QixHQUFHLGFBQWE7QUFDN0M7QUFDQUEsK0RBQXNCLEdBQUcsS0FBSztBQUU5QixpRUFBZUEsOENBQUs7Ozs7Ozs7Ozs7OztBQ1JwQjs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2FwcGxpY2F0aW9uL2FwcC5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0FjY291bnRGb3JtLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnRKcy5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udHJhY3REZXRhaWxGb3JtLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udHJhY3RGb3JtLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvU3RpY2t5TmF2LmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvYXhpb3NGYWN0b3J5LmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlL2lnbm9yZWR8L2hvbWUvZGFya2NvZHIvd3d3L2Rhcmtjb2RyL3RydXN0Y3Jvdy9mcm9udGVuZC9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHRoZSBzY3NzIGVudHJ5IGZpbGVcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgaHRteCBmcm9tIFwiaHRteC5vcmcvZGlzdC9odG14XCI7XG5pbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xuaW1wb3J0IGludGVyc2VjdCBmcm9tICdAYWxwaW5lanMvaW50ZXJzZWN0JztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBTdGlja3lOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RpY2t5TmF2XCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm1cIjtcbmltcG9ydCBDb250cmFjdERldGFpbEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJhY3REZXRhaWxGb3JtXCI7XG5pbXBvcnQgQ2hhcnRKcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydEpzXCI7XG5pbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCB7IGRldGVjdCB9IGZyb20gXCJkZXRlY3QtYnJvd3NlclwiO1xuaW1wb3J0IFwiaXppdG9hc3QvZGlzdC9jc3MvaXppVG9hc3QubWluLmNzc1wiO1xuXG4vLyB0aW55bWNlXG5pbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlL3RpbnltY2UubWluLmpzJztcbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0L2ljb25zLmpzJztcbmltcG9ydCAndGlueW1jZS90aGVtZXMvc2lsdmVyL3RoZW1lLmpzJztcbmltcG9ydCAndGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5taW4uY3NzJztcbmltcG9ydCAndGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5jc3MnO1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4ubWluLmNzcyc7XG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5taW4uY3NzJztcbmltcG9ydCAndGlueW1jZS9tb2RlbHMvZG9tL21vZGVsLmpzJztcblxuXG5pbXBvcnQgaXppVG9hc3QgZnJvbSBcIml6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzXCI7XG5pbXBvcnQgXCJAbG90dGllZmlsZXMvbG90dGllLXBsYXllclwiO1xuaW1wb3J0IFwiZmxvd2JpdGVcIjtcbmltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqcy9saWIvYW5pbWUuZXMuanNcIjtcbmltcG9ydCBTY3JvbGxNYWdpYyBmcm9tIFwic2Nyb2xsbWFnaWNcIjtcbi8vIGltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xuaW1wb3J0IEFjY291bnRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnRGb3JtXCI7XG5pbXBvcnQgQ29udHJhY3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyYWN0Rm9ybVwiO1xuaW1wb3J0IGxvdHRpZXdlYiBmcm9tIFwibG90dGllLXdlYlwiO1xuXG4vLyBHbG9iYWwgSW5pdGlhbGl6YXRpb25zIGZvciBpbXBvcnRlZGxpYnJhcmllcyAvL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbml0aWFsaXplIGh0bXhcbndpbmRvdy5odG14ID0gaHRteDtcbi8vIC8vIGluaXRpYWxpemUgdGlueW1jZVxud2luZG93LnRpbnltY2UgPSB0aW55bWNlO1xuLy8gaW5pdGlhbGl6ZSBsb3R0aWUgd2ViIGFuZCBsb3R0aWUgcGxheWVyXG53aW5kb3cubG90dGlld2ViID0gbG90dGlld2ViO1xuLy8gaW5pdGlhbGl6ZSBhbmltZWpzXG53aW5kb3cuYW5pbWUgPSBhbmltZTtcbndpbmRvdy5zY3JvbGxNYWdpYyA9IFNjcm9sbE1hZ2ljO1xuLy8gaW5pdGlhbGl6ZSBldGhlciBqcyBmb3IgY3J5cHRvIHBheW1lbnRcbndpbmRvdy5ldGhlcnMgPSBldGhlcnM7XG4vLyBpbml0aWFsaXplIGF4aW9zIGFzeW5jIHBvc3R8Z2V0IHJlcXVlc3RcbndpbmRvdy5heGlvcyA9IGF4aW9zO1xuLy8gaW5pdGlhbGl6ZSBzd2lwZXIuanNcbndpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG4vLyBpbml0aWFpbGl6ZSBpeml0b2FzdCBhbGVydHNcbndpbmRvdy5peml0b2FzdCA9IGl6aVRvYXN0O1xuLy8gQWxwaW5lIEpTIFNjcmlwdHNcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmU7XG5BbHBpbmUucGx1Z2luKGludGVyc2VjdCk7XG5BbHBpbmUuZGF0YShcIkFjY291bnRGb3JtXCIsIEFjY291bnRGb3JtKTtcbkFscGluZS5kYXRhKCdDb250cmFjdEZvcm0nLCBDb250cmFjdEZvcm0pO1xuQWxwaW5lLmRhdGEoJ0NvbnRhY3RGb3JtJywgQ29udGFjdEZvcm0pLFxuQWxwaW5lLmRhdGEoJ1N0aWNreU5hdicsIFN0aWNreU5hdik7XG5BbHBpbmUuZGF0YSgnQ29udHJhY3REZXRhaWxGb3JtJywgQ29udHJhY3REZXRhaWxGb3JtKTtcbkFscGluZS5kYXRhKCdDaGFydEpzJywgQ2hhcnRKcyk7XG5BbHBpbmUuc3RhcnQoKTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBzZXQgc2VydmljZSB3b3JrZXIgbGluayBhbmQgc2NvcGUgc3RhcnQgbGlua1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBzdyA9IFwiL3N3LmpzXCI7XG5jb25zdCBob21lID0gXCIvXCI7XG4vLyBkZXRlY3QgYnJvd3NlciB0eXBlXG5jb25zdCBicm93c2VyID0gZGV0ZWN0KCk7XG4vLyBnZXQgZ2xvYmFsIHZhcmlhYmxlcyBmcm9tIHRoZSBiYXNlLmh0bWwgZmlsZSBmb3Jcbi8vIHB1c2ggbm90aWZpY2F0aW9uIGFuZCBwd2EgaW5zdGFsbCBidXR0b25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgeyBBUFBMSUNBVElPTl9TRVJWRVJfS0VZLCBDUkVBVEVfV1BfREVWSUNFLCBTRU5EX05PVElGSUNBVElPTiB9ID1cbiAgd2luZG93LldFQl9QVVNIX0NGRztcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnZW5lcmF0ZSBrZXkgZm9yIHB1c2ggbm90aWZpY2F0aW9uc1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0tsZXJpdGgvODBhYmQ3NDJkNzI2ZGQ1ODdmNGJkNWQ2YTBhYjI2YjYjZmlsZS11cmxiYXNlNjR0b3VpbnQ4YXJyYXktanNcbiAgdmFyIHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xuICB2YXIgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpLnJlcGxhY2UoL1xcLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG5cbiAgdmFyIHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICB2YXIgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dEFycmF5O1xuXG4gIC8vIGNvbnN0IG91dHB1dERhdGEgPSBvdXRwdXRBcnJheS5tYXAoKG91dHB1dCwgaW5kZXgpID0+XG4gIC8vICAgcmF3RGF0YS5jaGFyQ29kZUF0KGluZGV4KVxuICAvLyApO1xuICAvLyByZXR1cm4gb3V0cHV0RGF0YTtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdGhpcyBpcyB0byBzdWJzY3JpYmUgdG8gcHVzaCBub3RpZmljYXRpb24gZnJvbSB0aGUgYnJvd3NlciB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKSB7XG4gIC8vIHNhdmUgc3Vic2NyaXB0aW9uIHRvIHRoZSBzZXJ2ZXJcbiAgY29uc3Qgc3Vic2NyaXB0aW9uSnNvbiA9IHN1YnNjcmlwdGlvbi50b0pTT04oKTtcbiAgY29uc3QgZW5kcG9pbnRQYXJ0cyA9IHN1YnNjcmlwdGlvbkpzb24uZW5kcG9pbnQuc3BsaXQoXCIvXCIpO1xuICBjb25zdCByZWdpc3RyYXRpb25JZCA9IGVuZHBvaW50UGFydHNbZW5kcG9pbnRQYXJ0cy5sZW5ndGggLSAxXTtcblxuICBjb25zdCBwcmVkYXRhID0ge1xuICAgIHN0YXR1c190eXBlOiBcInN1YnNjcmliZVwiLFxuICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uSnNvbixcbiAgICBicm93c2VyOiBicm93c2VyLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICBwMjU2ZGg6IHN1YnNjcmlwdGlvbkpzb24ua2V5cy5wMjU2ZGgsXG4gICAgYXV0aDogc3Vic2NyaXB0aW9uSnNvbi5rZXlzLmF1dGgsXG4gICAgdXNlcl9hZ2VudDogbmF2aWdhdG9yLmdldFVzZXJBZ2VudCxcbiAgICByZWdpc3RyYXRpb25faWQ6IHJlZ2lzdHJhdGlvbklkLFxuICAgIGdyb3VwOiBcInVzZXJzXCIsXG4gIH07XG5cbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHByZWRhdGEpO1xuXG4gIGF4aW9zXG4gICAgLnBvc3QoQ1JFQVRFX1dQX0RFVklDRSwgZGF0YSwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgdHJ1ZSk7XG5cbiAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgU3Vic2NyaXB0aW9uIFNlbnQgU3VjY2Vzc2Z1bGx5ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiBzdWJzY3JpcHRpb24gaXMgc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgLy8gdGhlbiBlbmFibGUgdGhlIHRlc3Qgbm90aWZpY2F0aW9uIHB1c2ggYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICAgICAgc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gU0VSVkVSXVwiLFxuICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6IGBOb3RpZmljYXRpb24gU3Vic2NyaXB0aW9uICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgc3Vic2NyaXB0aW9uIG5vdGlmaWNhdGlvbiB0byB0aGUgc2VydmVyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHN1YnNjcmliZShyZWdpc3RyYXRpb24pIHtcbiAgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uIGV4aXN0c1wiKTtcbiAgICAgIHNhdmVTdWJzY3JpYmVPYmooc3Vic2NyaXB0aW9uKTtcbiAgICAgIHNldHVwVHJpZ2dlckJ1dHRvbihzdWJzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsIC8vIHJlcXVpcmVkIGJ5IGNocm9tZVxuICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX0tFWSksXG4gIH07XG5cbiAgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShvcHRpb25zKS50aGVuKFxuICAgIC8vIHJlcXVlc3RpbmcgdG8gc3Vic2NyaWJlIGZyb20gdGhlIHNlcnZlclxuICAgIGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdWJzY3JpcHRpb246IGAsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1YnNjcmlwdGlvbi5lbmRwb2ludCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN1YnNjcmlwdGlvbiBpcyBub3cgc2F2ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgc2F2ZVN1YnNjcmliZU9iaihzdWJzY3JpcHRpb24pO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgU3Vic2NyaXB0aW9uIFNlbnQgU3VjY2Vzc2Z1bGx5YCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZpZ3VyZSB0aGUgZXJyb3IgYW5kIHRocm93IGFuIGFwcHJvcHJhaXRlIGVycm9yIG1lc3NhZ2UgdG9cbiAgICAvLyB0aGUgdXNlciBzbyBoZSBrbm93cyBleGFjdGx5IHdoYXQgaXMgd3JvbmcgYW5kIGNhbiBtb3ZlIGZvcndhcmQgb3IgYWRqdXN0IGZvciBhXG4gICAgLy8gZGV2aWNlLlxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IFwiW1BVU0ggTk9USUZJQ0FUSU9OIFNVQlNDUklQVElPTl1cIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgJHtlcnJvcn1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cblxud2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmNvbnNvbGUubG9nKFwiZG9tIHJlYWR5IDFcIik7XG59KTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgZnVuY3Rpb24gdG8gdHJpZ2dlciB0aGUgcHVzaCBub3RpZmljYXRpb24gZnJvbSB0aGUgYnJvd3NlclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzdWJzY3JpYmUocmVnKTtcbmZ1bmN0aW9uIHNldHVwU3Vic2NyaWJlQnV0dG9uKHJlZykge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b25cIikpIHtcbiAgICBjb25zdCBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwic3Vic2NyaWJlTm90aWZpY2F0aW9uQnV0dG9uXCJcbiAgICApO1xuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIGZhbHNlKTtcbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN1YnNjcmliZShyZWcpO1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmUgQnV0dG9uIFNldFwiKTtcbiAgICB9KTtcbiAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGZvciBhIHVzZXIgdG8gdGVzdCB0aGUgcHVzaCBub3RpZmljYXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gc2V0dXBUcmlnZ2VyQnV0dG9uKHN1YnNjcmlwdGlvbikge1xuICBjb25zdCBzdWJKc29uID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpO1xuICBjb25zdCBlbmRwb2ludFBhcnRzID0gc3ViSnNvbi5lbmRwb2ludC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnRQYXJ0c1tlbmRwb2ludFBhcnRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwcmVkYXRhID0ge1xuICAgIHJlZ2lzdHJhdGlvbl9pZDogcmVnaXN0cmF0aW9uSWQsXG4gICAgYXV0aDogc3ViSnNvbi5rZXlzLmF1dGgsXG4gICAgaGVhZDogXCJXZWxjb21lIHRvIFRydXN0c2Nyb3dcIixcbiAgICBib2R5OiBcIlRoaXMgaXMgaG93IG91ciBwdXNoIG5vdGlmaWNhdGlvbnMgc2hhbGwgYmUgYXBwZWFyaW5nIG9uIHlvdXIgZGV2aWNlLlwiLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcmVkYXRhKTtcblxuICBheGlvc1xuICAgIC5wb3N0KFNFTkRfTk9USUZJQ0FUSU9OLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgIHRpdGxlOiBcIltQVVNIIE5PVElGSUNBVElPTiBURVNUIFNVQ0NFU1NGVUxdXCIsXG4gICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aXRsZTogXCJbUFVTSCBOT1RJRklDQVRJT04gVEVTVCBFUlJPUl1cIixcbiAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgcmV0dXJuO1xufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFbmQgcHVzaCBub3RpZmljYXRpb24gYnV0dG9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hhcmVVcmxcIikpIHtcbiAgY29uc3Qgc2hhcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoYXJlVXJsXCIpO1xuICBjb25zdCB1cmwgPSBzaGFyZUJ1dHRvbi5kYXRhc2V0LnVybDtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgc2hhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICBuYXZpZ2F0b3JcbiAgICAgICAgLnNoYXJlKHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgdGV4dDogYENoZWNrIG91dCAke3RpdGxlLnRvVXBwZXJDYXNlKCl9LmAsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICB0aXRsZTogXCJbU0hBUkUgUEFHRV1cIixcbiAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmUgJHt1cmx9YCxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+XG4gICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgdGl0bGU6IFwiW1NIQVJFIFBBR0UgRVJST1JdXCIsXG4gICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvcixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfSk7XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZW5hYmxlIHNlcnZpY2Ugd29ya2VyLCB0aGVuIHdoZW4gc2VydmljZSB3b3JrZXIgaXMgZW5hYmxlZCByZXF1ZXN0XG4vLyBwZXJtaXNzaW9uIGZvciBwdXNoIG5vdGlmaWNhdGlvbiBhbmQgbG9jYXRpb24gc2VydmljZXMgZnJvbSB0aGUgYnJvd3NlclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgIC5yZWdpc3RlcihzdywgeyBzY29wZTogaG9tZSB9KVxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJhdGlvbiBzdWNjZWVkZWQ6IFwiLCByZWdpc3RyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgaXMgYWN0aXZlOiBcIiwgcmVnaXN0cmF0aW9uLmFjdGl2ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5pdGlhbGlzZVN0YXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJbU0VSVklDRSBXT1JLRVJdXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogXCJTZXJ2aWNlIFdvcmtlciBGYWlsZWQgdG8gUmVnaXN0ZXJcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnN0IGluaXRpYWxpc2VTdGF0ZSA9IChyZWcpID0+IHtcbiAgaWYgKCFyZWcuc2hvd05vdGlmaWNhdGlvbikge1xuICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgIHRpdGxlOiBcIltQVVNIIFVOU1VQUE9SVEVEXVwiLFxuICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJTaG93aW5nIDxzdHJvbmc+UFVTSCBOT1RJRklDQVRJT05TPC9zdHJvbmc+IGlzIHVuc3VwcG9ydGVkXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgaXppVG9hc3Qud2FybmluZyh7XG4gICAgICB0aXRsZTogXCJbUFVTSCBERU5JRURdXCIsXG4gICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIllvdSBwcmV2ZW50ZWQgdXMgZnJvbSBzaHdvaW5nIG5vdGlmaWNhdGlvbnMuIE1hbnVhbGx5IGNoZWNrIGlmIHlvdSBoYXZlIHByZXZlbnRlZCBwdXNoIG5vdGlmY2F0aW9uIGZyb20gdXMuXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEoXCJQdXNoTWFuYWdlclwiIGluIHdpbmRvdykpIHtcbiAgICBpemlUb2FzdC5pbmZvKHtcbiAgICAgIHRpdGxlOiBcIltQVVNIIEJST1dTRVIgVU5BVkFJTEJBTEVdXCIsXG4gICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlB1c2ggbm90aWZpY2F0aW9uIGlzIG5vdCBhbGxvd2VkIGluIHlvdXIgYnJvd3Nlci5cIixcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3ViKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gT2JqZWN0XCIsIHJlZyk7XG4gICAgaWYgKCFzdWIgfHwgc3ViID09PSBudWxsKSB7XG4gICAgICBzZXR1cFN1YnNjcmliZUJ1dHRvbihyZWcpO1xuICAgIH0gZWxzZSBpZiAoc3ViICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmliZSBBbHJlYWR5IERvbmVcIik7XG4gICAgICAvLyBzZXR1cFRyaWdnZXJCdXR0b24oc3ViKTtcbiAgICAgIGl6aVRvYXN0LmluZm8oe1xuICAgICAgICB0aXRsZTogXCJbU0VSVklDRSBXT1JLRVJdXCIsXG4gICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IFwiUHVzaCBub3RpZmljYXRpb24gaGFzIGFscmVhZHkgYmVlbiBzdWJzY3JpYmVkIHRvXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOU1RBTEwgQlVUVE9OIEZPUiBQUk9HUkVTU0lWRSBXRUIgQVBQTElDQVRJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdGFsbEJ1dHRvblwiKSkge1xuICBjb25zdCBpbnN0YWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0YWxsQnV0dG9uXCIpO1xuICAvLyB3aGVuIHBhZ2UgbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lLCBpbnN0YWxsIGJ1dHRvbiB3aWxsIGJlIHZpc2libGVcbiAgLy8gaWYgdGhlIHVzZXIgaGFzIG5vdCBpbnN0YWxsZWQgdGhlIGFwcCBvciBQV0EuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgY29uc29sZS5sb2coXCLwn5GNW1BXQV1cIiwgXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIGV2ZW50KTtcbiAgICB9XG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gICAgd2luZG93LmRlZmVycmVkUHJvbXB0ID0gZXZlbnQ7XG4gICAgLy8gUmVtb3ZlIHRoZSAnaGlkZGVuJyBjbGFzcyBmcm9tIHRoZSBpbnN0YWxsIGJ1dHRvbiBjb250YWluZXJcbiAgICAvLyBpZiB0aGUgUFdBIGhhcyBiZWVuIGluc3RhbGxlZCwgaGlkZSB0aGUgaW5zdGFsbCBidXR0b24gb3IgaWYgaXQgaGFzIG5vdFxuICAgIC8vIHRoZW4gYWxsb3cgZm9yIGNsaWNrXG4gICAgaW5zdGFsbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIGZhbHNlKTtcbiAgfSk7XG5cbiAgaW5zdGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfkY1bUFdBXSBJbnN0YWxsIEJ1dHRvbiBDbGlja2VkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdEV2ZW50ID0gd2luZG93LmRlZmVycmVkUHJvbXB0O1xuICAgIGlmICghcHJvbXB0RXZlbnQpIHtcbiAgICAgIC8vIFRoZSBkZWZlcnJlZCBwcm9tcHQgaXNuJ3QgYXZhaWxhYmxlLiBzbyByZXR1cm4gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9tcHRFdmVudC5wcm9tcHQoKTtcbiAgICBwcm9tcHRFdmVudC51c2VyQ2hvaWNlLnRoZW4oKGNob2ljZSkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5GNW1BXQV0gVXNlciBDaG9pY2U6IFwiLCBjaG9pY2UpO1xuICAgICAgfVxuICAgICAgLy8gaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAvLyAgIHRpdGxlOiBgW1BXQTogJHtjaG9pY2V9XWAsXG4gICAgICAvLyAgIG1lc3NhZ2U6ICfwn5GNIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQgdGhlIHJlYWR2aWxsZSBhcHAnLFxuICAgICAgLy8gfSk7XG4gICAgICAvLyBSZXNldCB0aGUgZGVmZXJyZWQgcHJvbXB0IHZhcmlhYmxlLCBzaW5jZVxuICAgICAgLy8gcHJvbXB0KCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXG4gICAgICB3aW5kb3cuZGVmZXJyZWRQcm9tcHQgPSBudWxsO1xuICAgICAgLy8gSGlkZSB0aGUgaW5zdGFsbCBidXR0b24gb25jZSB0aGUgUFdBIGhhcyBiZWVuIGluc3RhbGxlZFxuICAgICAgaW5zdGFsbEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG59XG5cbi8vIGlmIGFwcCBpcyBpbnN0YWxsZWQsIHRoYW5rIHRoZSB1c2VyIGZvciBpbnN0YWxsaW5nIHRoZSBhcHBcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhcHBpbnN0YWxsZWRcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgY29uc29sZS5sb2coXCLwn5GNW1BXQV0gSW5zdGFsbGVkIFN0YXRlOiBcIiwgZXZlbnQpO1xuICB9XG5cbiAgaXppVG9hc3QuaW5mbyh7XG4gICAgdGl0bGU6IGBbU0VSVklDRSBXT1JLRVJdYCxcbiAgICBiYWxsb29uOiB0cnVlLFxuICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiBcIlRydXN0c2Nyb3cgQXBwcmVjaWF0ZXMgWW91ciBTdXBwb3J0LlwiLFxuICB9KTtcbn0pO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbltcbiAgXCJodG14Om9uTG9hZFwiLFxuICBcImh0bXg6bG9hZFwiLFxuICBcImxvYWRcIixcbiAgXCJodG14OmFmdGVyU3dhcFwiLFxuICBcImh0bXg6YWZ0ZXJPbkxvYWRcIixcbiAgXCJodG14OmFmdGVyUmVxdWVzdFwiLFxuXS5mb3JFYWNoKChldnQpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuL2F4aW9zRmFjdG9yeVwiO1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuaW1wb3J0IGl6aVRvYXN0IGZyb20gJ2l6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzJzsgIC8vIHlvdSBoYXZlIGFjY2VzcyB0byBpemlUb2FzdCBub3dcbmltcG9ydCB7aXNWYWxpZCwgaXNFeHBpcmF0aW9uRGF0ZVZhbGlkLCBnZXRDcmVkaXRDYXJkTmFtZUJ5TnVtYmVyfSBmcm9tICdjcmVkaXRjYXJkLmpzJztcblxuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKGZvcm1FbGVtZW50LCBmaWVsZEVsZW1lbnQpIHtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIl9fZmllbGRfbmFtZV9fXCIsIGZpZWxkRWxlbWVudC5uYW1lKTtcblxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF9jYXJkX3Byb3ZpZGVyJykpIHtcbiAgICAgICAgdmFyIHByb3ZpZGVyTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF9jYXJkX3Byb3ZpZGVyJyk7XG4gICAgICAgIHByb3ZpZGVyTi5yZWFkT25seSA9IHRydWU7XG4gICAgfVxuXG4gICAgYXhpb3MucG9zdChmb3JtRWxlbWVudC5hY3Rpb24sIGZvcm1EYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgbGV0IGVycm9ycyA9IHJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgbGV0IGVycm9yc1dyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVycm9yLXdyYXBwZXItJHtmaWVsZEVsZW1lbnQubmFtZX1gKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZURyaXZlcicpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlRHJpdmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlQ29tcGFueScpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlQ29tcGFueScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgaWYgKGVycm9yc1dyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgZXJyb3JzV3JhcHBlckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtJykpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlRHJpdmVyJykpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJzY3JpYmVEcml2ZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJzY3JpYmVDb21wYW55JykpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJzY3JpYmVDb21wYW55JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGVycm9yc1dyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgICAgIGlmIChlcnJvcnNXcmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIGxldCBlcnJvcnNIdG1sID0gJyc7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVycm9yc0h0bWwgKz0gYCR7ZXJyb3JzW2ldfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yc1dyYXBwZXJFbGVtZW50LmlubmVySFRNTCA9IGVycm9yc0h0bWw7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG5cbiAgICAgICAgLy8gICBjYyB2YWxpZGF0b3JcbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfY2FyZF9leHBfbW9udGhcIikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9jYXJkX2V4cF95ZWFyXCIpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfY2FyZF9ub1wiKSkge1xuICAgICAgICB2YXIgbW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX2NhcmRfZXhwX21vbnRoXCIpO1xuICAgICAgICB2YXIgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfY2FyZF9leHBfeWVhclwiKTtcbiAgICAgICAgdmFyIG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfY2FyZF9ub1wiKTtcbiAgICAgICAgdmFyIHZhbGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVycm9yLXdyYXBwZXItY2FyZF9leHBfeWVhcmApO1xuICAgICAgICB2YXIgY2FyZF9ubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlcnJvci13cmFwcGVyLWNhcmRfbm9gKTtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm92aWRlcmApO1xuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh5ZWFyLnZhbHVlKTtcbiAgICAgICAgdmFyIGV4cGlyZWQgPSBpc0V4cGlyYXRpb25EYXRlVmFsaWQoYCR7bW9udGgudmFsdWV9YCwgYCR7eWVhci52YWx1ZX1gKTtcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gZ2V0Q3JlZGl0Q2FyZE5hbWVCeU51bWJlcihgJHtudW1iZXIudmFsdWV9YCk7XG4gICAgICAgIHZhciB2Y2FyZCA9IGlzVmFsaWQoYCR7bnVtYmVyLnZhbHVlfWApO1xuXG4gICAgICAgIGlmKGV4cGlyZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFsaWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJywgJ2JnLXJlZC0yMDAnLCAndGV4dC1yZWQtNjAwJyk7XG4gICAgICAgICAgICB2YWxpZC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2JnLWdyZWVuLTIwMCcsICd0ZXh0LWdyZWVuLTYwMCcpO1xuICAgICAgICAgICAgdmFsaWQuaW5uZXJIVE1MID0gXCJOb3QgeWV0IGV4cGlyZWRcIjtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJywgJ2JnLXJlZC0yMDAnLCAndGV4dC1yZWQtNjAwJyk7XG4gICAgICAgICAgICB2YWxpZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4JywgJ2JnLWdyZWVuLTIwMCcsICd0ZXh0LWdyZWVuLTYwMCcpO1xuICAgICAgICAgICAgdmFsaWQuaW5uZXJIVE1MID0gXCJDYXJkIGhhcyBleHBpcmVkXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEZvcm0nKSkgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZjYXJkID09IHRydWUpIHtcbiAgICAgICAgICAgIGNhcmRfbm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJywgJ2JnLXJlZC0yMDAnLCAndGV4dC1yZWQtNjAwJyk7XG4gICAgICAgICAgICBjYXJkX25vLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnYmctZ3JlZW4tMjAwJywgJ3RleHQtZ3JlZW4tNjAwJyk7XG4gICAgICAgICAgICBjYXJkX25vLmlubmVySFRNTCA9IFwiVmFsaWQgQ2FyZCBOdW1iZXJcIjtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZF9uby5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnYmctcmVkLTIwMCcsICd0ZXh0LXJlZC02MDAnKTtcbiAgICAgICAgICAgIGNhcmRfbm8uY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcsICdiZy1ncmVlbi0yMDAnLCAndGV4dC1ncmVlbi02MDAnKTtcbiAgICAgICAgICAgIGNhcmRfbm8uaW5uZXJIVE1MID0gXCJOb3QgQSBWYWxpZCBDYXJkIE51bWJlclwiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtJykpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm92aWRlciA9PT0gJ1Zpc2EnKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNWUvVmlzYV9JbmMuX2xvZ28uc3ZnLzgwMHB4LVZpc2FfSW5jLl9sb2dvLnN2Zy5wbmc/MjAxNzAxMTgxNTQ2MjFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlciA9PT0gJ01hc3RlcmNhcmQnKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yYS9NYXN0ZXJjYXJkLWxvZ28uc3ZnLzc3MnB4LU1hc3RlcmNhcmQtbG9nby5zdmcucG5nPzIwMjEwODE3MTQ0MzU4JztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdmlkZXJOLnZhbHVlID0gcHJvdmlkZXI7XG4gICAgICB9XG5cbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuYXZhdGFyKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhcicpLnNyYyA9IHJlc3BvbnNlLmRhdGEuYXZhdGFyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudEZvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIGNvbnRyYWN0VHlwZTogJ1BST0RVQ1QnLFxuICAgICAgICBzZXJ2aWNlOiBmYWxzZSxcblxuICAgICAgICBpbml0U3RhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyIGFuZCB0aGVuIGFkZCBpdCB0byB0aGUgdG9wIHBhZGRpbmcgb2YgdGhlIG1haW4gY29udGVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcl9oID0gbmF2YmFyLm9mZnNldEhlaWdodCArIDEwO1xuXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKGBwdC1bJHtoZWFkZXJfaH1weF1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2Nyb2xsTmF2KCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsICYmIHRoaXMuc2hvd05hdiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOYXYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubmF2VG9wID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCB0aGlzLmxhc3RTY3JvbGwgJiYgdGhpcy5zaG93TmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZUb3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIG1hcmtBbGxSZWFkKCkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvYWxsLXJlYWQvJykudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBtYXJrUmVhZChpZCkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvcmVhZC8ke2lkfWApLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc3VibWl0Rm9ybSgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1FbGVtZW50LmFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gZm9ybUVsZW1lbnQuZGF0YXNldC5lcnJvcnVybCB8fCBmb3JtRWxlbWVudC5kYXRhc2V0LnJlZGlyZWN0O1xuICAgICAgICAgICAgY29uc3QgY3NyZiA9IGZvcm1FbGVtZW50LmRhdGFzZXQuY3NyZjtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGZpZWxkRWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RleHRhcmVhIGNvbnRlbnQ6ICcsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZpZWxkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGFjdGlvbiwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogY3NyZixcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXAoNDUwMCk7IC8vd2FpdCAxIHNlYyBhbmQgdGhlbiBodG14IHJlZGlyZWN0IGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS51c2VybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS91c2Vycy8ke3Jlc3BvbnNlLmRhdGEudXNlcm5hbWV9L2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QpOyAvLyBodG14LmFqYXgoJ0dFVCcsIHJlZGlyZWN0LCB7dGFyZ2V0Oidib2R5Jywgc3dhcDonb3V0ZXJIVE1MJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3IucmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRm9ybSBFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQ6ICR7ZXJyb3J9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsZWVwKDc1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBzdWJtaXRTaWdudXBGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRWxlbWVudC5hY3Rpb247XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IGZvcm1FbGVtZW50LmRhdGFzZXQuZXJyb3J1cmwgfHwgZm9ybUVsZW1lbnQuZGF0YXNldC5yZWRpcmVjdDtcbiAgICAgICAgICAgIGNvbnN0IGNzcmYgPSBmb3JtRWxlbWVudC5kYXRhc2V0LmNzcmY7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWxlbWVudCk7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWVdXCIpLmZvckVhY2goZmllbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRFbGVtZW50LnR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBmaWVsZEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXh0YXJlYSBjb250ZW50OiAnLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRFbGVtZW50LnR5cGUgIT09IFwidGV4dGFyZWFcIil7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChhY3Rpb24sIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGNzcmYsXG4gICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNJTkdVUCBTVUNDRVNTRlVMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBhIG5ldyBhY2NvdW50XCIgKyByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcCg3NTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNJR05VUCBGT1JNIEVSUk9SXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZDogJHtlcnJvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHN1Ym1pdENvZGVGb3JtKCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRWxlbWVudC5hY3Rpb247XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJyk7XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IGZvcm1FbGVtZW50LmRhdGFzZXQucmVkaXJlY3Q7XG4gICAgICAgICAgICBjb25zdCBjc3JmID0gZm9ybUVsZW1lbnQuZGF0YXNldC5jc3JmO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGV4dGFyZWEgY29udGVudDogJywgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlICE9PSBcInRleHRhcmVhXCIpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgZmllbGRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChhY3Rpb24sIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGNzcmYsXG4gICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXAoNzUwMCk7IC8vd2FpdCAxIHNlYyBhbmQgdGhlbiBodG14IHJlZGlyZWN0IGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBkZWxldGVGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgY3NyZiA9IGZvcm1FbGVtZW50LmRhdGFzZXQuY3NyZjtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1FbGVtZW50LmFjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gZm9ybUVsZW1lbnQuZGF0YXNldC5yZWRpcmVjdDtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGZpZWxkRWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RleHRhcmVhIGNvbnRlbnQ6ICcsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZpZWxkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGFjdGlvbiwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogY3NyZixcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGVlcCg3NTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBzd2l0Y2hGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgY3NyZiA9IGZvcm1FbGVtZW50LmRhdGFzZXQuY3NyZjtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gZm9ybUVsZW1lbnQuZGF0YXNldC5yZWRpcmVjdDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1FbGVtZW50LmFjdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGZpZWxkRWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RleHRhcmVhIGNvbnRlbnQ6ICcsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZpZWxkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoYWN0aW9uLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmLFxuICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwKDc1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHN1Ym1pdFVwZGF0ZUZvcm0oKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRWxlbWVudC5hY3Rpb247XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IGZvcm1FbGVtZW50LmRhdGFzZXQucmVkaXJlY3Q7XG4gICAgICAgICAgICBjb25zdCBjc3JmID0gZm9ybUVsZW1lbnQuZGF0YXNldC5jc3JmO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGV4dGFyZWEgY29udGVudDogJywgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlICE9PSBcInRleHRhcmVhXCIpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgZmllbGRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmLFxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXAoNzUwMCk7IC8vd2FpdCAxIHNlYyBhbmQgdGhlbiBodG14IHJlZGlyZWN0IGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG14LmFqYXgoJ0dFVCcsIHJlZGlyZWN0LCB7dGFyZ2V0Oidib2R5Jywgc3dhcDonb3V0ZXJIVE1MJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBzdWJtaXRFbWFpbENvbmZpcm1Gb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRWxlbWVudC5hY3Rpb247XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IGZvcm1FbGVtZW50LmRhdGFzZXQucmVkaXJlY3Q7XG4gICAgICAgICAgICBjb25zdCBjc3JmID0gZm9ybUVsZW1lbnQuZGF0YXNldC5jc3JmO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGV4dGFyZWEgY29udGVudDogJywgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlICE9PSBcInRleHRhcmVhXCIpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgZmllbGRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmLFxuICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVNQUlMIENPTkZJUk1BVElPTiAgU1VDQ0VTU0ZVTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGNvbmZpcm1lZCB5b3VyIGVtYWlsIGFkZHJlc3NcIiArIHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcCg3NTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnJlZGlyZWN0KSByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVzcG9uc2UuZGF0YS5yZWRpcmVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRU1BSUwgQ09ORklSTUFUSU9OIEVSUk9SXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZDogJHtlcnJvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHN1Ym1pdExvZ2luRm9ybSgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybUVsZW1lbnQuYWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBmb3JtRWxlbWVudC5kYXRhc2V0LmVycm9ydXJsIHx8IGZvcm1FbGVtZW50LmRhdGFzZXQucmVkaXJlY3Q7XG4gICAgICAgICAgICBjb25zdCBjc3JmID0gZm9ybUVsZW1lbnQuZGF0YXNldC5jc3JmO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGV4dGFyZWEgY29udGVudDogJywgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlICE9PSBcInRleHRhcmVhXCIpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgZmllbGRFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYWN0aW9uLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmLFxuICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJMT0dJTiBTVUNDRVNTRlVMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgbG9nZ2VkIGludG8geW91ciBhY2NvdW50XCIgKyByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcCg3NTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxPR0lOIEZPUk0gRVJST1JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkOiAke2Vycm9yfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc3VibWl0UGFzc3dvcmRGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRWxlbWVudC5hY3Rpb247XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IGZvcm1FbGVtZW50LmRhdGFzZXQucmVkaXJlY3Q7XG4gICAgICAgICAgICAvLyBjb25zdCBlcmVkaXJlY3QgPSBmb3JtRWxlbWVudC5kYXRhc2V0LmVycm9ydXJsO1xuICAgICAgICAgICAgY29uc3QgY3NyZiA9IGZvcm1FbGVtZW50LmRhdGFzZXQuY3NyZjtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0YXJlYSA9IGZpZWxkRWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RleHRhcmVhIGNvbnRlbnQ6ICcsIHdpbmRvdy5wYXJlbnQudGlueW1jZS5nZXQodGV4dGFyZWEpLmdldENvbnRlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKXtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoZmllbGRFbGVtZW50Lm5hbWUsIGZpZWxkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGFjdGlvbiwgZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogY3NyZixcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUEFTU1dPUkQgU1VDQ0VTU0ZVTExZIFVQREFURURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGVlcCg3NTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUEFTU1dPUkQgRk9STSBFUlJPUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQ6ICR7ZXJyb3J9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBzaG93UGFzc3dvcmQoKSB7XG4gICAgICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfcGFzc3dvcmRcIik7XG4gICAgICAgICAgICBpZiAoeC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgeC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB4LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc3VibWl0Q29udHJhY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHNob3dTaW5ndXBQYXNzd29yZCgpIHtcbiAgICAgICAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9wYXNzd29yZDFcIik7XG4gICAgICAgICAgICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfcGFzc3dvcmQyXCIpO1xuICAgICAgICAgICAgaWYgKHgudHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIHkudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgIHgudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICB5LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHgudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgICAgeS50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHN1Ym1pdEZpbGVGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybUVsZW1lbnQuYWN0aW9uIHx8IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gZm9ybUVsZW1lbnQuZGF0YXNldC5yZWRpcmVjdDtcbiAgICAgICAgICAgIGNvbnN0IGNzcmYgPSBmb3JtRWxlbWVudC5kYXRhc2V0LmNzcmY7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWxlbWVudCk7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWVdXCIpLmZvckVhY2goZmllbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRFbGVtZW50LnR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBmaWVsZEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXh0YXJlYSBjb250ZW50OiAnLCB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChmaWVsZEVsZW1lbnQubmFtZSwgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRFbGVtZW50LnR5cGUgIT09IFwidGV4dGFyZWFcIil7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChhY3Rpb24sIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGNzcmYsXG4gICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwKDQ1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bXguYWpheCgnR0VUJywgcmVkaXJlY3QsIHt0YXJnZXQ6J2JvZHknLCBzd2FwOidvdXRlckhUTUwnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZDogJHtlcnJvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGb3JtIFNlbmRpbmcgSW5jb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRm9ybSBkYXRhIGlzIG5vdCB2YWxpZC4gRW5zdXJlIHlvdSBoYXZlIGZpbGxlZCBhbGwgZmllbGRzIGFjY3VyYXRlbHkhICR7Zm9ybUVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKX1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2xlZXAoNTUwMCk7IC8vd2FpdCAyLjUgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaHRteC5hamF4KCdHRVQnLCByZWRpcmVjdCwge3RhcmdldDonYm9keScsIHN3YXA6J291dGVySFRNTCd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbGlkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJykuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQubmFtZSA9PSBcImdlbmRlclwiICYmIGZpZWxkRWxlbWVudC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPT09IHRoaXMuc3RlcDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnN0ZXAgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UgPSB0aGlzLmNvbnRyYWN0VHlwZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrVmFsaWRpdHkoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXScpLmZvckVhY2goZmllbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoZm9ybUVsZW1lbnQsIGZpZWxkRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kcmF3ZXIgPSAhdGhpcy5kcmF3ZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QnRuVGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NpbmcgPyAnUHJvY2Vzc2luZy4uLicgOiAnU3VibWl0JztcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cmFjdFRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nID8gJ1Byb2Nlc3NpbmcuLi4nIDogJ0dlbmVyYXRlJztcbiAgICAgICAgfSxcblxuICAgICAgICBzdGFnZVR3bygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UgPT09ICdTRVJWSUNFJyA/ICdTZXJ2aWNlJyA6ICdQcm9kdWN0cyc7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgeyBnZXRSZWxhdGl2ZVBvc2l0aW9uIH0gZnJvbSAnY2hhcnQuanMvaGVscGVycyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4vYXhpb3NGYWN0b3J5XCI7XG5cblxuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgcmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydEpzKCkge1xuICByZXR1cm4ge1xuICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIGRhdGFYOiBudWxsLFxuICAgIGRhdGFZOiBudWxsLFxuICAgIGRhdGFaOiBudWxsLFxuXG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9lc2Nyb3cvdHJhbnNhY3Rpb24vZGF0YS9gKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBhd2FpdCBzbGVlcCgyNTAwKTtcbiAgICAgICAgICBjb25zb2xlLmRpcihyZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5kYXRhWCA9IHJlc3BvbnNlLmRhdGEuZGF0YVg7XG4gICAgICAgICAgdGhpcy5kYXRhWSA9IHJlc3BvbnNlLmRhdGEuZGF0YVk7XG4gICAgICAgICAgdGhpcy5kYXRhWiA9IHJlc3BvbnNlLmRhdGEuZGF0YVo7XG4gICAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpLCB7XG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmRhdGFYLFxuICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1llYXJseSBFYXJuaW5nJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdvcmFuZ2UnLFxuICAgICAgICAgICAgICAgIGJhclBlcmNlbnRhZ2U6IDAuNSxcbiAgICAgICAgICAgICAgICBiYXJUaGljbmVzczogNixcbiAgICAgICAgICAgICAgICBtYXhCYXJUaGlja25lc3M6IDEwLFxuICAgICAgICAgICAgICAgIG1pbkJhckxlbmd0aDogOCxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGFZXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1llYXJseSBFeHBlbnNlcycsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjUsXG4gICAgICAgICAgICAgICAgYmFyVGhpY25lc3M6IDYsXG4gICAgICAgICAgICAgICAgbWF4QmFyVGhpY2tuZXNzOiAxMCxcbiAgICAgICAgICAgICAgICBtaW5CYXJMZW5ndGg6IDgsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhWlxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFubnVhbCBUcmFuc2FjdGlvbiBDaGFydFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzUG9zaXRpb24gPSBnZXRSZWxhdGl2ZVBvc2l0aW9uKGUsIGNoYXJ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFYID0gY2hhcnQuc2NhbGVzLnguZ2V0VmFsdWVGb3JQaXhlbChjYW52YXNQb3NpdGlvbi54KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFZID0gY2hhcnQuc2NhbGVzLnkuZ2V0VmFsdWVGb3JQaXhlbChjYW52YXNQb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgICAgICB9KVxuICAgICAgLmNhdGNoKFxuICAgICAgICBhc3luYyBlcnJvciA9PiB7XG4gICAgICAgICAgYXdhaXQgc2xlZXAoMjUwMCk7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn1cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuL2F4aW9zRmFjdG9yeVwiO1xuaW1wb3J0IGh0bXggZnJvbSBcImh0bXgub3JnL2Rpc3QvaHRteFwiO1xuaW1wb3J0IGl6aVRvYXN0IGZyb20gJ2l6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzJzsgIC8vIHlvdSBoYXZlIGFjY2VzcyB0byBpemlUb2FzdCBub3dcblxuLy8gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcbi8vICAgICBsZXQgb2JqID0ge307XG4vLyAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGRhdGEpIHtcbi8vICAgICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmpba2V5XSkpIHtcbi8vICAgICAgICAgICBvYmpba2V5XSA9IFtvYmpba2V5XV07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgb2JqW2tleV0ucHVzaCh2YWx1ZSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gb2JqO1xuLy8gfVxuXG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmb3JtRWxlbWVudCwgZmllbGRFbGVtZW50KSB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJfX2ZpZWxkX25hbWVfX1wiLCBmaWVsZEVsZW1lbnQubmFtZSk7XG5cbiAgICBheGlvcy5wb3N0KGZvcm1FbGVtZW50LmFjdGlvbiwgZm9ybURhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBsZXQgZXJyb3JzID0gcmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICBsZXQgZXJyb3JzV3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZXJyb3Itd3JhcHBlci0ke2ZpZWxkRWxlbWVudC5uYW1lfWApO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgaWYgKGVycm9yc1dyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgZXJyb3JzV3JhcHBlckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZXJyb3JzV3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICBpZiAoZXJyb3JzV3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICBsZXQgZXJyb3JzSHRtbCA9ICcnO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlcnJvcnNIdG1sICs9IGAke2Vycm9yc1tpXX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvcnNIdG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcblxuICAgICAgICBhc3luYyBzdWJtaXRGb3JtKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmNvbnRhY3RGb3JtO1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gZm9ybUVsZW1lbnQuYWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgY3NyZiA9IGZvcm1FbGVtZW50LmRhdGFzZXQuY3NyZjtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikuZm9yRWFjaChmaWVsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gZGF0YS5hcHBlbmQoJ2NzcmZtaWRkbGV3YXJldG9rZW4nLCBjc3JmKTtcbiAgICAgICAgICAgIC8vIGRhdGEuYXBwZW5kKCduYW1lJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkX25hbWUnKS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBkYXRhLmFwcGVuZCgnZW1haWwnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRfZW1haWwnKS52YWx1ZSk7XG4gICAgICAgICAgICAvLyBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF9tZXNzYWdlJykudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmluZm8oXCJGT1JNIERBVEE6IFwiLCBkYXRhKTtcblxuICAgICAgICAgICAgLy8gbGV0IGZvcm1EYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKFwiU0VSSUFMSVpFRCBGT1JNIERBVEE6IFwiLCBmb3JtRGF0YSk7XG5cblxuICAgICAgICAgICAgaWYgKGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QocmVkaXJlY3QsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGNzcmZcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKFwiUkVTUE9OU0UgREFUQTogXCIsIHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gXCJTdXBwb3J0IE1haWwgU3VjY2Vzc2Z1bGx5IFNlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCB0ZXh0LWdyZWVuLTMwMCBzcGFjZS15LTggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweS0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJsb2NrIHctMTQgaC0xNCBibG9jayBteC1hdXRvIGFuaW1hdGUtYm91bmNlIHRleHQtZ3JlZW4tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTIxLjc1IDYuNzV2MTAuNWEyLjI1IDIuMjUgMCAwMS0yLjI1IDIuMjVoLTE1YTIuMjUgMi4yNSAwIDAxLTIuMjUtMi4yNVY2Ljc1bTE5LjUgMEEyLjI1IDIuMjUgMCAwMDE5LjUgNC41aC0xNWEyLjI1IDIuMjUgMCAwMC0yLjI1IDIuMjVtMTkuNSAwdi4yNDNhMi4yNSAyLjI1IDAgMDEtMS4wNyAxLjkxNmwtNy41IDQuNjE1YTIuMjUgMi4yNSAwIDAxLTIuMzYgMEwzLjMyIDguOTFhMi4yNSAyLjI1IDAgMDEtMS4wNy0xLjkxNlY2Ljc1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy0zLzUgdGV4dC1jZW50ZXIgc3BhY2UteS0zIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtZ3JlZW4tNTAwIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgbWQ6dGV4dC00eGxcIj5NYWlsIFNlbnQgU3VjY2Vzc2Z1bGx5PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRW1haWwgU2VudCBTdWNjZXNzZnVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwKDM1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG14LmFqYXgoJ0dFVCcsIHJlZGlyZWN0LCB7dGFyZ2V0OidtYWluJywgc3dhcDonb3V0ZXJIVE1MJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsZWVwKDM1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFbWFpbCBTZW5kaW5nIEluY29tcGxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkOiAke2Vycm9yfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJmaW5hbGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbmRpbmcgRW1haWwgSW5jb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRm9ybSBkYXRhIGlzIG5vdCB2YWxpZC4gRW5zdXJlIHlvdSBoYXZlIGZpbGxlZCBhbGwgZmllbGRzIGFjY3VyYXRlbHkhICR7Zm9ybUVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKX1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2xlZXAoMjUwMCk7IC8vd2FpdCAyLjUgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaHRteC5hamF4KCdHRVQnLCByZWRpcmVjdCwge3RhcmdldDonbWFpbicsIHN3YXA6J291dGVySFRNTCd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGNoZWNrVmFsaWRpdHkoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IHRoaXMuJHJlZnMuY29udGFjdEZvcm07XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKS5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKGZvcm1FbGVtZW50LCBmaWVsZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QnRuVGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NpbmcgPyAnUHJvY2Vzc2luZy4uLicgOiAnU3VibWl0JztcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi4vYXhpb3NGYWN0b3J5XCI7XG5pbXBvcnQgaXppVG9hc3QgZnJvbSBcIml6aXRvYXN0L2Rpc3QvanMvaXppVG9hc3QubWluLmpzXCI7IC8vIHlvdSBoYXZlIGFjY2VzcyB0byBpemlUb2FzdCBub3dcbmltcG9ydCBQYXlzdGFja1BvcCBmcm9tIFwiQHBheXN0YWNrL2lubGluZS1qc1wiO1xuXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICByZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYWN0RGV0YWlsRm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgc2hvd1Rvb2x0aXAyOiBmYWxzZSxcbiAgICBvcGVuU2VydmljZU1vZGFsOiBmYWxzZSxcbiAgICBvcGVuTWlsZXN0b25lTW9kYWw6IGZhbHNlLFxuICAgIG9wZW5Qcm9kdWN0TW9kYWw6IGZhbHNlLFxuXG4gICAgYXN5bmMgcmV0cnlQYXltZW50KHNsdWcpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2VzY3Jvdy90cmFuc2FjdGlvbi9yZXRyeS8ke3NsdWd9L2ApXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDI1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmFtb3VudCAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wayAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5lbWFpbCAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZWZcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgUGF5c3RhY2tQb3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIubmV3VHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgICBrZXk6IHJlc3BvbnNlLmRhdGEucGssXG4gICAgICAgICAgICAgIC8vIGtleTogXCJwa190ZXN0X2UzZDVlMGJjZjA5Y2IxMjliYTM0NDgwZGI4NWI5MjU4MjYyNDJlYjhcIixcbiAgICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmRhdGEuZW1haWwsXG4gICAgICAgICAgICAgIGFtb3VudDogcmVzcG9uc2UuZGF0YS5hbW91bnQgKiAxMDAsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBcIk5HTlwiLFxuICAgICAgICAgICAgICByZWY6IHJlc3BvbnNlLmRhdGEucmVmLFxuICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihyZXMpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAgICAgICAgIGBgYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZXNjcm93L3RyYW5zYWN0aW9uL3ZlcmlmeS8ke3Jlcy5yZWZlcmVuY2V9LyR7cmVzLnN0YXR1c30vYGBgXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDM1MDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zbHVnICYmIHJlcy5tZXNzYWdlID09PSBcIkFwcHJvdmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9lc2Nyb3cvY29udHJhY3QvZGV0YWlsLyR7cmVzcG9uc2UuZGF0YS5zbHVnfS9gXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uQ2FuY2xlOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgaXppVG9hc3QuaW5mbyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkFOU0FDVElPTiBGQUlMRURcIixcbiAgICAgICAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhpcyB0cmFuc2FjdGlvbiBjb3VsZCBub3QgYmUgY29tcGxldGVkIGF0IHRoZSBtb21lbnQuIFBsZWFzZSB0cnkgYWdhaW4hXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDM1MDApO1xuICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcHJpbnRJbnZvaWNlKCkge1xuICAgICAgdmFyIHByaW50Q29udGVudHMgPSB0aGlzLiRyZWZzLnByaW50VGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgICAgdmFyIG9yaWdpbmFsQ29udGVudHMgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwcmludENvbnRlbnRzO1xuICAgICAgd2luZG93LnByaW50KCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IG9yaWdpbmFsQ29udGVudHM7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiLi9heGlvc0ZhY3RvcnlcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3QvZGlzdC9qcy9pemlUb2FzdC5taW4uanNcIjsgLy8geW91IGhhdmUgYWNjZXNzIHRvIGl6aVRvYXN0IG5vd1xuaW1wb3J0IFBheXN0YWNrUG9wIGZyb20gXCJAcGF5c3RhY2svaW5saW5lLWpzXCI7XG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgd2luZG93LlByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYWN0Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICByZWRpcmVjdDogbnVsbCxcbiAgICBlbWFpbFRleHQ6IG51bGwsXG4gICAgYXV0b2NvbXBsZXRlOiB0cnVlLFxuICAgIGJ1dG9jb21wbGV0ZTogdHJ1ZSxcbiAgICBzdGVwOiAxLFxuICAgIGZvcm1FcnJvcjogdHJ1ZSxcbiAgICBzZXJ2aWNlOiBudWxsLFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIGNyZWF0b3I6IFwiXCIsXG4gICAgICAgIGNvbnRyYWN0X3RpdGxlOiBcIlwiLFxuICAgICAgICBjb250cmFjdF90eXBlOiBcIlwiLFxuICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgIGxvY2FsaXphdGlvbjogXCJcIixcblxuICAgICAgICB2ZW5kb3I6IFwiXCIsXG4gICAgICAgIHZlbmRvcl9waG9uZTogXCJcIixcbiAgICAgICAgdmVuZG9yX2VtYWlsOiBcIlwiLFxuICAgICAgICB2ZW5kb3JfYWRkcmVzczogXCJcIixcblxuICAgICAgICBidXllcjogXCJcIixcbiAgICAgICAgYnV5ZXJfcGhvbmU6IFwiXCIsXG4gICAgICAgIGJ1eWVyX2VtYWlsOiBcIlwiLFxuICAgICAgICBidXllcl9hZGRyZXNzOiBcIlwiLFxuXG4gICAgICAgIHRlcm1zX2FncmVlbWVudDogXCJcIixcbiAgICAgICAgdGVybXNfZm9yX3Rlcm1pbmF0aW9uOiBcIlwiLFxuICAgIH0sXG5cbiAgICBuZXh0KCkge1xuICAgICAgaWYgKHRoaXMuc2VydmljZSkge1xuICAgICAgICBpZih0aGlzLmZvcm1EYXRhLmNyZWF0b3IubGVuZ3RoID4gMSAmJiB0aGlzLmZvcm1EYXRhLmxvY2FsaXphdGlvbi5sZW5ndGggPiAxICYmIHRoaXMuZm9ybURhdGEuY29udHJhY3RfdGl0bGUubGVuZ3RoID4gMSAmJiB0aGlzLmZvcm1EYXRhLmNvbnRyYWN0X3R5cGUubGVuZ3RoID4gMSAmJiB0aGlzLmZvcm1EYXRhLmFtb3VudCA+IDEwMCl7XG4gICAgICAgICAgdGhpcy5zdGVwKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHRoaXMuZm9ybURhdGEuY3JlYXRvci5sZW5ndGggPiAxICYmIHRoaXMuZm9ybURhdGEubG9jYWxpemF0aW9uLmxlbmd0aCA+IDEgJiYgdGhpcy5mb3JtRGF0YS5jb250cmFjdF90eXBlLmxlbmd0aCA+IDEgJiYgdGhpcy5mb3JtRGF0YS5hbW91bnQgPiAxMDApe1xuICAgICAgICAgIHRoaXMuc3RlcCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcm0gRXJyb3JcIixcbiAgICAgICAgICAgIGJhbGxvb246IHRydWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRmlsbCBhbGwgZmllbGRzIGhlcmUgYWNjdXJhdGVseS5cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBuZXh0MigpIHtcbiAgICAgIGlmKHRoaXMuZm9ybURhdGEudmVuZG9yLmxlbmd0aCA+IDEgJiYgIHRoaXMuZm9ybURhdGEudmVuZG9yX3Bob25lLmxlbmd0aCA+IDEgJiYgdGhpcy5mb3JtRGF0YS52ZW5kb3JfZW1haWwubGVuZ3RoID4gMSAmJiB0aGlzLmZvcm1EYXRhLnZlbmRvcl9hZGRyZXNzLmxlbmd0aCA+IDEpe1xuICAgICAgICB0aGlzLnN0ZXArKztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9LFxuXG4gICAgbmV4dDMoKSB7XG4gICAgICBpZih0aGlzLmZvcm1EYXRhLmJ1eWVyLmxlbmd0aCA+IDEgJiYgIHRoaXMuZm9ybURhdGEuYnV5ZXJfcGhvbmUubGVuZ3RoID4gMSAmJiB0aGlzLmZvcm1EYXRhLmJ1eWVyX2VtYWlsLmxlbmd0aCA+IDEgJiYgdGhpcy5mb3JtRGF0YS5idXllcl9hZGRyZXNzLmxlbmd0aCA+IDEpe1xuICAgICAgICB0aGlzLnN0ZXArKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogXCJGaWxsIGFsbCBmaWVsZHMgaGVyZSBhY2N1cmF0ZWx5LlwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV4dDQoKSB7XG4gICAgICBsZXQgYWdyZWVtZW50ID0gd2luZG93LnBhcmVudC50aW55bWNlLmdldChcImlkX3Rlcm1zX2FncmVlbWVudFwiKS5nZXRDb250ZW50KCk7XG4gICAgICBjb25zb2xlLmxvZyhhZ3JlZW1lbnQpO1xuICAgICAgY29uc29sZS5sb2cod2luZG93LnBhcmVudC50aW55bWNlLmdldChcImlkX3Rlcm1zX2FncmVlbWVudFwiKS5nZXRDb250ZW50KCkpO1xuICAgICAgaWYoYWdyZWVtZW50Lmxlbmd0aCA+IDEpe1xuICAgICAgICB0aGlzLnN0ZXArKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgbmVlZCB0byBhZGQgdGhlIGFncmVlbWVudCB5b3UgaGFkIGVudGVyZWQgd2l0aCB0aGUgc2VsbGVyL2J1eWVyLlwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBiYWNrKCkge1xuICAgICAgdGhpcy5zdGVwLS07XG4gICAgfSxcblxuXG4gICAgYXN5bmMgdmFsaWRhdGVGaWVsZChmb3JtRWxlbWVudCwgZmllbGRFbGVtZW50LCBlbCkge1xuICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgbGV0IHRleHRhcmVhID0gZmllbGRFbGVtZW50LmlkO1xuICAgICAgICBkYXRhLmFwcGVuZChcbiAgICAgICAgICAgIFwiX19maWVsZF9uYW1lX19cIixcbiAgICAgICAgICB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5hcHBlbmQoXCJfX2ZpZWxkX25hbWVfX1wiLCBmaWVsZEVsZW1lbnQubmFtZSk7XG4gICAgICB9XG5cblxuICAgICAgYXdhaXQgYXhpb3MucG9zdChmb3JtRWxlbWVudC5hY3Rpb24sIGRhdGEpXG4gICAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGVycm9ycyA9IHJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICBsZXQgZXJyb3JzV3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBgZXJyb3Itd3JhcHBlci0ke2ZpZWxkRWxlbWVudC5uYW1lfWBcbiAgICAgICAgKTtcblxuXG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZWwgPSBmYWxzZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgZXJyb3JzV3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICBpZiAoZXJyb3JzV3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXJFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgZXJyb3JzV3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICAgICAgICBpZiAoZXJyb3JzV3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBlcnJvcnNIdG1sID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGVycm9yc0h0bWwgKz0gYCR7ZXJyb3JzW2ldfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcnNXcmFwcGVyRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvcnNIdG1sO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1FcnJvciA9IGVsO1xuICAgICAgY29uc29sZS5sb2coZWwpO1xuICAgIH0sXG5cbiAgICBhc3luYyBzdWJtaXRDb250cmFjdCgpIHtcbiAgICAgIGxldCBhZ3JlZW1lbnQgPSB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KFwiaWRfdGVybXNfZm9yX3Rlcm1pbmF0aW9uXCIpLmdldENvbnRlbnQoKTtcbiAgICAgIGlmKGFncmVlbWVudC5sZW5ndGggPiAxKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybUVsZW1lbnQuYWN0aW9uO1xuICAgICAgICBjb25zdCBjc3JmID0gZm9ybUVsZW1lbnQuZGF0YXNldC5jc3JmO1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWxlbWVudCk7XG5cblxuICAgICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWVdXCIpLmZvckVhY2goKGZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSAhPT0gXCJ0ZXh0YXJlYVwiICYmIGZpZWxkRWxlbWVudC50eXBlICE9PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGZpZWxkRWxlbWVudC5uYW1lLCBmaWVsZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaWVsZEVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICBsZXQgdGV4dGFyZWEgPSBmaWVsZEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgXCJ0ZXh0YXJlYSBjb250ZW50OiBcIixcbiAgICAgICAgICAgICAgd2luZG93LnBhcmVudC50aW55bWNlLmdldCh0ZXh0YXJlYSkuZ2V0Q29udGVudCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAgIGZpZWxkRWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgICB3aW5kb3cucGFyZW50LnRpbnltY2UuZ2V0KHRleHRhcmVhKS5nZXRDb250ZW50KClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkRWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBpZihmaWVsZEVsZW1lbnQubmFtZSA9PT0gJ2NyZWF0b3InKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtRGF0YS5jcmVhdG9yKTtcbiAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2NyZWF0b3InLCB0aGlzLmZvcm1EYXRhLmNyZWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZmllbGRFbGVtZW50Lm5hbWUgPT09ICdjb250cmFjdF90eXBlJyl7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybURhdGEuY29udHJhY3RfdHlwZSk7XG4gICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdjb250cmFjdF90eXBlJywgdGhpcy5mb3JtRGF0YS5jb250cmFjdF90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuXG4gICAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KGFjdGlvbiwgZGF0YSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiWC1DU1JGVG9rZW5cIjogY3NyZixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgIGF3YWl0IGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmFtb3VudCAmJiByZXNwb25zZS5kYXRhLnBrICYmIHJlc3BvbnNlLmRhdGEuZW1haWwgJiYgcmVzcG9uc2UuZGF0YS5yZWYpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgUGF5c3RhY2tQb3AoKTtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIubmV3VHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgICBrZXk6IHJlc3BvbnNlLmRhdGEucGssXG4gICAgICAgICAgICAgIC8vIGtleTogXCJwa190ZXN0X2UzZDVlMGJjZjA5Y2IxMjliYTM0NDgwZGI4NWI5MjU4MjYyNDJlYjhcIixcbiAgICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmRhdGEuZW1haWwsXG4gICAgICAgICAgICAgIGFtb3VudDogcmVzcG9uc2UuZGF0YS5hbW91bnQgKiAxMDAsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBcIk5HTlwiLFxuICAgICAgICAgICAgICByZWY6IHJlc3BvbnNlLmRhdGEucmVmLFxuICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2VzY3Jvdy90cmFuc2FjdGlvbi92ZXJpZnkvJHtyZXMucmVmZXJlbmNlfS8ke3Jlcy5zdGF0dXN9L2A7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGxvYylcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGl6aVRvYXN0LmluZm8oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgzNTAwKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnNsdWcgJiYgcmVzLm1lc3NhZ2UgPT09IFwiQXBwcm92ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZXNjcm93L2NvbnRyYWN0L2RldGFpbC8ke3Jlc3BvbnNlLmRhdGEuc2x1Z30vYCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uQ2FuY2xlOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5pbmZvKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSQU5TQUNUSU9OIEZBSUxFRFwiLFxuICAgICAgICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGlzIHRyYW5zYWN0aW9uIGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgYXQgdGhlIG1vbWVudC4gUGxlYXNlIHRyeSBhZ2FpbiFcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuc2x1Zykge1xuICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZXNjcm93L2NvbnRyYWN0L2RldGFpbC8ke3Jlc3BvbnNlLmRhdGEuc2x1Z30vYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goYXN5bmMgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhd2FpdCBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IHNsZWVwKDM1MDApOyAvL3dhaXQgMSBzZWMgYW5kIHRoZW4gaHRteCByZWRpcmVjdCBnZXRcbiAgICAgICAgICByZXR1cm47IC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogXCJGb3JtIEVycm9yXCIsXG4gICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLFxuICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3UgbmVlZCB0byBpbnB1dCBhIHJlYXNvbiBmb3IgdGVybWluYXRpb24uXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIGFzeW5jIHJldHJ5UGF5bWVudChyZWYpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBhd2FpdCBheGlvcy5nZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZXNjcm93L3RyYW5zYWN0aW9uL3JldHJ5LyR7cmVmfS9gKS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhd2FpdCBzbGVlcCgyNTAwKTsgLy93YWl0IDEgc2VjIGFuZCB0aGVuIGh0bXggcmVkaXJlY3QgZ2V0XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmFtb3VudCAmJiByZXNwb25zZS5kYXRhLnBrICYmIHJlc3BvbnNlLmRhdGEuZW1haWwgJiYgcmVzcG9uc2UuZGF0YS5yZWYpIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gbmV3IFBheXN0YWNrUG9wKCk7XG4gICAgICAgICAgYXdhaXQgaGFuZGxlci5uZXdUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBrZXk6IHJlc3BvbnNlLmRhdGEucGssXG4gICAgICAgICAgICAvLyBrZXk6IFwicGtfdGVzdF9lM2Q1ZTBiY2YwOWNiMTI5YmEzNDQ4MGRiODViOTI1ODI2MjQyZWI4XCIsXG4gICAgICAgICAgICBlbWFpbDogcmVzcG9uc2UuZGF0YS5lbWFpbCxcbiAgICAgICAgICAgIGFtb3VudDogcmVzcG9uc2UuZGF0YS5hbW91bnQgKiAxMDAsXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJOR05cIixcbiAgICAgICAgICAgIHJlZjogcmVzcG9uc2UuZGF0YS5yZWYsXG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcblxuICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoYGBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9lc2Nyb3cvdHJhbnNhY3Rpb24vdmVyaWZ5LyR7cmVzLnJlZmVyZW5jZX0vJHtyZXMuc3RhdHVzfS9gYGApXG4gICAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGl6aVRvYXN0LmluZm8oe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGVJbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMzUwMCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc2x1Zykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2VzY3Jvdy9jb250cmFjdC9kZXRhaWwvJHtyZXNwb25zZS5kYXRhLnNsdWd9L2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DYW5jbGU6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBhd2FpdCBpemlUb2FzdC5pbmZvKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUUkFOU0FDVElPTiBGQUlMRURcIixcbiAgICAgICAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgdHJhbnNhY3Rpb24gY291bGQgbm90IGJlIGNvbXBsZXRlZCBhdCB0aGUgbW9tZW50LiBQbGVhc2UgdHJ5IGFnYWluIVwiLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSkuY2F0Y2goYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgIGF3YWl0IGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgYmFsbG9vbjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgICBhbmltYXRlSW5zaWRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICAgIHRpdGxlOiBcIkZvcm0gRXJyb3JcIixcbiAgICAgICAgICBiYWxsb29uOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJpZ2h0XCIsXG4gICAgICAgICAgYW5pbWF0ZUluc2lkZTogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHNsZWVwKDM1MDApO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhc3luYyByZWZyZXNoKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICBpc0VtYWlsKGVtYWlsKSB7XG4gICAgICAgIHZhciByZSA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICAgIH0sXG5cbiAgICBpc0VtcHR5KGVsKSB7XG4gICAgICAgIGlmIChlbC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBzbGVlcCgyNTAwKTtcbiAgICAgIHRoaXMuc3RlcCArKztcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJhY3RfdHlwZScpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyYWN0X3R5cGUnKS52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gY29udHJhY3Q7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgY2hlY2tWYWxpZGl0eSgpIHtcbiAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBDb250cmFjdCBGb3JtXCIpO1xuICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuYW1lXVwiKS5mb3JFYWNoKChmaWVsZEVsZW1lbnQpID0+IHtcbiAgICAgICAgZmllbGRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgIHRoaXMudmFsaWRhdGVGaWVsZChmb3JtRWxlbWVudCwgZmllbGRFbGVtZW50LCB0aGlzLmZvcm1FcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemVkIENvbnRyYWN0IEZvcm1cIik7XG4gICAgfSxcblxuICAgIGNvbnRyYWN0VGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRpbmcgPyBcIlByb2Nlc3NpbmcuLi5cIiA6IFwiU3VibWl0XCI7XG4gICAgfSxcblxuICAgIHN0YWdlVHdvKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZSA9PT0gXCJTRVJWSUNFXCIgPyBcIlNlcnZpY2VcIiA6IFwiUHJvZHVjdHNcIjtcbiAgICB9LFxuXG4gICAgdmF1dG9maWxsKCkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuJHJlZnMuaXRlbTtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gIXRoaXMuYXV0b2NvbXBsZXRlO1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRfdmVuZG9yJykudmFsdWUgPSB0aGlzLiRyZWZzLnZlbmRvci5pbm5lclRleHQ7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRfdmVuZG9yX2VtYWlsJykudmFsdWUgPSB0aGlzLiRyZWZzLmVtYWlsLmlubmVyVGV4dDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF92ZW5kb3JfcGhvbmUnKS52YWx1ZSA9IHRoaXMuJHJlZnMucGhvbmUuaW5uZXJUZXh0O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkX3ZlbmRvcl9hZGRyZXNzJykudmFsdWUgPSB0aGlzLiRyZWZzLmFkZHJlc3MuaW5uZXJUZXh0O1xuICAgIH0sXG5cbiAgICBiYXV0b2ZpbGwoKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy4kcmVmcy5pdGVtO1xuICAgICAgdGhpcy5idXRvY29tcGxldGUgPSAhdGhpcy5idXRvY29tcGxldGU7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF9idXllcicpLnZhbHVlID0gdGhpcy4kcmVmcy5idXllci5pbm5lclRleHQ7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRfYnV5ZXJfZW1haWwnKS52YWx1ZSA9IHRoaXMuJHJlZnMuZW1haWwuaW5uZXJUZXh0O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkX2J1eWVyX3Bob25lJykudmFsdWUgPSB0aGlzLiRyZWZzLnBob25lLmlubmVyVGV4dDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZF9idXllcl9hZGRyZXNzJykudmFsdWUgPSB0aGlzLiRyZWZzLmFkZHJlc3MuaW5uZXJUZXh0O1xuICAgIH0sXG5cbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreU5hdigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3ZXI6IGZhbHNlLFxuICAgICAgICBzaG93TmF2OiB0cnVlLFxuICAgICAgICBuYXZUb3A6IGZhbHNlLFxuICAgICAgICBsYXN0U2Nyb2xsOiAwLFxuXG4gICAgICAgIGluaXRTdGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyIGFuZCB0aGVuIGFkZCBpdCB0byB0aGUgdG9wIHBhZGRpbmcgb2YgdGhlIG1haW4gY29udGVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcl9oID0gbmF2YmFyLm9mZnNldEhlaWdodCArIDEwO1xuXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKGBwdC1bJHtoZWFkZXJfaH1weF1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2Nyb2xsTmF2KCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsICYmIHRoaXMuc2hvd05hdiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOYXYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubmF2VG9wID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPCB0aGlzLmxhc3RTY3JvbGwgJiYgdGhpcy5zaG93TmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZUb3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYXdlciA9ICF0aGlzLmRyYXdlcjtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJYLUNTUkZUT0tFTlwiO1xuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVyc1snWC1DU1JGVG9rZW4nXSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuYXhpb3MuZGVmYXVsdHMudGltZW91dCA9IDE1MDAwO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJodG14IiwiQWxwaW5lIiwiaW50ZXJzZWN0IiwiZXRoZXJzIiwiYXhpb3MiLCJTdGlja3lOYXYiLCJDb250YWN0Rm9ybSIsIkNvbnRyYWN0RGV0YWlsRm9ybSIsIkNoYXJ0SnMiLCJTd2lwZXIiLCJkZXRlY3QiLCJ0aW55bWNlIiwiaXppVG9hc3QiLCJhbmltZSIsIlNjcm9sbE1hZ2ljIiwiQWNjb3VudEZvcm0iLCJDb250cmFjdEZvcm0iLCJsb3R0aWV3ZWIiLCJ3aW5kb3ciLCJzY3JvbGxNYWdpYyIsIml6aXRvYXN0IiwicGx1Z2luIiwiZGF0YSIsInN0YXJ0Iiwic3ciLCJob21lIiwiYnJvd3NlciIsIkFQUExJQ0FUSU9OX1NFUlZFUl9LRVkiLCJDUkVBVEVfV1BfREVWSUNFIiwiU0VORF9OT1RJRklDQVRJT04iLCJXRUJfUFVTSF9DRkciLCJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJzYXZlU3Vic2NyaWJlT2JqIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uSnNvbiIsInRvSlNPTiIsImVuZHBvaW50UGFydHMiLCJlbmRwb2ludCIsInNwbGl0IiwicmVnaXN0cmF0aW9uSWQiLCJwcmVkYXRhIiwic3RhdHVzX3R5cGUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJwMjU2ZGgiLCJrZXlzIiwiYXV0aCIsInVzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJnZXRVc2VyQWdlbnQiLCJyZWdpc3RyYXRpb25faWQiLCJncm91cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInN1YnNjcmliZU5vdGlmaWNhdGlvbkJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzdWNjZXNzIiwidGl0bGUiLCJiYWxsb29uIiwicG9zaXRpb24iLCJhbmltYXRlSW5zaWRlIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJzZXR1cFRyaWdnZXJCdXR0b24iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwib3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldHVwU3Vic2NyaWJlQnV0dG9uIiwicmVnIiwic3ViSnNvbiIsImhlYWQiLCJib2R5IiwiaW5mbyIsImRldGFpbCIsInNoYXJlQnV0dG9uIiwidXJsIiwiZGF0YXNldCIsInNoYXJlIiwidGV4dCIsInRvVXBwZXJDYXNlIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic2NvcGUiLCJyZWFkeSIsImFjdGl2ZSIsImluaXRpYWxpc2VTdGF0ZSIsImVyciIsInNob3dOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwid2FybmluZyIsInN1YiIsImluc3RhbGxCdXR0b24iLCJldmVudCIsImRlZmVycmVkUHJvbXB0IiwicHJvbXB0RXZlbnQiLCJwcm9tcHQiLCJ1c2VyQ2hvaWNlIiwiY2hvaWNlIiwiZm9yRWFjaCIsImV2dCIsImlzVmFsaWQiLCJpc0V4cGlyYXRpb25EYXRlVmFsaWQiLCJnZXRDcmVkaXRDYXJkTmFtZUJ5TnVtYmVyIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInZhbGlkYXRlRmllbGQiLCJmb3JtRWxlbWVudCIsImZpZWxkRWxlbWVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm92aWRlck4iLCJyZWFkT25seSIsImFjdGlvbiIsImVycm9ycyIsImVycm9yc1dyYXBwZXJFbGVtZW50IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZXJyb3JzSHRtbCIsIm1vbnRoIiwieWVhciIsIm51bWJlciIsInZhbGlkIiwiY2FyZF9ubyIsImltZyIsInZhbHVlIiwiZXhwaXJlZCIsInByb3ZpZGVyIiwidmNhcmQiLCJzcmMiLCJhdmF0YXIiLCJwcm9jZXNzaW5nIiwic3RlcCIsImNvbnRyYWN0VHlwZSIsInNlcnZpY2UiLCJpbml0U3RhdGUiLCJkcmF3ZXIiLCJtYWluIiwibmF2YmFyIiwiaGVhZGVyX2giLCJvZmZzZXRIZWlnaHQiLCJuYXZUb3AiLCJzaG93TmF2Iiwic2Nyb2xsTmF2IiwiY3VycmVudFNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwibGFzdFNjcm9sbCIsIm5leHQiLCJ2YWxpZGF0ZSIsIm1hcmtBbGxSZWFkIiwiZ2V0IiwibWFya1JlYWQiLCJpZCIsInN1Ym1pdEZvcm0iLCIkcmVmcyIsImZvcm0iLCJkaXYiLCJyZWRpcmVjdCIsImVycm9ydXJsIiwiY3NyZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwidGV4dGFyZWEiLCJwYXJlbnQiLCJnZXRDb250ZW50IiwiY2hlY2tWYWxpZGl0eSIsImFwcGVuZENoaWxkIiwic3RhdHVzIiwidXNlcm5hbWUiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInN1Ym1pdFNpZ251cEZvcm0iLCJzdWJtaXRDb2RlRm9ybSIsImVsIiwiZGVsZXRlRm9ybSIsInN3aXRjaEZvcm0iLCJzdWJtaXRVcGRhdGVGb3JtIiwiYWpheCIsInRhcmdldCIsInN3YXAiLCJzdWJtaXRFbWFpbENvbmZpcm1Gb3JtIiwic3VibWl0TG9naW5Gb3JtIiwic3VibWl0UGFzc3dvcmRGb3JtIiwic2hvd1Bhc3N3b3JkIiwieCIsInN1Ym1pdENvbnRyYWN0Iiwic2hvd1Npbmd1cFBhc3N3b3JkIiwieSIsInN1Ym1pdEZpbGVGb3JtIiwicmVwb3J0VmFsaWRpdHkiLCJ0b2dnbGVEcmF3ZXIiLCJnZXRCdG5UZXh0IiwiY29udHJhY3RUZXh0Iiwic3RhZ2VUd28iLCJDaGFydCIsImdldFJlbGF0aXZlUG9zaXRpb24iLCJkYXRhWCIsImRhdGFZIiwiZGF0YVoiLCJnZXREYXRhIiwiZGlyIiwiY2hhcnQiLCJnZXRDb250ZXh0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJhclBlcmNlbnRhZ2UiLCJiYXJUaGljbmVzcyIsIm1heEJhclRoaWNrbmVzcyIsIm1pbkJhckxlbmd0aCIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJkaXNwbGF5Iiwib25DbGljayIsImUiLCJjYW52YXNQb3NpdGlvbiIsInNjYWxlcyIsImdldFZhbHVlRm9yUGl4ZWwiLCJjb250YWN0Rm9ybSIsIlBheXN0YWNrUG9wIiwibG9hZGluZyIsInNob3dUb29sdGlwIiwic2hvd1Rvb2x0aXAyIiwib3BlblNlcnZpY2VNb2RhbCIsIm9wZW5NaWxlc3RvbmVNb2RhbCIsIm9wZW5Qcm9kdWN0TW9kYWwiLCJyZXRyeVBheW1lbnQiLCJzbHVnIiwiYW1vdW50IiwicGsiLCJlbWFpbCIsInJlZiIsImhhbmRsZXIiLCJuZXdUcmFuc2FjdGlvbiIsImtleSIsImN1cnJlbmN5Iiwib25TdWNjZXNzIiwicmVzIiwicmVmZXJlbmNlIiwib25DYW5jbGUiLCJyZWxvYWQiLCJwcmludEludm9pY2UiLCJwcmludENvbnRlbnRzIiwicHJpbnRUZW1wbGF0ZSIsIm9yaWdpbmFsQ29udGVudHMiLCJwcmludCIsImVtYWlsVGV4dCIsImF1dG9jb21wbGV0ZSIsImJ1dG9jb21wbGV0ZSIsImZvcm1FcnJvciIsImNyZWF0b3IiLCJjb250cmFjdF90aXRsZSIsImNvbnRyYWN0X3R5cGUiLCJsb2NhbGl6YXRpb24iLCJ2ZW5kb3IiLCJ2ZW5kb3JfcGhvbmUiLCJ2ZW5kb3JfZW1haWwiLCJ2ZW5kb3JfYWRkcmVzcyIsImJ1eWVyIiwiYnV5ZXJfcGhvbmUiLCJidXllcl9lbWFpbCIsImJ1eWVyX2FkZHJlc3MiLCJ0ZXJtc19hZ3JlZW1lbnQiLCJ0ZXJtc19mb3JfdGVybWluYXRpb24iLCJuZXh0MiIsIm5leHQzIiwibmV4dDQiLCJhZ3JlZW1lbnQiLCJiYWNrIiwibG9jIiwicmVmcmVzaCIsImlzRW1haWwiLCJyZSIsInRlc3QiLCJpc0VtcHR5IiwiY29udHJhY3QiLCJ2YXV0b2ZpbGwiLCJpdGVtIiwiaW5uZXJUZXh0IiwicGhvbmUiLCJhZGRyZXNzIiwiYmF1dG9maWxsIiwiZGVmYXVsdHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwidGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=