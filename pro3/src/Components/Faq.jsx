
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const faqData = [
  {
    question: "Which is the most famous dress in Pakistan?",
    answer:
      "The Shalwar kameez, Achkan, Sherwani and Kurta shalwar Kameez are the national dresses of Pakistan.",
  },
  {
    question: "What is the history of Pakistani dress?",
    answer:
      "Pakistani dresses date back over 7,000 years ago to the Bronze Age.",
  },
  {
    question: "Which city is famous for clothes in Pakistan?",
    answer:
      "Raja Bazaar in Rawalpindi is among the oldest and busiest markets of Pakistan.",
  },
  {
    question: "Which is the largest textile in Pakistan?",
    answer: "Cotton is the largest segment of textile production and Other fibers produced.",
  },
];


const Faq = () => {
const [active, setActive] = useState(null);

  
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <>
 <div className="max-w-2xl mx-auto mt-12 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? <FaAngleUp className="text-2xl"/> : <FaAngleDown className="text-2xl"/>}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
    </>
  )
}

export default Faq