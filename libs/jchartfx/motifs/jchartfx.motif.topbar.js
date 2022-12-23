(function(){var e,g;"undefined"!==typeof window?(e=window.sfx,g=window.cfx):(e=require("./jchartfx.system.js"),g=e.cfx);g.motif="topbar";var f=e["gauge.templates"];void 0!=f&&(f.topbarDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><C><B F="#000000" A="0.25" C.Left="8" C.Top="8"><B.BE><BBE R="1"/></B.BE></B><g M="3,3,4,4"><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{Binding Class=DashboardCaption.fill}" S="{N}" MinHeight="32" V="{B ShowCaption}"><B M="13,4,8,4" V="{B ShowCaption}"><TextBlock Text="{B Title}" FontSize="11" FontFamily="{Binding Class=DashboardTitle.font-family}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}"/></B></B><B g.R="1" F="{B F}"><C N="targetChart" M="4,12,4,10"/></B></g></C></T>',
f.topbarRadialDashBorder='<T><T.R><Th K="borderFactor">0.03</Th></T.R><V VW="100" VH="100"><C><E W="100" H="100" F="{B S}"/><E C.Left="3" C.Top="3" W="94" H="94" F="{B F}"/></C></V></T>',f.topbarRadialIndicator="RadialIndicatorDefault",f.topbarRadialCap="RadialCapDefault",f.topbarRadialGlare="<T/>",f.topbarLinearDashBorder="<T/>",f.topbarLinearGlare="<T/>",f.topbarLinearFiller="LinearFillerDefault",f.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">4</Th></T.R><C Padding="{B Padding}"><B M="1,1,1,1" S="#40000000" ST="1" CR="0" CP="0.4" C.Left="3" C.Top="3" F="#40000000"><B.BE><BBE R="1"/></B.BE></B><B S="#00FFFFFF" ST="0" F="{B F}" A="1" CP="0.4" CR="0" Padding="0,0,0,0"><DockPanel N="container" Orientation="Vertical" M="5,8,5,0"><B F="{Binding Class=DashboardCaption.fill}" S="{N}" M="0,0,0,5" V="{B TitleVisible}"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1}" V="{B TitleVisible}" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" M="5,3,3,3"/></B></DockPanel></B></C></T>',
f.topbarPictoGraph="PictoFigure5");e=e["vector.templates"];void 0!=e&&(e["DashboardCaption.fill"]="0,#57ACDA",e["DashboardCaption.stroke"]="0,#FFFFFF",e["DashboardTitle.font-family"]="1,Arial",e["AxisY_Text.fill"]="0,#666666",e.topbarBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><Th K="uiMargin">12,8,0,0</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><C><B F="#000000" A="0.25" C.Left="8" C.Top="8"><B.BE><BBE R="1"/></B.BE></B><g M="3"><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{Binding Class=DashboardCaption.fill}" S="{N}" MinHeight="32" V="{B ShowCaption}"><g><g.CD><CD W="Auto"/><CD W="*"/></g.CD><r g.C="0" V="{B UIVisible}" W="20" H="1" F="{N}" S="{N}"/><B g.C="1" M="13,4,8,4" V="{B ShowCaption}" MinHeight="32"><TextBlock Text="{B Title}" FontSize="11" FontFamily="{Binding Class=DashboardTitle.font-family}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}"/></B></g></B><B g.R="1" F="{B F}"><C N="targetChart" M="0,6,0,6"/></B></g></C></T>',
e.topbarHighLowBaseline='<T xmlns:x="a"><T.R><T K="lineTemplate"><Pl P="{B P}" S="{B S}" ST="{B ST}"/></T></T.R><S P="{B CurrentSeries}"><Po P="{B P}" S="{N}" S.V="0"><Po.F><L E="0,1" S="0,0"><G C="{B FC}" O="0"/><G C="{B FC}" A="0" O="1"/></L></Po.F></Po><Po P="{B P}" S="{N}"><Po.F><L E="0,0" S="0,1"><G C="{B FC}" O="0"/><G C="{B FC}" A="0" O="1"/></L></Po.F></Po></S></T>',e.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">4</Th></T.R><C Padding="{B Padding}"><B M="1,1,1,1" S="#40000000" ST="1" CR="0" CP="0.4" C.Left="3" C.Top="3" F="#40000000"><B.BE><BBE R="1"/></B.BE></B><B S="#00FFFFFF" ST="0" F="{B F}" A="1" CP="0.4" CR="0" Padding="0,0,0,0"><DockPanel N="container" Orientation="Vertical"><B F="{Binding Class=DashboardCaption.fill}" S="{N}" M="0,0,0,5" V="{B TitleVisible}"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1}" V="{B TitleVisible}" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" M="8,3,3,3"/></B><B M="0,4,0,0"/></DockPanel></B></C></T>',
e.TipContentDefault='<T xmlns:x="a"><DockPanel Orientation="Horizontal" M="6,2,6,1"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}" M="0,0,12,0"/><S P="{B CurrSeries}"><TextBlock Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right" S.V="1"/><TextBlock Text="{B Value}" HorizontalAlignment="Right"/></S></DockPanel></T>',e.TipContentPercent='<T xmlns:x="a"><DockPanel Orientation="Vertical" M="6,0,6,3"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}"/><DockPanel Orientation="Horizontal"><TextBlock Text="{B Macro%v out of %t}"/><TextBlock M="6,0,0,0" Text="{B Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right"/></DockPanel></DockPanel></T>',
e.TipContentDefaultX='<T xmlns:x="a"><g M="6,0,6,3"><g.CD><CD W="Auto"/><CD W="Auto"/></g.CD><g.RD><RD H="Auto"/><RD H="Auto"/></g.RD><TextBlock g.R="0" g.C="0" Text="{B SeriesTX}" Foreground="{B ItemFill}" M="0,0,18,0"/><TextBlock g.R="0" g.C="1" Text="{B ValueX}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="0" Text="{B SeriesTY}" Foreground="{B ItemFill}" M="0,0,18,0"/><TextBlock g.R="1" g.C="1" Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right"/></g></T>',
e.topbarPictoGraph="PictoFigure5");var d=function(){};g.motifs.topbar=d;d.getStyleInfo=function(a){var c="";void 0!==a&&(a=a[0],void 0!==a&&(c=a[0]));a={isGroup:!1};a.name=c;a.isSingle=!1;a.isBullet=!1;a.sections=[];if(void 0!=c&&(c=c.toUpperCase(),0<=c.indexOf("SINGLE")&&(a.isSingle=!0,a.name=""),0<=c.indexOf("GROUP")&&(a.isGroup=!0,a.name="",a.name=""),0<=c.indexOf("BULLET")&&(a.isBullet=!0,a.name=""),0<=c.indexOf("SECTIONS"))){var b,d;b=c.indexOf("SECTIONS");d=c.indexOf(":",b);0<d&&(b=d,d=c.indexOf("-",
b),c=0<=d?c.substring(b+1,d):c.substring(b+1,c.length),a.sections=c.split(",",100));a.name=""}return a};d.global=function(a){a.setFont("8pt Arial")};d.radial=function(a,c){d.global(a);var b=d.getStyleInfo(c);null!=b.name&&a.setStyle(b.name);"repeater"==b.name&&(b=a.getMainScale(),b.getCap().setVisible(!1),b.getTickmarks().getMajor().setStyle(g.gauge.TickmarkStyle.None),b.getTickmarks().getMedium().setStyle(g.gauge.TickmarkStyle.None),b.setPosition(.2),b.getTickmarks().getMajor().setPosition(.5),b=
b.getBar(),b.setVisible(!0),b.setThickness(1),b.setPosition(0),b=new g.gauge.Repeater,b.setPaintOff(!0),a.setMainIndicator(b))};d.linear=function(a,c){d.global(a);var b=a.getMainScale(),e=b.getBar(),h=b.getMainIndicator(),f=d.getStyleInfo(c);f.isGroup&&(a.getBorder().setTemplate("<T/>"),a.getDashboardBorder().setTemplate("<T/>"));f.isBullet&&(b.setThickness(.9),b.setPosition(0),h.setSize(.25),h.setPosition(.475),h.setTitle("Current"),h=new g.gauge.Marker,h.setSize(.4),h.setPosition(.6),h.setTitle("Target"),
h.setTemplate("MarkerThinRectangle"),b.getIndicators().add(h),a.getDefaultAttributes().setSectionThickness(e.getThickness()),a.getDefaultAttributes().setSectionPosition(e.getPosition()));if(0<f.sections.length){for(var e=0,k,h=0;h<f.sections.length;h++)k=f.sections[h],b=new g.gauge.ScaleSection,b.setFrom(e),b.setTo(k),a.getMainScale().getSections().add(b),e=k;a.getMainScale().setMax(k)}};d.vert=function(a,c){d.linear(a,c);var b=d.getStyleInfo(c);a.getDefaultAttributes().setRepeaterPosition(.58);"repeater"==
b.name&&(b=new g.gauge.Repeater,b.setPaintOff(!0),a.setMainIndicator(b))};d.horz=function(a,c){d.linear(a,c);if("repeater"==d.getStyleInfo(c).name){var b=new g.gauge.Repeater;b.setPaintOff(!0);a.setMainIndicator(b)}};d.chart=function(a,c){var b="";if(void 0!==c){var d=c[0];void 0!==d&&(b=d[0])}void 0!=b&&(b=b.toUpperCase(),"GROUP"==b&&a.getBorder().setTemplate("<T/>"));a.getPlotAreaMargin().setTop(25)};d.heatmap=function(a,c){var b=a.getGradientStops();b.getItem(0).setColor("#57ACDA");b.getItem(1).setColor("#93E24E")};
d.equalizer=function(a,c){a.setRoundnessRatio(0);var b=new g.equalizer.EqualizerItem;b.setColor("#F89553");b.setCount(2);a.getTopItems().add(b);b=new g.equalizer.EqualizerItem;b.setColor("#F5D34A");b.setCount(1);a.getTopItems().add(b);a.setOffColor("#33DBDBD9")};d.trend=function(a,c){var b="";if(void 0!==c){var d=c[0];void 0!==d&&(b=d[0])}void 0!=b&&(0<=b.toUpperCase().indexOf("SINGLE")&&(a.getDelta().setVisible(!1),a.getPercentChange().setVisible(!1),a.getIndicator().setVisible(!1)),0<=b.toUpperCase().indexOf("GROUP")&&
a.getBorder().setTemplate("<T/>"))};d.map=function(a,c){a.setShowAdditionalLayers(!1)};d.pictographchart=function(a,c){a.setTemplate('<T><T.R><s K="ratio">0.54166</s></T.R><V VW="13" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M4.581,2B4.581,0,4,4,0,360M12.932,11.337l-2.605-6.876C10.143,4.049,9.564,4,9.229,4C8.891,4,4.364,4,4.044,4s-0.82,0.051-1.009,0.418l-2.946,6.706c-0.207,0.401-0.042,0.897,0.369,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.357L3.504,7.98v6.208v9C3.504,23.637,3.877,24,4.338,24h0.385c0.46,0,0.833-0.363,0.833-0.812L6.583,15l1.026,8.188C7.608,23.637,7.98,24,8.443,24h0.383c0.463,0,0.834-0.363,0.834-0.812v-9V8.02l1.391,4.114c0.182,0.412,0.672,0.603,1.096,0.421l0.354-0.147C12.922,12.227,13.113,11.749,12.932,11.337z" ></P></g></V></T>')};
d.border=function(a,c){};d.getInfo=function(){return{x:8,y:47,w:16,h:62,c:1}};void 0!==g.ToolTipAttributes&&(g.ToolTipAttributes.prototype.setLineMode=function(){var a=new g.ToolTipLineAttributes;a.getLine().setStyle(0);a.setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">2</Th></T.R><C Padding="{B Padding}"><B C.Left="-1" C.Top="0" F="{Binding Class=Border.fill}" A="0.95" S="{Binding Class=AxisY_Line.stroke}"><DockPanel N="container" Orientation="Vertical" M="0,0,0,0"><B F="{Binding Class=DashboardCaption.fill}" S="{N}" M="0,0,0,5"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Left" FontWeight="Normal" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" M="5,3,3,3"/></B><B H="1" S="{Binding Class=AxisY_Line.stroke}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>');
a.getLine().setWidth(1);a.setVerticalAlignment(0);a.setAlignment(0);a.setY(1.04);0==this.getTriggerMode()&&this.setTriggerMode(1);this.setMode(a)})})();