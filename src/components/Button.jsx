import React from 'react';

export default function Button({ onClick })
{
    return (
        <>
            <button
                onClick={onClick}
                className='bg-gray-200 text-black rounded-md p-2 my-2 shadow-md'>
                Load more
            </button>
        </>
    );
}
