var imgPlayer = {
  init: function(){
    this.handle();
  },

  handle: function(){
    var imgs = document.getElementsByClassName('home_imgs');
    var i = 0;
    var iOpacity = 0;
    var timeId = setInterval(trans, 70);

    function trans(){
      imgs[i].style.opacity = 0;
      iOpacity += .12;
      imgs[i].style.opacity = iOpacity;
      if(imgs[i].style.opacity >= 1){
        clearInterval(timeId);
        setTimeout(function(){
          imgs[i].style.opacity = 0;
          iOpacity = 0;
          i++;
          if(i == 3){
            i = 0;
          }
          timeId = setInterval(trans, 70);
        }, 2000);
      }
    }
  },
};

var fullpageConfig = {
  init: function(){
    $('#all').fullpage({
      anchors: ['_HOME_', '_EXPERIENCE_', '_ABOUT_', '_DEPUTY_', '_MUSIC_', '_ADMIRE_'],

      afterLoad: function(anchorLink, index){
        var btn = document.getElementsByClassName("gototop")[0];
        if(index == 1){
          btn.setAttribute("class", "animated fadeOut gototop");
        }   
        if(index == 2){
          btn.setAttribute("class", "gototop");
          var imgs = document.getElementsByClassName("exp_icon");
          setTimeout(function(){
            imgs[0].setAttribute("class", "animated flip exp_icon");
            setTimeout(function(){
              imgs[1].setAttribute("class", "animated flip exp_icon");
              setTimeout(function(){
                imgs[2].setAttribute("class", "animated flip exp_icon");
                setTimeout(function(){
                  imgs[3].setAttribute("class", "animated flip exp_icon");
                  setTimeout(function(){
                    for(var i=0; i<imgs.length; i++){
                      imgs[i].setAttribute("class", "exp_icon");
                    }
                  }, 1000);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }
        if(index == 3){
          btn.setAttribute("class", "gototop");

          var bars = document.getElementsByClassName('about_scales');
          bars[0].setAttribute("class", "about_scale_one about_scales");
          bars[1].setAttribute("class", "about_scale_two about_scales");
          bars[2].setAttribute("class", "about_scale_three about_scales");
          bars[3].setAttribute("class", "about_scale_four about_scales");
          setTimeout(function(){
            var bars = document.getElementsByClassName('about_scales');
            bars[0].setAttribute("class", "about_one about_scales");
            bars[1].setAttribute("class", "about_two about_scales");
            bars[2].setAttribute("class", "about_three about_scales");
            bars[3].setAttribute("class", "about_four about_scales");
          }, 20);
        }
        if(index == 4){
          btn.setAttribute("class", "gototop");
          var imgs = document.getElementsByClassName("dep_photo");
          setTimeout(function(){
            imgs[0].setAttribute("class", "animated pulse dep_photo");
            setTimeout(function(){
              imgs[1].setAttribute("class", "animated pulse dep_photo");
              setTimeout(function(){
                imgs[2].setAttribute("class", "animated pulse dep_photo");
                setTimeout(function(){
                  imgs[3].setAttribute("class", "animated pulse dep_photo");
                  setTimeout(function(){
                    for(var i=0; i<imgs.length; i++){
                      imgs[i].setAttribute("class", "dep_photo");
                    }
                  }, 1000);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }
        if(index == 5){
          btn.setAttribute("class", "gototop");
        }
        if(index == 6){
          btn.setAttribute("class", "gototop");
        }
      },
    });

    this.clickEvent();
  },

  clickEvent: function(){
    $('.nav-home').click(function(){
      $('#all').fullpage.moveTo(1);
    });
    $('.nav-experience').click(function(){
      $('#all').fullpage.moveTo(2);
    });
    $('.nav-about').click(function(){
      $('#all').fullpage.moveTo(3);
    });
    $('.nav-deputy').click(function(){
      $('#all').fullpage.moveTo(4);
    });
    $('.nav-music').click(function(){
      $('#all').fullpage.moveTo(5);
    });
    $('.nav-admire').click(function(){
      $('#all').fullpage.moveTo(6);
    });
    $('.gototop').click(function(){
      $('#all').fullpage.moveTo(1);
    });
  },
};

fullpageConfig.init();
imgPlayer.init();