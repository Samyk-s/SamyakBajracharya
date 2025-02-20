const skills = [
  { image: 'tailwindcss.jpg' },
  { image: 'react.jpg' },
  { image: 'yarn.jpg' },
  { image: 'vite.jpg' },
  { image: 'flowbite.jpg' },
  { image: 'github.jpg' },
  { image: 'redux.jpg' },
  { image: 'router.jpg' },
];

const Skills = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-center text-blue-400">
        
          My Skills</h2>
        {/* Grid with margin and 4 items per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 lg:px-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt="Skill Icon"
                className="w-28 h-28 object-contain" // Adjusted size for better visibility
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
