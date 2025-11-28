import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { boardsAPI } from '../utils/boardsApi';
import CreateBoardModal from '../components/CreateBoardModal';

const Boards = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      setLoading(true);
      const data = await boardsAPI.getBoards();
      setBoards(data);
    } catch (err) {
      setError(err.message || 'Failed to load boards');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBoard = async (boardData) => {
    try {
      console.log('Creating board with data:', boardData);
      const newBoard = await boardsAPI.createBoard(boardData);
      console.log('Created board:', newBoard);
      setBoards([newBoard, ...boards]);
      setShowModal(false);
    } catch (err) {
      console.error('Failed to create board:', err);
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SmartBoard</h1>
              <p className="text-gray-600 text-sm">Welcome back, {user?.name}!</p>
            </div>
          </div>
          
          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-md group-hover:shadow-lg transition-shadow">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200">
                <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="font-semibold text-white text-sm">{user?.name}</div>
                  <div className="text-xs text-white/90 mt-0.5 truncate">{user?.email}</div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="w-full px-4 py-2.5 text-left hover:bg-red-50 text-red-600 text-sm font-medium transition flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">All Boards</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            + New Board
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-600 text-lg">Loading boards...</div>
        ) : boards.length === 0 ? (
          <div className="text-center py-12 text-gray-600 text-lg">
            <p>No boards yet. Create your first board to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {boards.map((board, idx) => (
              <Link
                key={board._id}
                to={`/board/${board._id}`}
                className="group relative p-5 rounded-xl border-2 border-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[140px] flex flex-col justify-between overflow-hidden"
                style={{ 
                  background: board.background || '#0079bf',
                  backgroundImage: `linear-gradient(135deg, ${board.background || '#0079bf'} 0%, ${board.background || '#0079bf'}dd 100%)`
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-base font-semibold text-white mb-4 relative z-10 drop-shadow-md">{board.title}</h3>
                
                <div className="space-y-2 text-xs relative z-10">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium text-gray-700">{board.owner.name}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium text-gray-700">
                      {board.members.length} member{board.members.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <CreateBoardModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateBoard}
        />
      )}
    </div>
  );
};

export default Boards;
