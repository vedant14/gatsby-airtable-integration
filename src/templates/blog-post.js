import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
	const post = data.markdownRemark
	// the return just takes back from constructing the data to the div space
	return (
		<div>
			<h1> {post.frontmatter.title} </h1>
			<Img
				fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
				alt={post.frontmatter.title}
			/>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}
//$slug is just getting the slug from the website
export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 2000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
