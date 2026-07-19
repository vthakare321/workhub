type EmptyStateProps = {
  title?: string;
  description?: string;
};

function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed bg-white p-10 text-center">
     

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;