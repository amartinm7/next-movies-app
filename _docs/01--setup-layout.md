# Layout 
In order to write an common layout for all the app create a layout folder into the components folder.
Create the layout.js and the sideBar for instance.
Use them on the page files as follows:

```javascript
PageComponentXXX.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
```

setup the _app.js main file as follows:
```javascript
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
```
in this way current page is loaded into the general layout.
