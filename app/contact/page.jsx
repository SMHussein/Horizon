'use client';

import Form from '@components/Form';

function page() {
    return (
        <section>
            <h1 className='desc mb-8 w-full'>
                Have a question? Please fill out the form, and one of our representatives will reach
                out to you!
            </h1>
            <Form />
        </section>
    );
}

export default page;
