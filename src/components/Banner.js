import { useState } from 'react';
import banner0 from '../assets/banners/linen_tit_wide.jpg';
import banner1 from '../assets/banners/linen_tit.jpg';
import banner2 from '../assets/banners/MMF_02.gif';
import banner3 from '../assets/banners/MMF_18.jpg';
import banner4 from '../assets/banners/MMF_89.gif';
import banner5 from '../assets/banners/MMF_smallweddign_1.jpg';
import banner6 from '../assets/banners/MMF_smallwedding_2.jpg';
import banner7 from '../assets/banners/softwarm_tit.jpg';
import banner8 from '../assets/banners/softwarm_tit_wide.jpg';
import banner9 from '../assets/banners/vacance_tit_wide.jpg';
import banner10 from '../assets/banners/vacance_tit.jpg';
import '../styles/Banner.css';


export default function Banner() {

    const [showModal0, setShowModal0] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);


    const openModal0 = () => {
        setShowModal0(true);
    }

    const openModal1 = () => {
        setShowModal1(true);
    }

    const openModal2 = () => {
        setShowModal2(true);
    }

    const openModal3 = () => {
        setShowModal3(true);
    }
    const openModal4 = () => {
        setShowModal4(true);
    }
    const openModal5 = () => {
        setShowModal5(true);
    }
    const openModal6 = () => {
        setShowModal6(true);
    }
    const openModal7 = () => {
        setShowModal7(true);
    }
    const openModal8 = () => {
        setShowModal8(true);
    }
    const openModal9 = () => {
        setShowModal9(true);
    }
    const openModal10 = () => {
        setShowModal10(true);
    }

    const closeModal = () => {
        setShowModal0(false);
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(false);
        setShowModal4(false);
        setShowModal5(false);
        setShowModal6(false);
        setShowModal7(false);
        setShowModal8(false);
        setShowModal9(false);
        setShowModal10(false);
    }

    return (
        <div className="event-bannner-section">
            <h3>Event Banner</h3>
            <div className="event-banner">
                <div onClick={openModal0} className="img-container">
                    <img src={banner0} alt="" />
                </div>
                <div onClick={openModal1} className="img-container">
                    <img src={banner1} alt="" />
                </div>
                <div onClick={openModal2} className="img-container">
                    <img src={banner2} alt="" />
                </div>
                <div onClick={openModal3} className="img-container">
                    <img src={banner3} alt="" />
                </div>
                <div onClick={openModal4} className="img-container">
                    <img src={banner4} alt="" />
                </div>
                <div onClick={openModal5} className="img-container">
                    <img src={banner5} alt="" />
                </div>
                <div onClick={openModal6} className="img-container">
                    <img src={banner6} alt="" />
                </div>
                <div onClick={openModal7} className="img-container">
                    <img src={banner7} alt="" />
                </div>
                <div onClick={openModal8} className="img-container">
                    <img src={banner8} alt="" />
                </div>
                <div onClick={openModal9} className="img-container">
                    <img src={banner9} alt="" />
                </div>
                <div onClick={openModal10} className="img-container">
                    <img src={banner10} alt="" />
                </div>
            </div>
            {showModal0 &&
                <div className="modal-bg">
                    <div className="modal">
                        <span onClick={closeModal}>X</span>
                        <img src={banner0} alt="" />
                    </div>
                </div>
            }
            {showModal1 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner1} alt="" />
                    </div>
                </div>
            }
            {showModal2 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner2} alt="" />
                    </div>
                </div>
            }
            {showModal3 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner3} alt="" />
                    </div>
                </div>
            }
            {showModal4 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner4} alt="" />
                    </div>
                </div>
            }
            {showModal5 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner5} alt="" />
                    </div>
                </div>
            }
            {showModal6 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner6} alt="" />
                    </div>
                </div>
            }
            {showModal7 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner7} alt="" />
                    </div>
                </div>
            }
            {showModal8 &&
                <div className="modal-bg">
                    <div className="modal">
                        <span onClick={closeModal}>X</span>
                        <img src={banner8} alt="" />
                    </div>
                </div>
            }
            {showModal9 &&
                <div className="modal-bg">
                    <div className="modal">
                        <span onClick={closeModal}>X</span>
                        <img src={banner9} alt="" />
                    </div>
                </div>
            }
            {showModal10 &&
                <div className="modal-bg">
                    <div className="modal bigImg">
                        <span onClick={closeModal}>X</span>
                        <img src={banner10} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}
