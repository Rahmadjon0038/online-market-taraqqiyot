'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from 'lucide-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
  
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
};

export default function AuthModal({ children }) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [tab, setTab] = React.useState(1)
    const tabs = [
        {
            id: 1,
            name: "Kirish"
        },
        {
            id: 2,
            name: "Ro'yhatdan o'tish"
        },

    ]

    const handleTab = (tabid) => {
        setTab(tabid)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
    }



    return (
        <div>
            <button onClick={handleOpen}>{children}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSumbit}>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold text-gray-500'>Hisobga kirish</h1>
                            <X onClick={handleClose} className=' text-gray-500' />
                        </div>

                        <div className='bg-gray-100 rounded-xl p-1 mt-6 flex  gap-4'>
                            {
                                tabs.map((item) => (
                                    <button onClick={() => handleTab(item.id)} className={`${tab == item.id ? 'bg-white' : ""} rounded-xl cursor-pointer w-full py-2`} key={item.id}>{item.name}</button>
                                ))
                            }
                        </div>



                        {
                            tab == 1 ?

                                <div>
                                    <label className='block mt-6'>
                                        <p className='mb-2'>Telefon raqam</p>
                                        <input className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder='+998 99 777 88 12' />
                                    </label>
                                    <label className='block mt-6'>
                                        <p className='mb-2'>Parol</p>
                                        <input className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder='parol' />
                                    </label>
                                    <button className='bg-green-600 active:bg-green-500 text-white w-full mt-6 p-3 rounded-xl '>Tizimga kirish</button>

                                </div>
                                : ''
                        }


                        {
                            tab == 2 ? <div>2</div> : ''
                        }


                    </form>

                </Box>
            </Modal>
        </div>
    );
}