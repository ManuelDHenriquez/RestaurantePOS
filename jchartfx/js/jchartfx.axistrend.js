(function(){var f={Version:"7.6.7367.23301"};if("undefined"!==typeof window){var b=window.sfx;var d=window.cfx}else b=require("./jchartfx.system.js"),d=b.cfx,module.exports=f;d.axistrend=f;var g=function a(){a._ic();this.f=this.g=0;this.a=this.c=null;this._0_1()};f.AxisTrend=g;g.prototype={_0_1:function(){this.h=this.i=this.e=b._CE;this.i=b.m.k(147,226,78);this.h=b.m.k(242,108,91);this.e=b.m.k(245,211,74);this.d=!0;this.b=3;void 0!==d.motif?d._Em("axistrend",this,arguments):1<=arguments.length&&this.setStyle(arguments[0]);
return this},getColorEqualTo:function(){return this.e},setColorEqualTo:function(a){this.e=a=b.m._t(a);this.d=!this.e.e()},getColorGreaterThan:function(){return this.i},setColorGreaterThan:function(a){this.i=a=b.m._t(a)},getColorLessThan:function(){return this.h},setColorLessThan:function(a){this.h=a=b.m._t(a)},getWidth:function(){return this.b},setWidth:function(a){this.b=a},ic5:function(a,b,c,d){switch(b){case 11:return this.k(c)}return null},ic6:function(a){return 1},ic7:function(a){return 28704},
ic8:function(a,e,c){e=0<c.w?0:0>c.w?1:this.d?2:0;c.e==c.o?(this.c=Array(3),this.c[0]=(new b.ap)._03ap(this.i,this.b),this.c[1]=(new b.ap)._03ap(this.h,this.b),this.d&&(this.c[2]=(new b.ap)._03ap(this.e,this.b)),0!=(c.t&8)?(this.a=Array(3),this.a[0]=(new d.c8)._01c8("AxisLine AxisX_Line GreaterThan"),this.a[1]=(new d.c8)._01c8("AxisLine AxisX_Line LessThan"),this.d&&(this.a[2]=(new d.c8)._01c8("AxisLine AxisX_Line EqualsTo"))):this.a=null,this.g=e,this.f=c.A):(e!=this.g&&(this.j(c,this.g,this.f,c.A),
this.f=c.A,this.g=e),c.e==c.q&&this.j(c,e,this.f,c.A+c.aq));a.a=0;a.b=1},ieU:function(a,b){},j:function(a,b,c,d){var e=a.a0.c();null!=this.a?a.c.sidk(this.a[b]):a.c.sidk(null);a.c.idw(this.c[b],c,e,d,e)},k:function(a){a=a.a;0==a.c&&(a.c=1);return null}};g._dt("axistrend.AxisTrend",b.SA,0,d.ic4,d.ieT)})();