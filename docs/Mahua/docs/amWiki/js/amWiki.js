$(function(){"use strict";var n=window.tools,e=new AWDocs,t=new AWStorage,o=new AWSearch(t);if(window.AWTesting)var a=new AWTesting;var s="pushState"in history,r=$(window),i=($("body"),$("#menuIcon")),l=$("#container"),c=$("#nav"),f=$("#menuBar"),h=$("#menuFilter"),d=h.next("i"),v=$("#main"),u=v.children(".main-inner"),g=$("#mainSibling"),p=$("#contents"),m=window.isMobi=function(){var n=r.width(),e=720,t=function(){n=r.width(),n<=e?l.removeAttr("style"):l.height(r.height()-70-15-40)};return t(),r.on("resize",t),function(){return n<=e}}();!function(){f.on("click","h4",function(){var n=$(this);n.hasClass("on")||(n.addClass("on"),f.find("a").removeClass("on")),f.find("h5").removeClass("on").next("ul").hide()}),f.on("click","h5",function(){var n=$(this),e=n.next("ul");n.hasClass("on")?(n.removeClass("on"),e.slideUp(200,function(){f.trigger("scrollbar")})):(n.addClass("on"),e.slideDown(200,function(){f.trigger("scrollbar")}))}),f.on("click","strong",function(){var n=$(this),e=n.next("ul");n.hasClass("on")?(n.removeClass("on"),e.slideUp(200,function(){f.trigger("scrollbar")})):(n.addClass("on"),e.slideDown(200,function(){f.trigger("scrollbar")}))}),i.on("click",function(){var n=$(this);n.hasClass("close")?(n.removeClass("close").find("use").attr("xlink:href","#icon:navStart"),c.removeClass("on")):(n.addClass("close").find("use").attr("xlink:href","#icon:navClose"),c.addClass("on"))}),c.on("navchange searchon searchoff",function(){i.removeClass("close").find("use").attr("xlink:href","#icon:navStart"),c.removeClass("on")}),h.on("input propertychange input2",function(){var n=h.val().replace(/([\(\)\[\]\^\$\+])/g,"\\$1"),e=new RegExp("("+$.trim(h.val()).split(/[ ,]/).join("|")+")","ig");""==n||/^\s$/g.test(n)?(d.addClass("off"),f.find("h5").each(function(){C("open",null,$(this))}),t.setStates("navFilterKey")):(d.removeClass("off"),f.find("h5").each(function(){C("filter",e,$(this))}),t.setStates("navFilterKey",n)),f.trigger("scrollbar")}),d.on("click",function(){h.val("").trigger("input2")}),sessionStorage.AMWikiIconsSvg?$("#svgSymbols").append(sessionStorage.AMWikiIconsSvg):$.get("amWiki/images/icons.svg",function(n){sessionStorage.AMWikiIconsSvg=n,$("#svgSymbols").append(n)},"text"),p.children(".btn").on("click",function(){p.toggleClass("on").removeClass("hover")}),p.hover(function(){p.addClass("hover")},function(){p.removeClass("hover")}),$(".scroller").scrollbar(),$("#backTop").on("click",function(){u.scrollTop(0)}),$(document).on("click",function(n){var e=$(n.target);m()&&0==e.closest("#contents").length&&p.removeClass("on").removeClass("on")})}();var C=function(n,e,t){var o=t.next("ul"),a=t.find("span");"filter"==n&&e?e.test(a.text())?(a.html(a.text().replace(e,"<mark>$1</mark>")),t.addClass("on").removeClass("off"),o.show().find("> li > a").each(function(){var n=$(this),t=n.find("span");t.html(t.text().replace(e,"<mark>$1</mark>")),n.parent().removeClass("off")}),x(t),o.find("> li > strong").each(function(){C("open",e,$(this))})):(a.text(a.text()),t.removeClass("on"),t.is("h5")?t.parent().addClass("off"):t.addClass("off"),o.hide().find("> li > a").each(function(){var n=$(this),t=n.find("span");e.test(n.text())?(t.html(t.text().replace(e,"<mark>$1</mark>")),n.parent().removeClass("off"),x(o.show().prev())):(t.text(t.text()),n.parent().addClass("off"))}),o.find("> li > strong").each(function(){C("filter",e,$(this))})):"open"==n&&(t.removeClass("off"),t.hasClass("on")?o.show():o.hide(),e?(a.html(a.text().replace(e,"<mark>$1</mark>")),e.test(a.text())&&o.show(),o.find("> li > a").each(function(){var n=$(this),t=n.find("span");t.html(t.text().replace(e,"<mark>$1</mark>")),e.test(n.text())&&o.show(),n.parent().removeClass("off")}),x(t),o.find("> li > strong").each(function(){C("open",e,$(this))})):(a.text(a.text()),o.find("> li > a").each(function(){var n=$(this).find("span");n.text(n.text())}),o.children("li").removeClass("off").children("strong").each(function(){C("open",null,$(this))})))},x=function(n){if(n.addClass("on").removeClass("off"),!n.is("h5")){var e=n.parent().removeClass("off").parent().show().prev();x(e)}},k=function(n){if(!n)return void g.removeClass("on");var e=function(n,t){var o=t[n]();return 0==o.length?null:o.children("ul").length>0?e(n,o):o.children("a")},t=function(n,e){e?g.find("a").eq(n).attr("href",e.attr("href")).text(e.text()):g.find("a").eq(n).removeAttr("href").text("\u6ca1\u6709\u4e86")};t(0,e("prev",n)),t(1,e("next",n)),a&&a.isOpen()&&g.addClass("on")},w=function(n){if("\u9996\u9875"==n)f.find("h4").addClass("on"),f.find("a").removeClass("on"),k(null);else{var e=!1;f.find("a").each(function(){var t=$(this);if(t.attr("href").split("file=")[1]==n){e=!0;var o=t.addClass("on").parent().parent().show().prev().addClass("on");x(o),k(t.parent())}else t.removeClass("on")}),e&&f.find("h4").removeClass("on")}A=n,f.trigger("scrollbar")},b=function(n,o,r){var i=t.read(n);e.renderDoc(i),a&&a.crawlContent(),v.trigger("scrollbar"),u.scrollTop(0),!o&&s&&history.pushState({path:n},"","?file="+n),e.loadPage(n,function(o,l){"error"==o?""==i?(e.loadPage("\u9996\u9875",function(n,o){"success"==n&&(e.renderDoc(o),t.saveDoc("\u9996\u9875",o),v.trigger("scrollbar"))}),s&&history.replaceState({path:"\u9996\u9875"},"","?file=\u9996\u9875")):(t.increaseOpenedCount(n),r&&r()):"success"==o&&(l!=i&&(e.renderDoc(l),t.saveDoc(n,l),a&&a.crawlContent(),v.trigger("scrollbar")),t.increaseOpenedCount(n),r&&r())})},S=function(n){$.get("library/$navigation.md?t="+Date.now(),function(e){f.find(".scroller-content").html(marked(e)),f.find("h4").prepend('<svg><use xlink:href="#icon:navHome"></use></svg>').end().find("h5").each(function(){var n=$(this);n.html('<svg><use xlink:href="#icon:navArrow"></use></svg><span>'+n.text()+"</span>")}),f.trigger("scrollbar");var a=[];f.find("a").each(function(){var n=$(this);if(n.html("<span>"+n.text()+"</span>"),s){var e=n.attr("href").split("file=")[1];a.push(e),n.on("click",function(){return o.displayBox("off"),w(e),b(e),n.trigger("navchange"),!1})}}),g.find("a").on("click",function(){if(s){var n=$(this),e=n.attr("href");if(void 0!==e&&""!=e){var t=e.split("file=")[1];w(t),b(t),n.trigger("navchange")}return!1}}),f.find("strong").each(function(){var n=$(this);n.html("<span>"+n.text()+"</span>")});var r=t.getStates("navFilterKey");void 0!==r&&""!=r&&h.val(r).trigger("input2"),n&&n(a)},"text")},y=function(){var n=location.hash.split("#")[1];if(!n||""==n.length)return void(0!=u.scrollTop()&&u.scrollTop(0));var e=$('.anchor[name="'+n+'"]');0!=e.length&&u.scrollTop(e.position().top+u.scrollTop()-10)},A=n.getURLParameter("file");A=A?decodeURI(A):"\u9996\u9875",S(function(n){t.checkLibChange(n),w(A),b(A,!0,y)}),s&&r.on("popstate",function(e){var t;e.originalEvent.state?(t=e.originalEvent.state.path,w(t),b(t,!0,y)):(t=n.getURLParameter("file"),t=t?decodeURI(t):"\u9996\u9875",t!=A?(w(t),b(t,!0,y)):y())}),o.onNeedRebuildStorage=function(n){t.clearLibraries();for(var o,a=t.getIndexList(),s=0,r=function(o,r){setTimeout(function(){e.loadPage(o,function(e,r){"success"==e&&t.saveDocToDB(o,r),++s>=a.length&&(t.saveRebuild(),n&&n())})},100*r)},i=0;o=a[i];i++)r(o,i)}});