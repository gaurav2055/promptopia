import Link from "next/link";

const Form = (props) => {
    const { type, post, setPost, submitting, handleSubmit } = props;
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and share propmts with the world, and let your
                imagination run wild with any AI-powered platform
            </p>
            <form
                action=''
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <label htmlFor='text-area'>
                    <span className='font-satoshi font-semibold txet-base text-grey-700'>
                        Your Ai Prompt
                    </span>
                </label>
                <textarea
                    id='text-area'
                    value={post.prompt}
                    onChange={(e) =>
                        setPost({ ...post, prompt: e.target.value })
                    }
                    placeholder='Write your prompt here'
                    required
                    className='form_textarea'
                />
                <label htmlFor='text-area'>
                    <span className='font-satoshi font-semibold txet-base text-grey-700'>
                        Tag{` `}
                        <span className='font-normal'>
                            (#product, #webdev, #managment)
                        </span>
                    </span>
                </label>
                <input
                    id='text-area'
                    value={post.tag}
                    onChange={(e) => setPost({ ...post, tag: e.target.value })}
                    placeholder='#tag'
                    required
                    className='form_input'
                />
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;