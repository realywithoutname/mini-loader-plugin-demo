var plugin = requirePlugin('my-plugin');

Page({
  onLoad() {
    console.log(plugin.default.getData());
  }
});

