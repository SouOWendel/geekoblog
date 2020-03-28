/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata');

/* As configurações do meu site */
module.exports = {
  siteMetadata,
  pathPrefix: '/blog',
  plugins: [
  	`gatsby-plugin-react-helmet`,
	  { /* Plugin NPROGRESS */
	    resolve: `gatsby-plugin-nprogress`,
	    options: {
	      // Setting a color is optional.
	      color: `tomato`,
	      // Disable the loading spinner.
	      showSpinner: false,
	    },
	  },
	  { /* Plugin GOOGLE ANALYTICS */
	      resolve: `gatsby-plugin-google-analytics`,
		      options: {
		        // The property ID; the tracking code won't be generated without it
		        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
		        // Defines where to place the tracking script - `true` in the head and `false` in the body
		        head: false,
		        // Setting this parameter is optional
		        anonymize: true,
		        // Setting this parameter is also optional
		        respectDNT: true,
		        // Avoids sending pageview hits from custom paths
		        exclude: ["/preview/**", "/do-not-track/me/too/"],
		        // Delays sending pageview hits on route update (in milliseconds)
		        pageTransitionDelay: 0,
		        // Enables Google Optimize using your container Id
		        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
		        // Enables Google Optimize Experiment ID
		        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
		        // Set Variation ID. 0 for original 1,2,3....
		        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
		        // Any additional optional fields
		        sampleRate: 5,
		        siteSpeedSampleRate: 10,
		        cookieDomain: "example.com",
		      },
	    },
	    {
	      resolve: `gatsby-plugin-prefetch-google-fonts`,
		      options: {
		        fonts: [
		          {
		            family: `Oswald`,
		            subsets: [`latin`],
		          },
		          {
		            family: `Open Sans`,
		            variants: ['300', '500', '700']
		          },
		        ],
		      },
	    },
	    {
	      resolve: `gatsby-plugin-manifest`,
	      options: {
	        name: `Geeko`,
	        short_name: `Geeko`,
	        start_url: `/`,
	        background_color: `#f7f0eb`,
	        theme_color: `#a2466c`,
	        display: `standalone`
	        //icon: 'src/images/icon.png' // 512x512
	      },
	    },
	    {
		    resolve: `gatsby-plugin-canonical-urls`,
		    options: {
		      siteUrl: `https://www.geeko.com.br`,
		    },
		},
		{
	      resolve: `gatsby-plugin-styled-components`,
	      options: {
	        displayName: process.env.NODE_ENV !== 'production'
	      },
	    },
	    {
	      resolve: `gatsby-plugin-page-creator`,
	      options: {
	        path: `${__dirname}/src/pages`,
	        ignore: [`**/styles.js`],
	      },
	    },
		`gatsby-plugin-sitemap`,
	    `gatsby-plugin-offline`,
	]
}
