# integrate fontawesome in your scss project

here is the documentation:
https://fontawesome.com/docs/web/use-with/scss

## Main steps

1.-Download the Font Awesome v6 files and have them handy:
https://fontawesome.com/download

2.-copy the scss and the webfonts folder to the styles folder

3.-setup the fontawesome path on the `styles/variables.scss` file.
```scss
$fa-font-path: "../fontawesome/webfonts";
```
4.-import the files into your global `styles/global.scss`
```scss
@import './fontawesome/scss/fontawesome.scss';
@import "./fontawesome/scss/solid.scss";
@import "./fontawesome/scss/brands.scss";
```
5.- use the classes in your files
```html
<p>
  {year}
  <i className="fa-solid fa-user"></i>
</p>
```
6.- use pseudo classes on your `global.scss`
```scss
.ech-user {
  @include fa-icon-regular($fa-var-user);
}
```
7.- Manual Custom CSS Approach on your `global.scss`.
in this case, the main problem is the used font is font awesome 6 free, doesn't match with the current one
```scss
.user {
  @extend %fa-icon;
  @extend .fa-regular;

  &:before {
    content: fa-content($fa-var-circle-play); // "\f144";
    vertical-align: middle;
    margin-left: 0.25em;
  }
}
```
