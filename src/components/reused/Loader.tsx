export const Loader = () => {
  return (
    <div className="absolute inset-0 z-50 overflow-hidden bg-gray-100 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-700 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
    </div>
  );
};
