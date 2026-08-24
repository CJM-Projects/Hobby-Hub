function ContactUs() {
    return (
        <main>
            <div className="bg-zinc-100 py-4">
                <h1 className="mb-4 font-bold text-5xl py-2 text-center">Contact Us</h1>
                <div className="mx-auto max-w-6xl px-20 py-2">
                    <p>
                        Thanks for taking a look at our website. To get in touch, take a look at our {" "}
                        <a href="https://github.com/CJM-Projects/Hobby-Hub" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 rounded">
                            GitHub Repository
                        </a>
                    </p>
                </div>
            </div>
        </main>
  );
}

export default ContactUs;