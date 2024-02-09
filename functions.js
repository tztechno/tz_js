#####################################################
#####################################################
#####################################################
#####################################################
  if (typeof console == "undefined") {window.console={log: function () {}};console.warn = console.debug = console.log;}
#####################################################
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/ibbotson.co.jp\/wp-includes\/js\/wp-emoji-release.min.js?ver=9aaae23b1901d4f127c2ce22f77283b9"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
#####################################################
//<![CDATA[
$(function () {
    $beauty.popupSelectConditionForm("condtion", "Kodawari", "User Select：Kodawari", "bt:middle_page:kodawari:condition", "BPSC204102_link_kodawaripopup", $(Beauty.fn.idSelector('areaSearchForm')));
    beautyPriceCondition.popupSelectCondition($(Beauty.fn.idSelector('areaSearchForm')));
});
//]]>
#####################################################
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJVQZGK');
#####################################################
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBPRLN');
#####################################################
    j$(function() {
	    j$(".btn-slide").click(function(){
		    j$("#panel").slideToggle("slow");
		    j$(this).toggleClass("active");
		    return false;
	    });
    });
#####################################################
setInterval(() => {
  const fallBalls = (type, n) => {
    const w = sizes[type].r;
    const color = sizes[type].color;
    for (let i = 0; i < n; i++) {
      const x = 500 + Math.random() * 400 - 200;
      const y = -400 - Math.random() * 400;
      const options = {
        friction: 1,
        frictionAir: 0.03,
        density: .001, // 密度
        restitution: 0.1, // 反発係数
      };
      const b = Bodies.circle(x, y, w, options);
      b.render.fillStyle = color;
      b.size = w;
      b.level = type;
      world.add(b);
      balls.push(b);
    }
  };
  const type = rnd(sizes.length / 4);
  fallBalls(type, nfalls);
#####################################################
  // 画面外に落下したものを削除
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    const x = b.position.x;
    const y = b.position.y;
    if (y > 1100 || y < -1000 || x < -100 || x > 1100) {
      balls.splice(i, 1);
      i--;
      world.remove(b);
    }
  }
#####################################################
// マウス移動かマルチタッチされたとき、ボールに触れていたら消す
world.ontouch = (p) => {
  for (;;) {
    const nhit = balls.findIndex(i => distance(i.position, p) <= i.size);
    if (nhit < 0) break;
    const hit = balls[nhit];
    balls.splice(nhit, 1);
    world.remove(hit);
  }
};
#####################################################
btn.onclick = async () => {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    const res = await DeviceMotionEvent.requestPermission();
    if (res == "granted") {
      btn.style.display = "none";
      world.useRealGravity();
      world.useUI();
    }
  }
};
#####################################################
// 2点間の距離計算
const distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return len;
};
#####################################################
// ボールの大きさ
const sizes = [];
let size = 40;
for (let i = 1; i <= 10; i++) {
  const r = Math.sqrt(size);
  const color = `hsl(${i / 10 * 360},90%,50%)`
  sizes.push({ r, color });
  size *= 2;
}
#####################################################
const world = createWorld(document.body, drawWorld);
world.add(Bodies.rectangle(100, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(900, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(500, 925, 800, 50, { isStatic: true }));
#####################################################
const circle = (g, x, y, r) => {
  g.beginPath();
  g.arc(x, y, r, 0, 2 * Math.PI);
  g.closePath();
  g.fill();
};
#####################################################
