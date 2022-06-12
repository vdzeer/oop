import { useState, useEffect, useCallback } from 'react'
import { TUsePaginationHook, TUsePagination } from './types'

export const usePagination: TUsePaginationHook = ({
  initialPerPage,
  initialPage,
  data,
}) => {
  const [list, setList] = useState<TUsePagination['output']['list']>([])
  const [page, setPage] =
    useState<TUsePagination['output']['page']>(initialPage)
  const [perPage] =
    useState<TUsePagination['output']['perPage']>(initialPerPage)
  const [isEnd, toggleEnd] = useState<TUsePagination['output']['isEnd']>(
    data.length === list.length,
  )

  const nextPage = useCallback(() => {
    if (!isEnd) setPage(p => p + 1)
  }, [isEnd])

  const previousPage = useCallback(() => {
    if (page !== initialPage) setPage(p => p - 1)
  }, [page, initialPage])

  useEffect(() => {
    toggleEnd(data.length === list.length + (page - 1) * perPage)
  }, [data, list, page, perPage])

  useEffect(() => {
    setList(
      [...data].slice(
        page === initialPage ? 0 : page * perPage - perPage,
        page * perPage,
      ),
    )
  }, [data, page, perPage, initialPage])

  useEffect(() => {
    setList([...data].slice(0, initialPage * initialPerPage))
  }, [data, initialPage, initialPerPage])

  return {
    previousPage,
    nextPage,
    perPage,
    isEnd,
    page,
    list,
  }
}
