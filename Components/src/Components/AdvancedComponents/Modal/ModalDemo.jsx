import Modal from "./Modal";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";
import { useTheme } from "../../../context/ThemeContext";

function ModalDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex justify-center items-center p-4">
      <Modal>
        <ModalTrigger>Open Modal</ModalTrigger>
        <ModalContent>
          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
              <span className="text-pink-500 text-lg">✦</span>
            </div>
            <h2
              className="text-xl font-bold"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
            >
              Modal Title
            </h2>
          </div>

          {/* Modal Body */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            This is a simple modal component created using React.js and Tailwind
            CSS. Click outside or press ✕ to close.
          </p>

          {/* Modal Footer */}
          <div className="flex gap-2 mt-6">
            <button className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm font-medium">
              Confirm
            </button>
            <button
              className="flex-1 px-4 py-2 rounded-lg transition text-sm font-medium"
              style={{
                background: isDark ? "rgba(255,255,255,0.1)" : "#f3f4f6",
                color: isDark ? "#ffffff" : "#374151",
              }}
            >
              Cancel
            </button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalDemo;
