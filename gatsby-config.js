/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
	siteMetadata: {
		title: "My first Gatsby blog",
	},
	plugins: [
		// You can have multiple instances of this plugin
		// to read source nodes from different locations on your
		// filesystem.
		//
		// The following sets up the Jekyll pattern of having a
		// "pages" directory for Markdown files and a "data" directory
		// for `.json`, `.yaml`, `.csv`.
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content/`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.GATSBY_AIRTABLE_API_KEY, // may instead specify via env, see below
				tables: [
					{
						baseId: `appsOrqbYLxPnhOh4`,
						tableName: `Stories`,
						// can leave off queryName, mapping or tableLinks if not needed
					},
				],
			},
		},
	],
}
