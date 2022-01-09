import { useEffect, useRef, useState } from "react";
import { Request } from "modules/common/types/Request";
import { fetchGames, Params } from "../requests/fetchGames";
import { Game } from "../types/Game";


export function useFetchGames({
  page,
  size,
  real,
  provider
}: Params) {
  const [status, setStatus] = useState<Request<Game[]>>({ status: 'init' });
  const prevPage = useRef(page);

  useEffect(() => {
    // Если изменился только номер страницы
    // то делаем запрос без изменения статуса.
    // Нужно, чтобы не появлялся лоудер при фетче доп. элементов
    if (page === prevPage.current) {
      setStatus({ status: 'loading' });
    }

    fetchGames({ page, size, real, provider }).then((resp) => {
      setStatus({
        status: 'loaded',
        payload: resp,
      });
    });

    prevPage.current = page;
  }, [page, size, real, provider]);


  return status;
};
