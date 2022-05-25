# nextjs-how-to-use-getServerSideProps
https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps

## What getServerSideProps() accepts?
Now, let's look at some details about the getServerSideProps() method and its attributes.
```bash
export async function getServerSideProps(context) {
return { props: {},}
}
```

## Method parameters
The getServerSideProps() has several parameters to accept arguments.

- params: If the page is a dynamic route, params contain route parameters or path variables.
- req: The HTTP request object
- res: The HTTP response object
- query: An object representing the query string. For example, text=search in the URL can be retrieved with path.text
- preview: True or false depending on if the page is in preview mode or not.
- previewData: Data set by setPreviewData
- resolvedUrl: The normalized request URL with original query values
- locale: If enabled, contains the active locale
- locales: If enabled, contains all supported locales
- defaultLocale: If enabled, contains the configured default locale

What getServerSideProps() returns?

- props: An optional serializable object passed to the page component. return { props: { users } }
- notFound: Returns a 404 status and page. return { notFound: true,}
- redirect: An redirect to allow redirecting to internal or external resources. It should match the pattern { destination: string, permanent: boolean }. return { redirect: { destination: '/post', permanent: false, },}

Below is an example of getServerSideProps() method with different parameters and return objects.

```bash
export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
if (query.text) {
return { redirect: { destination: '/post', permanent: false, },}
}
const data = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await data.json();
if (!data) {
return {notFound: true,}
}  
return { props: { users } }
}
```
