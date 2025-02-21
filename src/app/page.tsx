"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="mb-8">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile Photo"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Merhaba, Ben [İsminiz]
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Kıdemli Yazılım Mühendisi | Full Stack Geliştirici
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Modern web teknolojileri ile kullanıcı dostu, ölçeklenebilir ve yüksek performanslı uygulamalar geliştiriyorum.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Projelerimi İncele
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              İletişime Geç
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Uzmanlık Alanlarım</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Frontend */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Frontend Geliştirme</h3>
              <div className="text-gray-600 text-center space-y-2">
                <p>React.js / Next.js</p>
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
                <p>Redux / Context API</p>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Backend Geliştirme</h3>
              <div className="text-gray-600 text-center space-y-2">
                <p>Node.js / Express</p>
                <p>Python / Django</p>
                <p>RESTful APIs</p>
                <p>GraphQL</p>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">DevOps & Cloud</h3>
              <div className="text-gray-600 text-center space-y-2">
                <p>Docker / Kubernetes</p>
                <p>AWS / Azure</p>
                <p>CI/CD Pipeline</p>
                <p>Linux System Admin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Öne Çıkan Projelerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/project1-placeholder.jpg"
                  alt="Project 1"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Ticaret Platformu</h3>
                <p className="text-gray-600 mb-4">
                  Next.js ve Node.js kullanılarak geliştirilmiş, yüksek performanslı e-ticaret çözümü.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/project2-placeholder.jpg"
                  alt="Project 2"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Destekli Analiz Platformu</h3>
                <p className="text-gray-600 mb-4">
                  Python ve React kullanılarak geliştirilmiş, makine öğrenimi destekli veri analiz platformu.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">TensorFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">İletişime Geçin</h2>
          <p className="text-xl text-gray-600 mb-8">
            Yeni projeler için her zaman açığım. Benimle iletişime geçmekten çekinmeyin!
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://github.com/yourusername" className="text-gray-800 hover:text-gray-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-blue-800 hover:text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
