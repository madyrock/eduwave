const Home = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Learn Anytime, Anywhere with <span className="text-yellow-300">EduWave</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Explore top-notch courses, connect with expert instructors, and elevate your skills.
        </p>
        <div className="space-x-4">
          <a
            href="/courses"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Browse Courses
          </a>
          <a
            href="/contact"
            className="inline-block border border-white hover:bg-white hover:text-indigo-600 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
