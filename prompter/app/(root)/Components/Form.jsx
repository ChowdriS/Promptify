import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="mx-5 mt-5 flex flex-col items-center justify-start min-h-screen">
      <h1 className='text-2xl font-bold my-2 text-center'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='font-bold text-xl mt-5'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label className="flex items-center justify-center gap-16">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea mt-1 border border-solid border-black h-20 w-[30em]'
          />
        </label>

        <label className="flex items-center justify-center gap-5">
            <div>
          <span className='font-satoshi font-semibold text-base text-gray-700 flex flex-col items-center justify-center'>
            <span>Field of Prompt{" "}</span>
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          </div>
          <div>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input border border-solid border-black'
            />
            </div>
        </label>

        <div className='flex-end  flex items-center justify-center mx-3 mb-5 gap-4'>
          <Link href='/' className='text-slate-900 text-lg mr-4'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange  border border-solid border-black rounded-full text-black gap-2'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;