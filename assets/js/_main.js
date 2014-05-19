/*!
 * jQuery Fraction Slider v0.9.101
 * http://fractionslider.jacksbox.de
 *
 * Author: Mario Jäckle
 * eMail: support@jacksbox.de
 *
 * Copyright 2013, jacksbox.design
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Special thanks to: Lietzi (https://github.com/lietzi) for contributing
 */
(function(e){var t=null,n={init:function(n){var i=e.extend({slideTransition:"none",slideTransitionSpeed:2e3,slideEndAnimation:true,position:"0,0",transitionIn:"left",transitionOut:"left",fullWidth:false,delay:0,timeout:2e3,speedIn:2500,speedOut:1e3,easeIn:"easeOutExpo",easeOut:"easeOutCubic",controls:false,pager:false,autoChange:true,pauseOnHover:false,backgroundAnimation:false,backgroundElement:null,backgroundX:500,backgroundY:500,backgroundSpeed:2500,backgroundEase:"easeOutCubic",responsive:false,increase:false,dimensions:"",startCallback:null,startNextSlideCallback:null,stopCallback:null,pauseCallback:null,resumeCallback:null,nextSlideCallback:null,prevSlideCallback:null,pagerCallback:null},n);return this.each(function(){t=new r(this,i)})},pause:function(){t.pause(true)},resume:function(){t.resume()},stop:function(){t.stop()},start:function(){t.start()},startNextSlide:function(){t.startNextSlide()}};var r=function(t,n){function v(){if(n.controls){f.append('<a href="#" class="prev"></a><a href="#" class="next" ></a>');f.find(".next").bind("click",function(){return k()});f.find(".prev").bind("click",function(){return C()})}if(n.pauseOnHover){f.bind({mouseenter:function(){b(false)},mouseleave:function(){w()}})}if(n.fullWidth){f.css({overflow:"visible"})}else{f.css({overflow:"hidden"})}if(n.pager){var t=typeof n.pager!=="boolean";l=t?n.pager:e('<div class="fs-pager-wrapper"></div>');if(!t){f.append(l)}else{l.addClass("fs-custom-pager-wrapper")}}f.children(".slide").each(function(r){var i=e(this);i.children().attr("rel",r).addClass("fs_obj");i.children("[data-fixed]").addClass("fs_fixed_obj");if(n.pager||t){var s=e('<a rel="'+r+'" href="#"></a>').bind("click",function(){return N(this)});l.append(s)}});if(n.pager){l=e(l).children("a")}if(n.responsive){V()}if(f.find(".fs_loader").length>0){f.find(".fs_loader").remove()}m()}function m(){r.stop=false;r.pause=false;r.running=true;L("slide");T(n.startCallback)}function g(){r.stop=false;r.pause=false;r.running=true;E();T(n.startNextSlideCallback)}function y(){r.stop=true;r.running=false;f.find(".slide").stop(true,true);f.find(".fs_obj").stop(true,true).removeClass("fs-animation");et(s);T(n.stopCallback)}function b(e){r.pause=true;r.running=false;if(e){f.find(".fs-animation").finish()}T(n.pauseCallback)}function w(){r.stop=false;r.pause=false;r.running=true;if(r.slideComplete){L("slide")}else if(r.stepComplete){L("step")}else{if(r.finishedObjs<r.maxObjs){}else if(r.currentStep<r.maxStep){L("step")}else{L("slide")}}T(n.resumeCallback)}function E(){r.lastSlide=r.currentSlide;r.currentSlide+=1;r.stop=false;r.pause=false;r.running=true;O();T(n.nextSlideCallback)}function S(){r.lastSlide=r.currentSlide;r.currentSlide-=1;r.stop=false;r.pause=false;r.running=true;O();T(n.prevSlideCallback)}function x(e){r.lastSlide=r.currentSlide;r.currentSlide=e;r.stop=false;r.pause=false;r.running=true;O();T(n.pagerCallback)}function T(t){e.isFunction(t)&&t.call(this,f,r.currentSlide,r.lastSlide,r.currentStep)}function N(t){var n=parseInt(e(t).attr("rel"));if(n!=r.currentSlide){y();x(n)}return false}function C(){y();S();return false}function k(){y();E();return false}function L(e){if(!r.pause&&!r.stop&&r.running){switch(e){case"slide":r.slideComplete=false;A();break;case"step":r.stepComplete=false;B();break;case"obj":F();break}}}function A(){var e=n.timeout;if(r.init){r.init=false;O(true)}else{s.push(setTimeout(function(){if(r.maxSlide==0&&r.running==true){}else{r.lastSlide=r.currentSlide;r.currentSlide+=1;O()}},e))}}function O(e){f.find(".active-slide").removeClass("active-slide");if(r.currentSlide>r.maxSlide){r.currentSlide=0}if(r.currentSlide<0){r.currentSlide=r.maxSlide}i.currentSlide=f.children(".slide:eq("+r.currentSlide+")").addClass("active-slide");if(i.currentSlide.length==0){r.currentSlide=0;i.currentSlide=f.children(".slide:eq("+r.currentSlide+")")}if(r.lastSlide!=null){if(r.lastSlide<0){r.lastSlide=r.maxSlide}i.lastSlide=f.children(".slide:eq("+r.lastSlide+")")}if(e){i.animation="none"}else{i.animation=i.currentSlide.attr("data-in");if(i.animation==null){i.animation=n.slideTransition}}if(n.slideEndAnimation&&r.lastSlide!=null){q()}else{switch(i.animation){case"none":M();D();break;case"scrollLeft":M();D();break;case"scrollRight":M();D();break;case"scrollTop":M();D();break;case"scrollBottom":M();D();break;default:M();break}}}function M(){if(n.backgroundAnimation){X()}if(n.pager){l.removeClass("active");l.eq(r.currentSlide).addClass("active")}H();i.currentSlide.children().hide();r.currentStep=0;r.currentObj=0;r.maxObjs=0;r.finishedObjs=0;i.currentSlide.children("[data-fixed]").show();R()}function _(e){if(i.lastSlide!=null){i.lastSlide.hide()}if(e.hasClass("active-slide")){L("step")}}function D(){if(i.lastSlide==null){return}if(i.animation!="none"){U()}}function P(){}function H(){var t=i.currentSlide.children(),n=0;t.each(function(){var t=parseFloat(e(this).attr("data-step"));n=t>n?t:n});r.maxStep=n}function B(){var e;if(r.currentStep==0){e=i.currentSlide.children('*:not([data-step]):not([data-fixed]), *[data-step="'+r.currentStep+'"]:not([data-fixed])')}else{e=i.currentSlide.children('*[data-step="'+r.currentStep+'"]:not([data-fixed])')}r.maxObjs=e.length;o=e;if(r.maxObjs>0){r.currentObj=0;r.finishedObjs=0;L("obj")}else{j()}}function j(){r.stepComplete=true;r.currentStep+=1;if(r.currentStep>r.maxStep){if(n.autoChange){r.currentStep=0;r.slideComplete=true;L("slide")}return}L("step")}function F(){var t=e(o[r.currentObj]);t.addClass("fs-animation");var i=t.attr("data-position"),s=t.attr("data-in"),u=t.attr("data-delay"),a=t.attr("data-time"),f=t.attr("data-ease-in"),l=t.attr("data-special");if(i==null){i=n.position.split(",")}else{i=i.split(",")}if(s==null){s=n.transitionIn}if(u==null){u=n.delay}if(f==null){f=n.easeIn}z(t,i,s,u,a,f,l);r.currentObj+=1;if(r.currentObj<r.maxObjs){L("obj")}else{r.currentObj=0}}function I(e){e.removeClass("fs-animation");if(e.attr("rel")==r.currentSlide){r.finishedObjs+=1;if(r.finishedObjs==r.maxObjs){j()}}}function q(){var t=i.lastSlide.children(":not([data-fixed])");t.each(function(){var t=e(this),r=t.position(),i=t.attr("data-out"),s=t.attr("data-ease-out");if(i==null){i=n.transitionOut}if(s==null){s=n.easeOut}W(t,r,i,null,s)}).promise().done(function(){D();M()})}function R(){var e=i.currentSlide,t={},r={},s=n.slideTransitionSpeed,o=i.animation;if(n.responsive){unit="%"}else{unit="px"}switch(o){case"slideLeft":t.left=c+unit;t.top="0"+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"slideTop":t.left="0"+unit;t.top=-d+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"slideBottom":t.left="0"+unit;t.top=d+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"slideRight":t.left=-c+unit;t.top="0"+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"fade":t.left="0"+unit;t.top="0"+unit;t.display="block";t.opacity=0;r.opacity=1;break;case"none":t.left="0"+unit;t.top="0"+unit;t.display="block";s=0;break;case"scrollLeft":t.left=c+unit;t.top="0"+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"scrollTop":t.left="0"+unit;t.top=-d+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"scrollBottom":t.left="0"+unit;t.top=d+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break;case"scrollRight":t.left=-c+unit;t.top="0"+unit;t.display="block";r.left="0"+unit;r.top="0"+unit;break}e.css(t).animate(r,s,"linear",function(){_(e)})}function U(){var e={},t={},r=n.slideTransitionSpeed,s=null,o=i.animation;if(n.responsive){s="%"}else{s="px"}switch(o){case"scrollLeft":t.left=-c+s;t.top="0"+s;break;case"scrollTop":t.left="0"+s;t.top=d+s;break;case"scrollBottom":t.left="0"+s;t.top=-d+s;break;case"scrollRight":t.left=c+s;t.top="0"+s;break;default:r=0;break}i.lastSlide.animate(t,r,"linear",function(){P()})}function z(t,i,o,u,a,f,l){var h={},v={},m=n.speedIn,g=null;if(n.responsive){g="%"}else{g="px"}if(a!=null&&a!=""){m=a-u}h.opacity=1;switch(o){case"left":h.top=i[0];h.left=c;break;case"bottomLeft":h.top=d;h.left=c;break;case"topLeft":h.top=t.outerHeight()*-1;h.left=c;break;case"top":h.top=t.outerHeight()*-1;h.left=i[1];break;case"bottom":h.top=d;h.left=i[1];break;case"right":h.top=i[0];h.left=-p-t.outerWidth();break;case"bottomRight":h.top=d;h.left=-p-t.outerWidth();break;case"topRight":h.top=t.outerHeight()*-1;h.left=-p-t.outerWidth();break;case"fade":h.top=i[0];h.left=i[1];h.opacity=0;v.opacity=1;break;case"none":h.top=i[0];h.left=i[1];h.display="none";m=0;break}v.top=i[0];v.left=i[1];v.left=v.left+g;v.top=v.top+g;h.left=h.left+g;h.top=h.top+g;s.push(setTimeout(function(){if(l=="cycle"&&t.attr("rel")==r.currentSlide){var i=t.prev();if(i.length>0){var s=e(i).attr("data-position").split(",");s={top:s[0],left:s[1]};var o=e(i).attr("data-out");if(o==null){o=n.transitionOut}W(i,s,o,m)}}t.css(h).show().animate(v,m,f,function(){I(t)}).addClass("fs_obj_active")},u))}function W(e,t,r,i,s){var o={},f={},l=null;i=n.speedOut;if(n.responsive){l="%"}else{l="px"}var h=e.outerWidth(),v=e.outerHeight();if(n.responsive){h=Y(h,u);v=Y(v,a)}switch(r){case"left":f.left=-p-100-h;break;case"bottomLeft":f.top=d;f.left=-p-100-h;break;case"topLeft":f.top=-v;f.left=-p-100-h;break;case"top":f.top=-v;break;case"bottom":f.top=d;break;case"right":f.left=c;break;case"bottomRight":f.top=d;f.left=c;break;case"topRight":f.top=-v;f.left=c;break;case"fade":o.opacity=1;f.opacity=0;break;case"hide":f.display="none";i=0;break;default:f.display="none";i=0;break}if(typeof f.top!="undefined"){if(f.top.toString().indexOf("px")>0){f.top=f.top.substring(0,f.top.length-2);if(n.responsive){f.top=Y(f.top,a)}}}if(typeof f.left!="undefined"){if(f.left.toString().indexOf("px")>0){f.left=f.left.substring(0,f.left.length-2);if(n.responsive){f.left=Y(f.left,u)}}}f.left=f.left+l;f.top=f.top+l;e.css(o).animate(f,i,s,function(){e.hide()}).removeClass("fs_obj_active")}function X(){var t;if(n.backgroundElement==null||n.backgroundElement==""){t=f.parent()}else{t=e(n.backgroundElement)}var r=t.css("background-position");r=r.split(" ");var i=n.backgroundX,s=n.backgroundY,o=Number(r[0].replace(/[px,%]/g,""))+Number(i),u=Number(r[1].replace(/[px,%]/g,""))+Number(s);t.animate({backgroundPositionX:o+"px",backgroundPositionY:u+"px"},n.backgroundSpeed,n.backgroundEase)}function V(){var r=n.dimensions.split(","),i=tt();u=r["0"];a=r["1"];if(!n.increase){e(t).css({maxWidth:u+"px"})}var s=f.children(".slide").find("*");s.each(function(){var t=e(this),n=null,r=null,s=null;if(t.attr("data-position")!=null){var o=t.attr("data-position").split(",");n=Y(o[1],u);r=Y(o[0],a);t.attr("data-position",r+","+n)}if(t.attr("width")!=null&&t.attr("width")!=""){s=t.attr("width");n=Y(s,u);t.attr("width",n+"%");t.css("width",n+"%")}else if(t.css("width")!="0px"){s=t.css("width");if(s.indexOf("px")>0){s=s.substring(0,s.length-2);n=Y(s,u);t.css("width",n+"%")}}else if(t.prop("tagName").toLowerCase()=="img"&&i!=-1){s=J(t);n=Y(s,u);t.css("width",n+"%").attr("width",n+"%")}else if(t.prop("tagName").toLowerCase()=="img"){s=t.get(0).width;n=Y(s,u);t.css("width",n+"%")}if(t.attr("height")!=null&&t.attr("height")!=""){s=t.attr("height");r=Y(s,a);t.attr("height",r+"%");t.css("height",r+"%")}else if(t.css("height")!="0px"){s=t.css("height");if(s.indexOf("px")>0){s=s.substring(0,s.length-2);r=Y(s,a);t.css("height",r+"%")}}else if(t.prop("tagName").toLowerCase()=="img"&&i!=-1){s=K(t);r=Y(s,a);t.css("height",r+"%").attr("height",r+"%")}else if(t.prop("tagName").toLowerCase()=="img"){s=t.get(0).height;r=Y(s,a);t.css("height",r+"%")}t.attr("data-fontsize",t.css("font-size"))});f.css({width:"auto",height:"auto"}).append('<div class="fs-stretcher" style="width:'+u+"px; height:"+a+'px"></div>');Q();e(window).bind("resize",function(){Q()})}function J(e){var t=new Image;t.src=e.attr("src");return t.width}function K(e){var t=new Image;t.src=e.attr("src");return t.height}function Q(){var t=f.innerWidth(),i=f.innerHeight();if(t<=u||n.increase){var s=u/a,o=t/s;f.find(".fs-stretcher").css({width:t+"px",height:o+"px"})}h=e("body").width();var l=f.width();p=Y((h-l)/2,u);c=100;if(n.fullWidth){c=100+p*2}d=100;if(r.init==false||t<u){G()}}function G(){var t=null,n=null,r=f.children(".slide").find("*");r.each(function(){obj=e(this);var t=obj.attr("data-fontsize");if(t.indexOf("px")>0){t=t.substring(0,t.length-2);n=Y(t,a)*(f.find(".fs-stretcher").height()/100);obj.css("fontSize",n+"px");obj.css("lineHeight","100%")}})}function Y(e,t){return e/(t/100)}function Z(e){clearTimeout(e)}function et(t){var n=t.length;e.each(t,function(e){clearTimeout(this);if(e==n-1){t=[]}})}function tt(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var t=navigator.userAgent;var n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(n.exec(t)!=null)e=parseFloat(RegExp.$1)}return e}var r={init:true,running:false,pause:false,stop:false,slideComplete:false,stepComplete:false,controlsActive:true,currentSlide:0,lastSlide:null,maxSlide:0,currentStep:0,maxStep:0,currentObj:0,maxObjs:0,finishedObjs:0},i={currentSlide:null,lastSlide:null,animationkey:"none"},s=[],o=null,u=null,a=null;e(t).wrapInner('<div class="fraction-slider" />');var f=e(t).find(".fraction-slider"),l=null;r.maxSlide=f.children(".slide").length-1;var c=f.width(),h=e("body").width(),p=0;if(n.fullWidth){p=(h-c)/2;c=h}var d=f.height();v();this.start=function(){m()};this.startNextSlide=function(){g()};this.stop=function(){y()};this.pause=function(){b(false)};this.resume=function(){w()}};e.fn.fractionSlider=function(t){if(n[t]){return n[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t=="object"||!t){return n.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.tooltip")}};var i={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){i[t]=function(t){return Math.pow(t,e+2)}});e.extend(i,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e==0||e==1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}});e.each(i,function(t,n){e.easing["easeIn"+t]=n;e.easing["easeOut"+t]=function(e){return 1-n(1-e)};e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})})(jQuery)

/* My stuff */
jQuery(document).foundation();

jQuery(window).load(function(){
  $('.slides').fractionSlider({'transitionIn' : 'bottom', 'transitionOut' : 'bottom', 'timeout' : 3000, 'speedOut' : 500, 'speedIn' : 1000});
});


// Accordion for FAQ template

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeInOutExpo',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
});

(function( window, $, undefined ) {

    var $event = $.event, resizeTimeout;

    $event.special.smartresize  = {
        setup: function() {
            $(this).bind( "resize", $event.special.smartresize.handler );
        },
        teardown: function() {
            $(this).unbind( "resize", $event.special.smartresize.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args    = arguments;

            // set correct event type
            event.type = "smartresize";

            if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
            resizeTimeout = setTimeout(function() {
                jQuery.event.handle.apply( context, args );
            }, execAsap === "execAsap"? 0 : 100 );
        }
    };

    $.fn.smartresize            = function( fn ) {
        return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
    };

    $.Accordion                 = function( options, element ) {

        this.$el            = $( element );
        // list items
        this.$items         = this.$el.children('ul').children('li');
        // total number of items
        this.itemsCount     = this.$items.length;

        // initialize accordion
        this._init( options );

    };

    $.Accordion.defaults        = {
        // index of opened item. -1 means all are closed by default.
        open            : -1,
        // if set to true, only one item can be opened. Once one item is opened, any other that is opened will be closed first
        oneOpenedItem   : true,
        // speed of the open / close item animation
        speed           : 600,
        // easing of the open / close item animation
        easing          : 'easeInOutExpo',
        // speed of the scroll to action animation
        scrollSpeed     : 900,
        // easing of the scroll to action animation
        scrollEasing    : 'easeInOutExpo'
    };

    $.Accordion.prototype       = {
        _init               : function( options ) {

            this.options        = $.extend( true, {}, $.Accordion.defaults, options );

            // validate options
            this._validate();

            // current is the index of the opened item
            this.current        = this.options.open;

            // hide the contents so we can fade it in afterwards
            this.$items.find('div.acc-content').hide();

            // save original height and top of each item
            this._saveDimValues();

            // if we want a default opened item...
            if( this.current != -1 )
                this._toggleItem( this.$items.eq( this.current ) );

            // initialize the events
            this._initEvents();

        },
        _saveDimValues      : function() {

            this.$items.each( function() {

                var $item       = $(this);

                $item.data({
                    originalHeight  : $item.find('a:first').height(),
                    offsetTop       : $item.offset().top - 40
                });

            });

        },
        // validate options
        _validate           : function() {

            // open must be between -1 and total number of items, otherwise we set it to -1
            if( this.options.open < -1 || this.options.open > this.itemsCount - 1 )
                this.options.open = -1;

        },
        _initEvents         : function() {

            var instance    = this;

            // open / close item
            this.$items.find('a:first').bind('click.accordion', function( event ) {

                var $item           = $(this).parents('li');

                // close any opened item if oneOpenedItem is true
                if( instance.options.oneOpenedItem && instance._isOpened() && instance.current!== $item.index() ) {

                    instance._toggleItem( instance.$items.eq( instance.current ) );

                }

                // open / close item
                instance._toggleItem( $item );

                return false;

            });

            $(window).bind('smartresize.accordion', function( event ) {

                // reset orinal item values
                instance._saveDimValues();

                // reset the content's height of any item that is currently opened
                instance.$el.find('li.acc-open').each( function() {

                    var $this   = $(this);
                    $this.css( 'height', $this.data( 'originalHeight' ) + $this.find('div.acc-content').outerHeight( true ) );

                });

                // scroll to current
                if( instance._isOpened() )
                instance._scroll();

            });

        },
        // checks if there is any opened item
        _isOpened           : function() {

            return ( this.$el.find('li.acc-open').length > 0 );

        },
        // open / close item
        _toggleItem         : function( $item ) {

            var $content = $item.find('div.acc-content');

            ( $item.hasClass( 'acc-open' ) )

                ? ( this.current = -1, $content.stop(true, true).fadeOut( this.options.speed ), $item.removeClass( 'acc-open' ).stop().animate({
                    height  : $item.data( 'originalHeight' )
                }, this.options.speed, this.options.easing ) )

                : ( this.current = $item.index(), $content.stop(true, true).fadeIn( this.options.speed ), $item.addClass( 'acc-open' ).stop().animate({
                    height  : $item.data( 'originalHeight' ) + $content.outerHeight( true )
                }, this.options.speed, this.options.easing ), this._scroll( this ) )

        },
        // scrolls to current item or last opened item if current is -1
        _scroll             : function( instance ) {

            var instance    = instance || this, current;

            ( instance.current !== -1 ) ? current = instance.current : current = instance.$el.find('li.acc-open:last').index();

            $('html, body').stop().animate({
                scrollTop   : ( instance.options.oneOpenedItem ) ? instance.$items.eq( current ).data( 'offsetTop' ) : instance.$items.eq( current ).offset().top
            }, instance.options.scrollSpeed, instance.options.scrollEasing );

        }
    };

    var logError                = function( message ) {

        if ( this.console ) {

            console.error( message );

        }

    };

    $.fn.accordion              = function( options ) {

        if ( typeof options === 'string' ) {

            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function() {

                var instance = $.data( this, 'accordion' );

                if ( !instance ) {
                    logError( "cannot call methods on accordion prior to initialization; " +
                    "attempted to call method '" + options + "'" );
                    return;
                }

                if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
                    logError( "no such method '" + options + "' for accordion instance" );
                    return;
                }

                instance[ options ].apply( instance, args );

            });

        }
        else {

            this.each(function() {
                var instance = $.data( this, 'accordion' );
                if ( !instance ) {
                    $.data( this, 'accordion', new $.Accordion( options, this ) );
                }
            });

        }

        return this;

    };

})( window, jQuery );


jQuery(function() {
  jQuery('#accordion').accordion();
});