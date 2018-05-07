function objA(){
    
    this.stage=new createjs.Stage("stage1");
        
    this.r = new createjs.Shape();
    this.r.graphics.beginFill("#f00");
    this.r.graphics.drawRect(20,50,100,100);
    
    this.r1 = new createjs.Shape();
    this.r1.graphics.beginFill("#0f0");
    this.r1.graphics.drawRect(170,50,100,100);

    this.stage.addChild(this.r);
    this.stage.addChild(this.r1);
    this.stage.update();
}

objA.prototype.getimg=function(){
    //read stage data
    var imgs =[];
    
    this.stage.cache(20,50,100,100);
    imgs.push(this.stage.stage.getCacheDataURL());

    this.stage.cache(170,50,100,100);
    imgs.push(this.stage.stage.getCacheDataURL());

    return imgs;
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