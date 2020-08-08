/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Waitr`,
    siteUrl: 'https://www.waitr.co.za',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
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
    }
  ],
}
