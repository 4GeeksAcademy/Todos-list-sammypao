import React from "react";

const Home = () => {
	return (
		
		<div id="container">
	<h1>To-Do List <i class="fa fa-plus"></i></h1>
	<input type="text" placeholder="Add New Todo"/>

	<ul>
		<li><span><i class="fa fa-trash"></i></span> Go To Maths Class</li>
		<li><span><i class="fa fa-trash"></i></span> Buy New Clothes</li>
		<li><span><i class="fa fa-trash"></i></span> Visit George</li>
	</ul>
</div>

	);
};






export default Home;