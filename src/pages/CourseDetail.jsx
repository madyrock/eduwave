import { useParams } from 'react-router-dom';
import courses from '../data/Course';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Course not found
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-6 mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <span className="text-blue-600 font-semibold text-lg">
        Price: {course.price}
      </span>
      <Link
        to="/courses"
        className="block mt-6 text-blue-600 hover:underline"
      >
        ← Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetail;
