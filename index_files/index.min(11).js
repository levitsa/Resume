!function(){var t;function e(t,e){var n,i={}.hasOwnProperty;for(n in e)i.call(e,n)&&(t[n]=e[n]);return t}(t=function(t){return(t=null==t?{}:t).fetch&&(this._fetch=t.fetch,delete t.fetch),this.evtHandler={},this.data={},this.handle={},this.offset=0,this.running=!1,this.end=!1,this.disabled=null!=t.enabled&&!t.enabled,this.opt=e({boundary:0,limit:20,offset:0,scrollDelay:100,fetchDelay:200,fetchOnScroll:!1},t),this.limit=(t=this.opt).limit,this.offset=t.offset,(t=this.opt.host)&&this.setHost(t),this}).prototype=e(Object.create(Object.prototype),{_fetch:function(){return new Promise(function(t,e){return t({payload:[]})})},toggle:function(t){return this.disabled=null!=t?!t:!this.disabled},on:function(t,e){var n;return((n=this.evtHandler)[t]||(n[t]=[])).push(e)},fire:function(t){for(var e,n,i,o,r=[],s=[],h=1,l=arguments.length;h<l;++h)s.push(arguments[h]);for(e=s,h=0,i=(n=this.evtHandler[t]||[]).length;h<i;++h)o=n[h],r.push(o.apply(this,e));return r},reset:function(t){var e,n,i;for(e in null==t&&(t={}),n=this.handle)i=n[e],clearTimeout(i);if(this.offset=0,this.end=!1,t.data)return this.data=t.data},init:function(t){return this.reset(t)},fetchable:function(){return!(this.disabled||this.end||this.running)},isEnd:function(){return this.end},setHost:function(t){var e,n=this;if(t=t||document.scrollingElement,e=function(t){return n.onScroll(t)},this.host&&this.host.removeEventListener("scroll",e),this.host="string"==typeof t?document.querySelector(t):t,this.host)return this.opt.fetchOnScroll&&!this.opt.pivot?this.host.addEventListener("scroll",e):this.opt.pivot?(this.obs&&this.obs.unobserve(this.opt.pivot),this.obs=new IntersectionObserver(function(t){if(t.map(function(t){return t.isIntersecting}).filter(function(t){return t}).length&&n.fetchable())return n.fetch().then(function(t){return n.fire("scroll.fetch",t)})},{}),this.obs.observe(this.opt.pivot)):void 0;this.host=null},onScroll:function(){var t,e=this;if(this.fetchable())return clearTimeout(this.handle.scroll),t=this.host===window?document.scrollingElement:this.host,this.handle.scroll=setTimeout(function(){if(!(t.scrollHeight-t.scrollTop-t.clientHeight>e.opt.boundary))return e.fetchable()?e.fetch().then(function(t){return e.fire("scroll.fetch",t)}):void 0},this.opt.scrollDelay)},setLoader:function(){},parseResult:function(t){return t},fetch:function(n){var i=this;return null==n&&(n={}),new Promise(function(e,t){return i.fetchable()?(i.handle.fetch&&clearTimeout(i.handle.fetch),i.fire("fetching"),i.handle.fetch=setTimeout(function(){return i.running=!0,i._fetch().then(function(t){return t=i.parseResult(t=null==t?[]:t),i.running=!1,i.offset+=t.length||0,i.fire("fetch",t),t.length<i.limit&&(i.end=!0,i.fire(i.offset?"finish":"empty")),e(t)})},n.delay||i.opt.fetchDelay||200)):e([])})}}),"undefined"!=typeof module&&null!==module?module.exports=t:"undefined"!=typeof window&&null!==window&&(window.ldpage=t)}.call(this);
