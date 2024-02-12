// import { GraphQLClient, gql } from 'graphql-request';
// import type { PageLoad } from './$types';

// Import the environment variable
// import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

// console.log('API> ', import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL);

// const query = `
// query NewQuery {
// 	posts {
// 	  edges{
// 		node{
// 		  id
// 		  title
// 		  content
// 		}
// 	  }
// 	}
//   }`;

// export async function load({ fetch }) {
// 	const response = await fetch(
// 		import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL,

// 		{
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({ query })
// 		}
// 	);

// 	if (response.ok) {
// 		const responseObj = await response.json();
// 		const posts = responseObj.data.posts.edges;

// 		return {
// 			props: {
// 				posts
// 			}
// 		};
// 	}

// 	return {
// 		status: response.status,
// 		error: new Error(`Could not load url`)
// 	};
// }
