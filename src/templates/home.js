import header from './header';
import footer from './footer';

export default `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Lazada 4 me</title>
        <link rel="stylesheet" href="/styles/styles.css">
        <link rel="icon" href="/favicon/image.png">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="/app.js" defer></script>
      </head>
      <body>
        ${header}
        <div id="app"></div>
        ${footer}
      </body>
    </html>`
