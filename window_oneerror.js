
window.onerror = function(msg, url, lineNo, columnNo, error) {
	var detail  = '';
	try {
        if (typeof (error) == "string") {
            detail = error.substr(0, 50);
        } else if (typeof (error) == "object"){
            detail = error.toString().substr(0, 50);
        } else {
            detail = "NotDefinedUnexpectedError";
        }
	} catch (_e) {}
	try {
		var host = "error.auctions.yahoo.co.jp";
		var url = "https://auctions.yahoo.co.jp/error/jserror?"
			+ "device="+encodeURIComponent('pc')+"&"
			+ "url="+encodeURIComponent(location.protocol)+encodeURIComponent(location.host)+encodeURIComponent(location.pathname)+"&"
			+ "message="+encodeURIComponent(msg)+"&"
			+ "detail="+encodeURIComponent(detail);
		new Image().src = url;
	} catch (_e) {
		var url = "https://auctions.yahoo.co.jp/error/jserror?"
				+ "device="+encodeURIComponent('pc')+"&"
				+ "url="+encodeURIComponent(location.protocol)+encodeURIComponent(location.host)+encodeURIComponent(location.pathname)+"&"
				+ "message=NotDefinedUnexpectedError";
		new Image().src = url;
	}
};
