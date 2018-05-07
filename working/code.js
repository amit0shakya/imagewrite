function objA(){
    
    this.stage=new createjs.Stage("stage1");
        
    this.r = new createjs.Shape();
    this.r.graphics.beginFill("#f00");
    this.r.graphics.drawRect(100,100,150,150);
    
    this.stage.addChild(this.r);
    this.stage.update();
    
}

objA.prototype.getimg=function(){
    //read stage data
    this.stage.cache(100,100,150,150);
    return this.stage.stage.getCacheDataURL();
}


function objB(){
 
    this.stage  = new createjs.Stage("stage2");
    
}

objB.prototype.showImage=function(data){
    //get image data
    parent.stage=this.stage;
    
    var img = new Image()
        img.src=data;
        img.onload=function(){
            
            var b=new createjs.Bitmap(event.target)
                b.x=b.y=100
                
                parent.stage.addChild(b);
                parent.stage.update();
        }
    
}



function objC(){
    
}