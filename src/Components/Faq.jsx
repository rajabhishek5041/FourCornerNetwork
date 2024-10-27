import React from 'react';

const Faq = () => {
    return (
        <div className="max-w-full mx-auto px-5 bg-white p-5">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl mt-5 tracking-tight">FAQ</h2>
                <p className="text-neutral-500 text-base sm:text-lg md:text-xl mt-3">Frequently asked questions</p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-full sm:max-w-3xl md:max-w-4xl text-sm sm:text-base md:text-lg mx-auto mt-8">
                {faqData.map((faq, index) => (
                    <div className="py-2" key={index}>
                        <details className="group bg-white border-2  shadow-xl px-3 rounded-2xl p-4">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{faq.question}</span>
                                <span className="transition  group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 overflow-hidden transition-all duration-500 ease-in-out group-open:max-h-screen max-h-0">
                                {faq.answer}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqData = [
    
    {
        question: "What is Four Corner Network and who founded it?",
        answer: "Four Corner Network is an initiative created by four clinical psychologists—Lipika Malik, Debolina Roy, Dimple Panchal, and Sreeta Nair—dedicated to delivering reliable and accessible mental health education."
    },
    {
        question: "What are the areas of specialization of Four Corner Network’s founders? ",
        answer: "The founders specialize in a variety of areas including neurotic disorders, children with special needs, queer affirmative therapy, suicide gatekeeping, and trauma-informed care."
    },
    // {
    //     question: "Dental treatments are expensive? ",
    //     answer: "No .if dental treatments are done at early stage of treatments than it is very economical .buy when dental problem is advanced than costs keep increasing depends of what treatment is required.thats why its called “dental treatmens are not costly but negligence it."
    // },
    // {
    //     question: "	Are dental treatments painful? ",
    //     answer: "Pain will be present whever infection is present .otherwise  efter implant surgery ,pain is minimal and under control and it is only for few days .so make sure you get rid of long lasting infections and get it treated as soon as ppssible."
    // },
    // {
    //     question: "	Does root canal tooth lasts forever? ",
    //     answer: "Root canal treatment is most skillful dental work and it is a blind procedure as dentist can not see inside and below tooth while doung root canal. Dentist expertise and experience matters the most for success of root canal treatment. If it is done properly than it can last for decades."
    // },
    // {
    //     question: "Why implants are better than dental bridge?  ",
    //     answer: "Implants can prevent bone loss once it is fixed in bone and chewing efficiently is best . Aftrr dental bridge is fixed in mouth ,there is continuous loss occurrs below the site of missing tooth so gap may create after few months or weeks or years.if gap is created than bridge has to be changed .thats why implant consider most natural way to maintain dental harmony."
    // },
    // {
    //     question: "Can i use baking soda and salt for teeth whitening? ",
    //     answer: "No . It wilmake teeth surface rough amd damage it ."
    // },
];

export default Faq;
