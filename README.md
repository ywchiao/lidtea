# Lidtea

*Lidtea* is yet another [Hugo](https://gohugo.io)' theme.  It was
developed just for me to get familiar with [Hugo](https://gohugo.io)
's usage.  Since it's basically a byproduct of learning, its
feature set might not as complete as other [Hugo themes](.https://themes.gohugo.io). But it should be ok to be used as a blog theme. At least it
is how I intended to use it.

## Features

Lidtea is a simple theme without much bells and whistles.  But
some stuff might worth being mentioned here:

 * Lidtea is *not* designed to be general used.  For example, it
   uses [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) css function a lot which might not be supported
   on an old browser.

 * *prefers-color-scheme*

   Lidtea will check browser's system setting of *prefers-color-scheme*
   and render pages accordingly.

 * dynamic light/dark theme:

   User can change light/dark theme during browsing pages regardless
   what *prefers-color-scheme* setting is.  Lidtea uses 
   *localStorage* to track the user's preference.

 * syntax-highlight respects to light/dark theme:

   Hugo employs [chroma](shttps://github.com/alecthomas/chroma) as
   its syntax highlighter which supports lot of differnt highlight
   [themes](https://xyproto.github.io/splash/docs/all.html).
   Hugo can also export selected highlight themes into indepedent
   css files.  Ledtea takes advantages of this and makes sure that
   syntax highlight theme in consistent with current light/dark
   theme of the site.

## Install

Like any other Hugo's theme, just clone it to the `site/themes`
directory. For example:

```
$ cd ~/path-to-hugo-site/themes
$ git clone https://github.com/ywchiao/lidtea.git lidtea
```

or with *git submodule*

```
$ cd ~/path-to-hugo-site/themes
$ git submodule add https://github.com/ywchiao/lidtea.git
```

### Customize Chroma themes

Lidtea uses *monokailight*/*monokai* for light/dark theme respectly.
It can be simply change as follows:

```
$ cd ~/path-to-hugo-site/themes/lidtea/assets/css
$ hugo gen chromastyles --style==[desired_chroma_theme] > syntax/light.css
$ hugo gen chromastyles --style==[desired_chroma_theme] > syntax/dark.css
```

### Icons

Icons used in Lidtea are from [Lucide Icons](https://lucide.dev)
project.

### License

MIT

[Lucide Icons](https://lucide.dev) is convered by [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE)

