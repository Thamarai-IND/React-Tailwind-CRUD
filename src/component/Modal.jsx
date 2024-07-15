import { useState } from 'react';

const Modal = ({ item, closeModal, updateData}) => {
    console.log("Modal :: ",item)
    const [formData, setFormData] = useState({
        name:item.name,
        title: item.title,
        email: item.email,
        role: item.role
    });

    const handleChange = (e) => {
        console.log("value : ",e.target.value)
        console.log("id : ",e.target.id)
        const { name, value } = e.target;
        console.log("formData :: ",formData)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        
    }
    const handleSubmit = (e) => {
        console.log("formData = ",formData)
        e.preventDefault();
        updateData(formData);
        // Handle form submission
        closeModal();
    };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg w-1/3 p-4">
        <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" defaultValue={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" id="title" name="title" defaultValue={formData.title} onChange={handleChange}  className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" defaultValue={formData.email} onChange={handleChange}  className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input type="text" id="role" name="role" defaultValue={formData.role} onChange={handleChange}  className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal