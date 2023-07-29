import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  // console.log("hi");
  // console.log(params);
  const { id } = params;
  // console.log(id);
  const result = await getTopicById(id);
  // console.log(result.topic.title);
  
  // const { title, description } = topic[0];
  // console.log(`title is ${topic[0].title}`)

  return <EditTopicForm id={id} title={result.topic.title} description={result.topic.description} />;
}
