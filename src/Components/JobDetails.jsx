import React from 'react';
import { useParams } from 'react-router-dom';

const jobData = {
  1: {
    title: 'Spa Manager',
    description: 'We are seeking a dynamic and experienced Spa Manager to oversee daily operations at our luxury spa. The ideal candidate will ensure a high level of customer satisfaction while maintaining a serene and welcoming environment.',
    responsibilities: [
      'Manage day-to-day spa operations, including staff scheduling, inventory management, and facility maintenance.',
      'Develop and implement spa policies and procedures to ensure exceptional service standards.',
      'Monitor guest satisfaction and address any concerns or feedback promptly.',
      'Coordinate with marketing to design and promote spa services and special offers to attract new clients.',
      'Train, supervise, and motivate spa staff to deliver outstanding customer service and ensure smooth daily operations.',
      'Oversee and manage the spa’s budget, including expense tracking and revenue generation.',
      'Ensure compliance with health and safety regulations and maintain a clean and safe work environment.'
    ],
    requirements: [
      'Proven experience in spa management or a related field with a track record of successful leadership.',
      'Excellent leadership, organizational, and communication skills.',
      'Strong financial acumen and experience in managing budgets and controlling expenses.',
      'Proficient in Microsoft Office Suite and spa management software.',
      'Exceptional customer service skills with the ability to handle difficult situations professionally.',
      'Relevant certifications or qualifications in spa management or related fields are a plus.'
    ],
    benefits: [
      'Competitive salary with performance bonuses and incentives.',
      'Comprehensive health and wellness benefits, including gym membership discounts and health insurance.',
      'Opportunities for professional development and career advancement through workshops and training.',
      'A supportive and friendly work environment with a focus on team collaboration and growth.'
    ],
    location: 'Dhaka',
  },
  2: {
    title: 'Salon Hair Stylist',
    description: 'Provide professional hairstyling services to clients, ensuring high standards of service and satisfaction.',
    responsibilities: [
      'Consult with clients to understand their hairstyle preferences and provide expert advice.',
      'Perform haircuts, color treatments, and other hairstyling services as requested.',
      'Maintain a clean and organized workstation and adhere to salon hygiene standards.',
      'Stay updated on current hair trends and techniques to offer clients the latest styles.',
      'Build and maintain positive relationships with clients to encourage repeat business.'
    ],
    requirements: [
      'Valid cosmetology license and experience as a hair stylist.',
      'Excellent technical skills in haircutting, coloring, and styling.',
      'Strong interpersonal and communication skills.',
      'Ability to work in a fast-paced environment and handle multiple clients efficiently.',
      'Passion for the beauty industry and continuous learning.'
    ],
    benefits: [
      'Competitive salary with commission-based incentives.',
      'Discounts on salon products and services.',
      'Opportunities for professional growth and advancement.',
      'A creative and supportive work environment.'
    ],
    location: 'Bogura',
  },
  3: {
    title: 'Massage Therapist',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
 
  4: {
    title: 'Nail Technician ',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
  5: {
    title: ' Receptionist',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
  6: {
    title: '  Beauty Consultant',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
  7: {
    title: ' Hair Color Specialist',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
  8: {
    title: ' Aesthetician ',
    description: 'Provide professional massage therapy services to clients, promoting relaxation and well-being.',
    responsibilities: [
      'Perform various types of massage therapies, including Swedish, deep tissue, and aromatherapy.',
      'Assess client needs and customize massage techniques to address specific issues.',
      'Maintain a clean and comfortable therapy environment.',
      'Educate clients on self-care practices and wellness techniques.',
      'Keep detailed records of client sessions and progress.'
    ],
    requirements: [
      'Certified massage therapist with relevant qualifications.',
      'Strong knowledge of massage techniques and anatomy.',
      'Excellent communication and interpersonal skills.',
      'Ability to provide a relaxing and therapeutic experience for clients.',
      'Experience in a spa or wellness setting is a plus.'
    ],
    benefits: [
      'Competitive hourly rate with opportunities for tips.',
      'Health and wellness benefits.',
      'Flexible scheduling options.',
      'A positive and supportive work environment.'
    ],
    location: 'Chittagong',
  },
 
};

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData[id];

  if (!job) return <div>Job not found</div>;

  return (
    <div className="p-16 pt-28 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-6">{job.description}</p>
      
      <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
      <ul className="list-disc list-inside mb-6">
        {job.responsibilities.map((item, index) => (
          <li key={index} className="text-gray-800">{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Requirements</h2>
      <ul className="list-disc list-inside mb-6">
        {job.requirements.map((item, index) => (
          <li key={index} className="text-gray-800">{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Benefits</h2>
      <ul className="list-disc list-inside mb-6">
        {job.benefits.map((item, index) => (
          <li key={index} className="text-gray-800">{item}</li>
        ))}
      </ul>

      <p className="text-lg font-medium"><strong>Location:</strong> {job.location}</p>
    </div>
  );
};

export default JobDetails;
