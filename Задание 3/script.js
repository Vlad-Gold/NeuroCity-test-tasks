function video() {
    const video = document.querySelector('video'),
          timePicker = document.getElementById('timer');
    video.addEventListener('click', () => {
      if (video.paused) video.play();else video.pause();
    });
    video.addEventListener('timeupdate', function () {
      timePicker.innerHTML = secondsToTime(video.currentTime);
    }, false);
    video.addEventListener('ended', function () {
      video.currentTime = 0;
    }, false);
  
    function secondsToTime(time) {
      console.log(time);
      let fulltime,
          m = Math.floor(time / 60),
          s = Math.floor(time),
          ds = (time - s).toFixed(3),
          mmm = ds * 1000;
      console.log(s);
  
      if (mmm === 1000) {
        mmm = 0;
        s = s + 1;
      }
  
      if (mmm < 10) {
        mmm = '0' + s;
      }
  
      if (mmm < 100) {
        mmm = '00' + s;
      }
  
      if (s === 60) {
        s = 0;
        m = m + 1;
      }
  
      if (s < 10) {
        s = '0' + s;
      }
  
      if (m === 60) {
        m = 0;
      }
  
      if (m < 10) {
        m = '0' + m;
      }
  
      fulltime = m + ':' + s + ':' + mmm;
      return fulltime;
    }
  }

  video();