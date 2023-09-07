import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import ImgOne from '../../Images/trending3.png'

const Product = (props) => {
    const [selectedColor, setSelectedColor] = useState('Cyan');

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className=" ">
            <div className='relative w-full'>
                {selectedColor === 'Cyan' && <img src={props.productImage} alt="Cyanitem" className='w-full' />}
                {selectedColor === 'Pink' && <img src={ImgOne} alt="Pinkitem" className='w-full' />}
                <div className='flex gap-3 absolute top-3 right-5 '>
                    <button
                        className={`relative bg-Cyan border ${selectedColor === 'Cyan' ? 'border-black' : 'border-white'} w-6 h-6 rounded-full  `}
                        onClick={() => handleColorChange('Cyan')}
                    >
                        {selectedColor === 'Cyan' && (
                            <span className="absolute inset-0 border border-white rounded-full"></span>
                        )}
                    </button>
                    <button
                        className={`relative bg-Pink border ${selectedColor === 'Pink' ? 'border-black' : 'border-white'} w-6 h-6 rounded-full `}
                        onClick={() => handleColorChange('Pink')}
                    >
                        {selectedColor === 'Pink' && (
                            <span className="absolute inset-0 border border-white rounded-full"></span>
                        )}
                    </button>
                </div>

            </div>
            <div className='leading-10'>
                <h2 className='text-black font-normal text-xl leading-10'>{props.producttitle}</h2>
                <div className='flex '>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className='flex gap-2'>
                    <span className='text-RedOrange'>{props.price}</span>
                    <del className='text-Gray'>{props.dicountPrice}</del>
                </div>
            </div>
        </div>
    );
};

export default Product;
