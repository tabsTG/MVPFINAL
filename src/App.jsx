export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SalesEdge</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 text-center px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Opportunity Meets Hustle</h2>
        <p className="text-lg text-gray-600 mb-6">The commission-only marketplace built for go-getters.</p>
        <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </a>
      </header>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} SalesEdge. All rights reserved.
      </footer>
    </div>
  )
}
