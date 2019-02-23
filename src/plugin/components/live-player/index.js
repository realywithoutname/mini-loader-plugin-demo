Component({
  options: {
    addGlobalClass: true
  },

  properties: {
    src: String,
    mode: String,
    autoplay: Boolean,
    muted: Boolean,
    orientation: String,
    objectFit: String,
    backgroundMute: Boolean,
    minCache: Number,
    maxCache: Number,
    soundMode: String,
    autoPauseIfNavigate: Boolean,
    autoPauseIfOpenNative: Boolean,
    bindstatechange: Object,
    bindfullscreenchange: Object,
    bindnetstatus: Object
  }
});

