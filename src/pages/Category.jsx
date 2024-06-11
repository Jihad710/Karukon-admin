import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UseAxiosSecured from '../utils/UseAxiosSecured'
import { UploadPicture } from '../utils/UploadImage'
import Swal from 'sweetalert2'

const Category = () => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const { axiosSecured } = UseAxiosSecured()
    const onSubmit = async (data) => {
        setLoading(true)
        UploadPicture(data.primaryImage[0], data.category)
            .then(async (res) => {
                console.log(res);
                if (res.data.success) {
                    const categoryData = {
                        name: data?.category,
                        description: data?.description,
                        image: res.data.data.display_url
                    }
                    const categoryRes = await axiosSecured.post('/api/categories', categoryData)
                    // console.log(categoryRes)
                    if (categoryRes.data.status == 'success') {
                        Swal.fire({
                            // position: 'top-end',
                            icon: 'success',
                            title: 'Category added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset()
                        setLoading(false)
                    }
                }
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                // setUpdating(false);
                // toast.error('Something went wrong! Please Try again later!');
            })
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="max-w-4xl p-6  rounded-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Products</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-between">
                    <div className="w-full mb-4">
                        <label htmlFor="category" className="block text-gray-800 font-semibold mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            {...register('category', { required: true })}
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {errors.category && <span className="text-red-500">Category is required</span>}
                    </div>
                    <div className="w-full   mb-8 md:mb-4">
                        <label htmlFor="description" className="block text-gray-800 font-semibold mb-2">
                            Category Description
                        </label>
                        <textarea
                            id="description"
                            {...register('description', { required: true })}
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        ></textarea>
                        {errors.description && <span className="text-red-500">Product Description is required</span>}
                    </div>
                    <div className="w-full  mb-4">
                        <label htmlFor="primaryImage" className="block text-gray-800 font-semibold mb-2">
                            Primary Image
                        </label>
                        <input
                            type="file"
                            id="primaryImage"
                            {...register('primaryImage', { required: true })}
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {errors.primaryImage && <span className="text-red-500">Second Image is required</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full disabled:cursor-not-allowed bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Category
