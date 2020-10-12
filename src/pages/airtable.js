import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => (
	<div>
		<div>
			{data.allAirtable.edges.map(({ node }) => (
				<div key={node.recordId}>
					<Link to={node.recordId}>
						<h3>{node.data.Name} </h3>
					</Link>
					<p>{node.data.Epic} </p>
					<p> {node.data.Completed} </p>
				</div>
			))}
		</div>
	</div>
)

export const query = graphql`
	query {
		allAirtable {
			edges {
				node {
					recordId
					data {
						Name
						Completed
						Epic
						Module_Lookup
						Importance
					}
				}
			}
		}
	}
`
