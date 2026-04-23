export const generateButtonCode = ({ size, variant, rounded }) => {
  return `<Button size="${size}" variant="${variant}" ${
    rounded ? "rounded" : ""
  }>
  Click Me
</Button>`;
};
