// This is the scss entry file
import "../styles/index.scss";
import htmx from "htmx.org/dist/htmx";
import Alpine from "alpinejs";
import intersect from '@alpinejs/intersect';
import { ethers } from "ethers";
import axios from "../components/axiosFactory";
import StickyNav from "../components/StickyNav";
import ContactForm from "../components/ContactForm";
import ContractDetailForm from "../components/ContractDetailForm";
import ChartJs from "../components/ChartJs";
import Swiper from "swiper";
import { detect } from "detect-browser";
import "izitoast/dist/css/iziToast.min.css";

// tinymce
import tinymce from 'tinymce/tinymce.min.js';
import 'tinymce/icons/default/icons.js';
import 'tinymce/themes/silver/theme.js';
import 'tinymce/skins/content/default/content.min.css';
import 'tinymce/skins/content/default/content.css';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/models/dom/model.js';


import iziToast from "izitoast/dist/js/iziToast.min.js";
import "@lottiefiles/lottie-player";
import "flowbite";
import anime from "animejs/lib/anime.es.js";
import ScrollMagic from "scrollmagic";
// import ContactForm from "../components/ContactForm";
import AccountForm from "../components/AccountForm";
import ContractForm from "../components/ContractForm";
import lottieweb from "lottie-web";

// Global Initializations for importedlibraries //
//----------------------------------------------------------
// initialize htmx
window.htmx = htmx;
// // initialize tinymce
window.tinymce = tinymce;
// initialize lottie web and lottie player
window.lottieweb = lottieweb;
// initialize animejs
window.anime = anime;
window.scrollMagic = ScrollMagic;
// initialize ether js for crypto payment
window.ethers = ethers;
// initialize axios async post|get request
window.axios = axios;
// initialize swiper.js
window.Swiper = Swiper;
// initiailize izitoast alerts
window.izitoast = iziToast;
// Alpine JS Scripts
window.Alpine = Alpine;
Alpine.plugin(intersect);
Alpine.data("AccountForm", AccountForm);
Alpine.data('ContractForm', ContractForm);
Alpine.data('ContactForm', ContactForm),
Alpine.data('StickyNav', StickyNav);
Alpine.data('ContractDetailForm', ContractDetailForm);
Alpine.data('ChartJs', ChartJs);
Alpine.start();
//----------------------------------------------------------

// set service worker link and scope start link
//----------------------------------------------------------
const sw = "/sw.js";
const home = "/";
// detect browser type
const browser = detect();
// get global variables from the base.html file for
// push notification and pwa install button
//----------------------------------------------------------
const { APPLICATION_SERVER_KEY, CREATE_WP_DEVICE, SEND_NOTIFICATION } =
  window.WEB_PUSH_CFG;
//----------------------------------------------------------

