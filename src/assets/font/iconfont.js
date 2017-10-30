(function(window){var svgSprite='<svg><symbol id="icon-down-vote" viewBox="0 0 1024 1024"><path d="M281.088 19.456c11.776 12.288 12.8 27.136 12.8 30.72v520.192c0 22.528-9.216 36.864-16.896 44.544-17.408 17.92-41.984 17.92-44.544 17.92H80.384C40.96 632.832 26.112 600.576 25.6 578.56v-1.536L57.344 60.416C57.856 19.968 90.624 5.12 112.64 5.12h131.584c19.456 0 30.72 7.68 36.864 14.336z m-32.768 31.232v-0.512 0.512zM80.384 586.24h152.064c0.512 0 8.192-0.512 12.288-4.608 0.512-0.512 3.072-3.072 3.072-11.264V52.224c-1.024-0.512-2.048-0.512-4.096-0.512H112.64c-9.728 0.512-9.728 6.144-9.728 9.728v1.536L71.68 578.56c0.512 7.68 5.632 7.68 8.704 7.68zM900.608 117.76v0.512c49.152 169.472 72.192 276.48 82.944 336.384 9.216 52.736 12.8 79.36 11.776 93.696 0 33.792-13.312 53.248-24.576 64-24.064 22.528-55.808 22.016-62.976 21.504h-223.232c36.352 152.064 32.256 263.68-13.312 331.264-34.304 50.688-79.872 56.832-81.92 56.832h-2.56c-77.312 0-81.408-57.856-82.432-76.8-0.512-2.048-0.512-3.584-0.512-4.608-1.024-2.56-1.536-5.632-1.536-8.192 0-166.4-177.664-302.08-179.2-303.616-5.632-4.608-9.216-11.776-9.216-18.944V97.28c0-65.024 76.288-92.16 117.248-92.16h381.44c47.616 0 76.8 78.336 88.064 112.64z m-352.256 811.52c1.024 4.096 1.024 8.704 1.536 13.312 1.536 18.944 2.048 32.768 34.816 33.28 5.12-1.024 29.184-7.68 49.152-38.4 26.624-41.984 48.64-131.584-2.048-321.024-1.536-7.168-0.512-14.848 4.096-20.48s11.264-9.216 18.432-9.216h255.488c5.12 0.512 19.968-0.512 29.184-9.216 6.656-6.144 9.728-16.384 9.728-29.696v-0.512c0-5.12-3.072-104.96-93.184-416.256-11.264-37.888-32.768-76.8-43.008-79.36H431.104c-19.456 0-71.168 14.336-71.168 45.568v501.248c38.912 32.256 185.856 163.328 188.416 330.752z m329.216-805.376zM505.344 944.128z"  ></path></symbol><symbol id="icon-up-vote" viewBox="0 0 1024 1024"><path d="M244.224 1021.952H112.64c-22.016 0-54.784-14.848-55.296-55.296L25.6 450.048v-1.536C26.112 426.496 40.96 394.24 80.384 394.24h152.064c2.56 0 27.136 0 44.544 17.92 7.68 7.68 16.896 22.016 16.896 44.544v520.192c0 3.584-1.024 18.432-12.8 30.72-6.144 6.656-17.408 14.336-36.864 14.336z m4.096-45.568v0zM71.68 448.512l31.232 515.584v1.536c0 3.584 0 9.216 9.728 9.728h131.072c2.048 0 3.072 0 4.096-0.512V456.704c0-8.192-2.56-10.752-3.072-11.264-4.096-4.096-11.776-4.608-12.288-4.608H80.384c-3.072 0-8.192 0-8.704 7.68zM812.544 1021.952H431.104c-40.96 0-117.248-27.136-117.248-92.16V417.28c0-7.168 3.584-14.336 9.216-18.944 1.536-1.536 179.2-137.216 179.2-303.616 0-2.56 0.512-5.632 1.536-8.192 0-1.024 0-2.56 0.512-4.608 1.024-18.944 5.12-76.8 82.432-76.8h2.56c2.048 0 47.616 6.144 81.92 56.832 45.568 67.584 49.664 179.2 13.312 331.264h223.232c7.168-0.512 38.912-1.024 62.976 21.504 11.264 10.752 24.576 30.208 24.576 64 1.024 14.336-2.56 40.96-11.776 93.696-10.752 59.904-33.792 166.912-82.944 336.384v0.512c-11.264 34.304-40.448 112.64-88.064 112.64zM359.936 428.544v501.248c0 31.232 51.712 45.568 71.168 45.568h381.44c10.24-2.56 31.744-41.472 43.008-79.36 90.112-311.296 93.184-411.136 93.184-416.256v-0.512c0-13.312-3.072-23.552-9.728-29.696-9.216-8.704-24.064-9.728-29.184-9.216h-255.488c-7.168 0-13.824-3.584-18.432-9.216-4.608-5.632-5.632-13.312-4.096-20.48 50.688-189.44 28.672-279.04 2.048-321.024-19.968-30.72-44.032-37.376-49.152-38.4-32.768 0.512-33.28 14.336-34.816 33.28-0.512 4.608-0.512 9.216-1.536 13.312-2.56 167.424-149.504 298.496-188.416 330.752z m517.632 474.624zM505.344 82.944z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)