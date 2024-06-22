import React from 'react';

const MusicLoungeLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto px-4 py-8 flex items-center justify-between">
        <img src="/api/placeholder/200/100" alt="MusicLounge Logo" className="w-48" />
        <nav>
          <a href="#" className="text-orange-500 hover:text-orange-300 mx-2">Home</a>
          <a href="#" className="text-orange-500 hover:text-orange-300 mx-2">Discover</a>
          <a href="#" className="text-orange-500 hover:text-orange-300 mx-2">Profile</a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-4 text-orange-500">MusicLounge</h1>
          <p className="text-2xl mb-8">The first platform that rewards great taste in music</p>
          <img src="/api/placeholder/600/300" alt="MusicLounge Concept" className="mx-auto mb-8" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300">
            Join the Beta
          </button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Image 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Discover Talent</h3>
            <p>Find and support emerging artists with our unique knack scoring system.</p>
          </div>
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Image 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Grow Your Impact</h3>
            <p>Earn impact points by discovering and sharing great music.</p>
          </div>
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Image 4" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Connect</h3>
            <p>Build your network of music enthusiasts and artists.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">For Fans</h3>
              <img src="/api/placeholder/400/200" alt="Image 5 Left" className="mb-4" />
              <ul className="space-y-2">
                <li>Discover new artists</li>
                <li>Earn impact points</li>
                <li>Get rewarded for your taste</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">For Artists</h3>
              <img src="/api/placeholder/400/200" alt="Image 5 Right" className="mb-4" />
              <ul className="space-y-2">
                <li>Increase your knack score</li>
                <li>Reach new audiences</li>
                <li>Monetize your talent</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-orange-500">Ready to revolutionize the music industry?</h2>
          <p className="text-xl mb-8">Join MusicLounge today and be part of the future of music discovery and promotion.</p>
          <img src="/api/placeholder/600/300" alt="Image 3" className="mx-auto mb-8" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300">
            Sign Up Now
          </button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; 2024 MusicLounge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MusicLoungeLanding;
