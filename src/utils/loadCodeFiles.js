const allFiles = import.meta.glob("../components/ui/**/*.{js,jsx}", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const getFilesByComponent = (componentKey) => {
  const key = componentKey.toLowerCase().replace(/-/g, "");

  return Object.entries(allFiles)
    .filter(([path]) => {
      const fileName = path.split("/").pop().toLowerCase();
      return fileName.replace(/[^a-z]/g, "").includes(key);
    })
    .map(([path, content]) => ({
      name: path.split("/").pop(),
      content,
    }))
    .sort((a, b) => (a.name.toLowerCase().includes("demo") ? -1 : 1));
};
