// ==UserScript==
// @name         百度文库 文档打印
// @namespace    http://github.com/HelloCodeMing/baidu-wenku
// @version      0.1
// @description  enter something useful
// @author       wanghuanming
// @match        wenku.baidu.com/view*
// @grant        none
// ==/UserScript==

(
   var pageCnt = ".reader-page";
   function(){
      function WenKuUtil(){
         this.pageNum = $(pageCnt).length;
         for(var i=0; i < this.pageNum; i++;){
            this.pageTxt['reader-page-'+(i+1)] = null;  
         }
      }
      
      WenKuUtil.prototype = {
         pageNum : 0,
         pageTxt : {}
      };
      
      WenKuUtil.prototype.constructor = WenKuUtil;
      
      function IsDocPageOutofView(){
         var top = $(window).scrollTop(), 
		   divBottom = $(sel).offset().top + $(sel).outerHeight();
		   if (divBottom > top) {
            return false;
         } else { 
            console.log("out of view");
            return true;
         }
      }
    
      WenKuUtil.enterPrintView = function(rmCtrl){
          rmCtrl = (rmCtrl == undefined ? true : rmCtrl);
          $(".aside").remove  ();
          $("#doc #hd").remove  ();
          $(".crubms-wrap").remove  ();
          $(".user-bar").remove ();
          $("#doc-header").remove ();
          $(".reader-tools-bar-wrap").remove  ();
          $(".fix-searchbar-wrap").remove ();
          $("#bottom-doc-list-8").remove  ();
          $(".ft").remove ();
          $("#ft").remove ();
          $("#docBubble").remove  ();
          $("body").attr("margin", "auto  ");
          $(".banner-wrap").remove  ();
          $(".doc-reader > span").remove  ();
          $("#doc-header-test").remove  ();
          $('.wk-other-new-cntent').remove  ();
          $(".pay-page-mod .inner").remove  ();
          $(".ft").remove ();
          $("#ft").remove ();
        
          if(rmCtrl ){
            $(".reader-fullScreen").remove  ();
            $(".pageList-btn").remove ();
            $("#next_doc_box").remove();
            $("#html-reader-go-more").remove();
          }
        
          $("*").css("border", 0  );
          $(".bd-wrap").css("width", "100 %");
          $(".body-v3").css("width", "100 %");
          $(".main").css("margin", 0  );
          $(".main").css("width", "100  %");
          $(".doc-main").css("width", "100  %");
          $(".inner").css("width", "100 %");
          $("#reader-container-1").css("width", "100  %");
          $(".reader-page").css("margin", 0 );
          };
    
      window["WenKuUtil"] = WenKuUtil ;
   }
)();

WenKuUtil.enterPrintView();
