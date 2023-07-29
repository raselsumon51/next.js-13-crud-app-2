"use client"

import React from 'react'

function DeleteBtn({id}) {
    async function handleDelete() {
        const remove = async () => {
            await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE',
            });
        }
        remove();
    };
  return (
      <div><button onClick={handleDelete} className='bg-slate-500 text-base'>
          Delete
      </button></div>
  )
}

export default DeleteBtn