export interface SimplePaginationProps {
    next: () => void
    page: number
    prev: () => void
    isPrev: boolean
    isNext: boolean
}