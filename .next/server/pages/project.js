module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/project.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { useRouter } from \"next/router\";\n// import Query from \"./components/query\";\n// import PROJECT_QUERY from \"../apollo/queries/project/project\";\n// import ReactMarkdown from \"react-markdown\";\n// const Project = () => {\n//   const router = useRouter();\n//   return (\n//     <Query query={PROJECT_QUERY} id={router.query.id}>\n//       {({ data: { project } }) => {\n//         const imageUrl =\n//           process.env.NODE_ENV !== \"development\"\n//             ? project.headImage.url\n//             : process.env.API_URL + project.headImage.url;\n//         const pdfUrl =\n//           process.env.NODE_ENV !== \"development\"\n//             ? project.download.url\n//             : process.env.API_URL + project.download.url;\n//         return (\n//           <div className=\"container animate__animated animate__fadeIn\">\n//             <style jsx global>{`\n//               body {\n//                 background-color: #151515;\n//                 background-image: radial-gradient(\n//                   circle at bottom right,\n//                   #2c2c2c,\n//                   #0c0c0c\n//                 );\n//                 background-attachment: fixed;\n//                 color: #f8f8ff;\n//               }\n//             `}</style>\n//             <nav aria-label=\"breadcrumb\">\n//               <ol className=\"breadcrumb small pt-4\">\n//                 <li className=\"breadcrumb-item active\">\n//                   <a href=\"/projects\">Projects</a>\n//                 </li>\n//                 <li className=\"breadcrumb-item\" aria-current=\"page\">\n//                   >_{project.title}\n//                 </li>\n//               </ol>\n//             </nav>\n//             <div className=\"animate__animated animate__fadeIn animate__slow\">\n//               <img\n//                 className=\"img-fluid border border-secondary mb-3\"\n//                 src={imageUrl}\n//                 alt={project.headImage.url}\n//                 height=\"200\"\n//               />\n//               <div className=\"d-flex flex-row justify-content-between\">\n//                 <h1>{project.title}</h1>\n//                 <p className=\"small text-muted text-right align-self-center\">\n//                   {project.creationDate}\n//                 </p>\n//               </div>\n//               <div className=\"d-flex flex-row pb-2\">\n//                 {project.categories.map((c, i) => (\n//                   <p key={i} className=\"small pr-1 text-muted\">\n//                     #{c.name}\n//                   </p>\n//                 ))}\n//               </div>\n//               <ReactMarkdown source={project.bio} />\n//               {project.link && (\n//                 <p className=\"mt-2 \">\n//                   <em>\n//                     Go have a look{\" \"}\n//                     <a href={project.link} target=\"blank\">\n//                       <u className=\"highlights\">here</u>.\n//                     </a>\n//                   </em>\n//                 </p>\n//               )}\n//               <div className=\"mt-4\">\n//                 <h2>> team</h2>\n//                 <p>{project.team}</p>\n//               </div>\n//               <div className=\"mt-4\">\n//                 <h2>> tools</h2>\n//                 <p>{project.tools}</p>\n//               </div>\n//               <img\n//                 className=\"img-fluid mt-4\"\n//                 src={\n//                   process.env.NODE_ENV !== \"development\"\n//                     ? project.images[0].url\n//                     : process.env.API_URL + project.images[0].url\n//                 }\n//                 alt={project.images[0].url}\n//                 height=\"200\"\n//               />\n//               <p className=\"small text-muted\">\n//                 <em>{project.images[0].caption}</em>\n//               </p>\n//               <div className=\"mt-4\">\n//                 <h2>> the brief</h2>\n//                 <ReactMarkdown source={project.briefing} />\n//               </div>\n//               <img\n//                 className=\"img-fluid mt-4\"\n//                 src={\n//                   process.env.NODE_ENV !== \"development\"\n//                     ? project.images[1].url\n//                     : process.env.API_URL + project.images[1].url\n//                 }\n//                 alt={project.headImage.url}\n//                 height=\"200\"\n//               />\n//               <p className=\"small text-muted\">\n//                 <em>{project.images[1].caption}</em>\n//               </p>\n//               <div className=\"mt-4\">\n//                 <h2>> the solution</h2>\n//                 <ReactMarkdown source={project.goal} />\n//               </div>\n//               <div className=\"mt-4 row row-cols-1 row-cols-md-2\">\n//                 {project.vids.map((m, i) => (\n//                   <div className=\"pb-2\" key={i}>\n//                     <video controls className=\"mb-2 pl-1 img-fluid\">\n//                       <source\n//                         src={\n//                           process.env.NODE_ENV !== \"development\"\n//                             ? m.url\n//                             : process.env.API_URL + m.url\n//                         }\n//                         type=\"video/mp4\"\n//                       />\n//                     </video>\n//                     <p className=\"small text-muted\">\n//                       <em>{m.caption}</em>\n//                     </p>\n//                   </div>\n//                 ))}\n//                 {project.images.map((m, i) => (\n//                   <div className=\"pb-2\" key={i}>\n//                     <img\n//                       src={\n//                         process.env.NODE_ENV !== \"development\"\n//                           ? m.url\n//                           : process.env.API_URL + m.url\n//                       }\n//                       alt={\n//                         process.env.NODE_ENV !== \"development\"\n//                           ? m.url\n//                           : process.env.API_URL + m.url\n//                       }\n//                       className=\"mb-2 pl-1 img-fluid \"\n//                     />\n//                     <p className=\"small text-muted\">\n//                       <em>{m.caption}</em>\n//                     </p>\n//                   </div>\n//                 ))}\n//               </div>\n//             </div>\n//           </div>\n//         );\n//       }}\n//     </Query>\n//   );\n// };\n// export default Project;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0LmpzPzk4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBRdWVyeSBmcm9tIFwiLi9jb21wb25lbnRzL3F1ZXJ5XCI7XG4vLyBpbXBvcnQgUFJPSkVDVF9RVUVSWSBmcm9tIFwiLi4vYXBvbGxvL3F1ZXJpZXMvcHJvamVjdC9wcm9qZWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuLy8gY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8UXVlcnkgcXVlcnk9e1BST0pFQ1RfUVVFUll9IGlkPXtyb3V0ZXIucXVlcnkuaWR9PlxuLy8gICAgICAgeyh7IGRhdGE6IHsgcHJvamVjdCB9IH0pID0+IHtcbi8vICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPVxuLy8gICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCJcbi8vICAgICAgICAgICAgID8gcHJvamVjdC5oZWFkSW1hZ2UudXJsXG4vLyAgICAgICAgICAgICA6IHByb2Nlc3MuZW52LkFQSV9VUkwgKyBwcm9qZWN0LmhlYWRJbWFnZS51cmw7XG5cbi8vICAgICAgICAgY29uc3QgcGRmVXJsID1cbi8vICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiXG4vLyAgICAgICAgICAgICA/IHByb2plY3QuZG93bmxvYWQudXJsXG4vLyAgICAgICAgICAgICA6IHByb2Nlc3MuZW52LkFQSV9VUkwgKyBwcm9qZWN0LmRvd25sb2FkLnVybDtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIj5cbi8vICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4vLyAgICAgICAgICAgICAgIGJvZHkge1xuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuLy8gICAgICAgICAgICAgICAgICAgY2lyY2xlIGF0IGJvdHRvbSByaWdodCxcbi8vICAgICAgICAgICAgICAgICAgICMyYzJjMmMsXG4vLyAgICAgICAgICAgICAgICAgICAjMGMwYzBjXG4vLyAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjZjhmOGZmO1xuLy8gICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4vLyAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iIHNtYWxsIHB0LTRcIj5cbi8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPlxuLy8gICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9qZWN0c1wiPlByb2plY3RzPC9hPlxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cbi8vICAgICAgICAgICAgICAgICAgID5fe3Byb2plY3QudGl0bGV9XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgPC9vbD5cbi8vICAgICAgICAgICAgIDwvbmF2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4gYW5pbWF0ZV9fc2xvd1wiPlxuLy8gICAgICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IG1iLTNcIlxuLy8gICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4vLyAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LmhlYWRJbWFnZS51cmx9XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbi8vICAgICAgICAgICAgICAgICA8aDE+e3Byb2plY3QudGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LW11dGVkIHRleHQtcmlnaHQgYWxpZ24tc2VsZi1jZW50ZXJcIj5cbi8vICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmNyZWF0aW9uRGF0ZX1cbi8vICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBwYi0yXCI+XG4vLyAgICAgICAgICAgICAgICAge3Byb2plY3QuY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcbi8vICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0gY2xhc3NOYW1lPVwic21hbGwgcHItMSB0ZXh0LW11dGVkXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICN7Yy5uYW1lfVxuLy8gICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9qZWN0LmJpb30gLz5cbi8vICAgICAgICAgICAgICAge3Byb2plY3QubGluayAmJiAoXG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBcIj5cbi8vICAgICAgICAgICAgICAgICAgIDxlbT5cbi8vICAgICAgICAgICAgICAgICAgICAgR28gaGF2ZSBhIGxvb2t7XCIgXCJ9XG4vLyAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QubGlua30gdGFyZ2V0PVwiYmxhbmtcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8dSBjbGFzc05hbWU9XCJoaWdobGlnaHRzXCI+aGVyZTwvdT4uXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgICAgIDwvZW0+XG4vLyAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICApfVxuXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuLy8gICAgICAgICAgICAgICAgIDxoMj4+IHRlYW08L2gyPlxuLy8gICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LnRlYW19PC9wPlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4vLyAgICAgICAgICAgICAgICAgPGgyPj4gdG9vbHM8L2gyPlxuLy8gICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LnRvb2xzfTwvcD5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXQtNFwiXG4vLyAgICAgICAgICAgICAgICAgc3JjPXtcbi8vICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCJcbi8vICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmltYWdlc1swXS51cmxcbi8vICAgICAgICAgICAgICAgICAgICAgOiBwcm9jZXNzLmVudi5BUElfVVJMICsgcHJvamVjdC5pbWFnZXNbMF0udXJsXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5pbWFnZXNbMF0udXJsfVxuLy8gICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtYWxsIHRleHQtbXV0ZWRcIj5cbi8vICAgICAgICAgICAgICAgICA8ZW0+e3Byb2plY3QuaW1hZ2VzWzBdLmNhcHRpb259PC9lbT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbi8vICAgICAgICAgICAgICAgICA8aDI+PiB0aGUgYnJpZWY8L2gyPlxuLy8gICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cHJvamVjdC5icmllZmluZ30gLz5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXQtNFwiXG4vLyAgICAgICAgICAgICAgICAgc3JjPXtcbi8vICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCJcbi8vICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmltYWdlc1sxXS51cmxcbi8vICAgICAgICAgICAgICAgICAgICAgOiBwcm9jZXNzLmVudi5BUElfVVJMICsgcHJvamVjdC5pbWFnZXNbMV0udXJsXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5oZWFkSW1hZ2UudXJsfVxuLy8gICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtYWxsIHRleHQtbXV0ZWRcIj5cbi8vICAgICAgICAgICAgICAgICA8ZW0+e3Byb2plY3QuaW1hZ2VzWzFdLmNhcHRpb259PC9lbT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbi8vICAgICAgICAgICAgICAgICA8aDI+PiB0aGUgc29sdXRpb248L2gyPlxuLy8gICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cHJvamVjdC5nb2FsfSAvPlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTJcIj5cbi8vICAgICAgICAgICAgICAgICB7cHJvamVjdC52aWRzLm1hcCgobSwgaSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yXCIga2V5PXtpfT5cbi8vICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGNvbnRyb2xzIGNsYXNzTmFtZT1cIm1iLTIgcGwtMSBpbWctZmx1aWRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtLnVybFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvY2Vzcy5lbnYuQVBJX1VSTCArIG0udXJsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCJcbi8vICAgICAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LW11dGVkXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGVtPnttLmNhcHRpb259PC9lbT5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzLm1hcCgobSwgaSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yXCIga2V5PXtpfT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZ1xuLy8gICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbS51cmxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9jZXNzLmVudi5BUElfVVJMICsgbS51cmxcbi8vICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtLnVybFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2Nlc3MuZW52LkFQSV9VUkwgKyBtLnVybFxuLy8gICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yIHBsLTEgaW1nLWZsdWlkIFwiXG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtYWxsIHRleHQtbXV0ZWRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8ZW0+e20uY2FwdGlvbn08L2VtPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKTtcbi8vICAgICAgIH19XG4vLyAgICAgPC9RdWVyeT5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project.js\n");

/***/ })

/******/ });