    function drawCircle() {
      // 円の中心座標
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;

      // 円の半径
      var radius = 50;

      // 描画コンテキストを使用して円を描く
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red'; // 円の塗りつぶし色
      ctx.fill(); // 円を塗りつぶす
      ctx.lineWidth = 2; // 円の線の太さ
      ctx.strokeStyle = 'black'; // 円の線の色
      ctx.stroke(); // 円の線を描く
    }
