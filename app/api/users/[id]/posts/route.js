import { connectToDb } from "@utils/database";
import Prompt from "@models/prompts";

export const GET = async (rquest, { params }) => {
    try {
        await connectToDb();

        const prompts = await Prompt.find({ creatore: params?.id }).populate(
            "creator"
        );

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify("Failled to fetch: ", error, { status: 500 })
        );
    }
};
