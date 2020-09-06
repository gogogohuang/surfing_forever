export default function clientMiddleware(client, extraArgument) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }

      if (!action) {
        return next(action);
      }

      const { promise, types, ...rest } = action;

      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;

      next({ ...rest, type: REQUEST });

      const actionPromise = promise(client);

      actionPromise
        .then(
          result =>
            next({
              ...rest,
              result: result && result.data ? result.data : result,
              type: SUCCESS,
            }),
          error => {
            let responseError = error?.response.data;

            if (responseError) {
              next({
                error: responseError,
              });
              responseError = null;
            }

            return next({
              ...rest,
              error: typeof responseError !== 'undefined' ? responseError : error,
              type: FAILURE,
            });
          }
        )
        .catch(error => {
          next({ ...rest, error, type: FAILURE });
        });

      return actionPromise;
    };
  };
}
