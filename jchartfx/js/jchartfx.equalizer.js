(function(){var v={Version:"7.6.7367.23301"};if("undefined"!==typeof window){var d=window.sfx;var g=window.cfx}else d=require("./jchartfx.system.js"),g=d.cfx,module.exports=v;g.equalizer=v;var x=function(){};x.a=function(d,m,g){return~~(d*m/g)};var q=function m(){m._ic();this.f=this.d=this.e=null;this._0_1()};v.EqualizerItem=q;q.prototype={_0_1:function(){this.b=this.c=d._CE;this.a=1;return this},getBorderColor:function(){return this.c},setBorderColor:function(m){this.c=m=d.m._t(m)},getColor:function(){return this.b},
setColor:function(m){this.b=m=d.m._t(m)},getCount:function(){return this.a},setCount:function(d){this.a=d},ieU:function(m,g){m=new d._p1(this.b);g.ie4(m,"Color");this.b=m.a;m.a=this.c;g.ie4(m,"BorderColor");this.c=m.a;m.a=this.a;g.ie9(m,"Count",1);this.a=m.a}};q._dt("equalizer.EqualizerItem",d.SA,0,g.ieT);var w=function y(){y._ic()};v.EqualizerItemCollection=w;w.prototype={_0_1:function(){this.a=new d._L;return this},getCount:function(){return this.a.Se()},getItem:function(d){return this.a.A[d]},
add:function(d){this.a.Si(d)},clear:function(){this.a.clear()},Se:function(){return this.getCount()}};w._dt("equalizer.EqualizerItemCollection",d.SA,0,d.Sa);q=function a(){a._ic();this.b=this.n=null;this.r=this.c=this.t=this.d=0;this.h=this.v=this.m=this.g=null;this.l=!1;this.u=null;this.q=!1;this._0_1()};v.EqualizerBar=q;q.prototype={_0_1:function(){this.j=this.o=d._CE;this.k=.35;this.e=.2;this.i=.15;this.a=(new w)._0_1();this.z();void 0!==g.motif?g._Em("equalizer",this,arguments):1<=arguments.length&&
this.setStyle(arguments[0]);return this},getGapRatio:function(){return this.e},setGapRatio:function(a){this.e=a;this.f()},getHeightRatio:function(){return this.k},setHeightRatio:function(a){this.k=a;this.f()},getOffBorderColor:function(){return this.o},setOffBorderColor:function(a){this.o=a=d.m._t(a);this.f()},getOffColor:function(){return this.j},setOffColor:function(a){this.j=a=d.m._t(a);this.f()},getRoundnessRatio:function(){return this.i},setRoundnessRatio:function(a){this.i=a;this.f()},getShowBorders:function(){return this.l},
setShowBorders:function(a){this.l=a;this.f()},getTemplate:function(){return null==this.b?null:this.b.t},setTemplate:function(a){this.u=a;null==this.b&&(this.b=(new g.vector._Zt)._0_Zt());this.b.sv(a);this.f()},getTopItems:function(){return this.a},B:function(a,c){var b=a._nc();b.m(-c,-c);c=(new d.d)._01c(a.f(),new d.l(2*c,2*c));var e=new d.aB;e.f(c,180,90);e.u(b.x,a.y,b.g(),a.y);c.x=a.g()-c.w;e.f(c,270,90);e.u(a.g(),b.y,a.g(),b.c());c.y=a.c()-c.h;e.f(c,0,90);e.u(b.g(),a.c(),b.x,a.c());c.x=a.x;e.f(c,
90,90);e.E();return e},ic5:function(a,c,b,d){return this.A(a,c,b,d)},ic6:function(a){return 1},ic7:function(a){return 290992},ic8:function(a,c,b){c=b.F;var e=b.ab,p=b.A,h=b.X,l=b.H,f=b.aa,k=p+b.a.l*~~((b.aq-e+1)/2);1<h?(p=k+b.a.l*x.a(l+1,e,h),k+=b.a.l*x.a(l,e,h),l=d.a.d(p-k)):l=d.a.o(~~(e/h),1);p=k+~~(b.a.l*l/2);!b.g(131072)&&b.g(256)||0!=b.b.b||b.a.B?(a.a=1,a.b=0):(a.a=0,a.b=1);a=new d.d;e=!1;(h=b.g(512))?(a._i2(f,k-l,c-f,l),0>a.w&&(a.x+=a.w,a.w=-a.w,e=!0)):(a._i2(k,c,l,f-c),0>a.h&&(a.y+=a.h,a.h=
-a.h,e=!0));if(b.e==b.o){this.c=h?a.h*this.k:a.w*this.k;this.t=0<this.e&&1>this.e?d.a.h(this.c*this.e):d.a.d(this.e);this.d=this.c+this.t;for(k=0;k<this.a.getCount();k++){l=this.a.getItem(k);var n=l.b;n.e()&&null!=this.n&&(n=this.n.iL(6));l.e=new d.as(n);var r=l.c;r.e()&&(r=n);l.d=(new d.ap)._03ap(r,b.b.n.a);0!=(b.t&8)&&(l.f=(new g.c8)._01c8("EqualizerTop"+k.toString()))}this.q=null!=this.b&&null!=this.b.t;0==this.i||this.q||(k=d.a.k(this.i*this.c),0<k&&(l=(new d.d)._02c(0,0,a.w,a.h),h?l.w=this.c:
l.h=this.c,this.h=this.B(l,k),this.v=b.c.idm()));this.r=h?d.a.k(b.l.w/this.d):d.a.k(b.l.h/this.d);this.j.e()||(this.g=new d.as(this.j),k=this.o,k.e()&&(k=this.j),this.m=(new d.ap)._01ap(k))}if(c!=f||null!=this.g)this.y(b,a,e,h),b.A=p,b.aX()},ieU:function(a,c){a=new d._p1(this.e);c.ie$(a,"GapRatio",.2);this.e=a.a;a.a=this.k;c.ie$(a,"HeightRatio",.35);this.k=a.a;a.a=this.i;c.ie$(a,"RoundnessRatio",.15);this.i=a.a;a.a=this.l;c.ifa(a,"ShowBorders",!1);this.l=a.a;a.a=this.j;c.ie4(a,"OffColor");this.j=
a.a;a.a=this.o;c.ie4(a,"OffBorderColor");this.o=a.a;a.a=this.u;c.ie3(a,"Template");this.u=a.a;this.a=c.ifc("TopItems",this.a,"EqualizerItemCollection",4)},ifg:function(a){this.n=a},A:function(a,c,b,d){switch(c){case 11:return this.x(b)}return null},z:function(){if(void 0!=g._Zt){var a=g.vector.eU.i("Equalizer",!0);null!=a&&this.setTemplate(a)}},y:function(a,c,b,e){var p=0!=(a.t&8),h=null,l=null;if(p){var f=a.c.idj().ieJ(a.c.idk());h=f.ift(1);l=f.ift(0)}f=c._nc();b?e?(f.x=c.g()-this.c,b=-this.d):(f.y=
c.y,b=this.d):e?(f.x=c.x,b=this.d):(f.y=c.c()-this.c,b=-this.d);if(e){f.w=this.c;var k=d.a.k(c.w/this.d)}else f.h=this.c,k=d.a.k(c.h/this.d);c=this.r-k;for(var n=0;n<this.a.getCount();n++)k-=this.a.getItem(n).a;for(var r=0;r<k;r++)this.p(a,a.c,a.x,a.v,f,this.b),e?f.x+=b:f.y+=b;r=a.x;var q=a.v;for(n=this.a.getCount()-1;0<=n;n--){var t=this.a.getItem(n);if(p){var u=t.f;u.c=h;u.e=l;a.c.sidk(u)}a.x=t.e;a.v=t.d;for(u=0;u<t.a;u++)0>k?k++:(this.p(a,a.c,t.e,t.d,f,this.b),e?f.x+=b:f.y+=b)}if(null!=this.g)for(a.x=
this.g,a.v=this.m,p&&a.c.sidk((new g.c8)._01c8("EqualizerOff")),p=this.b,null!=this.b&&(h=this.b.k,null!=h&&(h=h.a("off"),h=d.TD(h,g.vector._Zt),null!=h&&(p=h))),h=0;h<c;h++)this.p(a,a.c,this.g,this.m,f,p),e?f.x+=b:f.y+=b;a.x=r;a.v=q;if(a.e==a.q){for(n=0;n<this.a.getCount();n++)this.a.getItem(n);null!=this.h&&(this.h=null);null!=this.g&&(this.g=null);null!=this.m&&(this.m=null)}},p:function(a,c,b,d,g,h){if(this.q){b=h.id().L.A;d=b.length;for(var e=0;e<d;e++)h.m(b[e],a,this,g);h.r(c,g,1,0)}else null!=
this.h?(c.id4(g.x,g.y,1),c.idQ(b,this.h),this.l&&c.idy(d,this.h),c.sidm(this.v)):(c.idV(b,g),this.l&&c.idF(d,g))},f:function(){null!=this.n&&this.n.iN()},x:function(a){a=a.a;0==a.c&&(a.c=1);return null}};q._dt("equalizer.EqualizerBar",d.SA,0,g.ic4,g.ieT,g.iff)})();