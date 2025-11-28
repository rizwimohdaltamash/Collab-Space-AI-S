const LoadingSpinner = ({ size = 'large', text = 'Loading...' }) => {
    const sizeClasses = {
        small: 'w-8 h-8 border-2',
        medium: 'w-12 h-12 border-3',
        large: 'w-16 h-16 border-4'
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative">
                <div
                    className={`${sizeClasses[size]} border-blue-200 border-t-blue-600 rounded-full animate-spin`}
                ></div>
            </div>
            {text && (
                <p className="mt-4 text-gray-600 font-medium animate-pulse">{text}</p>
            )}
        </div>
    );
};

export default LoadingSpinner;
