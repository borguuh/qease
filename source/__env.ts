// Site Constants
export const tokenCookieName = "qease-user-token"

// Dynamic paths
export const host = process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "http://localhost:3000"
export const backendLocation: string = process.env.NEXT_PUBLIC_BACK_END ? process.env.NEXT_PUBLIC_BACK_END : "http://localhost:5000"

// Social Links
export const email = "mailto:example@gmail.com"
export const instagram = "https://www.instagram.com/example"
export const linkedin = "https://www.linkedin.com/in/example"
export const twitter = "https://twitter.com/example"


export const faqs = [
  {
    "_id": "1",
    "question": "What is QEase?",
    "answer": "QEase is a queue management system designed to streamline queuing processes in companies such as banks and hospitals, enhancing customer experience and operational efficiency."
  },
  {
    "_id": "2",
    "question": "How does QEase improve queue management?",
    "answer": "QEase improves queue management by providing real-time queue monitoring, automated notifications, data analytics, and a customizable interface, ensuring efficient and effective queue handling."
  },
  {
    "_id": "3",
    "question": "Can QEase be customized for my business?",
    "answer": "Yes, QEase offers a customizable interface that allows you to adjust settings, notifications, and display options to fit your specific business needs and branding."
  },
  {
    "_id": "4",
    "question": "What industries can benefit from QEase?",
    "answer": "QEase is ideal for industries where efficient queue management is critical, such as banks, hospitals, clinics, retail stores, and government offices."
  },
  {
    "_id": "5",
    "question": "How do automated notifications work in QEase?",
    "answer": "Automated notifications in QEase send timely updates to customers via SMS or email, informing them of their estimated wait time and queue status, which helps reduce perceived wait times and improves customer satisfaction."
  },
  {
    "_id": "6",
    "question": "What kind of data analytics does QEase provide?",
    "answer": "QEase provides comprehensive data analytics, including information on queue lengths, waiting times, and service efficiency. This data helps businesses identify trends and areas for improvement in their queue management processes."
  },
  {
    "_id": "7",
    "question": "Is QEase easy to use for both staff and customers?",
    "answer": "Yes, QEase features an intuitive and user-friendly design that ensures both staff and customers can easily navigate and use the system. Simple setup and straightforward functionality make it easy to start using QEase right away."
  },
  {
    "_id": "8",
    "question": "Can QEase manage queues across multiple locations?",
    "answer": "Yes, QEase allows you to manage queues across multiple locations from a single dashboard. This is ideal for businesses with multiple branches or departments within a facility."
  },
  {
    "_id": "9",
    "question": "Does QEase integrate customer feedback?",
    "answer": "Yes, QEase includes mechanisms to collect and analyze customer feedback directly through the system, helping you understand customer satisfaction and identify opportunities for improvement."
  },
  {
    "_id": "10",
    "question": "What kind of support and training does QEase offer?",
    "answer": "QEase provides dedicated support and comprehensive training resources to ensure your team can effectively use the system and maximize its potential. Our support team is available to assist you every step of the way."
  }
]
