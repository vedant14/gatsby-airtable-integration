import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
	<div>
		<div>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<h2>
						<Link to={node.fields.slug}>
							My first blog title - {node.frontmatter.title}
						</Link>
					</h2>
					<Img
						fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
						alt={node.frontmatter.title}
					/>
					<p>{node.excerpt} </p>
					<p> {node.frontmatter.date} </p>
				</div>
			))}
		</div>
	</div>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			edges {
				node {
					id
					frontmatter {
						title
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 2000) {
									...GatsbyImageSharpFluid
								}
							}
						}
						date(formatString: "MMMM DD, YYYY")
					}
					html
					excerpt(pruneLength: 30, truncate: true)
					fields {
						slug
					}
				}
			}
		}
	}
`
