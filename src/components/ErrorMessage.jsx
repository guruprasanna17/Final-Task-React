function ErrorMessage({
  message,
  onRetry,
}) {
  return (
    <div className="error-box">

      <div className="error-icon">
        ⚠️
      </div>

      <h3>
        Something went wrong
      </h3>

      <p>{message}</p>

      <button
        onClick={onRetry}
        className="retry-btn"
      >
        Try Again
      </button>

    </div>
  );
}

export default ErrorMessage;