window.onload=function(){
	var oIcon=document.getElementById('icon');
	var flag=true;
	oIcon.onclick=function(){
		if(flag){
			this.className="icon iconfont icon-guanbi1";
		}else{
			this.className="icon iconfont icon-fenlei";
		}
		flag=!flag;	
	};
};
