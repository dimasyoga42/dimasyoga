import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">Page Not Found</h1>
            <p className="py-6">
              The page you are looking for does not exist, please return to the
              home page.
            </p>
            <Link href="/" className="btn btn-ghost border-none">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
