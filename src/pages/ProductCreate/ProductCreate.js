import React, { useState } from 'react';

const ProductCreate = () => {
	const [product,setProduct]=useState({})

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newProduct = { ...product };
		newProduct[field] = value
		setProduct(newProduct)
	}

	return (
		<div className='max-w-md mx-auto border-2'>
			<h1 className='text-center text-2xl font-bold'>Create your product</h1>
			<div className="card-body ">
				<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="email"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="text"
						placeholder="password"
						className="input input-bordered"
					/>
					<label className="label">
						<a href="#" className="label-text-alt link link-hover">
						Forgot password?
						</a>
					</label>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary">Login</button>
				</div>
			</div>
		</div>
  );
};

export default ProductCreate;