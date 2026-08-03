import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Last-resort fallback for render-time errors anywhere in the tree. Without
 * this, React unmounts the whole app on any uncaught error and the visitor
 * sees a blank white page with no way back — same failure mode the 404 page
 * fixes for bad URLs, but for code bugs instead.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 text-center">
          <p className="font-display text-6xl font-bold text-primary mb-4">Oops</p>
          <h1 className="font-display text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="text-muted-foreground mb-8">
            This page hit an unexpected error. Reloading usually fixes it.
          </p>
          <a
            href="/"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Back to home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
