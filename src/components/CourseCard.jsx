import { Link } from 'react-router-dom';

const CourseCard = ({id, title, description, image, price }) => (
  <Link to={`/courses/${id}`} className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:scale-105 transition-transform duration-200">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-sm text-blue-600 font-medium">{price}</span>
    </div>
  </Link>
);

export default CourseCard;
