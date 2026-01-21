export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col animate-pulse">
          {/* Image Placeholder */}
          <div className="aspect-square bg-gray-200 rounded-2xl w-full"></div>
          
          {/* Text Placeholders */}
          <div className="mt-4 space-y-3">
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/5"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}