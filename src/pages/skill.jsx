export default function Skill() {
    const images = [
      { src: "/react.jpg", alt: "React" },
      { src: "/github.jpg", alt: "GitHub" },
      { src: "/yarn.jpg", alt: "Yarn" },
      { src: "/router.jpg", alt: "Router" }, // Fixed alt text
      { src: "/redux.jpg", alt: "Redux" }, // Fixed alt text
    ];

    return (
      <>
        <section className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-center text-blue-400">Skills</h2>
        </section>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 dark:bg-gray-700"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll">
                {/* Loop through the images array and concatenate enough copies */}
                {images.concat(images, images).map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-48 p-2">
                    <img
                      src={image.src}
                      className="rounded-lg"
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <style jsx>{`
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-66.66%); /* Adjusted for the concatenated images */
            }
          }
        `}</style>
      </>
    );
}