// generate key for push notifications
//----------------------------------------------------------
function urlBase64ToUint8Array(base64String) {
  // https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6#file-urlbase64touint8array-js
  var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
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
    group: "users",
  };

  const data = JSON.stringify(predata);

  axios
    .post(CREATE_WP_DEVICE, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (process.env.NODE_ENV === "development") {
        const subscribeNotificationButton = document.getElementById(
          "subscribeNotificationButton"
        );
        subscribeNotificationButton.classList.toggle("hidden", true);

        iziToast.success({
          title: "[PUSH NOTIFICATION SUBSCRIPTION]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `Subscription Sent Successfully ${response.statusText}`,
        });

        // if subscription is successfully saved to the server
        // then enable the test notification push button to be visible
        setupTriggerButton(subscription);
      }
    })
    .catch(function (error) {
      if (process.env.NODE_ENV === "development") {
        console.log(error);
        iziToast.error({
          title: "[PUSH NOTIFICATION SERVER]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `Notification Subscription ${error.message}`,
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
    userVisibleOnly: true, // required by chrome
    applicationServerKey: urlBase64ToUint8Array(APPLICATION_SERVER_KEY),
  };

  registration.pushManager.subscribe(options).then(
    // requesting to subscribe from the server
    function (subscription) {
      if (process.env.NODE_ENV === "development") {
        console.log(`subscription: `, subscription);
        console.log(subscription.endpoint);
      }

      // subscription is now saved to the server
      saveSubscribeObj(subscription);
      if (process.env.NODE_ENV === "development") {
        iziToast.success({
          title: "[PUSH NOTIFICATION SUBSCRIPTION]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `Subscription Sent Successfully`,
        });
      }
    },

    // if there is an error figure the error and throw an appropraite error message to
    // the user so he knows exactly what is wrong and can move forward or adjust for a
    // device.
    function (error) {
      if (process.env.NODE_ENV === "development") {
        console.log(error);
        iziToast.error({
          title: "[PUSH NOTIFICATION SUBSCRIPTION]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: `${error}`,
        });
      }
    }
  );
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
    const subscribeNotificationButton = document.getElementById(
      "subscribeNotificationButton"
    );
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
    body: "This is how our push notifications shall be appearing on your device.",
  };

  const data = JSON.stringify(predata);

  axios
    .post(SEND_NOTIFICATION, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      iziToast.info({
        title: "[PUSH NOTIFICATION TEST SUCCESSFUL]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: response.data.message,
      });
    })
    .catch(function (error) {
      iziToast.error({
        title: "[PUSH NOTIFICATION TEST ERROR]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: error.response.data.detail,
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
      navigator
        .share({
          title: title,
          text: `Check out ${title.toUpperCase()}.`,
          url: url,
        })
        .then(() =>
          iziToast.success({
            title: "[SHARE PAGE]",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: `Successfully share ${url}`,
          })
        )
        .catch((error) =>
          iziToast.error({
            title: "[SHARE PAGE ERROR]",
            balloon: true,
            position: "topRight",
            animateInside: true,
            message: error,
          })
        );
    }
  });
}
//----------------------------------------------------------

// enable service worker, then when service worker is enabled request
// permission for push notification and location services from the browser
//----------------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(sw, { scope: home })
      .then((registration) => {
        if (process.env.NODE_ENV === "development") {
          console.log("Service worker registeration succeeded: ", registration);
        }

        navigator.serviceWorker.ready.then(function (registration) {
          if (process.env.NODE_ENV === "development") {
            console.log("Service worker is active: ", registration.active);
          }

          initialiseState(registration);
        });
      })
      .catch((err) => {
        iziToast.error({
          title: "[SERVICE WORKER]",
          balloon: true,
          position: "topRight",
          animateInside: true,
          message: "Service Worker Failed to Register",
        });

        if (process.env.NODE_ENV === "development") {
          console.log(err);
        }
      });
  });
}

const initialiseState = (reg) => {
  if (!reg.showNotification) {
    iziToast.error({
      title: "[PUSH UNSUPPORTED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Showing <strong>PUSH NOTIFICATIONS</strong> is unsupported",
    });
    return;
  }

  if (Notification.permission === "denied") {
    iziToast.warning({
      title: "[PUSH DENIED]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message:
        "You prevented us from shwoing notifications. Manually check if you have prevented push notifcation from us.",
    });
    return;
  }

  if (!("PushManager" in window)) {
    iziToast.info({
      title: "[PUSH BROWSER UNAVAILBALE]",
      balloon: true,
      position: "topRight",
      animateInside: true,
      message: "Push notification is not allowed in your browser.",
    });
    return;
  }

  reg.pushManager.getSubscription().then((sub) => {
    console.log("Registration Object", reg);
    if (!sub || sub === null) {
      setupSubscribeButton(reg);
    } else if (sub !== null) {
      console.log("Subscribe Already Done");
      // setupTriggerButton(sub);
      iziToast.info({
        title: "[SERVICE WORKER]",
        balloon: true,
        position: "topRight",
        animateInside: true,
        message: "Push notification has already been subscribed to",
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
  window.addEventListener("beforeinstallprompt", (event) => {
    if (process.env.NODE_ENV === "development") {
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
    if (process.env.NODE_ENV === "development") {
      console.log("👍[PWA] Install Button Clicked");
    }

    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available. so return nothing
      return;
    }
    promptEvent.prompt();
    promptEvent.userChoice.then((choice) => {
      if (process.env.NODE_ENV === "development") {
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
window.addEventListener("appinstalled", (event) => {
  if (process.env.NODE_ENV === "development") {
    console.log("👍[PWA] Installed State: ", event);
  }

  iziToast.info({
    title: `[SERVICE WORKER]`,
    balloon: true,
    position: "topRight",
    animateInside: true,
    message: "Trustscrow Appreciates Your Support.",
  });
});
//----------------------------------------------------------

[
  "htmx:onLoad",
  "htmx:load",
  "load",
  "htmx:afterSwap",
  "htmx:afterOnLoad",
  "htmx:afterRequest",
].forEach((evt) => {
  window.addEventListener(evt, function () {
    return;
  });
});
