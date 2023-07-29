import DeleteBtn from '@/components/deleteBtn';
import Link from 'next/link';



//get all topics 
const getTopics = async () => {
    const res = await fetch('http://localhost:3000/api/topics', {
        cache: "no-store"
    });
    let topics = await res.json();
    return topics;
}


export default async function Home() {
    //get topics
    const { topics } = await getTopics();

    return (
        <div>
            <h1 className="text-center text-4xl py-10">CRUD App</h1>
            <div className='card'>
                <Link href={'/addTopic'}><button className='text-2xl bg-slate-500 py-1 px-3'>Add Topic</button></Link>
            </div>
            <div>
                <h1>Topics Lists</h1>
            </div>
            {
                topics.map((t) => (
                    <div
                        key={t._id} // Assuming t._id is a unique identifier for each topic
                        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                    >
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <div>{t.description}</div>
                        </div>

                        <div className="flex gap-2">
                            <Link href={`/editTopic/${t._id}`}>
                            </Link>
                        </div>
                    </div>
                ))
            }
            {
                topics.map((t) => (
                    <div className=' mt-8' key={t._id}>
                        <h2 className=' font-bold text-2xl'>{t.title}</h2>
                        <h2>{t.description}</h2>
                        <button className=' bg-slate-500 text-base rounded my-3'>
                            <Link href={`/editTopic/${t._id}`}>
                                Edit Topic
                            </Link>
                        </button>
                        <br />
                        <DeleteBtn id={t._id} />
                    </div>
                ))
            }
        </div>
    );
}
