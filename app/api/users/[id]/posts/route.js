import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    connectToDB();

    const posts = await Prompt.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to get that user posts", { status: 500 });
  }
};
