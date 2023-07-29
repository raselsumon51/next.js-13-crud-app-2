"use client"


export default function addTopic() {
    return (
        <div className="w-full p-9">
            <div>
                <h1 className=" text-4xl text-center py-6 ">Form Page</h1>
                <form>
                    <label className="block text-xl py-3">Enter First Name</label>
                    <input
                        placeholder="Enter first name"
                        className="block w-full rounded shadow py-3 ps-3"
                    />
                    <label className="block text-xl py-3">Enter Last Name</label>
                    <input
                        placeholder="Enter last name"
                        className="block w-full rounded shadow py-3 ps-3"
                    />
                    <button className=" bg-gray-600 rounded mt-4 py-3 px-3">Sing Up</button>
                </form>
            </div >
        </div>
    )
 }
