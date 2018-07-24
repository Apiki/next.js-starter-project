# Next.js Starter Project


```
|-- styles/
|   |-- base/                 # Basic configuration of the project
|   |   |--1.settings/
|   |   |   |--0.global.scss  # Global variables.
|   |   |   |--1.colors.scss  # Generic colors.
|   |   |   |--1.fonts.scss   # Generic fonts.
|   |   |   |--1.grid.scss    # Container sizes, media sizes etc.
|   |   |   |--1.sizes.scss   # Font sizes, like h1, h2 etc.
|   |   |   |--2.root.scss    # Turn in css vars all colors, fonts, grid and sizes.
|   |   |--2.helpers/         # Sass placeholders %.
|   |   |--3.mixins/          # Sass mixins.
|   |   |--_functions.scss    # Functions to get color, font, size, grid, from the config.
|   |   |--_sprite.scss       # Sprite generated automatically.
|   |   |--_typography.scss   # All font-faces included in the project.
|   |   |--_vendor.scss       # CSS frameworks.
|   |   |--_wordpress.scss    # Generic WordPress styles.
```
---

### Variables and Usage
```scss
// 0.global.scss
// If true will generate css vars based on $colors, $fonts, $grid and $sizes map.
$generate-css-vars: false;
```

```scss
// 1.colors.scss, 1.fonts.scss, 1.grid.scss, 1.sizes.scss
// Following the sass map syntax, work like this:
// ex:
$colors: (
  icon: #0f0,
  palette: (
    primary: #07a,
    secondary: (
      base: #0969A2,
      darken: darken(#0969A2, 20%)
    ),
  ),
);

// to get your value from the function is like this:
// ex: get icon color
.selector {
  color: color(icon);
}

// ex: get palette/primary color
.selector {
  color: color(palette, primary);
}

// ex: get palette/secondary/base color
.selector {
  $palette-map: map-get($colors, palette);
  color: color(secondary, base, $palette-map);
}

// From CSS VARS
.selector {
  color: color-var(icon);
}

.selector {
  color: color-var(palette, primary);
}

// color-var($color, $attr: base, $prefix: color, $cb: red, $_colors: $colors)
.selector {
  $palette-map: map-get($colors, palette);
  color: color-var(secondary, base, color-palette, 'red', $palette-map);
}
```

