const LIMIT = 5;
const KEY = "copy-limit";
const DATE_KEY = "copy-date";

// Check if user can copy
export const canCopy = () => {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem(DATE_KEY);

  // Reset count if new day
  if (savedDate !== today) {
    localStorage.setItem(DATE_KEY, today);
    localStorage.setItem(KEY, "0");
  }

  const count = parseInt(localStorage.getItem(KEY) || "0", 10);

  return count < LIMIT;
};

// Increase copy count
export const increaseCopyCount = () => {
  const count = parseInt(localStorage.getItem(KEY) || "0", 10);
  localStorage.setItem(KEY, (count + 1).toString());
};

// Get remaining copies
export const getRemainingCopies = () => {
  const count = parseInt(localStorage.getItem(KEY) || "0", 10);
  return LIMIT - count;
};
