import { getCopyData, updateCopyCount } from "../Utils/copyLimit";

const LIMIT = 5;

const useCopyLimit = () => {
  const canCopy = () => {
    const data = getCopyData();
    return data.count < LIMIT;
  };

  const handleCopy = (text) => {
    if (!canCopy()) {
      return { success: false, message: "Daily copy limit reached 🚫" };
    }

    navigator.clipboard.writeText(text);
    const count = updateCopyCount();

    return {
      success: true,
      message: `Copied! (${count}/${LIMIT})`,
    };
  };

  return { handleCopy };
};

export default useCopyLimit;
