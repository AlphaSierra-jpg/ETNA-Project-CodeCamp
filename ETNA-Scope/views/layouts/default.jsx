var React = require('react');


function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href='/stylesheets/style.css'></link>
        
      </head>
      <body>
        

          {props.children}
          <script src="/js/index.js"></script>
        
      </body>
    </html>
  );
}


module.exports = DefaultLayout;
