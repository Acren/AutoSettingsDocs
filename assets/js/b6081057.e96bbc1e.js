"use strict";(self.webpackChunkautosettings_docs_2=self.webpackChunkautosettings_docs_2||[]).push([[333],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,i(i({ref:e},c),{},{components:n})):o.createElement(d,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},255:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:9},s="Platforms",p={unversionedId:"Info/platforms",id:"Info/platforms",title:"Platforms",description:"Non-windows platforms",source:"@site/docs/Info/platforms.md",sourceDirName:"Info",slug:"/Info/platforms",permalink:"/AutoSettingsDocs/Info/platforms",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Example Project",permalink:"/AutoSettingsDocs/Info/example-project"},next:{title:"Versions",permalink:"/AutoSettingsDocs/Info/versions"}},c={},u=[{value:"Non-windows platforms",id:"non-windows-platforms",level:2}],m={toc:u};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platforms"},"Platforms"),(0,a.kt)("h2",{id:"non-windows-platforms"},"Non-windows platforms"),(0,a.kt)("p",null,"Auto Settings is primarily developed and tested using Windows."),(0,a.kt)("p",null,"Other platforms are not officially supported or tested as a target platform, but all of the plugin functionality is platform-independent and in fact multiple users have confirmed full compatibility with various other platforms."),(0,a.kt)("p",null,"The project will need to support code and compile through Visual Studio or another IDE to support non-Windows platforms."),(0,a.kt)("p",null,"To allow the plugin to compile on other platforms:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the plugin files from the engine to your own project."),(0,a.kt)("li",{parentName:"ol"},"Either add the new platforms to the ",(0,a.kt)("inlineCode",{parentName:"li"},"WhitelistPlatforms")," section in the ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoSettings.uplugin")," file, or remove the whitelist section to allow it to be compiled on every platform.")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The plugin files are typically be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"Epic Games/<Version>/Engine/Plugins/Marketplace/AutoSettings"),"."),(0,a.kt)("p",{parentName:"div"},"After copying them to your own project, the directory should be ",(0,a.kt)("inlineCode",{parentName:"p"},"<ProjectName>/Plugins/AutoSettings"),"."))),(0,a.kt)("p",null,"Platforms that have been known to work other than Windows include ",(0,a.kt)("strong",{parentName:"p"},"macOS"),", ",(0,a.kt)("strong",{parentName:"p"},"Linux"),", ",(0,a.kt)("strong",{parentName:"p"},"Xbox"),", ",(0,a.kt)("strong",{parentName:"p"},"PS4"),", and ",(0,a.kt)("strong",{parentName:"p"},"Switch"),". Others may not have been tested yet."))}f.isMDXComponent=!0}}]);