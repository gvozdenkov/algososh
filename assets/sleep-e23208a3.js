import{j as t,c as a,e as c,f as C,g as o,L as m,R as p}from"./index-062b9af9.js";const j="/algososh/assets/loader-d07963fc.svg",_=({fill:s})=>t.jsx("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H11C11.5523 2 12 1.55228 12 1C12 0.447715 11.5523 0 11 0H1ZM0 6C0 5.44772 0.447715 5 1 5H15C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H1C0.447715 7 0 6.55228 0 6ZM0 11C0 10.4477 0.447715 10 1 10H19C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12H1C0.447716 12 0 11.5523 0 11Z",fill:s,fillOpacity:"0.85"})}),w=({fill:s})=>t.jsx("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1C20 1.55228 19.5523 2 19 2H1C0.44772 2 0 1.55228 0 1ZM0 6C0 5.4477 0.44772 5 1 5H15C15.5523 5 16 5.4477 16 6C16 6.5523 15.5523 7 15 7H1C0.44772 7 0 6.5523 0 6ZM1 10C0.44772 10 0 10.4477 0 11C0 11.5523 0.44772 12 1 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H1Z",fill:s,fillOpacity:"0.85"})}),f=({text:s,extraClass:e="",type:i="button",isLoader:n=!1,sorting:l,linkedList:r,disabled:x,...h})=>{const d=n?"transparent":"#e4e4e4",u=l==="asc"?t.jsx(_,{fill:d}):t.jsx(w,{fill:d});return t.jsxs("button",{className:a("text_type_button",c.button,{[c.linkedList]:r},{[c.loader]:n},{[e]:!!e}),type:i,disabled:n||x,...h,children:[l&&u,t.jsx("p",{className:a("text",{"ml-5":l},{[c.hiddenText]:n}),children:s}),n&&t.jsx("img",{className:c.loader_icon,src:j,height:"50%",alt:"Loading"})]})},g=({color:s})=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.7073 4.29289C13.0978 4.68342 13.0978 5.31658 12.7073 5.70711L7.41436 11H19.0002C19.5524 11 20.0002 11.4477 20.0002 12C20.0002 12.5523 19.5524 13 19.0002 13H7.41436L12.7073 18.2929C13.0978 18.6834 13.0978 19.3166 12.7073 19.7071C12.3167 20.0976 11.6836 20.0976 11.293 19.7071L3.58594 12L11.293 4.29289C11.6836 3.90237 12.3167 3.90237 12.7073 4.29289Z",fill:s??"#0032FF"})}),v=({htmlType:s="button",color:e="#cdd9e5",extraClass:i="",children:n,...l})=>t.jsxs("button",{className:a("text text_type_button text_color_primary",C.button,{[i]:!!i}),style:{color:e},type:s,...l,children:[t.jsx(g,{color:e}),n]}),y=({title:s,children:e})=>t.jsxs("div",{className:o.main,children:[t.jsx(m,{className:o.main__backBtn,to:p.HOME,children:t.jsx(v,{color:"#cdd9e5",children:"Back"})}),t.jsx("h3",{className:a("text text_type_sm",o.main__title),children:s}),t.jsx("div",{className:o.main__result,children:e})]}),b=1e3,M=500,N=async s=>new Promise(e=>setTimeout(e,s));export{f as B,b as D,y as S,M as a,N as s};
