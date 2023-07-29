"use client";

export default  function RemoveBtn({ id }) {
    const removeTopic = () => {
        const res =  fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: "DELETE",
        });       
    }
    return (
        <button onClick={removeTopic} className="text-red-400 text-base">
           Delete
        </button>
    );
}
