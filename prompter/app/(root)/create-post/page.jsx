"use client";

import { useState } from "react";
// import {auth} from '@clerk/nextjs';
import { useRouter } from "next/navigation";
import Form from '../Components/Form';

const CreatePost = () => {

  const router = useRouter();
  // const { user } = auth();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          // userId: user.id,
          tag: post.tag,
        }),
      });
      console.log("in form page")
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePost
