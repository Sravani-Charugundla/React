import React from 'react';

const Blogs = () => {
return (
	<div class="container text">
		<div class="row gx-5">
			<h1>
				My Blogs
			</h1>
			<div class="card">
			<ul class="list-group list-group-flush">
				<a href="https://skillupgraded.blogspot.com/2022/03/100-days-of-code-with-me.html">
				<li class="list-group-item"><h3>100 dyas of code </h3></li>
				</a>

				<a href="https://thecarnaticcorner.blogspot.com/2021/09/technical-terminology-in-carnatic-music.html">
				<li class="list-group-item"><h3>Music Blog</h3></li>
				</a>
				
			</ul>
			</div>
		</div>
	</div>
);
};

export default Blogs;
