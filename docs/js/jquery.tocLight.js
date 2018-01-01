/*
 * jQuery Table of Content Generator Support for Jekyll v1.0
 *
 * https://github.com/dafi/jekyll-tocmd-generator
 * Examples and documentation at: https://github.com/dafi/jekyll-tocmd-generator
 *
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2013 Davide Ficano
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(t){t.toc={},t.toc.clickHideButton=function(e){var o={saveShowStatus:!1,hideText:"hide",showText:"show"};if(e&&t.extend(o,e),t("#toctogglelink").click(function(){var e=t(t("#toc ul")[0]);return e.is(":visible")?(e.hide(),t(this).text(o.showText),o.saveShowStatus&&t.cookie("toc-hide","1",{expires:365,path:"/"}),t("#toc").addClass("tochidden")):(e.show(),t(this).text(o.hideText),o.saveShowStatus&&t.removeCookie("toc-hide",{path:"/"}),t("#toc").removeClass("tochidden")),!1}),o.saveShowStatus&&t.cookie("toc-hide")){t(t("#toc ul")[0]).hide(),t("#toctogglelink").text(o.showText),t("#toc").addClass("tochidden")}}}(jQuery);