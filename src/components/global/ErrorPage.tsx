import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    return (
      <div className="grid place-content-center py-20">
        {error.status} {error.statusText}
      </div>
    );
  }

  return <div className="grid place-content-center py-20">{error.message || 'Unknown Error'}</div>;
};

export default ErrorPage;
