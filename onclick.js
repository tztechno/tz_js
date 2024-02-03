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
