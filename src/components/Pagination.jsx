import Button from "./Button";
function Pagination({ total, page, setPage }) {
  const totalPages = Math.ceil(total / 10)
  return (
    <div className="flex justify-between px-2">
      {page < totalPages && (
        <Button
          text="Next Page"
          variant="outline"
          textSize="large"
          fontWeight="normal"
          onClick={() => {
            setPage(page + 1)
          }}
        />
      )}
      {page > 1 && (
        <Button
          text="Previous Page"
          variant="outline"
          textSize="large"
          fontWeight="normal"
          onClick={() => {
            setPage(page - 1)
          }}
        />
      )}
    </div>
  )
}
export default Pagination;