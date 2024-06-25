import "./LoadingSpinner.css"
function LoadingSpinner() {
    return (
        <div className="spinner-grow spinner" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default LoadingSpinner