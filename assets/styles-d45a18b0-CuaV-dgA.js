import{A as e,C as t,Dt as n,Ft as r,R as i,T as a,_ as o,b as s,dn as c,fn as l,mn as u,ot as d,p as f,pn as p,s as m,z as h,zt as g}from"./mermaid-7ea9cbd6-BdX7hR98.js";import{t as _}from"./channel-Ca5iK5aA.js";import{t as v}from"./graphlib-mZ-n3zxy.js";import{t as y}from"./index-5325376f-xf7JJFHY.js";function b(e){return typeof e==`string`?new l([document.querySelectorAll(e)],[document.documentElement]):new l([u(e)],p)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var r=t.graph();if(d(r)){var i=r.transition;if(n(i))return i(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(t,n,r,i,c,l){let u=i.select(`[id="${r}"]`),d=Object.keys(t);for(let r of d){let i=t[r],d=`default`;i.classes.length>0&&(d=i.classes.join(` `)),d+=` flowchart-label`;let p=s(i.styles),h=i.text===void 0?i.id:i.text,g;if(a.info(`vertex`,i,i.labelType),i.labelType===`markdown`)a.info(`vertex`,i,i.labelType);else if(f(o().flowchart.htmlLabels))g=O(u,{label:h}).node(),g.parentNode.removeChild(g);else{let e=c.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,p.labelStyle.replace(`color:`,`fill:`));let t=h.split(m.lineBreakRegex);for(let n of t){let t=c.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(i.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await e(h,o());n.setNode(i.id,{labelStyle:p.labelStyle,shape:v,labelText:y,labelType:i.labelType,rx:_,ry:_,class:d,style:p.style,id:i.id,link:i.link,linkTarget:i.linkTarget,tooltip:l.db.getTooltip(i.id)||``,domId:l.db.lookUpDomId(i.id),haveCallback:i.haveCallback,width:i.type===`group`?500:void 0,dir:i.dir,type:i.type,props:i.props,padding:o().flowchart.padding}),a.info(`setNode`,{labelStyle:p.labelStyle,labelType:i.labelType,shape:v,labelText:y,rx:_,ry:_,class:d,style:p.style,id:i.id,domId:l.db.lookUpDomId(i.id),width:i.type===`group`?500:void 0,type:i.type,dir:i.dir,props:i.props,padding:o().flowchart.padding})}},M=async function(n,r,i){a.info(`abc78 edges = `,n);let c=0,l={},u,d;if(n.defaultStyle!==void 0){let e=s(n.defaultStyle);u=e.style,d=e.labelStyle}for(let i of n){c++;let f=`L-`+i.start+`-`+i.end;l[f]===void 0?(l[f]=0,a.info(`abc78 new entry`,f,l[f])):(l[f]++,a.info(`abc78 new entry`,f,l[f]));let p=f+`-`+l[f];a.info(`abc78 new link id to be used is`,f,p,l[f]);let h=`LS-`+i.start,_=`LE-`+i.end,v={style:``,labelStyle:``};switch(v.minlen=i.length||1,i.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,i.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(i.stroke){case`normal`:y=`fill:none;`,u!==void 0&&(y=u),d!==void 0&&(b=d),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(i.style!==void 0){let e=s(i.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,i.interpolate===void 0?n.defaultInterpolate===void 0?v.curve=t(k.curve,g):v.curve=t(n.defaultInterpolate,g):v.curve=t(i.interpolate,g),i.text===void 0?i.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=i.labelType,v.label=await e(i.text.replace(m.lineBreakRegex,`
`),o()),i.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=p,v.classes=`flowchart-link `+h+` `+_,r.setEdge(i.start,i.end,v,c)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,r){a.info(`Drawing flowchart`);let s=r.db.getDirection();s===void 0&&(s=`TD`);let{securityLevel:l,flowchart:u}=o(),d=u.nodeSpacing||50,f=u.rankSpacing||50,p;l===`sandbox`&&(p=c(`#i`+t));let m=c(l===`sandbox`?p.nodes()[0].contentDocument.body:`body`),g=l===`sandbox`?p.nodes()[0].contentDocument:document,_=new v({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:d,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=r.db.getSubGraphs();a.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],a.info(`Subgraph - `,x),r.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=r.db.getVertices(),w=r.db.getEdges();a.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)a.info(`Setting up subgraphs`,x.nodes[e],x.id),_.setParent(x.nodes[e],x.id)}await j(C,_,t,m,g,r),await M(w,_);let E=m.select(`[id="${t}"]`);if(await y(m.select(`#`+t+` g`),_,[`point`,`circle`,`cross`],`flowchart`,t),h.insertTitle(E,`flowchartTitleText`,u.titleTopMargin,r.db.getDiagramTitle()),i(_,E,u.diagramPadding,u.useMaxWidth),r.db.indexNodes(`subGraph`+T),!u.htmlLabels){let e=g.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=g.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let n=C[e];if(n.link){let r=c(`#`+t+` [id="`+e+`"]`);if(r){let e=g.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,n.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,n.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),l===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):n.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,n.linkTarget);let t=r.insert(function(){return e},`:first-child`),i=r.select(`.label-container`);i&&t.append(function(){return i.node()});let a=r.select(`.label`);a&&t.append(function(){return a.node()})}}})}},P=(e,t)=>{let n=_;return r(n(e,`r`),n(e,`g`),n(e,`b`),t)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{T as a,x as c,E as i,b as l,F as n,D as o,O as r,S as s,N as t};