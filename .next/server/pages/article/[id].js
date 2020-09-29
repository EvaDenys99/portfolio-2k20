module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aEv4");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/nav.js
var __jsx = external_react_default.a.createElement;



function Nav() {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  return __jsx(external_react_default.a.Fragment, null, __jsx("nav", {
    className: "navbar sticky-top navbar-expand"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "/"
  }, __jsx("svg", {
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 24 24",
    className: "navbar-brand-logo",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    id: "New-Officieel",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("g", {
    id: "mobile-home",
    transform: "translate(-16.000000, -16.000000)",
    fillRule: "nonzero"
  }, __jsx("g", {
    id: "Group",
    transform: "translate(16.000000, 16.000000)"
  }, __jsx("g", {
    id: "logo",
    transform: "translate(0.000000, 0.000000)"
  }, __jsx("polygon", {
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#403f3f" : "#F8F8FF",
    points: "5.05107692 3.60737081e-14 5.05107692 1.31261538 1.58169231 1.31261538 1.58169231 15.144 5.07046154 15.144 5.07046154 16.4570769 -2.86949951e-14 16.4570769 -2.86949951e-14 3.60737081e-14"
  }), __jsx("polygon", {
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#403f3f" : "#F8F8FF",
    points: "18.9424615 16.4570769 18.9424615 15.144 22.4118462 15.144 22.4118462 1.31307692 18.9230769 1.31307692 18.9230769 0 23.9958462 0 23.9958462 16.4570769"
  }), __jsx("path", {
    d: "M8.96030753,15.8224615 C8.96336082,15.4337089 9.28044251,15.1207474 9.66920179,15.122769 C10.0579611,15.1248103 10.3717548,15.4410684 10.3707475,15.8298317 C10.3697354,16.218595 10.0543031,16.5332308 9.66553846,16.5332308 C9.27505042,16.5304398 8.96004398,16.2129595 8.96030753,15.8224615 L8.96030753,15.8224615 Z",
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9"
  }), __jsx("path", {
    d: "M11.3584609,15.8169231 C11.3617686,15.4282331 11.6789605,15.1155036 12.0676583,15.1176921 C12.4563561,15.1199036 12.7699877,15.4362036 12.7688976,15.8249061 C12.7678018,16.2136086 12.4523964,16.5281538 12.0636923,16.5281538 C11.6730241,16.5253618 11.3579439,16.2076009 11.3584609,15.8169231 Z",
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9"
  }), __jsx("path", {
    d: "M13.753846,15.8224615 C13.7568993,15.4337089 14.073981,15.1207474 14.4627403,15.122769 C14.8514995,15.1248103 15.1652933,15.4410684 15.164286,15.8298317 C15.1632738,16.218595 14.8478415,16.5332308 14.4590769,16.5332308 C14.0685889,16.5304398 13.7535824,16.2129595 13.753846,15.8224615 L13.753846,15.8224615 Z",
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9"
  }), __jsx("polygon", {
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9",
    points: "13.986 8.95569231 15.6636923 8.96030769 15.6549231 1.34123077 17.8744615 1.32738462 17.8744615 0.000461538462 13.9883077 0.036"
  }), __jsx("polygon", {
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9",
    points: "15.7015385 15.1596923 15.7038462 16.4524615 17.8864615 16.4635385 17.8924615 15.1573846"
  }), __jsx("path", {
    d: "M6.25523077,15.1795385 L6.25523077,16.4935385 L8.42076923,16.4935385 L8.42076923,15.1707692 C8.42076923,15.1707692 6.25523077,15.1647692 6.25523077,15.1795385 Z",
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9"
  }), __jsx("path", {
    d: "M5.17338462,7.19676923 L5.17338462,8.96307692 L11.2010769,8.96307692 L11.2010769,7.2 C11.2010769,7.2 5.17338462,7.17461538 5.17338462,7.19676923 Z",
    id: "Path",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9"
  }), __jsx("rect", {
    id: "Rectangle",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#951d4d" : "#6DECB9",
    x: "6.23492308",
    y: "0.0378461538",
    width: "5.328",
    height: "1.32415385"
  })))))), !menuOpen && __jsx("span", {
    className: "navbar-brand-text small"
  }, ">_", __jsx("span", {
    className: "highlights"
  }, "E"), "va", " ", __jsx("span", {
    className: "highlights"
  }, "D"), "enys")), __jsx("div", {
    className: "mr-auto"
  }), __jsx("ul", {
    className: "navbar-nav"
  }, menuOpen ? __jsx("li", {
    className: "nav-item nav-item-responsive",
    onClick: () => setMenuOpen(false)
  }, __jsx("svg", {
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 16 16",
    className: "bi bi-x",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }))) : __jsx("li", {
    className: "nav-item nav-item-responsive",
    onClick: () => setMenuOpen(true)
  }, __jsx("svg", {
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 16 16",
    className: "bi bi-text-right",
    fill: router.route === "/blog" || router.route === "/article/[id]" ? "#403f3f" : "#f8f8ff",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
  }))), __jsx("li", {
    className: router.route === "/" ? "nav-item nav-item-big nav-item-active thick" : "nav-item nav-item-big"
  }, __jsx("a", {
    className: "nav-link",
    href: "/"
  }, router.route === "/" ? "> Home" : "Home")), __jsx("li", {
    className: router.route === "/projects" || router.route === "/project/[id]" ? "nav-item nav-item-big nav-item-active thick" : "nav-item nav-item-big"
  }, __jsx("a", {
    className: "nav-link",
    href: "/projects"
  }, router.route === "/projects" || router.route === "/project/[id]" ? "> Projects" : "Projects")), __jsx("li", {
    className: router.route === "/blog" || router.route === "/article/[id]" ? "nav-item nav-item-big nav-item-active thick" : "nav-item nav-item-big"
  }, __jsx("a", {
    className: "nav-link",
    href: "/blog"
  }, router.route === "/blog" || router.route === "/article/[id]" ? "> Blog" : "Blog")))), menuOpen && __jsx("ul", {
    className: "overlay-menu navbar-nav"
  }, __jsx("div", {
    className: "overlay-items"
  }, __jsx("li", {
    className: router.route === "/" ? "nav-item nav-item-active thick animate__animated animate__fadeInRight animate__faster" : "nav-item animate__animated animate__fadeInRight"
  }, __jsx("a", {
    className: "nav-link",
    href: "/"
  }, router.route === "/" ? "> Home" : "Home")), __jsx("li", {
    className: router.route === "/projects" || router.route === "/project/[id]" ? "nav-item overlay-item nav-item-active thick animate__animated animate__fadeInRight" : "nav-item overlay-item animate__animated animate__fadeInRight"
  }, __jsx("a", {
    className: "nav-link",
    href: "/projects"
  }, router.route === "/projects" || router.route === "/project/[id]" ? "> Projects" : "Projects")), __jsx("li", {
    className: router.route === "/blog" || router.route === "/article/[id]" ? "nav-item overlay-item nav-item-active thick animate__animated animate__fadeInRight animate__slow" : "nav-item overlay-item animate__animated animate__fadeInRight animate__slow"
  }, __jsx("a", {
    className: "nav-link",
    href: "/blog"
  }, router.route === "/blog" || router.route === "/article/[id]" ? "> Blog" : "Blog")))));
}

