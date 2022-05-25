# RESET CSS
## 0.-setup main colors
   :root {
   // colors
   --color-primario: #181818;
     --color-secundario: #0f0f0f;

   //fonts
   --tipo-principal: "Montserrat", sans-serif;
     --tipo-secundario: Verdana;
   }

## 0.-setup media-query for devices
// dark mode adaptive
@media (prefers-color-scheme: dark) {
  :root {
  // colors
  --color-primario: #0f0f0f;
    --color-secundario: #181818;
  }
}

// contracts high mode
@media (prefers-contrast: high) {
  :root {
  // colors
  --color-primario: black;
    --color-secundario: white;
  }
}

// disable animations mode
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition:none;
  }
}

## 1.-Remove padding, margin...
* {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
      vertical-align: baseline;
      font-family: "Montserrat", sans-serif;
    }

## 2.-Fix media problems
    img, object, embed, video {
      max-width: 100%;
      width: 100%;
      display:block;
      /* optional */ object-fit: cover;
      /* optional */ object-position: center center;
    }

## 3.-Reset a tags to use as block
    a {
      display: block;
    }
## 3.1.-Reset a tags to use as inline inside Paragraphs
      p a{
        display: inline;
      }

## 4.-Remove icons(viñetas) or numbers from lists
                           li{
                             list-style-type: none;
                           }

## 5.-setup smoth scroll when click an anchor
   html {
     scroll-behavior: smooth;
   }

## 6.-enable inheritance ("herencia") from container element of this
                                     h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b u, em {
                                       font-size: 1em;
                                       font-weight: inherit;
                                       font-style: inherit;
                                       text-decoration: none;
                                       color: inherit;
                                     }

## 7.-avoid problems with pseudo classes
    blockquote:before, blockquote:after, q:before, q:after{
      content: '';
      content: none;
    }

## 8.-background and color for the selection of text
    ::selection{
      background-color: var(--color-primario);
      color: var(--color-secundario);
    }

## 9.-form elements
    form, input, textarea, select, button, label {
      font-family: inherit;
      font-size: inherit;
      hyphens: auto;
      background-color: transparent;
      display: block;
      color: inherit;
      /* optional */ appearance: none;
    }

## 10.- tables
        table, tr, td {
          border-collapse: collapse;
          border-spacing: 0;
        }

## 11.- svgs
       svg{
         width: 100%;
         display: block;
         fill: currentColor;
       }

## 12.- body
        body {
          min-height: 100vh;
          font-size: 100%;
          font-family: var(--tipo-principal);
          color: var(--color-primario);
          background-color: var(--color-secundario);
          /* optional */ line-height: 1.4em;
          /* optional */ hyphens: auto;
          /* optional */ font-smooth: always;
          /* optional */ -webkit-font-smoothing: antialiased;
          /* optional */ -moz-osx-font-smoothing: grayscale;
        }
