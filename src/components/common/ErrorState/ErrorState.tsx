type ErrorStateProps = {
  title?: string;
  description?: string;
};

function ErrorState({
  title = "Something went wrong",
  description = "Please try again later.",
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 p-10 text-center">
      <div className="mb-4 text-6xl">⚠️</div>

      <h2 className="text-xl font-semibold text-red-600">
        {title}
      </h2>

      <p className="mt-2 text-red-500">
        {description}
      </p>
    </div>
  );
}

export default ErrorState;