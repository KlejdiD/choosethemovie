'use client'

import SubheadButton from "../components/SubheadButton";
import ModalLogIn from '../components/ModalLogIn';

import React,{useState} from "react";



const SubHeader  = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return(
        <div className="bg-[#FFFF00] min-h-12 flex-row z-50">
            <div className="p-4 flex flex-row">
                <img src="../../user.png" className="max-h-6 my-auto"/>
                <SubheadButton text={'Log In/Sign Up'} clickHandler={openModal}/>
                <ModalLogIn isOpen={isModalOpen} closeHandler={closeModal} />
            </div>
        </div>
    );
};

export default SubHeader;