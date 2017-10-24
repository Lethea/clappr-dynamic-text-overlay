## EXAMPLE
<img src="https://github.com/Lethea/clappr-dynamic-text-overlay/blob/master/clapr.png?raw=true">
```html
 $(document).ready(function() {

        var source = 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8';
        var player = new Clappr.Player({
            source:source,
            parentId: "#player-wrapper",
            autoPlay: true,
			emrePluginConfig:{
				textContent:"EMRE KARATAŞOĞLU ID NUMBER"
			},
            actualLiveTime: false,
            poster: 'http://www.kingglitter.com/wp-content/uploads/2015/10/request-a-sample-547-p-600x600.jpg',
            strings: {
                'tr-TR': {
                    'live': 'CANLI',
                    'back_to_live': 'CANLI YAYINA GERİ DÖN',
                    'playback_not_supported': 'Tarayıcınız bu ortamı oynatamıyor. Lütfen farklı bir tarayıcı ile tekrar deneyin'
                }
            },
			plugins: [HelloWorld,LevelSelector],
            language: 'tr-TR',
            mediacontrol: {
                buttons: "#fff",
                seekbar: "#fff",
            },
            watermark: 'http://letheasoftware.com/wp-content/uploads/2014/06/1111.png',
            watermarkLink: 'http://emrekaratasoglu.com',
            position: 'top-right',
            width: "100%",
            height: '100%',
            events: {
                onPlay: function() {

                },
				onPause:function(){

					$(".play-wrapper").show().css("display","block !important");

				},
                onEnded: function() {

                }
            }
        });
    });



```

## SCRIPTS & PLUGIN

emrePluginConfig:{
				textContent:"EMRE KARATAŞOĞLU ID NUMBER"
			},