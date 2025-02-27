import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../constants/data';

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div className="px-0 py-2">
            {/* Button to Create Blog */}
            <Link to={`/blog/create?category=${category || ''}`} className="no-underline">
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-2  w-4/5 mx-auto mb-3 block">
                    Create Blog
                </button>
             </Link>

            {/* Categories Table */}
            <div className="border border-gray-300 w-auto">
                <table className="table-auto text-sm text-left text-gray-500 w-full"> {/* Added w-full for table width */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <Link to="/blogs" className="text-gray-800 hover:text-blue-500 no-underline">
                                    All Categories
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} className="border-b">
                                <td className="px-6 py-3">
                                    <Link
                                        to={`/blogs/?category=${category.type}`}
                                        className="text-gray-800 hover:text-blue-500 no-underline"
                                    >
                                        {category.type}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};




export default Categories;
