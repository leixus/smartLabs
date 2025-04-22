/* empty css             *//* empty css                  */import{d as f,X as c,U as p,bx as d,O as m,N as _,i as x,o as E,w as D,aa as g,e as w,t as y,u as i,ad as T,D as B,W as h,V as b}from"./index-Djyl84eR.js";import{F as t}from"./formEnum-CT3LisML.js";const $=f({name:"SButton"}),C=f({...$,props:{opt:{default:t.ADD},prefix:{},suffix:{default:""},icon:{},permission:{}},setup(r){const e=r,s=c(()=>{if(e.icon)return e.icon;switch(e.opt){case t.ADD:return p;case t.EDIT:return _;case t.DELETE:return m;case t.VIEW:return d;default:return p}}),n=c(()=>{switch(e.opt){case t.DELETE:return"danger";default:return"primary"}}),o=c(()=>e.prefix?e.prefix+e.suffix:e.opt+e.suffix);return(a,u)=>{const l=B;return E(),x(l,T({type:i(n),icon:i(s)},a.$attrs),{default:D(()=>[g(a.$slots,"default",{},()=>[w(y(i(o)),1)])]),_:3},16,["type","icon"])}}});/**
 * @description 操作单条数据信息
 * @license Apache License Version 2.0
 * @Copyright (c) 2025-Now 创翎
 * @remarks
 * 基于 Apache License Version 2.0 协议发布，可用于商业项目，但必须遵守以下补充条款:
 * 1.请不要删除和修改根目录下的LICENSE文件。
 * 2.源码头部的版权声明。
 * 3.分发源码
 * 4.基于本软件开源。
 * 5.请不得将本软件应用于危害国家安全、荣誉和利益的行为，不能以任何形式用于非法为目的的行为不要删除和修改作者声明。
 * 6.任何基于本软件而产生的一切法律纠纷和责任，均于我司无关
 * @see https://gitee.com/dotnetmoyu/SimpleAdmin
 */const F=(r,e={},s,n="warning")=>new Promise((o,a)=>{h.confirm(`是否${s}?`,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:n,draggable:!0}).then(async()=>{const u=await r(e);if(!u)return a(!1);b({type:"success",message:`${s}成功!`}),o(u)}).catch(()=>{})});export{C as _,F as u};