/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./components/layout.js

var layout_jsx = external_react_default.a.createElement;



const Layout = ({
  children
}) => layout_jsx(external_react_default.a.Fragment, null, layout_jsx(head_default.a, null, layout_jsx("title", null, "Eva Denys"), layout_jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), layout_jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
})), layout_jsx(nav, null), children);

/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "aEv4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qoWs");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CafY");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Article = ({
  article
}) => {
  const imageUrl = true ? article.headImage.url : undefined;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx("div", {
    className: "jsx-3703438055" + " " + "container animate__animated animate__fadeIn"
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3703438055"
  }, [".highlights,a:hover{color:#951d4d;}", "@media only screen and (min-width:0px){.nav-item{color:#f8f8ff;}.nav-item-active{color:#05f0b5;}}", "@media only screen and (min-width:720px){.nav-item{color:#403f3f;}.nav-item-active{color:#951d4d;}}"]), __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "jsx-3703438055"
  }, __jsx("ol", {
    className: "jsx-3703438055" + " " + "breadcrumb small pt-4"
  }, __jsx("li", {
    className: "jsx-3703438055" + " " + "breadcrumb-item active"
  }, __jsx("a", {
    href: "/blog",
    className: "jsx-3703438055"
  }, "Blogposts")), __jsx("li", {
    "aria-current": "page",
    className: "jsx-3703438055" + " " + "breadcrumb-item"
  }, ">_", article.title))), __jsx("div", {
    className: "jsx-3703438055" + " " + "animate__animated animate__fadeIn animate__slow"
  }, __jsx("img", {
    src: imageUrl,
    alt: article.headImage.url,
    height: "200",
    className: "jsx-3703438055" + " " + "img-fluid border border-info mb-3"
  }), __jsx("div", {
    className: "jsx-3703438055" + " " + "d-flex flex-row justify-content-between"
  }, __jsx("h1", {
    className: "jsx-3703438055"
  }, article.title), __jsx("div", {
    className: "jsx-3703438055"
  }, __jsx("p", {
    className: "jsx-3703438055" + " " + "small text-muted text-right"
  }, "By ", article.createdBy), __jsx("p", {
    className: "jsx-3703438055" + " " + "small text-muted text-right"
  }, article.creationdate))), __jsx("div", {
    className: "jsx-3703438055" + " " + "d-flex flex-row pb-2"
  }, article.categories.map((c, i) => __jsx("p", {
    key: i,
    className: "jsx-3703438055" + " " + "small pr-1 text-muted"
  }, "#", c.name))), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: article.description
  }), __jsx("img", {
    src: true ? article.images[0].url : undefined,
    alt: article.images[0].url,
    height: "200",
    className: "jsx-3703438055" + " " + "img-fluid mt-4"
  }), __jsx("p", {
    className: "jsx-3703438055" + " " + "small text-muted"
  }, __jsx("em", {
    className: "jsx-3703438055"
  }, article.images[0].caption)), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "mt-4",
    source: article.content
  }), __jsx("div", {
    className: "jsx-3703438055" + " " + "mt-4 row row-cols-1 row-cols-md-2"
  }, article.images.map((m, i) => __jsx("div", {
    key: i,
    className: "jsx-3703438055" + " " + "pb-2"
  }, __jsx("img", {
    src: true ? m.url : undefined,
    alt: true ? m.url : undefined,
    className: "jsx-3703438055" + " " + "mb-2 pl-1 img-fluid"
  }), __jsx("p", {
    className: "jsx-3703438055" + " " + "small text-muted"
  }, __jsx("em", {
    className: "jsx-3703438055"
  }, m.caption)))), article.videos.map((m, i) => __jsx("div", {
    key: i,
    className: "jsx-3703438055" + " " + "pb-2"
  }, __jsx("video", {
    controls: true,
    className: "jsx-3703438055" + " " + "mb-2 pl-1 img-fluid"
  }, __jsx("source", {
    src: true ? m.url : undefined,
    type: "video/mp4",
    className: "jsx-3703438055"
  }), "Your browser does not support HTML video."), __jsx("p", {
    className: "jsx-3703438055" + " " + "small text-muted"
  }, __jsx("em", {
    className: "jsx-3703438055"
  }, m.caption))))))));
};

