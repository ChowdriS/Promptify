import { currentUser } from "@clerk/nextjs"
import { User } from "@clerk/nextjs";

export default async function Home() {
  // const user = await currentUser();
  // const {} = await User();

  // console.log(user.username);
  return (
      <div className=" text-black font-medium flex flex-col items-center justify-start mt-4 text-xl gap-3">
        <h1>Welcome to Promptify</h1>
        <h2>Lets start</h2>
      </div>  
  )
}

