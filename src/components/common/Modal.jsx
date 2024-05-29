
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 rounded-lg">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded shadow-lg transition duration-150 ease-in-out" role="dialog">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <span className="text-2xl">&times;</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
