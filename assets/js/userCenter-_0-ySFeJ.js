import{cQ as s}from"./index-yDSqlga2.js";/**
 * @description 用户中心
 * @license Apache License Version 2.0
2022
,
 * @Copyright (c) 2025-Now 创翎
 * @remarks
 * 基于 Apache License Version 2.0 协议发布，可用于商业项目，但必须遵守以下补充条款:
 * 1.请不要删除和修改根目录下的LICENSE文件。
 * 2.源码头部的版权声明。
 * 3.分发源码
 * 4.基于本软件开源。
 * 5.请不得将本软件应用于危害国家安全、荣誉和利益的行为，不能以任何形式用于非法为目的的行为不要删除和修改作者声明。
 * 6.任何基于本软件而产生的一切法律纠纷和责任，均于我司无关
 */const a="simple-userCenter",t="accountBasic",c="file",o="message",i="short",r=s({id:a,state:()=>({tab:t,accountBasic:t,file:c,message:o,short:i}),getters:{getTab:e=>e.tab,getAccountBasic:e=>e.accountBasic,getFile:e=>e.file,getMessage:e=>e.message,getShort:e=>e.short},actions:{setTab(e){this.tab=e},resetTab(){this.tab=t},setMessage(){this.tab="message"}}});export{r as u};
