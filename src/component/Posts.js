import React, { useState, useEffect } from 'react';
import Post from "./Post";

function Posts() {
	useEffect( () => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('http://localhost:8888/create_theme/wp-json/wp/v2/posts');
		const items = await data.json();
		 setItems( items );
	}

	return (
		<div className="container react-archive-columns">
			<div className="row equal">
				{
				items.map(item => (
					<Post key={item.id} post={item}/>
				))
			}
			</div>
		</div>

	)
}

export default Posts;
