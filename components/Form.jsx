import Link from "next/link";

const Form = ({ type, handleSubmit, submitting, post, setPost }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} post</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label className="font-satoshi font-semibold text-base text-gray-700">
          <span>Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            className="form_textarea"
            required
          />
        </label>

        <label className="font-satoshi font-semibold text-base text-gray-700">
          <span>
            Tag {` `}
            <span className="font-normal">
              (#product, #webdevopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            type="text"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>
        <div className="flex-end mx-3 gap-4 mb-5">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="py-1.5 px-5 text-sm bg-primary-orange text-white rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
