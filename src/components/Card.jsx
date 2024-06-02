import React from 'react';

export default function Card({ image, name, types })
{

    return (
        <div className='w-24 sm:w-32 px-1 sm:px-2 py-3 rounded-sm bg-white hover:drop-shadow-md duration-200 '>

            <div className='flex justify-center'>
                <img src={image} className='h-14 md:h-14 lg:h-16'></img>
            </div>

            <h1 className='my-1'>{name}</h1>

            <div className='my-1 flex justify-center'>
                {
                    types.map((type, idx) =>
                    {
                        const typeName = type['type']['name'];
                        const path = `src/assets/types/${typeName}.svg`;
                        return (
                            <div className={`rounded-full p-1 mx-1 ${typeName}`}>
                                <img className='h-3' src={path} />
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}
