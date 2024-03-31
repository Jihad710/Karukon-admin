import React from 'react';
import { useForm } from 'react-hook-form';

const Products = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-4xl p-6  rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Products</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="category" className="block text-gray-800 font-semibold mb-2">Product Category</label>
            <input
              type="text"
              id="category"
              {...register("category", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.category && <span className="text-red-500">Category is required</span>}
          </div>
          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="title" className="block text-gray-800 font-semibold mb-2">Product Title</label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ml-2 mr-2"
            />
            {errors.title && <span className="text-red-500">Title is required</span>}
          </div>
          <div className="w-full   mb-8 md:mb-4">
            <label htmlFor="description" className="block text-gray-800 font-semibold mb-2">Product Description</label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.description && <span className="text-red-500">Product Description is required</span>}
          </div>
          <div className="w-full  mb-4">
            <label htmlFor="additionalInfo" className="block text-gray-800 font-semibold mb-2">Additional Info</label>
            <textarea
              id="additionalInfo"
              {...register("additionalInfo")}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500  mr-2"
            ></textarea>
             {errors.description && <span className="text-red-500">Additional Info is required</span>}
          </div>
          <div className="w-full  mb-4">
            <label htmlFor="primaryImage" className="block text-gray-800 font-semibold mb-2">Primary Image</label>
            <input
              type="file"
              id="primaryImage"
              {...register("primaryImage", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.primaryImage && <span className="text-red-500">Second Image is required</span>}
          </div>
          <div className="w-full mb-4">
            <label htmlFor="SecondImage" className="block text-gray-800 font-semibold mb-2">Second Image</label>
            <input
              type="file"
              id="SecondImage"
              {...register("SecondImage", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.SecondImage && <span className="text-red-500">Third Image is required</span>}
          </div>
          <div className="w-full  mb-4">
            <label htmlFor="ThirdImage" className="block text-gray-800 font-semibold mb-2">Third Image</label>
            <input
              type="file"
              id="ThirdImage"
              {...register("ThirdImage", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.ThirdImage && <span className="text-red-500">Primary Image is required</span>}
          </div>
          <div className="w-full  mb-4">
            <label htmlFor="FourthImage" className="block text-gray-800 font-semibold mb-2">Fouth Image</label>
            <input
              type="file"
              id="FourthImage"
              {...register("FourthImage", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.FourthImage && <span className="text-red-500">Fourth Image is required</span>}
          </div>
        
            <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="category" className="block text-gray-800 font-semibold mb-2">New Price</label>
            <input
              type="number"
              id="newPrice"
              {...register("newPrice", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.newPrice && <span className="text-red-500">New Price is required</span>}
          </div>
          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="title" className="block text-gray-800 font-semibold mb-2">Old Price</label>
            <input
              type="number"
              id="oldPrice"
              {...register("oldPrice", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 ml-2 mr-2"
            />
            {errors.oldPrice && <span className="text-red-500">Old Price is required</span>}
          </div>
        
          <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="quantity" className="block text-gray-800 font-semibold mb-2">Product Quantity</label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500  mr-2"
            />
            {errors.quantity && <span className="text-red-500">Quantity is required</span>}
          </div>
          <div className="w-full mb-4 flex items-center">
            <input
              type="checkbox"
              id="newArrival"
              {...register("newArrival")}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="newArrival" className="text-gray-800 font-semibold">New Arrival Product</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
