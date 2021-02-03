module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: `My first portfolio website`,
    author: `@manant1`,
    siteUrl: `localhost:8000`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-theme-ui",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
      "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/homePageData/lt`,
        name: 'markdown-pages',
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/homePageData/en`,
        name: 'markdown-pages',
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`lt`, `en`],
        defaultLanguage: `lt`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
  ],
};
