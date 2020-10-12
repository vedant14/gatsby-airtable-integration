import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
	return (
		<div>
			<h1>{data.airtable.data.Name}</h1>
		</div>
	)
}
export const query = graphql`
	query GetRecord($recordId: String!) {
		airtable(recordId: { eq: $recordId }) {
			id
			data {
				Importance
				Name
				Epic
			}
			table
		}
	}
`
