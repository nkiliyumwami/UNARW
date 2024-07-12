import Card from "../ui/Card"

const BlogSection = () => {
  const cards = [
    {
      date: 'February 16, 2024',
      views: 5867,
      likes: 18,
      title: 'How to Create a Software from Scratch in 5 Steps',
      description: 'Do you know how to create a custom software? Here is a simple and visual guide for you. Learn how to create a custom software in 5 easy steps.',
      imageUrl: '/Jacky.jpg',
    },
    {
      date: 'March 8, 2024',
      views: 48188,
      likes: 630,
      title: 'Software Development Process [Definition + Stages + Methodologies]',
      description: 'Learn Agile software development process, Software Development Lifecycle (SDLC), explained in detail with definition and core stages.',
      imageUrl: '/programs.jpg',
    },
    {
      date: 'January 23, 2024',
      views: 925,
      likes: 3,
      title: 'How to Hire a Software Development Company [6 Step Process]',
      description: 'Planning to build an enterprise software solution? Confused about how to hire a software development company? Read this guide to know more.',
      imageUrl: '/teamClarisse.jpg',
    },
  ];

  return (
    <div className="pt-20 lg:max-w-[1320px] xl:max-w-[1140px] md:max-w-[960px] sm:max-w-full max-w-full mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      <div className="flex -mx-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          Explore More Blogs
        </button>
      </div>
    </div>
  )
};

export default BlogSection
