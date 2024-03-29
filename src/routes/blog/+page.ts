import { GraphQLClient, gql } from 'graphql-request';
import type { PageLoad } from './$types';

// Import the environment variable
import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

const query = gql`
	query getPosts {
		posts {
			edges {
				node {
					author {
						node {
							id
						}
					}
					title
					content
					date
					uri
					id
					slug
				}
			}
		}
	}
`;
// { setHeaders }
export const load: PageLoad = async () => {
	// const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	const endpoint = `https://arabesco.space/wp/graphql`;
	// console.log('endpoint: ', endpoint);

	const client = new GraphQLClient(endpoint);

	try {
		const data = await client.request(query);

		// Optionally, you can set headers here if needed
		// setHeaders({
		// 	'cache-control': 'public, max-age=60' // Adjust caching headers as needed
		// });

		return {
			props: {
				posts: data.posts.edges.map((edge) => edge.node)
			}
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw new Error('Failed to fetch data');
	}
};
