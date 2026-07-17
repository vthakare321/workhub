function ForbiddenPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          403
        </h1>

        <p className="mt-4 text-gray-600">
          You don't have permission to access this page.
        </p>
      </div>
    </div>
  );
}

export default ForbiddenPage;