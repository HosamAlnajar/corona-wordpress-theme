import React, { useState, useEffect } from 'react';

function PostDetail({match}) {

	useEffect( () => {
		fetchItems();

	}, []);

	const [item, setItem] = useState({

	});

	const fetchItems = async () => {
		const data = await fetch(`http://localhost:8888/create_theme/wp-json/wp/v2/posts/${match.params.id}`);
		const item = await data.json();
		setItem( item );
	}

	return (
		<div>
			<h1>Post Details</h1>
			<img src={item.fimg_url} alt="" />
		</div>
	);
}

export default PostDetail;
