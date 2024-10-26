import React from "react";
import { useNavigate } from "react-router-dom";

function Contactus() {
    const [result, setResult] = React.useState("");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setResult("Sending...");

        const formData = new FormData(event.target);

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Add Web3forms access key
        formData.append("access_key", "fef6c2ce-1fe2-4d2a-973c-191a9970b823");

        // Construct subject and body
        const subject = "Contact Form Enquiry";
        const body = `Name: ${name}<br>Email: ${email}<br>Phone no: ${phone}`;
        formData.append("subject", subject);
        formData.append("body", body);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                // Navigate to the success page after a short delay (optional)
                setTimeout(() => {
                    navigate('/successfull');
                }, 100);
                event.target.reset(); // Reset the form fields
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("There was an error submitting the form");
        }
    };

    return (
        <div>
            <div>
                <body className="antialiased bg-gray-100">
                    <div className="flex w-full min-h-screen justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 bg-sky bg-[#19575B] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
                            <div className="flex flex-col space-y-8 justify-between lg:w-1/2">
                                <div></div>
                                <div className="flex flex-col space-y-2">
                                    <h1 className="pt-8 font-bold text-4xl tracking-wide">
                                        Connect with us.
                                    </h1>
                                    <div className="inline-flex space-x-0 items-center pt-2">
                                        <img className="h-6" src="./Images/phone.png" alt="" />
                                        <a href="">
                                            <p className="text-lg pl-2">+91-9106406707</p>
                                        </a>
                                    </div>
                                    <div className="inline-flex space-x-2 items-center pt-2">
                                        <img src="./Images/mail.png" alt="" className="h-7 w-7" />
                                        <a href="">
                                            <p className="text-lg">info@fourcornernetwork.co.in</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex space-x-9 text-lg">
                                    <a target="_blank" href="https://www.instagram.com/fourcornernetwork/">
                                        <img className="h-9" src="./Images/instagram.png" />
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/@fourcornernetwork">
                                        <img src="./Images/youtube.png" className="w-[33px] md:w-[35px]" />
                                    </a>
                                </div>
                            </div>
                            <div className="relative lg:w-1/2">
                                <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -right-20 -top-20"></div>
                                <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -left-20 -bottom-16"></div>
                                <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
                                    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                                        <div>
                                            <label htmlFor="name" className="text-sm">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                required
                                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-sm">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="text-sm">Phone Number</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone Number"
                                                required
                                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                                            />
                                        </div>
                                        <h1 className="text-center">
                                            Your data is secure. By submitting, you agree to receive webinar updates from us.
                                        </h1>
                                        <button
                                            type="submit" // Keep the button type as submit
                                            className="inline-block self-center bg-[#19575B] text-black font-bold rounded-2xl px-6 py-2 uppercase text-sm"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                    <p className="text-center pt-2">{result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
}

export default Contactus;
