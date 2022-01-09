interface IRequestInit {
  status: 'init';
}

interface IRequestLoading {
  status: 'loading';
}

interface IRequestLoaded<T> {
  status: 'loaded';
  payload: T;
}

interface IRequestError {
  status: 'error';
  error: Error;
}

export type Request<T> =
  | IRequestInit
  | IRequestLoading
  | IRequestLoaded<T>
  | IRequestError;