async function getStaticPaths() {
  const articles = (await Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__[/* getArticles */ "b"])()) || [];
  return {
    paths: articles.map(article => ({
      params: {
        id: article.id
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const article = (await Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__[/* getArticle */ "a"])(params.id)) || [];
  return {
    props: {
      article
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCategoryProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCategoryArticles; });
async function fetchAPI(query, {
  variables
} = {}) {
  const res = await fetch(`${"https://portfolio-backend-strapi.herokuapp.com"}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

async function getProjects() {
  const data = await fetchAPI(`query Projects {
        projects {
          id
          title
          creationDate
          headImage {
            url
          }
          categories {
            id
            name
          }
        }
      }`);
  return data.projects;
}
async function getProject(id) {
  const data = await fetchAPI(`query Projects($id: ID!) {
        project(id: $id) {
          id
          title
          bio
          creationDate
          headImage {
            url
            caption
          }
          images {
            url
            caption
          }
          vids {
            url
            caption
          }
          categories {
            id
            name
          }
          team
          client
          tools
          link
          briefing
          goal
          download {
            url
            name
          }
        }
      }`, {
    variables: {
      id
    }
  });
  return data.project;
}
async function getArticles() {
  const data = await fetchAPI(`query Blogs {
        blogs {
          id
          title
          creationdate
          description
          headImage {
            url
          }
          categories {
            id
            name
          }
        }
      }`);
  return data.blogs;
}
async function getArticle(id) {
  const data = await fetchAPI(`query Blogs($id: ID!) {
        blog(id: $id) {
          id
          title
          content
          creationdate
          headImage {
            url
            caption
          }
          images {
            url
            caption
          }
          videos {
            url
            caption
          }
          categories {
            id
            name
          }
          createdBy
          description
        }
      }`, {
    variables: {
      id
    }
  });
  return data.blog;
}
async function getCategories() {
  const data = await fetchAPI(`query Categories {
      categories {
        id
        name
      }
    }`);
  return data.categories;
}
async function getCategoryProjects(id) {
  const data = await fetchAPI(`query Category($id: ID!) {
        category(id: $id) {
          name
          projects {
            id
            title
            creationDate
            headImage {
              url
            }
            categories {
              id
              name
            }
          }
        }
      }`, {
    variables: {
      id
    }
  });
  return data.category.projects;
}
async function getCategoryArticles(id) {
  const data = await fetchAPI(`query Category($id: ID!) {
        category(id: $id) {
          name
          blogs {
            id
            title
            creationdate
            description
            headImage {
              url
            }
            categories {
              id
              name
            }
          }
        }
      }`, {
    variables: {
      id
    }
  });
  return data.category.blogs;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });