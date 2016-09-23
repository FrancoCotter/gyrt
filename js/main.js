$(function(){
   $("#thumbnail img").click(function(e){
        var src=$(e.target).attr("src")
        $("#bigpicture").attr("src",src);
    })
   $(".Big_picture").find('img').each(function(){
   		var imgClass=(this.width/this.height>1)?'wild':'tall';
   		$(this).addClass(imgClass);
   })
   var imgDiv=$("#thumbnail img");
   for(var i=0;i<imgDiv.length;i++){
   	imgDiv[i].onclick=function(){
   		for(var i=0;i<imgDiv.length;i++){
   			imgDiv[i].className='';
   		}
   		this.className="active";
   	}
   }
})