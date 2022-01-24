// @fancyapps/ui/Panzoom.Controls v4.0.20
class t{constructor(t){this.panzoom=t,this.$container=null}addButton(t,o=!1){const n=document.createElement("button");return n.setAttribute("title",this.panzoom.localize(`{{CONTROLS.${t.toUpperCase()}}}`)),n.classList.add("panzoom__button"),n.classList.add(`panzoom__button--${t}`),n.innerHTML=this.panzoom.localize(this.panzoom.option(`Controls.tpl.${t}`,"")),o&&n.addEventListener("click",(o=>{o.stopPropagation(),this.panzoom[t]()})),this.$container.appendChild(n),n}createContainer(){if(this.$container||!this.panzoom.option("zoom"))return;const t=document.createElement("div");t.classList.add("panzoom__controls"),this.$container=this.panzoom.$container.appendChild(t);for(const t of this.panzoom.option("Controls.buttons",[]))this.addButton(t,!0)}removeContainer(){this.$container&&(this.$container.remove(),this.$container=null)}attach(){this.createContainer()}detach(){this.removeContainer()}}var o;t.defaults={l10n:{ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out"},buttons:["zoomIn","zoomOut"],tpl:{zoomIn:'<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20M20 12L4 12" /></svg>',zoomOut:'<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" /></svg>'}},"undefined"!=typeof Panzoom&&("object"==typeof(o=Panzoom.Plugins)&&null!==o&&o.constructor===Object&&"[object Object]"===Object.prototype.toString.call(o))&&(Panzoom.Plugins.Controls=t);export{t as Controls};
