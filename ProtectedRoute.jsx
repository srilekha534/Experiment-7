import React from "react";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <p className="p-4 text-red-600">Access denied. Please login.</p>;
  }
  return children;
}

export default ProtectedRoute;
