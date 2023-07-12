import Prompt from "@models/prompts";
import { connectToDb } from "@utils/database";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDb();
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag,
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt, { status: 201 }));
    } catch (error) {
        console.log(error);
        return new Response("Failes to create a new prompt", { status: 500 });
    }
};
