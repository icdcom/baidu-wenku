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
  function enterPrintView(rmCtrl){
    $(".aside").remove();
    $("#doc #hd").remove();
    $(".crubms-wrap").remove();
    $(".user-bar").remove();
    $("#doc-header").remove();
    $(".reader-tools-bar-wrap").remove();
    $(".fix-searchbar-wrap").remove();
    $("#bottom-doc-list-8").remove();
    $(".ft").remove();
    $("#ft").remove();
    $("#docBubble").remove();
    $("body").attr("margin", "auto");
    $(".banner-wrap").remove();
    $(".new-ico-wkmember-free-doc").remove();
    $("#doc-header-test").remove();
    $('.wk-other-new-cntent').remove();
    $(".pay-page-mod .inner").remove();
    $(".ft").remove();
    $("#ft").remove();

    if(rmCtrl){
      $(".reader-fullScreen").remove();
      $(".pageList-btn").remove();
    }

    $("*").css("border", 0);
    $(".bd-wrap").css("width", "100%");
    $(".body-v3").css("width", "100%");
    $(".main").css("margin", 0);
    $(".main").css("width", "100%");
    $(".doc-main").css("width", "100%");
    $(".inner").css("width", "100%");
    $("#reader-container-1").css("width", "100%");
    $(".reader-page").css("margin", 0);
  }

)(true);
