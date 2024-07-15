import {useState} from 'react'
import Home from './component/Home'
import Modal from './component/Modal';
const App = () => {

  const datas = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "SDE",
    },
    {
        name: "Courtney Henry",
        title: "Designer",
        email: "courtney.henry@example.com",
        role: "Admin",
    },
    {
        name: "Tom Cook",
        title: "Director of Product",
        email: "tom.cook@example.com",
        role: "Member",
    }
]
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState(datas)

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const updateData = (updatedItem) => {
    // Update the data array with the updatedItem
    console.log("updatedItem : ",updatedItem)
    const updatedData = data.map(item => (item === selectedItem ? updatedItem : item));
    console.log("updated data: ",updateData)
    setData(updatedData);
  };

  return (
    <>
      <div className='h-screen bg-stone-400 rounded'>
      <div className='h-[90%] flex'>
        <Home openModal={openModal} data={data}/>
        {modalOpen && (
          <Modal item={selectedItem} closeModal={closeModal} updateData={updateData}/>
        )}
      </div>
      </div>
    </>
  )
}

export default App
