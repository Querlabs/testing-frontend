import { Suspense } from "react";
import BlogDetailPage from "../components/blogs/details";

export default function BlogsPagedetails() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      }
    >
      <BlogDetailPage />
    </Suspense>
  );
}