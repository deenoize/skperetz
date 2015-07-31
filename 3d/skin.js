// Garden Gnome Software - Skin
// Pano2VR pro 4.5.0/10633
// Filename: peres16.ggsk
// Generated Ср 15. июл 15:25:13 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/button_2__o.png';
		preLoadImg.src=basePath + 'images/image_9__o.png';
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-140 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-64 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -140px;';
		hs+='top:  -64px;';
		hs+='width: 333px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 28px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 28px;height: 28px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + 'images/zoomin__o.png';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + 'images/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 28px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 28px;height: 28px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + 'images/zoomout__o.png';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + 'images/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 150px;';
		hs+='top:  10px;';
		hs+='width: 28px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 28px;height: 28px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._autorotate__img.src=basePath + 'images/autorotate__o.png';
		}
		this._autorotate.onmouseout=function () {
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._controller.appendChild(this._autorotate);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 182px;';
		hs+='top:  10px;';
		hs+='width: 28px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 28px;height: 28px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
			me._fullscreen.ggIsOver=true;
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
			me._fullscreen.ggIsOver=false;
		}
		this._fullscreen.onmousedown=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__a.png';
		}
		this._fullscreen.onmouseup=function () {
			if (me._fullscreen.ggIsOver) {
				me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
			} else {
				me._fullscreen__img.src=basePath + 'images/fullscreen.png';
			}
		}
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="<font face='Times, Times New Roman' size='24'><b>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430....<\/b><\/font>"+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle';
		this._userdatabrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  0px;';
		hs+='width: 238px;';
		hs+='height: 139px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text';
		this._title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text';
		this._description.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.player.userdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text';
		this._author.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.player.userdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text';
		this._datetime.ggType='text';
		this._datetime.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._datetime.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.player.userdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text';
		this._copyright.ggType='text';
		this._copyright.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._copyright.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.player.userdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 23px;';
		hs+='top:  10px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: -4px;';
		hs+='top:  -3px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -3px;';
		hs+='top:  41px;';
		hs+='width: 145px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg';
		this._marker_active.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 33px;';
		hs+='top:  -6px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;-webkit-user-drag:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg';
		this._marker_normal.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 70px;';
		hs+='top:  -5px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;-webkit-user-drag:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._image_3=document.createElement('div');
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=false;
		this._image_3.className='ggskin ggskin_image';
		this._image_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 125px;';
		hs+='top:  11px;';
		hs+='width: 1000px;';
		hs+='height: 598px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._image_3.setAttribute('style',hs);
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.onclick=function () {
			flag=(me._image_3.style.visibility=='hidden');
			me._image_3.style[domTransition]='none';
			me._image_3.style.visibility=flag?'inherit':'hidden';
			me._image_3.ggVisible=flag;
		}
		this.divSkin.appendChild(this._image_3);
		this._button_2=document.createElement('div');
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=false;
		this._button_2.className='ggskin ggskin_button';
		this._button_2.ggType='button';
		hs ='position:absolute;';
		hs+='left: 1065px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_2.setAttribute('style',hs);
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.onclick=function () {
			me._image_3.style[domTransition]='none';
			me._image_3.style.visibility='hidden';
			me._image_3.ggVisible=false;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility='hidden';
			me._button_2.ggVisible=false;
		}
		this._button_2.onmouseover=function () {
			me._button_2__img.src=basePath + 'images/button_2__o.png';
		}
		this._button_2.onmouseout=function () {
			me._button_2__img.src=basePath + 'images/button_2.png';
		}
		this.divSkin.appendChild(this._button_2);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=false;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		this._container_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-340 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-430 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -340px;';
		hs+='top:  -430px;';
		hs+='width: 692px;';
		hs+='height: 350px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._container_1.setAttribute('style',hs);
		this._button_1=document.createElement('div');
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=false;
		this._button_1.className='ggskin ggskin_button';
		this._button_1.ggType='button';
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  -33px;';
		hs+='width: 720px;';
		hs+='height: 380px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_1.setAttribute('style',hs);
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._container_1.appendChild(this._button_1);
		this._button_6=document.createElement('div');
		this._button_6.ggId="Button 6";
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=false;
		this._button_6.className='ggskin ggskin_button';
		this._button_6.ggType='button';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -20px;';
		hs+='width: 684px;';
		hs+='height: 354px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_6.setAttribute('style',hs);
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'images/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._container_1.appendChild(this._button_6);
		this._image_5=document.createElement('div');
		this._image_5.ggId="Image 5";
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_button';
		this._image_5.ggType='button';
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  4px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_5.setAttribute('style',hs);
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_button';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_5__img.className='ggskin ggskin_button';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.onclick=function () {
			me.player.openNext("{node3}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_5.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_5.style[domTransition]='none';
			} else {
				me._image_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_5.ggParameter.sx=1.05;me._image_5.ggParameter.sy=1.05;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
			me._text_109.style[domTransition]='none';
			me._text_109.style.visibility='inherit';
			me._text_109.ggVisible=true;
		}
		this._image_5.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_5.style[domTransition]='none';
			} else {
				me._image_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_5.ggParameter.sx=1;me._image_5.ggParameter.sy=1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
			me._text_109.style[domTransition]='none';
			me._text_109.style.visibility='hidden';
			me._text_109.ggVisible=false;
		}
		this._text_109=document.createElement('div');
		this._text_109__text=document.createElement('div');
		this._text_109.className='ggskin ggskin_textdiv';
		this._text_109.ggTextDiv=this._text_109__text;
		this._text_109.ggId="Text 109";
		this._text_109.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_109.ggVisible=false;
		this._text_109.className='ggskin ggskin_text';
		this._text_109.ggType='text';
		hs ='position:absolute;';
		hs+='left: -88px;';
		hs+='top:  129px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_109.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_109__text.setAttribute('style',hs);
		this._text_109__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0423\u043b\u0438\u0446\u0430 <\/b><\/font>";
		this._text_109.appendChild(this._text_109__text);
		this._image_5.appendChild(this._text_109);
		this._container_1.appendChild(this._image_5);
		this._image_600=document.createElement('div');
		this._image_600.ggId="Image 600";
		this._image_600.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_600.ggVisible=true;
		this._image_600.className='ggskin ggskin_button';
		this._image_600.ggType='button';
		hs ='position:absolute;';
		hs+='left: 485px;';
		hs+='top:  163px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_600.setAttribute('style',hs);
		this._image_600__img=document.createElement('img');
		this._image_600__img.className='ggskin ggskin_button';
		this._image_600__img.setAttribute('src',basePath + 'images/image_600.jpg');
		this._image_600__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_600__img.className='ggskin ggskin_button';
		this._image_600__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_600__img);
		this._image_600.appendChild(this._image_600__img);
		this._image_600.onclick=function () {
			me.player.openNext("{node6}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_600.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_600.style[domTransition]='none';
			} else {
				me._image_600.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_600.ggParameter.sx=1.05;me._image_600.ggParameter.sy=1.05;
			me._image_600.style[domTransform]=parameterToTransform(me._image_600.ggParameter);
			me._text_800.style[domTransition]='none';
			me._text_800.style.visibility='inherit';
			me._text_800.ggVisible=true;
		}
		this._image_600.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_600.style[domTransition]='none';
			} else {
				me._image_600.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_600.ggParameter.sx=1;me._image_600.ggParameter.sy=1;
			me._image_600.style[domTransform]=parameterToTransform(me._image_600.ggParameter);
			me._text_800.style[domTransition]='none';
			me._text_800.style.visibility='hidden';
			me._text_800.ggVisible=false;
		}
		this._text_800=document.createElement('div');
		this._text_800__text=document.createElement('div');
		this._text_800.className='ggskin ggskin_textdiv';
		this._text_800.ggTextDiv=this._text_800__text;
		this._text_800.ggId="Text 800";
		this._text_800.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_800.ggVisible=false;
		this._text_800.className='ggskin ggskin_text';
		this._text_800.ggType='text';
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  126px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_800.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_800__text.setAttribute('style',hs);
		this._text_800__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0421\u0430\u043d\u0443\u0437\u0435\u043b<\/b><\/font>";
		this._text_800.appendChild(this._text_800__text);
		this._image_600.appendChild(this._text_800);
		this._container_1.appendChild(this._image_600);
		this._image_60=document.createElement('div');
		this._image_60.ggId="Image 60";
		this._image_60.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_60.ggVisible=true;
		this._image_60.className='ggskin ggskin_button';
		this._image_60.ggType='button';
		hs ='position:absolute;';
		hs+='left: 326px;';
		hs+='top:  163px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_60.setAttribute('style',hs);
		this._image_60__img=document.createElement('img');
		this._image_60__img.className='ggskin ggskin_button';
		this._image_60__img.setAttribute('src',basePath + 'images/image_60.jpg');
		this._image_60__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_60__img.className='ggskin ggskin_button';
		this._image_60__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_60__img);
		this._image_60.appendChild(this._image_60__img);
		this._image_60.onclick=function () {
			me.player.openNext("{node10}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_60.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_60.style[domTransition]='none';
			} else {
				me._image_60.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_60.ggParameter.sx=1.05;me._image_60.ggParameter.sy=1.05;
			me._image_60.style[domTransform]=parameterToTransform(me._image_60.ggParameter);
			me._text_80.style[domTransition]='none';
			me._text_80.style.visibility='inherit';
			me._text_80.ggVisible=true;
		}
		this._image_60.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_60.style[domTransition]='none';
			} else {
				me._image_60.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_60.ggParameter.sx=1;me._image_60.ggParameter.sy=1;
			me._image_60.style[domTransform]=parameterToTransform(me._image_60.ggParameter);
			me._text_80.style[domTransition]='none';
			me._text_80.style.visibility='hidden';
			me._text_80.ggVisible=false;
		}
		this._text_80=document.createElement('div');
		this._text_80__text=document.createElement('div');
		this._text_80.className='ggskin ggskin_textdiv';
		this._text_80.ggTextDiv=this._text_80__text;
		this._text_80.ggId="Text 80";
		this._text_80.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_80.ggVisible=false;
		this._text_80.className='ggskin ggskin_text';
		this._text_80.ggType='text';
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  126px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_80.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_80__text.setAttribute('style',hs);
		this._text_80__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0420\u0430\u0437\u0434\u0435\u0432\u0430\u043b\u043a\u0430<\/b><\/font>";
		this._text_80.appendChild(this._text_80__text);
		this._image_60.appendChild(this._text_80);
		this._container_1.appendChild(this._image_60);
		this._image_70=document.createElement('div');
		this._image_70.ggId="Image 70";
		this._image_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_70.ggVisible=true;
		this._image_70.className='ggskin ggskin_button';
		this._image_70.ggType='button';
		hs ='position:absolute;';
		hs+='left: 167px;';
		hs+='top:  163px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_70.setAttribute('style',hs);
		this._image_70__img=document.createElement('img');
		this._image_70__img.className='ggskin ggskin_button';
		this._image_70__img.setAttribute('src',basePath + 'images/image_70.png');
		this._image_70__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_70__img.className='ggskin ggskin_button';
		this._image_70__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_70__img);
		this._image_70.appendChild(this._image_70__img);
		this._image_70.onclick=function () {
			me.player.openNext("{node7}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_70.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_70.style[domTransition]='none';
			} else {
				me._image_70.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_70.ggParameter.sx=1.05;me._image_70.ggParameter.sy=1.05;
			me._image_70.style[domTransform]=parameterToTransform(me._image_70.ggParameter);
			me._text_2001.style[domTransition]='none';
			me._text_2001.style.visibility='inherit';
			me._text_2001.ggVisible=true;
		}
		this._image_70.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_70.style[domTransition]='none';
			} else {
				me._image_70.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_70.ggParameter.sx=1;me._image_70.ggParameter.sy=1;
			me._image_70.style[domTransform]=parameterToTransform(me._image_70.ggParameter);
			me._text_2001.style[domTransition]='none';
			me._text_2001.style.visibility='hidden';
			me._text_2001.ggVisible=false;
		}
		this._text_2001=document.createElement('div');
		this._text_2001__text=document.createElement('div');
		this._text_2001.className='ggskin ggskin_textdiv';
		this._text_2001.ggTextDiv=this._text_2001__text;
		this._text_2001.ggId="Text 2001";
		this._text_2001.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2001.ggVisible=false;
		this._text_2001.className='ggskin ggskin_text';
		this._text_2001.ggType='text';
		hs ='position:absolute;';
		hs+='left: -124px;';
		hs+='top:  126px;';
		hs+='width: 394px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_2001.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 394px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_2001__text.setAttribute('style',hs);
		this._text_2001__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0418\u043d\u0444\u0440\u0430\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u0430\u0443\u043d\u0430 <\/b><\/font>";
		this._text_2001.appendChild(this._text_2001__text);
		this._image_70.appendChild(this._text_2001);
		this._container_1.appendChild(this._image_70);
		this._image_9=document.createElement('div');
		this._image_9.ggId="Image 9";
		this._image_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_9.ggVisible=true;
		this._image_9.className='ggskin ggskin_button';
		this._image_9.ggType='button';
		hs ='position:absolute;';
		hs+='left: 618px;';
		hs+='top:  -37px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_9.setAttribute('style',hs);
		this._image_9__img=document.createElement('img');
		this._image_9__img.className='ggskin ggskin_button';
		this._image_9__img.setAttribute('src',basePath + 'images/image_9.png');
		this._image_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_9__img.className='ggskin ggskin_button';
		this._image_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_9__img);
		this._image_9.appendChild(this._image_9__img);
		this._image_9.onclick=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_9.onmouseover=function () {
			me._image_9__img.src=basePath + 'images/image_9__o.png';
		}
		this._image_9.onmouseout=function () {
			me._image_9__img.src=basePath + 'images/image_9.png';
		}
		this._container_1.appendChild(this._image_9);
		this._image_7=document.createElement('div');
		this._image_7.ggId="Image 7";
		this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_7.ggVisible=true;
		this._image_7.className='ggskin ggskin_button';
		this._image_7.ggType='button';
		hs ='position:absolute;';
		hs+='left: 8px;';
		hs+='top:  162px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_7.setAttribute('style',hs);
		this._image_7__img=document.createElement('img');
		this._image_7__img.className='ggskin ggskin_button';
		this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
		this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_7__img.className='ggskin ggskin_button';
		this._image_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_7__img);
		this._image_7.appendChild(this._image_7__img);
		this._image_7.onclick=function () {
			me.player.openNext("{node9}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_7.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_7.style[domTransition]='none';
			} else {
				me._image_7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_7.ggParameter.sx=1.05;me._image_7.ggParameter.sy=1.05;
			me._image_7.style[domTransform]=parameterToTransform(me._image_7.ggParameter);
			me._text_200.style[domTransition]='none';
			me._text_200.style.visibility='inherit';
			me._text_200.ggVisible=true;
		}
		this._image_7.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_7.style[domTransition]='none';
			} else {
				me._image_7.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_7.ggParameter.sx=1;me._image_7.ggParameter.sy=1;
			me._image_7.style[domTransform]=parameterToTransform(me._image_7.ggParameter);
			me._text_200.style[domTransition]='none';
			me._text_200.style.visibility='hidden';
			me._text_200.ggVisible=false;
		}
		this._text_200=document.createElement('div');
		this._text_200__text=document.createElement('div');
		this._text_200.className='ggskin ggskin_textdiv';
		this._text_200.ggTextDiv=this._text_200__text;
		this._text_200.ggId="Text 200";
		this._text_200.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_200.ggVisible=false;
		this._text_200.className='ggskin ggskin_text';
		this._text_200.ggType='text';
		hs ='position:absolute;';
		hs+='left: -124px;';
		hs+='top:  127px;';
		hs+='width: 394px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_200.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 394px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_200__text.setAttribute('style',hs);
		this._text_200__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0424\u0438\u0442\u043d\u0435\u0441 \u0437\u0430\u043b<\/b><\/font>";
		this._text_200.appendChild(this._text_200__text);
		this._image_7.appendChild(this._text_200);
		this._container_1.appendChild(this._image_7);
		this._image_40=document.createElement('div');
		this._image_40.ggId="Image 40";
		this._image_40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_40.ggVisible=true;
		this._image_40.className='ggskin ggskin_button';
		this._image_40.ggType='button';
		hs ='position:absolute;';
		hs+='left: 484px;';
		hs+='top:  5px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_40.setAttribute('style',hs);
		this._image_40__img=document.createElement('img');
		this._image_40__img.className='ggskin ggskin_button';
		this._image_40__img.setAttribute('src',basePath + 'images/image_40.png');
		this._image_40__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_40__img.className='ggskin ggskin_button';
		this._image_40__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_40__img);
		this._image_40.appendChild(this._image_40__img);
		this._image_40.onclick=function () {
			me.player.openNext("{node8}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_40.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_40.style[domTransition]='none';
			} else {
				me._image_40.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_40.ggParameter.sx=1.05;me._image_40.ggParameter.sy=1.05;
			me._image_40.style[domTransform]=parameterToTransform(me._image_40.ggParameter);
			me._text_201.style[domTransition]='none';
			me._text_201.style.visibility='inherit';
			me._text_201.ggVisible=true;
		}
		this._image_40.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_40.style[domTransition]='none';
			} else {
				me._image_40.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_40.ggParameter.sx=1;me._image_40.ggParameter.sy=1;
			me._image_40.style[domTransform]=parameterToTransform(me._image_40.ggParameter);
			me._text_201.style[domTransition]='none';
			me._text_201.style.visibility='hidden';
			me._text_201.ggVisible=false;
		}
		this._text_201=document.createElement('div');
		this._text_201__text=document.createElement('div');
		this._text_201.className='ggskin ggskin_textdiv';
		this._text_201.ggTextDiv=this._text_201__text;
		this._text_201.ggId="Text 201";
		this._text_201.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_201.ggVisible=false;
		this._text_201.className='ggskin ggskin_text';
		this._text_201.ggType='text';
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  128px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_201.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_201__text.setAttribute('style',hs);
		this._text_201__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043b<\/b><\/font>";
		this._text_201.appendChild(this._text_201__text);
		this._image_40.appendChild(this._text_201);
		this._container_1.appendChild(this._image_40);
		this._image_6=document.createElement('div');
		this._image_6.ggId="Image 6";
		this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_6.ggVisible=true;
		this._image_6.className='ggskin ggskin_button';
		this._image_6.ggType='button';
		hs ='position:absolute;';
		hs+='left: 326px;';
		hs+='top:  5px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_6.setAttribute('style',hs);
		this._image_6__img=document.createElement('img');
		this._image_6__img.className='ggskin ggskin_button';
		this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
		this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_6__img.className='ggskin ggskin_button';
		this._image_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_6__img);
		this._image_6.appendChild(this._image_6__img);
		this._image_6.onclick=function () {
			me.player.openNext("{node5}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_6.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_6.style[domTransition]='none';
			} else {
				me._image_6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_6.ggParameter.sx=1.05;me._image_6.ggParameter.sy=1.05;
			me._image_6.style[domTransform]=parameterToTransform(me._image_6.ggParameter);
			me._text_8.style[domTransition]='none';
			me._text_8.style.visibility='inherit';
			me._text_8.ggVisible=true;
		}
		this._image_6.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_6.style[domTransition]='none';
			} else {
				me._image_6.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_6.ggParameter.sx=1;me._image_6.ggParameter.sy=1;
			me._image_6.style[domTransform]=parameterToTransform(me._image_6.ggParameter);
			me._text_8.style[domTransition]='none';
			me._text_8.style.visibility='hidden';
			me._text_8.ggVisible=false;
		}
		this._text_8=document.createElement('div');
		this._text_8__text=document.createElement('div');
		this._text_8.className='ggskin ggskin_textdiv';
		this._text_8.ggTextDiv=this._text_8__text;
		this._text_8.ggId="Text 8";
		this._text_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_8.ggVisible=false;
		this._text_8.className='ggskin ggskin_text';
		this._text_8.ggType='text';
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  128px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_8.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_8__text.setAttribute('style',hs);
		this._text_8__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0420\u0435\u0441\u0435\u043f\u0448\u043d<\/b><\/font>";
		this._text_8.appendChild(this._text_8__text);
		this._image_6.appendChild(this._text_8);
		this._container_1.appendChild(this._image_6);
		this._image_90=document.createElement('div');
		this._image_90.ggId="Image 90";
		this._image_90.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_90.ggVisible=true;
		this._image_90.className='ggskin ggskin_button';
		this._image_90.ggType='button';
		hs ='position:absolute;';
		hs+='left: 168px;';
		hs+='top:  5px;';
		hs+='width: 150px;';
		hs+='height: 150px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_90.setAttribute('style',hs);
		this._image_90__img=document.createElement('img');
		this._image_90__img.className='ggskin ggskin_button';
		this._image_90__img.setAttribute('src',basePath + 'images/image_90.png');
		this._image_90__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_90__img.className='ggskin ggskin_button';
		this._image_90__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_90__img);
		this._image_90.appendChild(this._image_90__img);
		this._image_90.onclick=function () {
			me.player.openNext("{node4}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._image_90.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._image_90.style[domTransition]='none';
			} else {
				me._image_90.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_90.ggParameter.sx=1.05;me._image_90.ggParameter.sy=1.05;
			me._image_90.style[domTransform]=parameterToTransform(me._image_90.ggParameter);
			me._text_9.style[domTransition]='none';
			me._text_9.style.visibility='inherit';
			me._text_9.ggVisible=true;
		}
		this._image_90.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_90.style[domTransition]='none';
			} else {
				me._image_90.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_90.ggParameter.sx=1;me._image_90.ggParameter.sy=1;
			me._image_90.style[domTransform]=parameterToTransform(me._image_90.ggParameter);
			me._text_9.style[domTransition]='none';
			me._text_9.style.visibility='hidden';
			me._text_9.ggVisible=false;
		}
		this._text_9=document.createElement('div');
		this._text_9__text=document.createElement('div');
		this._text_9.className='ggskin ggskin_textdiv';
		this._text_9.ggTextDiv=this._text_9__text;
		this._text_9.ggId="Text 9";
		this._text_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_9.ggVisible=false;
		this._text_9.className='ggskin ggskin_text';
		this._text_9.ggType='text';
		hs ='position:absolute;';
		hs+='left: -87px;';
		hs+='top:  128px;';
		hs+='width: 329px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_9.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 329px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_9__text.setAttribute('style',hs);
		this._text_9__text.innerHTML="<font face='Times, Times New Roman' size='14'><b>\u0412\u0445\u043e\u0434 <\/b><\/font>";
		this._text_9.appendChild(this._text_9__text);
		this._image_90.appendChild(this._text_9);
		this._container_1.appendChild(this._image_90);
		this.divSkin.appendChild(this._container_1);
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='popup7') {
			me._image_3.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
		this._marker_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='popup2') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-44 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-172 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -44px;';
			hs+='top:  -172px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__div.ggParameter) + ';';
			hs+='opacity: 0.9;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -43px;';
			hs+='top:  42px;';
			hs+='width: 96px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML="<font face='Times, Times New Roman' size='24'><b>"+me.hotspot.title+"<\/b><\/font> ";
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
			this._button_3=document.createElement('div');
			this._button_3.ggId="Button 3";
			this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_3.ggVisible=true;
			this._button_3.className='ggskin ggskin_button';
			this._button_3.ggType='button';
			hs ='position:absolute;';
			hs+='left: -25px;';
			hs+='top:  -29px;';
			hs+='width: 59px;';
			hs+='height: 59px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_3.setAttribute('style',hs);
			this._button_3__img=document.createElement('img');
			this._button_3__img.className='ggskin ggskin_button';
			this._button_3__img.setAttribute('src',basePath + 'images/button_3.png');
			this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_3__img.className='ggskin ggskin_button';
			this._button_3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_3__img);
			this._button_3.appendChild(this._button_3__img);
			this._button_3.onmouseover=function () {
				me._button_3__img.src=basePath + 'images/button_3__o.png';
			}
			this._button_3.onmouseout=function () {
				me._button_3__img.src=basePath + 'images/button_3.png';
			}
			this.__div.appendChild(this._button_3);
		} else
		if (hotspot.skinid=='popup11') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(52 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-169 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 52px;';
			hs+='top:  -169px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node2}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_1.style[domTransition]='none';
				me._text_1.style.visibility='inherit';
				me._text_1.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_1.style[domTransition]='none';
				me._text_1.style.visibility='hidden';
				me._text_1.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._svg_2=document.createElement('div');
			this._svg_2.ggId="Svg 2";
			this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_2.ggVisible=true;
			this._svg_2.className='ggskin ggskin_svg';
			this._svg_2.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -29px;';
			hs+='top:  -27px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._svg_2.setAttribute('style',hs);
			this._svg_2__img=document.createElement('img');
			this._svg_2__img.className='ggskin ggskin_svg';
			this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.png');
			this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 50px;height: 50px;-webkit-user-drag:none;');
			this._svg_2__img['ondragstart']=function() { return false; };
			this._svg_2.appendChild(this._svg_2__img);
			this._svg_2.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._svg_2.style[domTransition]='none';
				} else {
					me._svg_2.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._svg_2.ggParameter.sx=1.2;me._svg_2.ggParameter.sy=1.2;
				me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			}
			this._svg_2.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._svg_2.style[domTransition]='none';
				} else {
					me._svg_2.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._svg_2.ggParameter.sx=1;me._svg_2.ggParameter.sy=1;
				me._svg_2.style[domTransform]=parameterToTransform(me._svg_2.ggParameter);
			}
			this._text_1=document.createElement('div');
			this._text_1__text=document.createElement('div');
			this._text_1.className='ggskin ggskin_textdiv';
			this._text_1.ggTextDiv=this._text_1__text;
			this._text_1.ggId="Text 1";
			this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_1.ggVisible=false;
			this._text_1.className='ggskin ggskin_text';
			this._text_1.ggType='text';
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  42px;';
			hs+='width: 233px;';
			hs+='height: 33px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 233px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_1__text.setAttribute('style',hs);
			this._text_1__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0417\u0430\u043b \u0414\u0438\u043f\u043b\u043e\u043c\u0430\u0442<\/b><\/font>";
			this._text_1.appendChild(this._text_1__text);
			this._svg_2.appendChild(this._text_1);
			this.__div.appendChild(this._svg_2);
		} else
		if (hotspot.skinid=='popup4') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup4";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-111 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-175 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -111px;';
			hs+='top:  -175px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_3.style[domTransition]='none';
				me._text_3.style.visibility='inherit';
				me._text_3.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_3.style[domTransition]='none';
				me._text_3.style.visibility='hidden';
				me._text_3.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_3=document.createElement('div');
			this._text_3__text=document.createElement('div');
			this._text_3.className='ggskin ggskin_textdiv';
			this._text_3.ggTextDiv=this._text_3__text;
			this._text_3.ggId="Text 3";
			this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_3.ggVisible=false;
			this._text_3.className='ggskin ggskin_text';
			this._text_3.ggType='text';
			this._text_3.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (121-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -24px;';
			hs+='top:  33px;';
			hs+='width: 121px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_3.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_3__text.setAttribute('style',hs);
			this._text_3__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u041c\u0435\u043d\u044e <\/b><\/font>";
			this._text_3.appendChild(this._text_3__text);
			this.__div.appendChild(this._text_3);
			this._button_13=document.createElement('div');
			this._button_13.ggId="Button 13";
			this._button_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_13.ggVisible=true;
			this._button_13.className='ggskin ggskin_button';
			this._button_13.ggType='button';
			hs ='position:absolute;';
			hs+='left: -14px;';
			hs+='top:  -14px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_13.setAttribute('style',hs);
			this._button_13__img=document.createElement('img');
			this._button_13__img.className='ggskin ggskin_button';
			this._button_13__img.setAttribute('src',basePath + 'images/button_13.png');
			this._button_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_13__img.className='ggskin ggskin_button';
			this._button_13__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_13__img);
			this._button_13.appendChild(this._button_13__img);
			this._button_13.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
			}
			this._button_13.onmouseover=function () {
				me._button_13__img.src=basePath + 'images/button_13__o.png';
			}
			this._button_13.onmouseout=function () {
				me._button_13__img.src=basePath + 'images/button_13.png';
			}
			this.__div.appendChild(this._button_13);
		} else
		if (hotspot.skinid=='popup5') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup5";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-201 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-177 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -201px;';
			hs+='top:  -177px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility='inherit';
				me._text_2.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility='hidden';
				me._text_2.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._svg_3=document.createElement('div');
			this._svg_3.ggId="Svg 3";
			this._svg_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_3.ggVisible=true;
			this._svg_3.className='ggskin ggskin_svg';
			this._svg_3.ggType='svg';
			this._svg_3.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-27 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-15 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -27px;';
			hs+='top:  -15px;';
			hs+='width: 43px;';
			hs+='height: 43px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._svg_3.setAttribute('style',hs);
			this._svg_3__img=document.createElement('img');
			this._svg_3__img.className='ggskin ggskin_svg';
			this._svg_3__img.setAttribute('src',basePath + 'images/svg_3.png');
			this._svg_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 43px;height: 43px;-webkit-user-drag:none;');
			this._svg_3__img['ondragstart']=function() { return false; };
			this._svg_3.appendChild(this._svg_3__img);
			this._svg_3.onmouseover=function () {
				me._svg_3__img.src=basePath + 'images/svg_3__o.png';
			}
			this._svg_3.onmouseout=function () {
				me._svg_3__img.src=basePath + 'images/svg_3.png';
			}
			this.__div.appendChild(this._svg_3);
			this._text_2=document.createElement('div');
			this._text_2__text=document.createElement('div');
			this._text_2.className='ggskin ggskin_textdiv';
			this._text_2.ggTextDiv=this._text_2__text;
			this._text_2.ggId="Text 2";
			this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_2.ggVisible=false;
			this._text_2.className='ggskin ggskin_text';
			this._text_2.ggType='text';
			this._text_2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-71 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-7 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -71px;';
			hs+='top:  -7px;';
			hs+='width: 110px;';
			hs+='height: 35px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 110px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: justify;';
			hs+='white-space: normal;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_2__text.setAttribute('style',hs);
			this._text_2__text.innerHTML="<font face='Times, Times New Roman' size='24'><b>\u0412\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043d\u0430\u0442\u0430<\/b><\/font>";
			this._text_2.appendChild(this._text_2__text);
			this.__div.appendChild(this._text_2);
		} else
		if (hotspot.skinid=='popup7') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup7";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(106 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-175 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 106px;';
			hs+='top:  -175px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				flag=(me.skin._image_3.style.visibility=='hidden');
				me.skin._image_3.style[domTransition]='none';
				me.skin._image_3.style.visibility=flag?'inherit':'hidden';
				me.skin._image_3.ggVisible=flag;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_4.style[domTransition]='none';
				me._text_4.style.visibility='inherit';
				me._text_4.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_4.style[domTransition]='none';
				me._text_4.style.visibility='hidden';
				me._text_4.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._svg_5=document.createElement('div');
			this._svg_5.ggId="Svg 5";
			this._svg_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_5.ggVisible=true;
			this._svg_5.className='ggskin ggskin_svg';
			this._svg_5.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -19px;';
			hs+='top:  -18px;';
			hs+='width: 43px;';
			hs+='height: 43px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._svg_5.setAttribute('style',hs);
			this._svg_5__img=document.createElement('img');
			this._svg_5__img.className='ggskin ggskin_svg';
			this._svg_5__img.setAttribute('src',basePath + 'images/svg_5.png');
			this._svg_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 43px;height: 43px;-webkit-user-drag:none;');
			this._svg_5__img['ondragstart']=function() { return false; };
			this._svg_5.appendChild(this._svg_5__img);
			this._svg_5.onclick=function () {
				flag=(me.skin._image_3.style.visibility=='hidden');
				me.skin._image_3.style[domTransition]='none';
				me.skin._image_3.style.visibility=flag?'inherit':'hidden';
				me.skin._image_3.ggVisible=flag;
				me.skin._button_2.style[domTransition]='none';
				me.skin._button_2.style.visibility='inherit';
				me.skin._button_2.ggVisible=true;
			}
			this._svg_5.onmouseover=function () {
				me._svg_5__img.src=basePath + 'images/svg_5__o.png';
			}
			this._svg_5.onmouseout=function () {
				me._svg_5__img.src=basePath + 'images/svg_5.png';
			}
			this.__div.appendChild(this._svg_5);
			this._text_4=document.createElement('div');
			this._text_4__text=document.createElement('div');
			this._text_4.className='ggskin ggskin_textdiv';
			this._text_4.ggTextDiv=this._text_4__text;
			this._text_4.ggId="Text 4";
			this._text_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_4.ggVisible=false;
			this._text_4.className='ggskin ggskin_text';
			this._text_4.ggType='text';
			this._text_4.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-108 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-28 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -108px;';
			hs+='top:  -28px;';
			hs+='width: 116px;';
			hs+='height: 29px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_4.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 116px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_4__text.setAttribute('style',hs);
			this._text_4__text.innerHTML="<font face='Times, Times New Roman' size='24'><b>\u0418\u0433\u0440\u043e\u0432\u0430\u044f<\/b><\/font>";
			this._text_4.appendChild(this._text_4__text);
			this.__div.appendChild(this._text_4);
		} else
		if (hotspot.skinid=='popup10') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(180 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-180 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 180px;';
			hs+='top:  -180px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node2}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_6.style[domTransition]='none';
				me._text_6.style.visibility='inherit';
				me._text_6.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_6.style[domTransition]='none';
				me._text_6.style.visibility='hidden';
				me._text_6.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._svg_6=document.createElement('div');
			this._svg_6.ggId="Svg 6";
			this._svg_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_6.ggVisible=true;
			this._svg_6.className='ggskin ggskin_svg';
			this._svg_6.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -25px;';
			hs+='top:  -19px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._svg_6.setAttribute('style',hs);
			this._svg_6__img=document.createElement('img');
			this._svg_6__img.className='ggskin ggskin_svg';
			this._svg_6__img.setAttribute('src',basePath + 'images/svg_6.png');
			this._svg_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 50px;height: 50px;-webkit-user-drag:none;');
			this._svg_6__img['ondragstart']=function() { return false; };
			this._svg_6.appendChild(this._svg_6__img);
			this._svg_6.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._svg_6.style[domTransition]='none';
				} else {
					me._svg_6.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._svg_6.ggParameter.sx=1.2;me._svg_6.ggParameter.sy=1;
				me._svg_6.style[domTransform]=parameterToTransform(me._svg_6.ggParameter);
			}
			this._svg_6.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._svg_6.style[domTransition]='none';
				} else {
					me._svg_6.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._svg_6.ggParameter.sx=1;me._svg_6.ggParameter.sy=1;
				me._svg_6.style[domTransform]=parameterToTransform(me._svg_6.ggParameter);
			}
			this._text_6=document.createElement('div');
			this._text_6__text=document.createElement('div');
			this._text_6.className='ggskin ggskin_textdiv';
			this._text_6.ggTextDiv=this._text_6__text;
			this._text_6.ggId="Text 6";
			this._text_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_6.ggVisible=false;
			this._text_6.className='ggskin ggskin_text';
			this._text_6.ggType='text';
			hs ='position:absolute;';
			hs+='left: -38px;';
			hs+='top:  44px;';
			hs+='width: 151px;';
			hs+='height: 49px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_6.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 151px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_6__text.setAttribute('style',hs);
			this._text_6__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u0412\u043e\u0439\u0442\u0438<\/b><\/font>";
			this._text_6.appendChild(this._text_6__text);
			this._svg_6.appendChild(this._text_6);
			this.__div.appendChild(this._svg_6);
		} else
		if (hotspot.skinid=='popup12') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node3}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_7.style[domTransition]='none';
				me._text_7.style.visibility='inherit';
				me._text_7.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_7.style[domTransition]='none';
				me._text_7.style.visibility='hidden';
				me._text_7.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_55=document.createElement('div');
			this._button_55.ggId="Button 5";
			this._button_55.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_55.ggVisible=true;
			this._button_55.className='ggskin ggskin_button';
			this._button_55.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_55.setAttribute('style',hs);
			this._button_55__img=document.createElement('img');
			this._button_55__img.className='ggskin ggskin_button';
			this._button_55__img.setAttribute('src',basePath + 'images/button_55.png');
			this._button_55__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_55__img.className='ggskin ggskin_button';
			this._button_55__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_55__img);
			this._button_55.appendChild(this._button_55__img);
			this._button_55.onmouseover=function () {
				me._button_55__img.src=basePath + 'images/button_55__o.png';
			}
			this._button_55.onmouseout=function () {
				me._button_55__img.src=basePath + 'images/button_55.png';
			}
			this._text_7=document.createElement('div');
			this._text_7__text=document.createElement('div');
			this._text_7.className='ggskin ggskin_textdiv';
			this._text_7.ggTextDiv=this._text_7__text;
			this._text_7.ggId="Text 7";
			this._text_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_7.ggVisible=false;
			this._text_7.className='ggskin ggskin_text';
			this._text_7.ggType='text';
			hs ='position:absolute;';
			hs+='left: -75px;';
			hs+='top:  48px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_7.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_7__text.setAttribute('style',hs);
			this._text_7__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0418\u0433\u0440\u043e\u0432\u0430\u044f<\/b><\/font>";
			this._text_7.appendChild(this._text_7__text);
			this._button_55.appendChild(this._text_7);
			this.__div.appendChild(this._button_55);
		} else
		if (hotspot.skinid=='popup500') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup500";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node6}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_500.style[domTransition]='none';
				me._text_500.style.visibility='inherit';
				me._text_500.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_500.style[domTransition]='none';
				me._text_500.style.visibility='hidden';
				me._text_500.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_54=document.createElement('div');
			this._button_54.ggId="Button 5";
			this._button_54.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_54.ggVisible=true;
			this._button_54.className='ggskin ggskin_button';
			this._button_54.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_54.setAttribute('style',hs);
			this._button_54__img=document.createElement('img');
			this._button_54__img.className='ggskin ggskin_button';
			this._button_54__img.setAttribute('src',basePath + 'images/button_54.png');
			this._button_54__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_54__img.className='ggskin ggskin_button';
			this._button_54__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_54__img);
			this._button_54.appendChild(this._button_54__img);
			this._button_54.onmouseover=function () {
				me._button_54__img.src=basePath + 'images/button_54__o.png';
			}
			this._button_54.onmouseout=function () {
				me._button_54__img.src=basePath + 'images/button_54.png';
			}
			this._text_500=document.createElement('div');
			this._text_500__text=document.createElement('div');
			this._text_500.className='ggskin ggskin_textdiv';
			this._text_500.ggTextDiv=this._text_500__text;
			this._text_500.ggId="Text 500";
			this._text_500.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_500.ggVisible=false;
			this._text_500.className='ggskin ggskin_text';
			this._text_500.ggType='text';
			hs ='position:absolute;';
			hs+='left: -75px;';
			hs+='top:  63px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_500.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_500__text.setAttribute('style',hs);
			this._text_500__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0421\u043e\u043b\u044f\u043d\u0430\u044f \u043f\u0435\u0449\u0435\u0440\u0430<\/b><\/font>";
			this._text_500.appendChild(this._text_500__text);
			this._button_54.appendChild(this._text_500);
			this.__div.appendChild(this._button_54);
		} else
		if (hotspot.skinid=='popup600') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup600";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node5}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_600.style[domTransition]='none';
				me._text_600.style.visibility='inherit';
				me._text_600.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_600.style[domTransition]='none';
				me._text_600.style.visibility='hidden';
				me._text_600.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_53=document.createElement('div');
			this._button_53.ggId="Button 5";
			this._button_53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_53.ggVisible=true;
			this._button_53.className='ggskin ggskin_button';
			this._button_53.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_53.setAttribute('style',hs);
			this._button_53__img=document.createElement('img');
			this._button_53__img.className='ggskin ggskin_button';
			this._button_53__img.setAttribute('src',basePath + 'images/button_53.png');
			this._button_53__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_53__img.className='ggskin ggskin_button';
			this._button_53__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_53__img);
			this._button_53.appendChild(this._button_53__img);
			this._button_53.onmouseover=function () {
				me._button_53__img.src=basePath + 'images/button_53__o.png';
			}
			this._button_53.onmouseout=function () {
				me._button_53__img.src=basePath + 'images/button_53.png';
			}
			this._text_600=document.createElement('div');
			this._text_600__text=document.createElement('div');
			this._text_600.className='ggskin ggskin_textdiv';
			this._text_600.ggTextDiv=this._text_600__text;
			this._text_600.ggId="Text 600";
			this._text_600.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_600.ggVisible=false;
			this._text_600.className='ggskin ggskin_text';
			this._text_600.ggType='text';
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  62px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_600.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_600__text.setAttribute('style',hs);
			this._text_600__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0420\u0435\u0441\u0435\u043f\u0448\u043d <\/b><\/font>";
			this._text_600.appendChild(this._text_600__text);
			this._button_53.appendChild(this._text_600);
			this.__div.appendChild(this._button_53);
		} else
		if (hotspot.skinid=='popup700') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup700";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node7}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_700.style[domTransition]='none';
				me._text_700.style.visibility='inherit';
				me._text_700.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_700.style[domTransition]='none';
				me._text_700.style.visibility='hidden';
				me._text_700.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_52=document.createElement('div');
			this._button_52.ggId="Button 5";
			this._button_52.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_52.ggVisible=true;
			this._button_52.className='ggskin ggskin_button';
			this._button_52.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_52.setAttribute('style',hs);
			this._button_52__img=document.createElement('img');
			this._button_52__img.className='ggskin ggskin_button';
			this._button_52__img.setAttribute('src',basePath + 'images/button_52.png');
			this._button_52__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_52__img.className='ggskin ggskin_button';
			this._button_52__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_52__img);
			this._button_52.appendChild(this._button_52__img);
			this._button_52.onmouseover=function () {
				me._button_52__img.src=basePath + 'images/button_52__o.png';
			}
			this._button_52.onmouseout=function () {
				me._button_52__img.src=basePath + 'images/button_52.png';
			}
			this._text_700=document.createElement('div');
			this._text_700__text=document.createElement('div');
			this._text_700.className='ggskin ggskin_textdiv';
			this._text_700.ggTextDiv=this._text_700__text;
			this._text_700.ggId="Text 700";
			this._text_700.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_700.ggVisible=false;
			this._text_700.className='ggskin ggskin_text';
			this._text_700.ggType='text';
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  62px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_700.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_700__text.setAttribute('style',hs);
			this._text_700__text.innerHTML="<font face='Times, Times New Roman' size='18'><b> \u0418\u043d\u0444\u0440\u0430\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u0430\u0443\u043d\u0430<\/b><\/font>";
			this._text_700.appendChild(this._text_700__text);
			this._button_52.appendChild(this._text_700);
			this.__div.appendChild(this._button_52);
		} else
		if (hotspot.skinid=='popup800') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup800";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node5}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_501.style[domTransition]='none';
				me._text_501.style.visibility='inherit';
				me._text_501.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_501.style[domTransition]='none';
				me._text_501.style.visibility='hidden';
				me._text_501.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_51=document.createElement('div');
			this._button_51.ggId="Button 5";
			this._button_51.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_51.ggVisible=true;
			this._button_51.className='ggskin ggskin_button';
			this._button_51.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_51.setAttribute('style',hs);
			this._button_51__img=document.createElement('img');
			this._button_51__img.className='ggskin ggskin_button';
			this._button_51__img.setAttribute('src',basePath + 'images/button_51.png');
			this._button_51__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_51__img.className='ggskin ggskin_button';
			this._button_51__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_51__img);
			this._button_51.appendChild(this._button_51__img);
			this._button_51.onmouseover=function () {
				me._button_51__img.src=basePath + 'images/button_51__o.png';
			}
			this._button_51.onmouseout=function () {
				me._button_51__img.src=basePath + 'images/button_51.png';
			}
			this._text_501=document.createElement('div');
			this._text_501__text=document.createElement('div');
			this._text_501.className='ggskin ggskin_textdiv';
			this._text_501.ggTextDiv=this._text_501__text;
			this._text_501.ggId="Text 501";
			this._text_501.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_501.ggVisible=false;
			this._text_501.className='ggskin ggskin_text';
			this._text_501.ggType='text';
			hs ='position:absolute;';
			hs+='left: -75px;';
			hs+='top:  63px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_501.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_501__text.setAttribute('style',hs);
			this._text_501__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0420\u0435\u0441\u0435\u043f\u0448\u043d<\/b><\/font>";
			this._text_501.appendChild(this._text_501__text);
			this._button_51.appendChild(this._text_501);
			this.__div.appendChild(this._button_51);
		} else
		if (hotspot.skinid=='popup801') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup801";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node8}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_502.style[domTransition]='none';
				me._text_502.style.visibility='inherit';
				me._text_502.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_502.style[domTransition]='none';
				me._text_502.style.visibility='hidden';
				me._text_502.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_50=document.createElement('div');
			this._button_50.ggId="Button 5";
			this._button_50.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_50.ggVisible=true;
			this._button_50.className='ggskin ggskin_button';
			this._button_50.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_50.setAttribute('style',hs);
			this._button_50__img=document.createElement('img');
			this._button_50__img.className='ggskin ggskin_button';
			this._button_50__img.setAttribute('src',basePath + 'images/button_50.png');
			this._button_50__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_50__img.className='ggskin ggskin_button';
			this._button_50__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_50__img);
			this._button_50.appendChild(this._button_50__img);
			this._button_50.onmouseover=function () {
				me._button_50__img.src=basePath + 'images/button_50__o.png';
			}
			this._button_50.onmouseout=function () {
				me._button_50__img.src=basePath + 'images/button_50.png';
			}
			this._text_502=document.createElement('div');
			this._text_502__text=document.createElement('div');
			this._text_502.className='ggskin ggskin_textdiv';
			this._text_502.ggTextDiv=this._text_502__text;
			this._text_502.ggId="Text 502";
			this._text_502.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_502.ggVisible=false;
			this._text_502.className='ggskin ggskin_text';
			this._text_502.ggType='text';
			hs ='position:absolute;';
			hs+='left: -75px;';
			hs+='top:  63px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_502.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_502__text.setAttribute('style',hs);
			this._text_502__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043b<\/b><\/font>";
			this._text_502.appendChild(this._text_502__text);
			this._button_50.appendChild(this._text_502);
			this.__div.appendChild(this._button_50);
		} else
		if (hotspot.skinid=='popup701') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup701";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 99px;';
			hs+='top:  96px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node4}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_701.style[domTransition]='none';
				me._text_701.style.visibility='inherit';
				me._text_701.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_701.style[domTransition]='none';
				me._text_701.style.visibility='hidden';
				me._text_701.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_5=document.createElement('div');
			this._button_5.ggId="Button 5";
			this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_5.ggVisible=true;
			this._button_5.className='ggskin ggskin_button';
			this._button_5.ggType='button';
			hs ='position:absolute;';
			hs+='left: -21px;';
			hs+='top:  -21px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_5.setAttribute('style',hs);
			this._button_5__img=document.createElement('img');
			this._button_5__img.className='ggskin ggskin_button';
			this._button_5__img.setAttribute('src',basePath + 'images/button_5.png');
			this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_5__img.className='ggskin ggskin_button';
			this._button_5__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_5__img);
			this._button_5.appendChild(this._button_5__img);
			this._button_5.onmouseover=function () {
				me._button_5__img.src=basePath + 'images/button_5__o.png';
			}
			this._button_5.onmouseout=function () {
				me._button_5__img.src=basePath + 'images/button_5.png';
			}
			this._text_701=document.createElement('div');
			this._text_701__text=document.createElement('div');
			this._text_701.className='ggskin ggskin_textdiv';
			this._text_701.ggTextDiv=this._text_701__text;
			this._text_701.ggId="Text 701";
			this._text_701.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_701.ggVisible=false;
			this._text_701.className='ggskin ggskin_text';
			this._text_701.ggType='text';
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  62px;';
			hs+='width: 201px;';
			hs+='height: 41px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_701.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 201px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_701__text.setAttribute('style',hs);
			this._text_701__text.innerHTML="<font face='Times, Times New Roman' size='18'><b>\u0412\u0445\u043e\u0434<\/b><\/font>";
			this._text_701.appendChild(this._text_701__text);
			this._button_5.appendChild(this._text_701);
			this.__div.appendChild(this._button_5);
		} else
		if (hotspot.skinid=='popup15') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(252 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-108 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 252px;';
			hs+='top:  -108px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node3}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_60.style[domTransition]='none';
				me._text_60.style.visibility='inherit';
				me._text_60.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_60.style[domTransition]='none';
				me._text_60.style.visibility='hidden';
				me._text_60.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._button_4=document.createElement('div');
			this._button_4.ggId="Button 4";
			this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_4.ggVisible=true;
			this._button_4.className='ggskin ggskin_button';
			this._button_4.ggType='button';
			hs ='position:absolute;';
			hs+='left: -739px;';
			hs+='top:  8px;';
			hs+='width: 45px;';
			hs+='height: 45px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_4.setAttribute('style',hs);
			this._button_4__img=document.createElement('img');
			this._button_4__img.className='ggskin ggskin_button';
			this._button_4__img.setAttribute('src',basePath + 'images/button_4.png');
			this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_4__img.className='ggskin ggskin_button';
			this._button_4__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_4__img);
			this._button_4.appendChild(this._button_4__img);
			this._button_4.onmouseover=function () {
				me._button_4__img.src=basePath + 'images/button_4__o.png';
			}
			this._button_4.onmouseout=function () {
				me._button_4__img.src=basePath + 'images/button_4.png';
			}
			this._text_60=document.createElement('div');
			this._text_60__text=document.createElement('div');
			this._text_60.className='ggskin ggskin_textdiv';
			this._text_60.ggTextDiv=this._text_60__text;
			this._text_60.ggId="Text 6";
			this._text_60.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_60.ggVisible=false;
			this._text_60.className='ggskin ggskin_text';
			this._text_60.ggType='text';
			hs ='position:absolute;';
			hs+='left: 675px;';
			hs+='top:  17px;';
			hs+='width: 151px;';
			hs+='height: 49px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_60.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 151px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_60__text.setAttribute('style',hs);
			this._text_60__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u0418\u0433\u0440\u043e\u0432\u0430\u044f<\/b><\/font>";
			this._text_60.appendChild(this._text_60__text);
			this._button_4.appendChild(this._text_60);
			this.__div.appendChild(this._button_4);
		} else
		if (hotspot.skinid=='popup16') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-107 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-163 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -163px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_100.style[domTransition]='none';
				me._text_100.style.visibility='inherit';
				me._text_100.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_100.style[domTransition]='none';
				me._text_100.style.visibility='hidden';
				me._text_100.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_100=document.createElement('div');
			this._text_100__text=document.createElement('div');
			this._text_100.className='ggskin ggskin_textdiv';
			this._text_100.ggTextDiv=this._text_100__text;
			this._text_100.ggId="Text 100";
			this._text_100.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_100.ggVisible=false;
			this._text_100.className='ggskin ggskin_text';
			this._text_100.ggType='text';
			this._text_100.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (121-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -28px;';
			hs+='top:  31px;';
			hs+='width: 121px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_100.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_100__text.setAttribute('style',hs);
			this._text_100__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u041c\u0435\u043d\u044e <\/b><\/font>";
			this._text_100.appendChild(this._text_100__text);
			this.__div.appendChild(this._text_100);
			this._button_135=document.createElement('div');
			this._button_135.ggId="Button 13";
			this._button_135.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_135.ggVisible=true;
			this._button_135.className='ggskin ggskin_button';
			this._button_135.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_135.setAttribute('style',hs);
			this._button_135__img=document.createElement('img');
			this._button_135__img.className='ggskin ggskin_button';
			this._button_135__img.setAttribute('src',basePath + 'images/button_135.png');
			this._button_135__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_135__img.className='ggskin ggskin_button';
			this._button_135__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_135__img);
			this._button_135.appendChild(this._button_135__img);
			this._button_135.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
			}
			this._button_135.onmouseover=function () {
				me._button_135__img.src=basePath + 'images/button_135__o.png';
			}
			this._button_135.onmouseout=function () {
				me._button_135__img.src=basePath + 'images/button_135.png';
			}
			this.__div.appendChild(this._button_135);
		} else
		if (hotspot.skinid=='popup17') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup17";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-109 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-167 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -165px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_101.style[domTransition]='none';
				me._text_101.style.visibility='inherit';
				me._text_101.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_101.style[domTransition]='none';
				me._text_101.style.visibility='hidden';
				me._text_101.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_101=document.createElement('div');
			this._text_101__text=document.createElement('div');
			this._text_101.className='ggskin ggskin_textdiv';
			this._text_101.ggTextDiv=this._text_101__text;
			this._text_101.ggId="Text 101";
			this._text_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_101.ggVisible=false;
			this._text_101.className='ggskin ggskin_text';
			this._text_101.ggType='text';
			this._text_101.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (121-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -28px;';
			hs+='top:  31px;';
			hs+='width: 121px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_101.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_101__text.setAttribute('style',hs);
			this._text_101__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u041c\u0435\u043d\u044e <\/b><\/font>";
			this._text_101.appendChild(this._text_101__text);
			this.__div.appendChild(this._text_101);
			this._button_134=document.createElement('div');
			this._button_134.ggId="Button 13";
			this._button_134.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_134.ggVisible=true;
			this._button_134.className='ggskin ggskin_button';
			this._button_134.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_134.setAttribute('style',hs);
			this._button_134__img=document.createElement('img');
			this._button_134__img.className='ggskin ggskin_button';
			this._button_134__img.setAttribute('src',basePath + 'images/button_134.png');
			this._button_134__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_134__img.className='ggskin ggskin_button';
			this._button_134__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_134__img);
			this._button_134.appendChild(this._button_134__img);
			this._button_134.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
			}
			this._button_134.onmouseover=function () {
				me._button_134__img.src=basePath + 'images/button_134__o.png';
			}
			this._button_134.onmouseout=function () {
				me._button_134__img.src=basePath + 'images/button_134.png';
			}
			this.__div.appendChild(this._button_134);
		} else
		if (hotspot.skinid=='popup18') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup18";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-107 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-113 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -113px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_102.style[domTransition]='none';
				me._text_102.style.visibility='inherit';
				me._text_102.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_102.style[domTransition]='none';
				me._text_102.style.visibility='hidden';
				me._text_102.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_102=document.createElement('div');
			this._text_102__text=document.createElement('div');
			this._text_102.className='ggskin ggskin_textdiv';
			this._text_102.ggTextDiv=this._text_102__text;
			this._text_102.ggId="Text 102";
			this._text_102.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_102.ggVisible=false;
			this._text_102.className='ggskin ggskin_text';
			this._text_102.ggType='text';
			this._text_102.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (121-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -28px;';
			hs+='top:  31px;';
			hs+='width: 121px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_102.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_102__text.setAttribute('style',hs);
			this._text_102__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u041c\u0435\u043d\u044e <\/b><\/font>";
			this._text_102.appendChild(this._text_102__text);
			this.__div.appendChild(this._text_102);
			this._button_133=document.createElement('div');
			this._button_133.ggId="Button 13";
			this._button_133.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_133.ggVisible=true;
			this._button_133.className='ggskin ggskin_button';
			this._button_133.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_133.setAttribute('style',hs);
			this._button_133__img=document.createElement('img');
			this._button_133__img.className='ggskin ggskin_button';
			this._button_133__img.setAttribute('src',basePath + 'images/button_133.png');
			this._button_133__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_133__img.className='ggskin ggskin_button';
			this._button_133__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_133__img);
			this._button_133.appendChild(this._button_133__img);
			this._button_133.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
			}
			this._button_133.onmouseover=function () {
				me._button_133__img.src=basePath + 'images/button_133__o.png';
			}
			this._button_133.onmouseout=function () {
				me._button_133__img.src=basePath + 'images/button_133.png';
			}
			this.__div.appendChild(this._button_133);
		} else
		if (hotspot.skinid=='popup19') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup19";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-107 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-133 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -133px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_103.style[domTransition]='none';
				me._text_103.style.visibility='inherit';
				me._text_103.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_103.style[domTransition]='none';
				me._text_103.style.visibility='hidden';
				me._text_103.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_103=document.createElement('div');
			this._text_103__text=document.createElement('div');
			this._text_103.className='ggskin ggskin_textdiv';
			this._text_103.ggTextDiv=this._text_103__text;
			this._text_103.ggId="Text 103";
			this._text_103.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_103.ggVisible=false;
			this._text_103.className='ggskin ggskin_text';
			this._text_103.ggType='text';
			this._text_103.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (265-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  31px;';
			hs+='width: 265px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_103.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_103__text.setAttribute('style',hs);
			this._text_103__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u0413\u0438\u0434\u0440\u043e\u043c\u0430\u0441\u0441\u0430\u0436\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 <\/b><\/font>";
			this._text_103.appendChild(this._text_103__text);
			this.__div.appendChild(this._text_103);
			this._button_132=document.createElement('div');
			this._button_132.ggId="Button 13";
			this._button_132.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_132.ggVisible=true;
			this._button_132.className='ggskin ggskin_button';
			this._button_132.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_132.setAttribute('style',hs);
			this._button_132__img=document.createElement('img');
			this._button_132__img.className='ggskin ggskin_button';
			this._button_132__img.setAttribute('src',basePath + 'images/button_132.png');
			this._button_132__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_132__img.className='ggskin ggskin_button';
			this._button_132__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_132__img);
			this._button_132.appendChild(this._button_132__img);
			this._button_132.onmouseover=function () {
				me._button_132__img.src=basePath + 'images/button_132__o.png';
			}
			this._button_132.onmouseout=function () {
				me._button_132__img.src=basePath + 'images/button_132.png';
			}
			this.__div.appendChild(this._button_132);
		} else
		if (hotspot.skinid=='popup20') {
			this.__div=document.createElement('div');
			this.__div.ggId="popup20";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-107 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-153 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -153px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_104.style[domTransition]='none';
				me._text_104.style.visibility='inherit';
				me._text_104.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_104.style[domTransition]='none';
				me._text_104.style.visibility='hidden';
				me._text_104.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_104=document.createElement('div');
			this._text_104__text=document.createElement('div');
			this._text_104.className='ggskin ggskin_textdiv';
			this._text_104.ggTextDiv=this._text_104__text;
			this._text_104.ggId="Text 104";
			this._text_104.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_104.ggVisible=false;
			this._text_104.className='ggskin ggskin_text';
			this._text_104.ggType='text';
			this._text_104.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (225-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -96px;';
			hs+='top:  31px;';
			hs+='width: 225px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_104.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_104__text.setAttribute('style',hs);
			this._text_104__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u0422\u0443\u0430\u043b\u0435\u0442\u043d\u0430\u044f \u043a\u043e\u043c\u043d\u0430\u0442\u0430 <\/b><\/font>";
			this._text_104.appendChild(this._text_104__text);
			this.__div.appendChild(this._text_104);
			this._button_131=document.createElement('div');
			this._button_131.ggId="Button 13";
			this._button_131.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_131.ggVisible=true;
			this._button_131.className='ggskin ggskin_button';
			this._button_131.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_131.setAttribute('style',hs);
			this._button_131__img=document.createElement('img');
			this._button_131__img.className='ggskin ggskin_button';
			this._button_131__img.setAttribute('src',basePath + 'images/button_131.png');
			this._button_131__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_131__img.className='ggskin ggskin_button';
			this._button_131__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_131__img);
			this._button_131.appendChild(this._button_131__img);
			this._button_131.onmouseover=function () {
				me._button_131__img.src=basePath + 'images/button_131__o.png';
			}
			this._button_131.onmouseout=function () {
				me._button_131__img.src=basePath + 'images/button_131.png';
			}
			this.__div.appendChild(this._button_131);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="popup21";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=(-107 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=(-174 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -107px;';
			hs+='top:  -174px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._text_105.style[domTransition]='none';
				me._text_105.style.visibility='inherit';
				me._text_105.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text_105.style[domTransition]='none';
				me._text_105.style.visibility='hidden';
				me._text_105.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._text_105=document.createElement('div');
			this._text_105__text=document.createElement('div');
			this._text_105.className='ggskin ggskin_textdiv';
			this._text_105.ggTextDiv=this._text_105__text;
			this._text_105.ggId="Text 105";
			this._text_105.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_105.ggVisible=false;
			this._text_105.className='ggskin ggskin_text';
			this._text_105.ggType='text';
			this._text_105.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (121-this.ggTextDiv.offsetWidth)*0) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -28px;';
			hs+='top:  31px;';
			hs+='width: 121px;';
			hs+='height: 31px;';
			hs+=cssPrefix + 'transform-origin: 0% 0%;';
			hs+='visibility: hidden;';
			this._text_105.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_105__text.setAttribute('style',hs);
			this._text_105__text.innerHTML="<font face='Times, Times New Roman' size='20'><b>\u041c\u0435\u043d\u044e <\/b><\/font>";
			this._text_105.appendChild(this._text_105__text);
			this.__div.appendChild(this._text_105);
			this._button_130=document.createElement('div');
			this._button_130.ggId="Button 13";
			this._button_130.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_130.ggVisible=true;
			this._button_130.className='ggskin ggskin_button';
			this._button_130.ggType='button';
			hs ='position:absolute;';
			hs+='left: -18px;';
			hs+='top:  -16px;';
			hs+='width: 39px;';
			hs+='height: 39px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._button_130.setAttribute('style',hs);
			this._button_130__img=document.createElement('img');
			this._button_130__img.className='ggskin ggskin_button';
			this._button_130__img.setAttribute('src',basePath + 'images/button_130.png');
			this._button_130__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._button_130__img.className='ggskin ggskin_button';
			this._button_130__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_130__img);
			this._button_130.appendChild(this._button_130__img);
			this._button_130.onclick=function () {
				me.skin._button_6.style[domTransition]='none';
				me.skin._button_6.style.visibility='inherit';
				me.skin._button_6.ggVisible=true;
			}
			this._button_130.onmouseover=function () {
				me._button_130__img.src=basePath + 'images/button_130__o.png';
			}
			this._button_130.onmouseout=function () {
				me._button_130__img.src=basePath + 'images/button_130.png';
			}
			this.__div.appendChild(this._button_130);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};