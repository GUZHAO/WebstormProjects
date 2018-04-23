$(document).ready ->
  app.init()

app =
  text: "この先の道は, ひとりかふたりか, 選ばなきゃいけない, 正解はあるの, I don’t know, リミットはあるの, I don’t know what to do."
  index: 0
  chars: 0
  speed: 100
  container: ".text .content"

  init: ->
    @chars = @text.length
    @write()

  write: ->
    $(@container).append @text[@index]
    if @index < @chars
      @index++
      window.setTimeout ->
        app.write()
      , @speed