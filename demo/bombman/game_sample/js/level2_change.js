var Level2_change = Framework.Class(Framework.Level , {
    
    load: function() {
        //0 空地  1牆壁  2空木箱  3增加炸彈木箱道具  4增加威力道具木箱  5有獎的箱 -1增加炸彈數道具  -2增加炸彈power道具 
        this.mapArray = [];
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]); //1
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,2,2,1]); //2
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,5,1,0,1,2,1,0,1]); //3
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,2,2,0,0,0,2,2,1]); //4
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,0,1,2,1,0,1,0,1]); //5
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,0,1,0,0,2,5,0,1]); //6
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,0,1,2,1,0,1,0,1]); //7
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,3,4,2,0,0,2,2,0,1]); //8
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,1,0,1,1,1,0,1]); //9
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,2,2,2,1]); //10
        this.mapArray.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1]); //11

        this.map = new Map(this.mapArray);  //將關卡地圖 push進Map裡做畫面
        this.map.load();
    },

    initialize: function() {
        
        this.map.init();
        this.map.setPlayerPosition({x:15,y:1});     //角色spawn的位置
        this.map.addMonster({x:18, y:4});   //怪物spawn的位置
        this.map.addMonster({x:18, y:9});   //怪物spawn的位置
        this.map.addMonster({x:23, y:4});   //怪物spawn的位置
    },

    update: function() {     
        this.map.update();
    },

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.map.draw(parentCtx);
        
    },

    keydown:function(e, list){
        
        Framework.DebugInfo.Log.warning(e.key);

        this.map.keydown(e, list);
        if(e.key === 'F11') {
            if(!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }
            
        }
    },

    keyup:function(e, list){
        
        this.map.keyup(e, list);
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.click(e[0]);
    },

    click: function (e) {  
        
    },
});