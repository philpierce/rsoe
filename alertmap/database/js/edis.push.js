$(document).ready(function(){function a(a,e,t){toastr.error(a)}var e=window.location;$('ul.nav a[href="'+e+'"]').parent().addClass("active"),$("ul.nav a").filter(function(){return this.href==e}).parent().addClass("active").parent().parent().addClass("active");var t=new PushStream({host:"broadcast.rsoe.hu",port:"81",modes:"websocket"});t.onmessage=a,t.addChannel("ch1"),t.connect()});