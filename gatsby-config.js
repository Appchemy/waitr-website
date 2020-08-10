/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    titleTemplate: 'Waitr - %s',
    description: 'Why Wait',
    image: '/images/carwash.jpg',
    twitterUsername: 'waitrpos',
    title: `Waitr`,
    siteUrl: 'https://www.waitr.co.za',
    url: 'https://www.waitr.co.za',
    description: 'A POS designed for your customers',
    contact: {
      email: 'hello@waitr.co.za',
      phone: '+27 71 554 4918',
      address: [
        'Suite U8, Enterprise Building',
        'The Innovation Hub, Lynnwood',
        'Pretoria, 0087'
      ]
    },
    socialMedia: {
      facebook: 'waitrpos',
      twitter: 'waitrpos',
      instagram: 'waitrpos',
      linkedin: 'waitrpos'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136772918-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `waitr`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#4B4453',
            'link-color': '#4B4453',
            'layout-header-background': '#4B4453'
          }
       }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waitr`,
        short_name: `Waitr`,
        start_url: `/`,
        background_color: `#4B4453`,
        theme_color: `#4B4453`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        ignore: ['/src/styles/carousel.css']
      }
    }
  ],
}
