import React from 'react';
import { Link } from 'react-router-dom';

export default function Post( {post} ) {

	const PostsStyle = {
		background: "#19212D",
		//border: "1px solid #ED8936",
	};

	const btnStyle = {
		border: "1px solid rgb(237, 137, 54)",
		width: "100%",
	};

	const tagStyle = {
		color: "#cbd5e0"
	};

	const cardBodyStyle = {
		marginTop: "0.5rem",
	};


	return (
		<Link to={`/post/${post.id}`} className="post-item col-sm-3 d-flex pb-3 card rounded text-decoration-none h-100" style={PostsStyle}>
			<div className="card-block">
				<img src={(post.fimg_url) ? post.fimg_url :"http://localhost:8888/create_theme/wp-content/uploads/2020/04/not-found.png"} className="card-img-top" />

				<div className="v-card-body" style={cardBodyStyle}>
					<h5 className="card-title text-white text-left">{post.title.rendered}</h5>
					<p className="text-left">{post.tag_names.map(
						(tag, index) => (index === post.tag_names.length - 1) ? <span className="card-text small" style={tagStyle}>{tag} </span> : <span className="card-text small" style={tagStyle}>{tag}, </span>
					)}</p>

					<Link to={`/post/${post.id}`} className="btn text-white" style={btnStyle}>Read More</Link>

				</div>
			</div>


		</Link>
	);
}
