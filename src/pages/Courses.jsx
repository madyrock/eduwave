import courses from '../data/Course.js';
import CourseCard from '../components/CourseCard';

const Courses = () => (
  <div className="p-10">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  </div>
);

export default Courses;
