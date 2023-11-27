import Prompt from "../../../../models/prompt";
import { connectToDB } from "../../../../utils/database";
import { auth } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';

export const POST = async (request) => {
    // const user = auth();
    const { publicMetadata } = await currentUser();
    const username = publicMetadata.username;

    const { prompt, tag } = await request.json();

    try {
        console.log("IN")
        await connectToDB();
        // console.log("2")
        // try{
        const newPrompt = new Prompt({ creator: username, prompt, tag });
        // catch(err)  {console.log(err);}
        console.log("last")
        await newPrompt.save();
        console.log(newPrompt)
        return new Response(JSON.stringify(newPrompt), { status: 201 })
        
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}