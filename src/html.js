import React from "react"
import PropTypes from "prop-types"


export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="stylesheet" href="/assets/css/style-starter.css" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap" rel="stylesheet"></link>
        <link href="/assets/css/all.css" rel="stylesheet"></link>
      </head>
      <body {...props.bodyAttributes}>
      
        <form name="Sign Up" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="firstname" />
          <input type="text" name="lastname" />
          <input type="text" name="email" />
          <input type="text" name="phone" />
        </form>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {/* <script src="/assets/js/jquery-3.3.1.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script> */}
        {props.postBodyComponents}

        
        
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
