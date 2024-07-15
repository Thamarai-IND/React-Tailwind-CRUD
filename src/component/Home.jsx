import React from 'react'

const Home = ({ openModal, data }) => {

    
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-12  justify-center items-center">
    <div className="bg-white p-4 shadow-md rounded-md ">
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-gray-700">Name</th>
                        <th className="px-6 py-3 bg-gray-200 text-gray-700">Title</th>
                        <th className="px-6 py-3 bg-gray-200 text-gray-700">Email</th>
                        <th className="px-6 py-3 bg-gray-200 text-gray-700">Role</th>
                        <th className="px-6 py-3 bg-gray-200 text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index) =>(
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => openModal(item)} className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Home