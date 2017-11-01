 var randomArea=function(changeDuration){
	 var heightOfVideo =$("video").height();;
	var widthOfVideo = $("video").width();;
	var number = Math.floor(Math.random() * widthOfVideo);
	if(number>200){
		number = number-200;
	}
	$(".clpr-emre").css("left",number+"px");
	var number2 = Math.floor(Math.random() * heightOfVideo);
	if(number2>60){
		number2=number2-60;
	}
	$(".clpr-emre").css("top",number2+"px");
	setTimeout(function(){randomArea(changeDuration)},changeDuration);  
  }
  var defaultOption = {
     textContent:"Sample Content"
  };


  var HelloWorld = Clappr.UIContainerPlugin.extend({
        name: 'hello_world',
        initialize: function() {
          this.render();
        },
        bindEvents: function() {
          this.listenTo(this.container, Clappr.Events.CONTAINER_FULLSCREEN, this.show);
        },
        hide: function() {
          this.$el.hide();
        },
        show: function() {
          this.$el.show();
        },
        render: function() {
            defaultOption.textContent= this.options.emrePluginConfig.textContent!=null ? this.options.emrePluginConfig.textContent:"";
          this.$el.html('<div class="clpr-emre">'+defaultOption.textContent+'</div>');
          
          this.container.$el.append(this.$el);
          randomArea(this.options.emrePluginConfig.changeDuration);
          this.show();
          return this;
        }
      });
	  
